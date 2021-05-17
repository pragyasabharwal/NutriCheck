import { quiz } from "../data/data"
import {Question, Option} from "../types/main"


const score = (currentScore: number, questions: Question, selectedOption: Option) : number => {
    return selectedOption.isRight ? currentScore++ : currentScore--
}

score(4, quiz.questions[1], quiz.questions[1].options[1])