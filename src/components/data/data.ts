import { Quiz } from "../../types/main";

const quiz: Quiz[] = [
  {
    quizTitle: "calories",
    questions: [
      {
        question: "How Many Calories Do You Need?",
        id: 1,
        points: 5,
        negativePoint: 2,
        options: [
          { text: "1,000 to 1,500 calories per day", isRight: false },
          { text: "500 to 1,000 calories per day", isRight: false },
          { text: "1,500 to 2,500 calories per day", isRight: true },
          { text: "3,000 to 4,000 calories per day", isRight: false },
        ],
      },
      {
        question:
          "How many calories should you eat while practicing intermittent fasting?",
        id: 2,
        points: 5,
        negativePoint: 2,
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
        points: 5,
        negativePoint: 2,
        options: [
          { text: "8 hours", isRight: false },
          { text: "16 hours", isRight: true },
          { text: "12 hours", isRight: false },
          { text: "10 hours", isRight: false },
        ],
      },
      {
        question: "Which has more calories? A bagel or a pita?",
        id: 4,
        points: 5,
        negativePoint: 2,
        options: [
          { text: "One plain bagel", isRight: true },
          { text: "One whole wheat pita", isRight: false },
        ],
      },
      {
        question: "Which has more calories? French toast or pancake?",
        id: 5,
        points: 5,
        negativePoint: 2,
        options: [
          { text: "One slice of homemade french toast", isRight: true },
          { text: "One homemade pancake, plain", isRight: false },
        ],
      },
      {
        question:
          "How many calories does a medium serving of french fries from McDonald's contain?",
        id: 6,
        points: 5,
        negativePoint: 2,
        options: [
          { text: "340 calories", isRight: true },
          { text: "150 calories", isRight: false },
          { text: "700 calories", isRight: false },
          { text: "1000 calories", isRight: false },
        ],
      },
      {
        question:
          "How many calories does a yummy plate of Pav Bhaji (a famous dish from Marathi Cuisine) contain?",
        id: 7,
        points: 5,
        negativePoint: 2,
        options: [
          { text: "200 calories per plate", isRight: false },
          { text: "600 calories per plate", isRight: true },
          { text: "1200 calories per plate", isRight: false },
          { text: "400 calories per plate", isRight: false },
        ],
      },
      {
        question: "How many calories does a piece of fruit cake contain?",
        id: 8,
        points: 5,
        negativePoint: 2,
        options: [
          { text: "200 calories", isRight: false },
          { text: "70 calories", isRight: true },
          { text: "20 calories", isRight: false },
          { text: "100 calories", isRight: false },
        ],
      },
    ],
  },
  {
    quizTitle: "vitamins",
    questions: [
      {
        question: "Retinol is the scientific name of which Vitamin?",
        id: 1,
        points: 5,
        negativePoint: 2,
        options: [
          { text: "Vitamin A", isRight: true },
          { text: "Vitamin D", isRight: false },
          { text: "Vitamin K", isRight: false },
          { text: "Vitamin C", isRight: false },
        ],
      },
      {
        question:
          "Name the vitamin which are essential for the health of the brain?",
        id: 2,
        points: 5,
        negativePoint: 2,
        options: [
          { text: "Vitamin B6", isRight: false },
          { text: "Vitamin B9", isRight: false },
          { text: "Vitamin B12", isRight: false },
          { text: "All the above", isRight: true },
        ],
      },
      {
        question: "Vitamin C is present in?",
        id: 3,
        points: 5,
        negativePoint: 2,
        options: [
          { text: "Tomatoes", isRight: false },
          { text: "Papaya", isRight: false },
          { text: "Guava", isRight: false },
          { text: "All of these", isRight: true },
        ],
      },
      {
        question: "Vitamin C can ward off a cold?",
        id: 4,
        points: 5,
        negativePoint: 2,
        options: [
          { text: "True", isRight: false },
          { text: "False", isRight: true },
        ],
      },
      {
        question: "Which nutrients might protect your eyesight as you age?",
        id: 5,
        points: 5,
        negativePoint: 2,
        options: [
          { text: "Zeaxanthin and lutein", isRight: false },
          { text: "Zinc and Vitamin A", isRight: false },
          { text: "Vitamins C and E", isRight: false },
          { text: "All of the above", isRight: true },
        ],
      },
      {
        question: "The word vitamin comes from?",
        id: 6,
        points: 5,
        negativePoint: 2,
        options: [
          { text: "Vitaly Minkov, the Russian researcher", isRight: false },
          { text: "From amalgamation of Vital and amines", isRight: true },
          {
            text: "Vitumamine, the first vitamin to be discovered",
            isRight: false,
          },
        ],
      },
      {
        question: "Vitamin B12 gives you more energy.",
        id: 7,
        points: 5,
        negativePoint: 2,
        options: [
          { text: "True", isRight: false },
          { text: "False", isRight: true },
        ],
      },
      {
        question: "Which vitamins and minerals help keep your bones strong?",
        id: 8,
        points: 5,
        negativePoint: 2,
        options: [
          { text: "Calcium and Vitamin D", isRight: false },
          { text: "Vitamin K and Calcium", isRight: false },
          { text: "Magnesium, Potassium", isRight: false },
          { text: "All of the above", isRight: true },
        ],
      },
    ],
  },
  {
    quizTitle: "ultimate-quiz",
    questions: [
      {
        question:
          "How many portions of fruit and vegetables should you aim to eat each day?",
        id: 1,
        points: 5,
        negativePoint: 2,
        options: [
          { text: "10", isRight: false },
          { text: "5", isRight: true },
          { text: "2", isRight: false },
          { text: "3", isRight: false },
        ],
      },
      {
        question:
          "Fibre is good for your digestive health. Which of the following foods does not contain it?",
        id: 2,
        points: 5,
        negativePoint: 2,
        options: [
          { text: "Broccoli", isRight: false },
          { text: "Nuts", isRight: false },
          { text: "Wholewheat Pasta", isRight: false },
          { text: "Cheese", isRight: true },
        ],
      },
      {
        question:
          "Meat, fish, beans and eggs are good sources of protein. Why do you need protein?",
        id: 3,
        points: 5,
        negativePoint: 2,
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
        question: "If you eat meat, what's the least healthy way to cook it?",
        id: 4,
        points: 5,
        negativePoint: 2,
        options: [
          {
            text: "Grill",
            isRight: false,
          },
          { text: "Bake", isRight: false },
          { text: "Fry", isRight: true },
          { text: "Roast", isRight: false },
        ],
      },
      {
        question: "Which of the following is NOT a fruit?",
        id: 5,
        points: 5,
        negativePoint: 2,
        options: [
          {
            text: "Apple",
            isRight: false,
          },
          { text: "Radish", isRight: true },
          { text: "Pineapple", isRight: false },
          { text: "Avocado", isRight: false },
        ],
      },
      {
        question:
          "Oranges, limes, lemons and grapefruit are all what type of fruit?",
        id: 6,
        points: 5,
        negativePoint: 2,
        options: [
          {
            text: "Exotic",
            isRight: false,
          },
          { text: "Stone fruit", isRight: false },
          { text: "Citrus", isRight: true },
          { text: "Berries", isRight: false },
        ],
      },
      {
        question: "What is the national fruit of both India and Pakistan?",
        id: 7,
        points: 5,
        negativePoint: 2,
        options: [
          {
            text: "Papaya",
            isRight: false,
          },
          { text: "Elderberry", isRight: false },
          { text: "Pineapple", isRight: false },
          { text: "Mango", isRight: true },
        ],
      },
      {
        question: "Bananas are 75% water.",
        id: 8,
        points: 5,
        negativePoint: 2,
        options: [
          {
            text: "True",
            isRight: true,
          },
          { text: "False", isRight: false },
        ],
      },
    ],
  },
];

export { quiz };
