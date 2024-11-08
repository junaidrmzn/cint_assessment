import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../context/dataContext";
import Question from "../components/Question";
import { Question as QuestionType, UserResponse } from "../types/quiz";

const QuizPage: React.FC = () => {
  const { startQuiz, submitAnswer } = useDataContext();
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const initialQuestions = startQuiz();
    setQuestions(initialQuestions);
  }, []);

  const handleAnswer = (response: UserResponse) => {
    submitAnswer(response);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      navigate("/summary");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {questions.length > 0 ? (
        <div className="max-w-lg bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8">
          <Question
            question={questions[currentIndex]}
            onAnswer={handleAnswer}
          />
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default QuizPage;
