import React from "react";
import { Question } from "../types/quiz";
import { decodeHtmlEntities } from "../utils/decodeHtmlEntities";

interface BooleanQuestionProps {
  question: Question;
  onAnswer: (isCorrect: string) => void;
}

const BooleanQuestion: React.FC<BooleanQuestionProps> = ({
  question,
  onAnswer,
}) => {
  if (question.type !== "boolean") {
    return <p>Invalid question type</p>;
  }

  return (
    <div className="p-6">
      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {decodeHtmlEntities(question.question)}
      </h5>

      <div className="space-x-4 mt-7 flex justify-end">
        <button
          onClick={() => onAnswer("False")}
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          False
        </button>
        <button
          onClick={() => onAnswer("True")}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          True
        </button>
      </div>
    </div>
  );
};

export default BooleanQuestion;
