const initialScore = {
  score: 0,
  right: 0,
  wrong: 0,
  unattempted: 0,
  initialQuestion: 0,
};
type Action =
  | {
      type: "increment";
      payload: {
        points: number;
        negativePoint: number;
        questionNumber: number;
      };
    }
  | {
      type: "decrement";
      payload: {
        points: number;
        negativePoint: number;
        questionNumber: number;
      };
    }
  | { type: "reset"; payload: { points: number; negativePoint: number } }
  | { type: "skip_question"; payload: number };

function reducer(
  state: typeof initialScore,
  action: Action
): typeof initialScore {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        score: state.score + action.payload.points,
        right: state.right + 1,
        initialQuestion: state.initialQuestion + action.payload.questionNumber,
      };
    case "decrement":
      return {
        ...state,
        score: state.score - action.payload.negativePoint,
        wrong: state.wrong + 1,
        initialQuestion: state.initialQuestion + action.payload.questionNumber,
      };
    case "reset":
      return {
        ...state,
        score: 0,
        right: 0,
        wrong: 0,
        unattempted: 0,
        initialQuestion: 0,
      };
    case "skip_question":
      return {
        ...state,
        unattempted: state.unattempted + 1,
        initialQuestion: state.initialQuestion + action.payload,
      };
    default:
      return state;
  }
}

export { initialScore, reducer };
