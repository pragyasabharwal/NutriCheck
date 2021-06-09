import React, { createContext, useContext, useReducer, useState } from "react";
import { initialScore, reducer } from "../reducer/reducer";
import { QuizContextType, Props } from "../types/main";

const QuizContext = createContext<QuizContextType>(undefined!);

export function QuizProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialScore);
  const [selectedAns, setSelectedAns] = useState([])

  return (
    <QuizContext.Provider value={{ initialScore, dispatch, state, setSelectedAns, selectedAns }}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuiz = () => {
  return useContext(QuizContext);
};
