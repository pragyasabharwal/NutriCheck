import { Quiz } from "../types/main";

const quiz: Quiz[] = [{
  quizTitle: "calories",
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
      question:
        "How many calories should you eat while practicing intermittent fasting?",
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
},
{quizTitle: "vitamins",
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
      question:
        "How many calories should you eat while practicing intermittent fasting?",
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
  ]},
  {quizTitle: "ultimate-quiz",
  questions: [
    {
      question:
        "How many portions of fruit and vegetables should you aim to eat each day?",
      id: 1,
      points: 5,
      negativePoint: 2,
      options: [
        { text: "10", isRight: true },
        { text: "5", isRight: false },
        { text: "2", isRight: false },
        { text: "3", isRight: false },
      ],
    },
    {
      question:
        "Fibre is good for your digestive health. Which of the following foods does not contain it?",
      id: 2,
      points: 5,
      options: [
        { text: "Broccoli", isRight: true },
        { text: "Nuts", isRight: false },
        { text: "Wholewheat Pasta", isRight: false },
        { text: "Cheese", isRight: false },
      ],
    },
    {
      question:
        "Meat, fish, beans and eggs are good sources of protein. Why do you need protein?",
      id: 3,
      points: 4,
      options: [
        {
          text: "It repairs body tissues, gives you energy and makes your muscles grow",
          isRight: true,
        },
        { text: "It makes you do maths super-fast", isRight: false },
        { text: "It gives your teeth a magnificent glow", isRight: false },
        { text: "Protein is just a made up thing", isRight: false },
      ],
    },
    {
      question:
        "If you eat meat, what's the least healthy way to cook it?",
      id: 4,
      points: 4,
      options: [
        {
          text: "Grill",
          isRight: true,
        },
        { text: "Bake", isRight: false },
        { text: "Fry", isRight: false },
        { text: "Roast", isRight: false },
      ],
    }
  ]}
];


export { quiz };
