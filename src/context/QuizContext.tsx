import React, { createContext, useContext, useReducer } from "react";
import { initialScore, reducer } from "../reducer/reducer";
import { QuizContextType, Props } from "../types/main";

const QuizContext = createContext<QuizContextType>(undefined!);

export function QuizProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialScore);

  return (
    <QuizContext.Provider value={{ initialScore, dispatch, state }}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuiz = () => {
  return useContext(QuizContext);
};
