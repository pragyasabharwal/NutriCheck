const initialScore = { score: 0 };
type Action =
  | { type: "increment"; payload: { points: number; negativePoint: number } }
  | { type: "decrement"; payload: { points: number; negativePoint: number } }
  | { type: "reset"; payload: { points: number; negativePoint: number } };

function reducer(
  state: typeof initialScore,
  action: Action
): typeof initialScore {
  switch (action.type) {
    case "increment":
      return { ...state, score: state.score + action.payload.points };
    case "decrement":
      return { ...state, score: state.score - action.payload.negativePoint };
    case "reset":
      return { ...state, score: 0 };
    default:
      return state;
  }
}

export { initialScore, reducer };
