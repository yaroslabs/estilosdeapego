import { useState, useCallback, useEffect } from 'react';
import { questions, STYLES } from '../data/questions';

const STORAGE_KEY = 'apego-quiz-answers';

function loadAnswers() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveAnswers(answers) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  } catch {
    // localStorage not available
  }
}

export function useQuiz() {
  const [screen, setScreen] = useState('home');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(loadAnswers);
  const [result, setResult] = useState(null);

  useEffect(() => {
    saveAnswers(answers);
  }, [answers]);

  const selectAnswer = useCallback((questionId, style) => {
    setAnswers(prev => ({ ...prev, [questionId]: style }));
  }, []);

  const nextQuestion = useCallback(() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  }, [currentQuestion]);

  const prevQuestion = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  }, [currentQuestion]);

  const allAnswered = questions.every(q => answers[q.id] !== undefined);

  const calculateResult = useCallback(() => {
    const counts = { seguro: 0, preocupado: 0, evitativo: 0, desorganizado: 0 };
    Object.values(answers).forEach(style => {
      counts[style]++;
    });

    const maxCount = Math.max(...Object.values(counts));
    const winners = Object.entries(counts)
      .filter(([, count]) => count === maxCount)
      .map(([style]) => style);

    if (winners.length === 1) {
      setResult({ type: 'single', styles: [STYLES[winners[0]]], counts });
    } else {
      setResult({
        type: 'mixed',
        styles: winners.map(w => STYLES[w]),
        counts,
      });
    }
    setScreen('results');
  }, [answers]);

  const startQuiz = useCallback(() => {
    setScreen('quiz');
    setCurrentQuestion(0);
  }, []);

  const resetQuiz = useCallback(() => {
    setAnswers({});
    setCurrentQuestion(0);
    setResult(null);
    setScreen('home');
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  return {
    screen,
    currentQuestion,
    answers,
    result,
    allAnswered,
    selectAnswer,
    nextQuestion,
    prevQuestion,
    calculateResult,
    startQuiz,
    resetQuiz,
    setScreen,
  };
}
