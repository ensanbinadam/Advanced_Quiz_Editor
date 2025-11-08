
export type QuestionType =
  | 'multiple-choice'
  | 'fill-in-the-blank'
  | 'true-false'
  | 'short-answer'
  | 'matching'
  | 'ordering';

export interface Option {
  text: string;
  image: string | null;
}

export interface MatchingPair {
  prompt: Option;
  answer: Option;
}

export interface BaseQuestion {
  type: QuestionType;
  reading: {
    text: string;
    image: string | null;
    audio: string | null;
  };
  question: {
    text: string;
    image: string | null;
  };
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  options: Option[];
  correct: number; // index of the correct option
}

export interface FillInTheBlankQuestion extends BaseQuestion {
  type: 'fill-in-the-blank';
  correctAnswer: string;
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: 'true-false';
  correctAnswer: boolean;
}

export interface ShortAnswerQuestion extends BaseQuestion {
  type: 'short-answer';
  correctAnswer: string; // Can be pipe-separated for multiple answers
}

export interface MatchingQuestion extends BaseQuestion {
  type: 'matching';
  pairs: MatchingPair[];
}

export interface OrderingQuestion extends BaseQuestion {
  type: 'ordering';
  items: Option[];
}

export type Question =
  | MultipleChoiceQuestion
  | FillInTheBlankQuestion
  | TrueFalseQuestion
  | ShortAnswerQuestion
  | MatchingQuestion
  | OrderingQuestion;