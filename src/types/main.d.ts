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

export type Theme = {
  backgroundColor: string;
  color: string;
};

export type ThemeContextType = {
  lightTheme: Theme;
  darkTheme: Theme;
  setTheme: (value: Theme) => void;
};

export type AuthContextType = {
  login: boolean;
  setLogin: (value: login) => void;
  loginUserWithCredentials: (username: string | undefined, password:  string | undefined) => void;
  modal: boolean | undefined;
  setModal: (value: modal) => void;
}

export type Props = {
  children: React.ReactNode;
};

export type QuizContextType = {
  initialScore: { score: number };
  dispatch: React.Dispatch<Action>;
  state: {
    score: number;
    right: number;
    wrong: number;
    unattempted: number;
    initialQuestion: number;
  };
};

export type Quiz = {
  _id: number;
  quizTitle: string;
  questions: Question[];
  imageUrl: string;
};
