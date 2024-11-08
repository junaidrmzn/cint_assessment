import React, { useState } from "react";
import { Question } from "../types/quiz";
import { decodeHtmlEntities } from "../utils/decodeHtmlEntities";

interface TextQuestionProps {
  question: Question;
  onAnswer: (isCorrect: string) => void;
}

const TextQuestion: React.FC<TextQuestionProps> = ({ question, onAnswer }) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    onAnswer(answer);
    setAnswer("");
  };

  if (question.type !== "text") {
    return <p>Invalid question type</p>;
  }

  return (
    <div className="p-6">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {decodeHtmlEntities(question.question)}
      </h5>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Type your answer..."
      />
      <div className="flex justify-end mt-5">
        <button
          onClick={handleSubmit}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TextQuestion;
