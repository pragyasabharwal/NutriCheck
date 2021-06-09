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
  login: boolean | undefined;
  setLogin: (value: login) => void;
  modal: boolean | undefined;
  setModal: (value: modal) => void;
  token: null | string
  setToken: (value: token) => void;
  initials: string | undefined;
  setInitials: (value: initials) => void;
  setupAuthHeaderForServiceCalls: (token: string | null) => string | undefined ;
  loginUser: any,
  username: string | undefined;
  password: string | undefined;
  setUsername: (value: username) => void;
  setPassword: (value: password) => void;
  userModal: boolean;
  setUserModal: (value: userModal) => void;
};

export type Props = {
  children: React.ReactNode;
};

export type QuizContextType = {
  selectedAns: array | undefined
  setSelectedAns: (value: selectedAns) => void;
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

export type Scores = {
  _id: number;
  username: string;
  score: number;
}
