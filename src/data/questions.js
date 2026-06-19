export const STYLES = {
  seguro: {
    id: 'seguro',
    label: 'Apego Seguro',
    color: 'green',
    colorHex: '#a8d5ba',
    colorLight: '#d4eadd',
    colorDark: '#5a9e72',
    emoji: '🌿',
    nombreNinez: 'Seguro',
    nombreAdultez: 'Autónomo / Seguro',
    caracteristicasInfantil: [
      'Busca al cuidador cuando está angustiado y se calma fácilmente al reencontrarse.',
      'Explora el entorno con confianza, usando al cuidador como base segura.',
      'Muestra preferencia por el cuidador sobre extraños, pero no de forma ansiosa.',
      'Expresa emociones de forma abierta y regulada.',
    ],
    tendenciasAdultas: [
      'Mantiene relaciones estables y satisfactorias basadas en confianza mutua.',
      'Comunica necesidades emocionales de forma directa y efectiva.',
      'Ofrece y acepta apoyo emocional con naturalidad.',
      'Maneja conflictos de manera constructiva sin evitar ni escalar.',
      'Tiene una visión equilibrada de sí mismo y de los demás.',
    ],
    afrontamiento:
      'Co-regulación saludable: busca apoyo en otros cuando lo necesita y también es capaz de regularse internamente. Puede tolerar la incertidumbre y el malestar sin desbordarse.',
    sistemaNervioso:
      'Sistema nervioso bien regulado. Ventana de tolerancia amplia. Capacidad de volver al equilibrio después del estrés. Activación y desactivación fluidas del sistema nervioso autónomo.',
    descripcionBreve:
      'Las personas con apego seguro se sienten cómodas con la intimidad y la independencia. Confían en los demás y en sí mismas, y pueden pedir ayuda cuando la necesitan sin perder su autonomía.',
  },
  preocupado: {
    id: 'preocupado',
    label: 'Apego Inseguro Preocupado',
    color: 'orange',
    colorHex: '#f5c28a',
    colorLight: '#fae0c0',
    colorDark: '#c88a3e',
    emoji: '🔥',
    nombreNinez: 'Ansioso / Ambivalente',
    nombreAdultez: 'Preocupado / Ansioso',
    caracteristicasInfantil: [
      'Gran angustia ante la separación del cuidador.',
      'Dificultad para calmarse incluso cuando el cuidador regresa.',
      'Comportamiento ambivalente: busca cercanía pero también muestra enojo hacia el cuidador.',
      'Exploración limitada del entorno por mantenerse cerca del cuidador.',
      'Hipervigilancia ante las señales emocionales del cuidador.',
    ],
    tendenciasAdultas: [
      'Necesidad intensa de cercanía y validación constante en las relaciones.',
      'Miedo profundo al abandono y al rechazo.',
      'Tendencia a idealizar a las parejas al principio y luego sentir decepción.',
      'Dificultad para estar solo/a sin sentir ansiedad.',
      'Reactividad emocional alta ante conflictos o distanciamiento percibido.',
      'Busca constantemente señales de que la relación está bien.',
    ],
    afrontamiento:
      'Hiperactivación del sistema de apego: busca cercanía de manera intensa y frecuente. Tiende a amplificar las emociones para asegurar que el otro responda. Puede sentir que nunca es suficiente la atención recibida.',
    sistemaNervioso:
      'Sistema nervioso simpático frecuentemente activado. Estado de alerta elevado. Dificultad para regresar a la calma. Hiperexcitación ante señales de distanciamiento o ambigüedad emocional.',
    descripcionBreve:
      'Las personas con apego preocupado anhelan cercanía intensa y temen el abandono. Son muy sensibles a las señales emocionales de los demás y pueden sentirse inseguras si no reciben validación constante.',
  },
  evitativo: {
    id: 'evitativo',
    label: 'Apego Inseguro Evitativo',
    color: 'blue',
    colorHex: '#9ec5e8',
    colorLight: '#cee2f3',
    colorDark: '#4a8ec4',
    emoji: '🧊',
    nombreNinez: 'Evitativo',
    nombreAdultez: 'Despreciativo / Evitativo',
    caracteristicasInfantil: [
      'Poca o ninguna angustia visible ante la separación del cuidador.',
      'Evita buscar al cuidador cuando está angustiado.',
      'Aparenta independencia prematura y autosuficiencia.',
      'Minimiza la expresión de emociones negativas.',
      'Puede parecer indiferente hacia el cuidador.',
    ],
    tendenciasAdultas: [
      'Valora excesivamente la independencia y la autosuficiencia.',
      'Incomodidad con la intimidad emocional profunda.',
      'Tendencia a minimizar la importancia de las relaciones.',
      'Dificultad para identificar y expresar emociones.',
      'Puede distanciarse cuando la relación se vuelve más cercana.',
      'Prefiere la lógica sobre las emociones al resolver problemas relacionales.',
    ],
    afrontamiento:
      'Desactivación del sistema de apego: suprime las necesidades emocionales y evita buscar ayuda. Se enfoca en tareas, trabajo o actividades individuales para manejar el estrés. Minimiza la importancia de las conexiones emocionales.',
    sistemaNervioso:
      'Sistema nervioso parasimpático predominante (dorsal vagal en situaciones de estrés). Desconexión emocional como mecanismo de defensa. Aparente calma externa que enmascara estrés interno. Dificultad para acceder a estados emocionales.',
    descripcionBreve:
      'Las personas con apego evitativo valoran la independencia por encima de todo. Tienden a minimizar sus necesidades emocionales y pueden sentirse incómodas con demasiada cercanía o vulnerabilidad.',
  },
  desorganizado: {
    id: 'desorganizado',
    label: 'Apego Inseguro Desorganizado',
    color: 'red',
    colorHex: '#f0a0a0',
    colorLight: '#f8d0d0',
    colorDark: '#c85050',
    emoji: '🌪️',
    nombreNinez: 'Desorganizado / Desorientado',
    nombreAdultez: 'Temeroso / Sin resolver',
    caracteristicasInfantil: [
      'Comportamiento contradictorio ante el cuidador: se acerca pero se congela o retrocede.',
      'Expresiones de miedo o confusión hacia el cuidador.',
      'Movimientos y posturas sin propósito aparente (quedarse inmóvil, caminar en círculos).',
      'El cuidador es simultáneamente fuente de consuelo y de temor.',
      'Dificultad para desarrollar una estrategia coherente de apego.',
    ],
    tendenciasAdultas: [
      'Deseo de cercanía mezclado con miedo a ser herido/a.',
      'Relaciones caóticas con patrones de acercamiento y alejamiento.',
      'Dificultad para regular emociones intensas.',
      'Puede experimentar disociación o desconexión en momentos de estrés.',
      'Visión negativa tanto de sí mismo/a como de los demás.',
      'Mayor vulnerabilidad a relaciones dañinas o tóxicas.',
    ],
    afrontamiento:
      'Oscilación entre hiperactivación y desactivación: sin una estrategia de apego coherente. Puede alternar entre buscar cercanía desesperadamente y alejarse completamente. En momentos de estrés, puede experimentar disociación, bloqueo o respuestas de lucha-huida-congelamiento.',
    sistemaNervioso:
      'Desregulación del sistema nervioso. Oscilación entre estados simpáticos (hiperexcitación) y dorsal vagal (congelamiento). Ventana de tolerancia estrecha. Respuestas impredecibles ante el estrés. Mayor propensión a la disociación.',
    descripcionBreve:
      'Las personas con apego desorganizado experimentan un conflicto interno entre desear cercanía y temer ser heridas. Pueden sentirse perdidas emocionalmente y oscilar entre extremos en sus relaciones.',
  },
};

