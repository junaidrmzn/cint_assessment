import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 p-10 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-6">
          Welcome to the Quiz!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Test your General/History knowledge! Are you ready to start?
        </p>
        <button
          onClick={handleStartQuiz}
          className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Start Quiz
        </button>
      </div>
    </section>
  );
};

export default HomePage;
