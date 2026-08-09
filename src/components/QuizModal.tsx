import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/farmaajoData';
import confetti from 'canvas-confetti';
import { X, Award, CheckCircle, HelpCircle, RefreshCw } from 'lucide-react';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredCurrent, setAnsweredCurrent] = useState(false);

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (answeredCurrent) return;
    setSelectedOption(index);
    setAnsweredCurrent(true);

    if (index === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setAnsweredCurrent(false);
    } else {
      setShowResult(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setAnsweredCurrent(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!showResult ? (
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
                <span>★ Imtixaanka Aqoonta (Su'aasha {currentQuestionIndex + 1}/{QUIZ_QUESTIONS.length})</span>
                <span>Dhibcaha: {score}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                {currentQ.question}
              </h3>
            </div>

            <div className="space-y-2.5">
              {currentQ.options.map((opt, idx) => {
                let btnStyle = "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700";

                if (answeredCurrent) {
                  if (idx === currentQ.correctIndex) {
                    btnStyle = "border-emerald-500 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-100 font-bold";
                  } else if (idx === selectedOption) {
                    btnStyle = "border-red-500 bg-red-100 dark:bg-red-950/80 text-red-900 dark:text-red-100";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-4 rounded-xl text-left text-xs sm:text-sm font-medium border transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {answeredCurrent && idx === currentQ.correctIndex && (
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {answeredCurrent && (
              <div className="p-3.5 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-200 text-xs rounded-xl space-y-1">
                <div className="font-bold">Faahfaahin:</div>
                <p>{currentQ.explanation}</p>
              </div>
            )}

            {answeredCurrent && (
              <button
                onClick={handleNext}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
              >
                {currentQuestionIndex + 1 < QUIZ_QUESTIONS.length ? "Su'aasha Xigta" : "Arag Natiijada Buuxda"}
              </button>
            )}
          </div>
        ) : (
          <div className="text-center space-y-6 py-4">
            <div className="w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400 flex items-center justify-center mx-auto text-2xl font-bold">
              🏆
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                Natiijada Imtixaanka Aqoonta
              </h3>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                Waxaad ka heshay <span className="text-blue-600 dark:text-blue-400 font-extrabold text-lg">{score}</span> / {QUIZ_QUESTIONS.length} su'aalood.
              </p>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
              {score === QUIZ_QUESTIONS.length
                ? 'Hambalyo! Waxaad si xeeldeer ah u leedahay aqoon dhameystiran oo ku saabsan wax-qabadkii Madaxweyne Farmaajo!'
                : 'Ugu mahadsanid ka qaybgalka! Waxaad dib uga baari kartaa wax-qabadka buuxa qaybaha kale ee website-ka.'}
            </p>

            <div className="flex gap-3 pt-2">
              <button
                onClick={handleRestart}
                className="flex-1 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Kudhar Soocelinta</span>
              </button>

              <button
                onClick={onClose}
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl"
              >
                Xir Imtixaanka
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
