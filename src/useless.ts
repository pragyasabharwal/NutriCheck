export const buttonStyle = {
  display: "block",
  textAlign: "center" as const,
  width: "100%",
  padding: "1rem",
  fontSize: "1.2rem",
  margin: "1em",
};
/* <h2> Your score is {state.score} </h2>
        <button
          style={buttonStyle}
          onClick={() => dispatch({ type: "increment" })}
        >
          {" "}
          I answered it right!{" "}
        </button>
        <button
          style={buttonStyle}
          onClick={() => dispatch({ type: "decrement" })}
        >
          {" "}
          Oops! Wrong answer{" "}
        </button>
        <button style={buttonStyle} onClick={() => dispatch({ type: "reset" })}>
          {" "}
          Let us start again{" "}
        </button> */

{
  /* <div
        className={
          theme === darkTheme
            ? "text-2xl my-12 text-white lg: text-3xl"
            : "text-2xl my-12 text-black lg: text-3xl"
        }
      >
        {quiz.questions[0].question}
      </div> */
}

{
  /* <div className="flex flex-row flex-wrap items-center justify-center sm:flex-col md:flex-col lg:flex-col ">
        {quiz.questions[0].options.map(({ text, isRight }, index) => (
          <div
            className={color(index, isRight, click)}
            onClick={() => {
              setClicked(true);
              isRight
                ? dispatch({ type: "increment" })
                : dispatch({ type: "decrement" });
            }}
          >
            {option(index)}
            {text}
          </div>
        ))}
      </div> */
}

// <Link to = {`/question/${Number(questionId) - 1}`}>
// <div
//   className={
//     theme === darkTheme
//       ? "text-white border-0 border-white-500 px-7 py-3 mb-10 ring-4 ring-white"
//       : "text-black border-0 border-black-500 px-7 py-3 mb-10 ring-4 ring-black"
//   }
// >
//   ← Previous
// </div>
// </Link>

// import { quiz } from "../data/data"
// import {Question, Option} from "../types/main"


// const score = (currentScore: number, questions: Question, selectedOption: Option) : number => {
//     return selectedOption.isRight ? currentScore++ : currentScore--
// }

// score(4, quiz.questions[1], quiz.questions[1].options[1])