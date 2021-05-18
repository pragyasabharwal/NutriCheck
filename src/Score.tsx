import { useQuiz } from "./context/QuizContext"

export const Score = () => {
    const { state } = useQuiz()
    return (
        <div>Your score is {state.score}</div>
    )

}