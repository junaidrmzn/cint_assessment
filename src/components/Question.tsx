import React, { useEffect, useState } from "react";
import BooleanQuestion from "./BooleanQuestion";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import TextQuestion from "./TextQuestion";
import { Question as QuestionType, UserResponse } from "../types/quiz";

interface QuestionProps {
  question: QuestionType;
  onAnswer: (response: UserResponse) => void;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  const [timeLeft, setTimeLeft] = useState<number>(60);

  useEffect(() => {
    setTimeLeft(60);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [question]);

  const handleTimeout = () => {
    const response: UserResponse = {
      question: question.question,
      userAnswer: "No Answer",
      isCorrect: false,
    };
    onAnswer(response);
  };

  const handleAnswer = (userAnswer: string) => {
    const isCorrect =
      userAnswer.trim().toLowerCase() ===
      question.correct_answer.trim().toLowerCase();
    const response: UserResponse = {
      question: question.question,
      userAnswer,
      isCorrect,
    };
    onAnswer(response);
  };

  return (
    <div>
      <div className="mb-4 text-right text-gray-500">
        <p>Time Left: {timeLeft || 0}s</p>
      </div>
      {(() => {
        switch (question.type) {
          case "multiple":
            return (
              <MultipleChoiceQuestion
                question={question}
                onAnswer={(selectedAnswer) => handleAnswer(selectedAnswer)}
              />
            );
          case "boolean":
            return (
              <BooleanQuestion
                question={question}
                onAnswer={(selectedAnswer) => handleAnswer(selectedAnswer)}
              />
            );
          case "text":
            return (
              <TextQuestion
                question={question}
                onAnswer={(selectedAnswer) => handleAnswer(selectedAnswer)}
              />
            );
          default:
            return <p>Unsupported question type</p>;
        }
      })()}
    </div>
  );
};

export default Question;
