import { Quiz } from "../types/main";

const quiz: Quiz = {
  quizName: "Calories Quiz",
  questions: [
    {
      question: "How Many Calories Do You Need?",
      id: 1,
      points: 5,
      negativePoint: 2,
      options: [
        { text: "1,500 to 2,500 calories per day", isRight: true },
        { text: "500 to 1,000 calories per day", isRight: false },
        { text: "1,000 to 1,500 calories per day", isRight: false },
        { text: "3,000 to 4,000 calories per day", isRight: false },
      ],
    },
    {
      question: "How many calories should you eat while intermittent fasting?",
      id: 2,
      points: 5,
      options: [
        { text: "500 calories", isRight: true },
        { text: "200 calories", isRight: false },
        { text: "1000 calories", isRight: false },
        { text: "100 calories", isRight: false },
      ],
    },
    {
      question: "How many hours should you practice intermittent fasting?",
      id: 3,
      points: 4,
      options: [
        { text: "16 hours", isRight: true },
        { text: "8 hours", isRight: false },
        { text: "12 hours", isRight: false },
        { text: "10 hours", isRight: false },
      ],
    },
  ],
};

export { quiz };
