import { useState } from 'react';
import { generatePDF } from '../utils/generatePDF';

const bgGradients = {
  green: 'from-apego-green-light to-sage-50',
  orange: 'from-apego-orange-light to-cream-100',
  blue: 'from-apego-blue-light to-lavender-50',
  red: 'from-apego-red-light to-rose-50',
};

const accentColors = {
  green: 'text-apego-green-dark',
  orange: 'text-apego-orange-dark',
  blue: 'text-apego-blue-dark',
  red: 'text-apego-red-dark',
};

const barColors = {
  seguro: 'bg-apego-green',
  preocupado: 'bg-apego-orange',
  evitativo: 'bg-apego-blue',
  desorganizado: 'bg-apego-red',
};

const barLabels = {
  seguro: 'Seguro',
  preocupado: 'Preocupado',
  evitativo: 'Evitativo',
  desorganizado: 'Desorganizado',
};

function StyleCard({ style, index }) {
  return (
    <div
      className="animate-slide-up"
      style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
    >
      <div className={`rounded-3xl bg-gradient-to-br ${bgGradients[style.color]} p-6 md:p-8 mb-6`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{style.emoji}</span>
          <h3 className={`text-xl md:text-2xl font-semibold ${accentColors[style.color]}`}>
            {style.label}
          </h3>
        </div>

        <p className="text-warm-600 leading-relaxed mb-6">{style.descripcionBreve}</p>

        <div className="grid md:grid-cols-2 gap-4">
          <InfoBox title="En la niñez" value={style.nombreNinez} />
          <InfoBox title="En la adultez" value={style.nombreAdultez} />
        </div>
      </div>

      <div className="space-y-6 px-2">
        <Section title="Características del apego infantil" items={style.caracteristicasInfantil} />
        <Section title="Tendencias en relaciones adultas" items={style.tendenciasAdultas} />
        <TextBlock title="Método de afrontamiento primario" text={style.afrontamiento} />
        <TextBlock title="Inclinaciones del sistema nervioso" text={style.sistemaNervioso} />
      </div>
    </div>
  );
}

function InfoBox({ title, value }) {
  return (
    <div className="bg-white/60 rounded-xl p-4">
      <span className="text-xs uppercase tracking-wider text-warm-400 font-medium">{title}</span>
      <p className="text-warm-700 font-medium mt-1">{value}</p>
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div>
      <h4 className="text-sm uppercase tracking-wider text-warm-400 font-medium mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-warm-600 text-sm leading-relaxed">
            <span className="text-rose-300 mt-1 flex-shrink-0">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TextBlock({ title, text }) {
  return (
    <div>
      <h4 className="text-sm uppercase tracking-wider text-warm-400 font-medium mb-2">{title}</h4>
      <p className="text-warm-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

export default function ResultsScreen({ result, onReset }) {
  const [generating, setGenerating] = useState(false);
  const [shared, setShared] = useState(false);

  const handleDownloadPDF = async () => {
    setGenerating(true);
    try {
      await generatePDF(result);
    } catch (e) {
      console.error('Error generating PDF:', e);
    } finally {
      setGenerating(false);
    }
  };

  const handleShare = async () => {
    const mainStyle = result.styles[0];
    const text = result.type === 'mixed'
      ? `Descubrí que tengo un perfil mixto de apego: ${result.styles.map(s => s.label).join(' + ')}. ¡Haz el cuestionario!`
      : `Descubrí que mi estilo de apego es: ${mainStyle.label}. ¡Haz el cuestionario!`;
    const url = 'https://estilosdeapego.yaroslabs.com';

    if (navigator.share) {
      try {
        await navigator.share({ title: 'Mi Estilo de Apego', text, url });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(`${text}\n${url}`);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <div className="flex-1 px-4 py-8 max-w-2xl mx-auto w-full">
      {/* Header */}
      <div className="text-center mb-8 animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-200 to-blush-200 mb-4">
          <span className="text-3xl">✨</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-warm-800 mb-2">
          {result.type === 'mixed' ? 'Tu Perfil es Mixto' : 'Tu Estilo de Apego'}
        </h2>
        {result.type === 'mixed' && (
          <p className="text-warm-500">
            Tus respuestas muestran un equilibrio entre varios estilos
          </p>
        )}
      </div>

      {/* Score distribution */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 mb-8 border border-warm-200/50 animate-scale-in">
        <h4 className="text-xs uppercase tracking-wider text-warm-400 font-medium mb-4">
          Distribución de respuestas
        </h4>
        <div className="space-y-3">
          {Object.entries(result.counts)
            .sort(([, a], [, b]) => b - a)
            .map(([style, count]) => (
              <div key={style} className="flex items-center gap-3">
                <span className="text-sm text-warm-500 w-28 text-right">{barLabels[style]}</span>
                <div className="flex-1 h-5 bg-warm-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${barColors[style]} rounded-full animate-progress`}
                    style={{ width: `${(count / 10) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-warm-600 w-8">{count}</span>
              </div>
            ))}
        </div>
      </div>

      {/* Style details */}
      {result.styles.map((style, i) => (
        <StyleCard key={style.id} style={style} index={i} />
      ))}

      {/* Actions */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in"
           style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}>
        <button
          onClick={handleDownloadPDF}
          disabled={generating}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-300 to-blush-300
                     text-white font-medium rounded-full shadow-md
                     hover:shadow-lg hover:-translate-y-0.5
                     disabled:opacity-50 transition-all cursor-pointer"
        >
          {generating ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Generando...
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Descargar PDF
            </>
          )}
        </button>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-warm-600 font-medium
                     rounded-full shadow-sm border border-warm-200
                     hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          {shared ? '¡Copiado!' : 'Compartir'}
        </button>

        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-6 py-3 text-warm-400 hover:text-warm-600
                     font-medium transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reiniciar
        </button>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-warm-400 text-center mt-8 leading-relaxed max-w-md mx-auto">
        Este cuestionario es de carácter informativo y no reemplaza la orientación
        profesional. Si necesitas apoyo, busca a un profesional de salud mental.
      </p>
    </div>
  );
}
