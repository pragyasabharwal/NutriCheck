const initialScore = { score: 0 };
type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

function reducer(state: typeof initialScore, action: Action): typeof initialScore {
  switch (action.type) {
    case "increment":
      return { ...state, score: state.score + 1 };
    case "decrement":
      return { ...state, score: state.score - 1 };
    case "reset":
      return { ...state, score: 0 };
    default:
      return state;
  }
}

export {initialScore, reducer}