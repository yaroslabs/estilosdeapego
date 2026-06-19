import { useQuiz } from './hooks/useQuiz';
import HomeScreen from './components/HomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import Footer from './components/Footer';

export default function App() {
  const quiz = useQuiz();

  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-b from-cream-50 via-rose-50/30 to-cream-50">
      <main className="flex-1 flex flex-col">
        {quiz.screen === 'home' && <HomeScreen onStart={quiz.startQuiz} />}
        {quiz.screen === 'quiz' && (
          <QuizScreen
            currentQuestion={quiz.currentQuestion}
            answers={quiz.answers}
            onSelect={quiz.selectAnswer}
            onNext={quiz.nextQuestion}
            onPrev={quiz.prevQuestion}
            onFinish={quiz.calculateResult}
            allAnswered={quiz.allAnswered}
          />
        )}
        {quiz.screen === 'results' && (
          <ResultsScreen result={quiz.result} onReset={quiz.resetQuiz} />
        )}
      </main>
      <Footer />
    </div>
  );
}
