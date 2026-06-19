export default function HomeScreen({ onStart }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 animate-fade-in">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-rose-200 to-blush-200 mb-6">
            <span className="text-4xl">💝</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-warm-800 mb-4 leading-tight">
            Cuestionario de<br />Estilo de Apego
          </h1>
          <p className="text-warm-500 text-lg md:text-xl leading-relaxed max-w-lg mx-auto">
            Descubre cómo tu historia emocional influye en la forma en que te
            conectas con los demás. Un viaje de autoconocimiento en 10 preguntas.
          </p>
        </div>

        <button
          onClick={onStart}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-300 to-blush-300
                     text-white font-medium text-lg rounded-full shadow-lg shadow-rose-200/50
                     hover:shadow-xl hover:shadow-rose-300/50 hover:-translate-y-0.5
                     active:translate-y-0 transition-all duration-300 cursor-pointer"
        >
          Comenzar el cuestionario
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-warm-400">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            ~5 minutos
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            10 preguntas
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            100% privado
          </span>
        </div>
      </div>

      <div className="mt-16 max-w-xl mx-auto">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-warm-200/50">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-sage-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-medium text-warm-700 mb-2">Aviso de Privacidad</h3>
              <ul className="text-sm text-warm-500 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-apego-green mt-0.5">✓</span>
                  Todos tus datos se procesan localmente en tu navegador
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-apego-green mt-0.5">✓</span>
                  No recopilamos ni almacenamos información personal
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-apego-green mt-0.5">✓</span>
                  Tu privacidad es importante para nosotros
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-warm-400 mt-4 text-center leading-relaxed">
          Este cuestionario es de carácter informativo y no reemplaza la orientación
          profesional. Si sientes que necesitas apoyo, busca a un profesional de salud mental.
        </p>
      </div>
    </div>
  );
}
