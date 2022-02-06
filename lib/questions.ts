export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [
  {
    questionText: "What is an anti-library?",
    image:
      "https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    answers: [
      "Trick question: silly white swan!",
      "A shelf full of unread books",
      "A book store in Antioch, CA, USA",
      "A shelf full of nihlistic books",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "What is a reverse turkey?",
    image:
      "https://images.unsplash.com/photo-1594048797012-a7c0beb1ea2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2323&q=80",
    answers: [
      "A turkey walking backwards",
      "A person exposed to a major blow-up",
      "A person prepared for major events",
      "A turkey pardoned on Thanksgiving",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "What is fundamental black swan logic?",
    image:
      "https://images.unsplash.com/photo-1566537230793-00565001d0a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2273&q=80",
    answers: [
      "What you don't know is more relevant than what you do know",
      "Maximize your exposure to the known",
      "Collect as many white swan opportunities as you can",
      "The bell curve is a beautiful representation of reality",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "What profession would be considered randomness-laden and would most likely cause burnout?",
    image:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    answers: ["Accountant", "Doctor", "Librarian", "Landscaper"],
    correctAnswerIndex: 1,
  },
  {
    questionText: "What swan color is considered an outlier?",
    image:
      "https://images.unsplash.com/photo-1568274179323-00ae07c3e653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    answers: ["White", "Grey", "Rainbow", "Black"],
    correctAnswerIndex: 3,
  },
];

export default quizQuestions;
