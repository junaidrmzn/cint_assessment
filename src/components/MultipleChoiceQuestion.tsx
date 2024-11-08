import React from "react";
import { Question } from "../types/quiz";
import { decodeHtmlEntities } from "../utils/decodeHtmlEntities";

interface MultipleChoiceQuestionProps {
  question: Question;
  onAnswer: (isCorrect: string) => void;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  question,
  onAnswer,
}) => {
  if (!question.incorrect_answers || question.type !== "multiple") {
    return <p>Invalid question format</p>;
  }

  const options = [
    ...question.incorrect_answers,
    question.correct_answer,
  ].sort();

  return (
    <div className="p-6">
      <h5 className="mb-7 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {decodeHtmlEntities(question.question)}
      </h5>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onAnswer(option)}
          className="block w-full py-2 px-4 mb-4 text-left border rounded-md bg-gray-200 hover:bg-gray-300 font-normal text-gray-700 dark:text-gray-400"
        >
          {decodeHtmlEntities(option)}
        </button>
      ))}
    </div>
  );
};

export default MultipleChoiceQuestion;
