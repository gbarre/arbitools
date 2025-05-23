export interface Question {
  question: string;
  answers: string[];
}

export interface ParsedQuestion {
  question: string;
  answers: string[];
  correctAnswerIndex: number;
}
