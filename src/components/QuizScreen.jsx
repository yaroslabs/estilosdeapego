import { questions } from '../data/questions';

const colorClasses = {
  seguro: {
    border: 'border-apego-green-light',
    borderSelected: 'border-apego-green',
    bg: 'bg-apego-green-light/30',
    bgSelected: 'bg-apego-green-light',
    dot: 'bg-apego-green',
    ring: 'ring-apego-green/30',
  },
  preocupado: {
    border: 'border-apego-orange-light',
    borderSelected: 'border-apego-orange',
    bg: 'bg-apego-orange-light/30',
    bgSelected: 'bg-apego-orange-light',
    dot: 'bg-apego-orange',
    ring: 'ring-apego-orange/30',
  },
  evitativo: {
    border: 'border-apego-blue-light',
    borderSelected: 'border-apego-blue',
    bg: 'bg-apego-blue-light/30',
    bgSelected: 'bg-apego-blue-light',
    dot: 'bg-apego-blue',
    ring: 'ring-apego-blue/30',
  },
  desorganizado: {
    border: 'border-apego-red-light',
    borderSelected: 'border-apego-red',
    bg: 'bg-apego-red-light/30',
    bgSelected: 'bg-apego-red-light',
    dot: 'bg-apego-red',
    ring: 'ring-apego-red/30',
  },
};

export default function QuizScreen({
  currentQuestion,
  answers,
  onSelect,
  onNext,
  onPrev,
  onFinish,
  allAnswered,
}) {
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isLast = currentQuestion === questions.length - 1;
  const currentAnswer = answers[question.id];
  const isAnswered = currentAnswer !== undefined;

  return (
    <div className="flex-1 flex flex-col px-4 py-8 max-w-2xl mx-auto w-full">
      {/* Progress */}
      <div className="mb-8 animate-fade-in">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-warm-500">
            Pregunta {currentQuestion + 1} de {questions.length}
          </span>
          <span className="text-sm text-warm-400">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-warm-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-rose-300 to-blush-300 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8 animate-slide-up" key={question.id}>
        <h2 className="text-xl md:text-2xl font-semibold text-warm-800 leading-relaxed">
          {question.text}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-8 animate-slide-up" key={`opts-${question.id}`}>
        {question.options.map((option, idx) => {
          const colors = colorClasses[option.style];
          const selected = currentAnswer === option.style;

          return (
            <button
              key={idx}
              onClick={() => onSelect(question.id, option.style)}
              className={`option-card w-full text-left flex items-start gap-3
                ${selected
                  ? `${colors.borderSelected} ${colors.bgSelected} shadow-lg ring-2 ${colors.ring}`
                  : `${colors.border} ${colors.bg} hover:${colors.bgSelected}`
                }`}
            >
              <span
                className={`flex-shrink-0 w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center transition-all
                  ${selected
                    ? `${colors.dot} border-transparent`
                    : `border-warm-300 bg-white`
                  }`}
              >
                {selected && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <span className={`text-sm md:text-base leading-relaxed ${selected ? 'text-warm-800 font-medium' : 'text-warm-600'}`}>
                {option.text}
              </span>
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="mt-auto flex items-center justify-between gap-4 pt-4">
        <button
          onClick={onPrev}
          disabled={currentQuestion === 0}
          className="flex items-center gap-2 px-5 py-2.5 text-warm-500 hover:text-warm-700
                     disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior
        </button>

        {isLast ? (
          <button
            onClick={onFinish}
            disabled={!allAnswered}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-rose-300 to-blush-300
                       text-white font-medium rounded-full shadow-md
                       hover:shadow-lg hover:-translate-y-0.5
                       disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0
                       transition-all cursor-pointer"
          >
            Ver resultados
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        ) : (
          <button
            onClick={onNext}
            disabled={!isAnswered}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-rose-300 to-blush-300
                       text-white font-medium rounded-full shadow-md
                       hover:shadow-lg hover:-translate-y-0.5
                       disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0
                       transition-all cursor-pointer"
          >
            Siguiente
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Unanswered warning on last question */}
      {isLast && !allAnswered && (
        <p className="text-center text-sm text-apego-orange-dark mt-3 animate-fade-in">
          Debes responder todas las preguntas para ver tus resultados
        </p>
      )}
    </div>
  );
}