export const questions = [
  {
    id: 1,
    text: 'Cuando eras niño y estabas molesto o asustado, ¿qué recuerdas haber hecho para afrontarlo?',
    options: [
      { text: 'Ir hacia un cuidador y sentirme tranquilo rápidamente', style: 'seguro' },
      { text: 'Ir hacia un cuidador, pero sentirme enojado y molesto durante mucho tiempo', style: 'preocupado' },
      { text: 'Jugar o distraerme', style: 'evitativo' },
      { text: 'Sentirme perdido, estancado, asustado y a veces lleno de rabia', style: 'desorganizado' },
    ],
  },
  {
    id: 2,
    text: '¿Cuáles fueron los mensajes en el hogar de tu niñez sobre los sentimientos?',
    options: [
      { text: 'Tus sentimientos importan y siempre podrás obtener apoyo cuando lo necesites', style: 'seguro' },
      { text: 'Mensajes contradictorios: a veces estaba bien, y otras no', style: 'preocupado' },
      { text: 'No te concentres en lo que sientes, intenta ser lógico', style: 'evitativo' },
      { text: 'Tus sentimientos son egoístas, mezquinos o vergonzosos', style: 'desorganizado' },
    ],
  },
  {
    id: 3,
    text: 'Como adulto, cuando estás enojado o asustado, ¿cuál es tu respuesta?',
    options: [
      { text: 'Contactar a mis seres queridos, compartir mis sentimientos y recibir su atención', style: 'seguro' },
      { text: 'Contactar de modo frenético a mis seres queridos hasta colapsar', style: 'preocupado' },
      { text: 'Intentar no pensar en ello y seguir adelante', style: 'evitativo' },
      { text: 'Entrar en modo autodestructivo y desconectarme por completo', style: 'desorganizado' },
    ],
  },
  {
    id: 4,
    text: '¿Qué han dicho tus amigos o parejas románticas sobre cómo respondes a su dolor?',
    options: [
      { text: '"Siempre sabes cómo hacerme sentir mejor"', style: 'seguro' },
      { text: '"Siempre se trata de ti, incluso cuando no es así"', style: 'preocupado' },
      { text: '"Nunca puedo saber lo que estás sintiendo"', style: 'evitativo' },
      { text: '"No hay nadie en el mundo que responda por mi más rápido que tú"', style: 'desorganizado' },
    ],
  },
  {
    id: 5,
    text: 'Cuando alguien es empático cuando te sientes emocional, ¿qué pasa en tu cuerpo?',
    options: [
      { text: 'Me siento aliviado y calmado', style: 'seguro' },
      { text: 'Me desbordo ante el dolor de todas las cosas', style: 'preocupado' },
      { text: 'Me siento incómodo y quiero cambiar de tema', style: 'evitativo' },
      { text: 'Cuestiono los motivos de la persona, y me siento agitado o cerrado', style: 'desorganizado' },
    ],
  },
  {
    id: 6,
    text: 'Cuando alguien que te importa está llorando, ¿qué se acerca más a tu respuesta?',
    options: [
      { text: 'Ofrezco amabilidad y empatía', style: 'seguro' },
      { text: 'Hago todo lo que puedo para hacerlo sentir bien; su dolor es mi dolor', style: 'preocupado' },
      { text: 'Doy un abrazo incómodo o una palabra amable, y luego me retiro rápidamente', style: 'evitativo' },
      { text: 'Le digo que aunque, no sabe lo que es el verdadero dolor', style: 'desorganizado' },
    ],
  },
  {
    id: 7,
    text: 'Cuando sucede algo que te decepciona en una relación, ¿qué dice tu voz interior?',
    options: [
      { text: '"Estoy triste y eso es válido, pero estaré bien"', style: 'seguro' },
      { text: '"¿Por qué me hacen esto? ¿No les importa?"', style: 'preocupado' },
      { text: '"Supéralo, no es gran cosa, estarás bien"', style: 'evitativo' },
      { text: '"Te mereces esto, tonto"', style: 'desorganizado' },
    ],
  },
  {
    id: 8,
    text: 'Cuando imaginas acercarte de manera emocional a alguien, ¿cuál es tu respuesta?',
    options: [
      { text: 'Con los pies en la tierra', style: 'seguro' },
      { text: 'Hiperexcitación', style: 'preocupado' },
      { text: 'Malestar', style: 'evitativo' },
      { text: 'Oscila entre el miedo y la desesperación', style: 'desorganizado' },
    ],
  },
  {
    id: 9,
    text: 'Cuando alguien de confianza te pregunta sobre tu infancia, ¿cuál es tu respuesta?',
    options: [
      { text: '"Hubo momentos difíciles, pero mi familia siempre me amó"', style: 'seguro' },
      { text: '"¿Mi infancia? Déjame contarte lo que hizo mi mamá..."', style: 'preocupado' },
      { text: '"Estuve bien. Realmente no recuerdo mucho, pero creo que bien"', style: 'evitativo' },
      { text: '"No hubo nada bueno. Solo cosas malas y feas"', style: 'desorganizado' },
    ],
  },
  {
    id: 10,
    text: '¿Qué frase se adapta mejor a la forma en que describirías tu salud emocional?',
    options: [
      { text: 'En general, estable', style: 'seguro' },
      { text: 'Si mis relaciones están bien, estoy genial. Si no, me siento miserable', style: 'preocupado' },
      { text: 'Estoy bien, no tengo muchas emociones', style: 'evitativo' },
      { text: 'A veces estoy entumecido, pero sobre todo con dificultades y me siento desorientado', style: 'desorganizado' },
    ],
  },
];
