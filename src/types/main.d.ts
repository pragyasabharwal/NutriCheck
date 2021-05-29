export type Option = {
  text: string;
  isRight: boolean;
};

export type Question = {
  question: string;
  id: number;
  points: number;
  negativePoint?: number;
  options: Option[];
};

export type Quiz = {
  quizTitle: string;
  questions: Question[];
};

export type Theme = {
  backgroundColor: string;
  color: string;
};

export type ThemeContextType = {
  lightTheme: Theme;
  darkTheme: Theme;
  setTheme: (value: Theme) => void;
};

export type Props = {
  children: React.ReactNode;
};

export type QuizContextType = {
  initialScore: { score: number };
  dispatch: React.Dispatch<Action>;
  state: { score: number; right: number; wrong: number; unattempted: number };
};
