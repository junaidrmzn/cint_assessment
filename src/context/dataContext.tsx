import React, { createContext, useState, ReactNode } from "react";
import questionsData from "../data/questions.json";
import { Question, Summary, UserResponse } from "../types/quiz";

const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

interface DataContextType {
  startQuiz: () => Question[];
  submitAnswer: (userAnswer: UserResponse) => void;
  getSummary: () => Summary;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [responses, setResponses] = useState<UserResponse[]>([]);

  const startQuiz = (): Question[] => {
    const shuffledQuestions = shuffleArray(questionsData.results);
    const selectedQuestions = shuffledQuestions.slice(0, 10); // number of questions per quiz

    setQuestions(selectedQuestions);
    setResponses([]);
    return selectedQuestions;
  };

  const submitAnswer = (userAnswer: UserResponse) => {
    const updatedResponses = [...responses, userAnswer];
    setResponses(updatedResponses);
  };

  const getSummary = (): Summary => {
    const correctAnswers = responses.filter(
      (response) => response.isCorrect
    ).length;
    const totalAnswered = responses.length;

    return {
      totalQuestions: questions.length,
      totalAnswered,
      correctAnswers,
      incorrectAnswers: totalAnswered - correctAnswers,
    };
  };

  return (
    <DataContext.Provider
      value={{
        startQuiz,
        submitAnswer,
        getSummary,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = (): DataContextType => {
  const context = React.useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};

export default DataContext;
