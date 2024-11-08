import React from "react";
import { useDataContext } from "../context/dataContext";
import { useNavigate } from "react-router-dom";

const Summary: React.FC = () => {
  const { getSummary } = useDataContext();
  const summary = getSummary();
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8">
        <h1 className="text-2xl font-bold mb-6">Quiz Summary</h1>
        <p>Questions Answered: {summary.totalAnswered}</p>
        <p>Correct Answers: {summary.correctAnswers}</p>
        <p>Incorrect Answers: {summary.incorrectAnswers}</p>
        <p className="font-bold mt-4">
          Final Score:{" "}
          {summary.totalQuestions > 0
            ? (summary.correctAnswers / summary.totalQuestions) * 100
            : 0}
          %
        </p>
        <div className="flex justify-end mt-5">
          <button
            onClick={handleStartQuiz}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
