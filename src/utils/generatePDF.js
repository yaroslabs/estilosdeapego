export async function generatePDF(result) {
  const { default: jsPDF } = await import('jspdf');
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = 20;

  const addPageIfNeeded = (neededSpace = 30) => {
    if (y + neededSpace > 270) {
      doc.addPage();
      y = 20;
    }
  };

  doc.setFontSize(24);
  doc.setTextColor(90, 74, 58);
  doc.text('Mi Estilo de Apego', pageWidth / 2, y, { align: 'center' });
  y += 12;

  doc.setFontSize(10);
  doc.setTextColor(140, 130, 120);
  const fecha = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  doc.text(`Fecha: ${fecha}`, pageWidth / 2, y, { align: 'center' });
  y += 6;

  doc.setDrawColor(220, 210, 200);
  doc.line(margin, y, pageWidth - margin, y);
  y += 12;

  if (result.type === 'mixed') {
    doc.setFontSize(14);
    doc.setTextColor(90, 74, 58);
    doc.text('Resultado: Perfil Mixto / Equilibrio', pageWidth / 2, y, { align: 'center' });
    y += 8;
    doc.setFontSize(10);
    doc.setTextColor(120, 110, 100);
    const mixedNames = result.styles.map(s => s.label).join(' + ');
    doc.text(mixedNames, pageWidth / 2, y, { align: 'center' });
    y += 12;
  }

  const { counts } = result;
  const styleLabels = {
    seguro: 'Seguro',
    preocupado: 'Preocupado',
    evitativo: 'Evitativo',
    desorganizado: 'Desorganizado',
  };

  doc.setFontSize(12);
  doc.setTextColor(90, 74, 58);
  doc.text('Distribución de respuestas:', margin, y);
  y += 8;

  Object.entries(counts).forEach(([style, count]) => {
    doc.setFontSize(10);
    doc.setTextColor(100, 90, 80);
    doc.text(`${styleLabels[style]}: ${count}/10`, margin + 4, y);
    y += 6;
  });
  y += 8;

  for (const style of result.styles) {
    addPageIfNeeded(60);

    doc.setFontSize(16);
    doc.setTextColor(
      style.color === 'green' ? 90 : style.color === 'orange' ? 200 : style.color === 'blue' ? 74 : 200,
      style.color === 'green' ? 158 : style.color === 'orange' ? 138 : style.color === 'blue' ? 142 : 80,
      style.color === 'green' ? 114 : style.color === 'orange' ? 62 : style.color === 'blue' ? 196 : 80,
    );
    doc.text(`${style.emoji} ${style.label}`, margin, y);
    y += 10;

    doc.setFontSize(10);
    doc.setTextColor(80, 70, 60);

    const descLines = doc.splitTextToSize(style.descripcionBreve, contentWidth);
    doc.text(descLines, margin, y);
    y += descLines.length * 5 + 6;

    const sections = [
      { title: 'Nombre en la niñez', content: style.nombreNinez },
      { title: 'Nombre en la adultez', content: style.nombreAdultez },
      { title: 'Características del apego infantil', content: style.caracteristicasInfantil.join('\n• ') },
      { title: 'Tendencias en relaciones adultas', content: style.tendenciasAdultas.join('\n• ') },
      { title: 'Método de afrontamiento primario', content: style.afrontamiento },
      { title: 'Inclinaciones del sistema nervioso', content: style.sistemaNervioso },
    ];

    for (const section of sections) {
      addPageIfNeeded(20);

      doc.setFontSize(11);
      doc.setTextColor(90, 74, 58);
      doc.text(section.title, margin, y);
      y += 6;

      doc.setFontSize(9);
      doc.setTextColor(100, 90, 80);

      let content = section.content;
      if (section.title.includes('Características') || section.title.includes('Tendencias')) {
        content = '• ' + content;
      }

      const lines = doc.splitTextToSize(content, contentWidth - 4);
      for (const line of lines) {
        addPageIfNeeded(6);
        doc.text(line, margin + 4, y);
        y += 5;
      }
      y += 4;
    }

    y += 8;
  }

  addPageIfNeeded(20);
  doc.setDrawColor(220, 210, 200);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  doc.setFontSize(8);
  doc.setTextColor(160, 150, 140);
  const disclaimer = doc.splitTextToSize(
    'Este cuestionario es de carácter informativo y no reemplaza la orientación profesional. ' +
    'Si sientes que necesitas apoyo, te recomendamos buscar a un profesional de salud mental.',
    contentWidth
  );
  doc.text(disclaimer, pageWidth / 2, y, { align: 'center' });
  y += disclaimer.length * 4 + 4;
  doc.text('© 2024 Yaroslabs — estilosdeapego.yaroslabs.com', pageWidth / 2, y, { align: 'center' });

  doc.save('mi-estilo-de-apego.pdf');
}
