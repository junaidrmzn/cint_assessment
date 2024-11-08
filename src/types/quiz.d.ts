export type QuestionType = "multiple" | "boolean" | "text";

export interface Question {
  category: string;
  type: QuestionType;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers?: string[];
}

export interface UserResponse {
  question: string;
  userAnswer: string;
  isCorrect: boolean;
}

export interface Summary {
  totalQuestions: number;
  correctAnswers: number;
  totalAnswered: number;
  incorrectAnswers: number;
}
