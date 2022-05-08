import {
  answerMagicEightBallQuestion,
  answerHoroscopeQuestion,
  answerFortuneQuestion,
} from "./dataUtils";
import { QuestionInterface } from "./typescriptTypes";

export const roots = {
  askQuestion: (question: { question: QuestionInterface }) => {
    return askQuestionUtil(question);
  },
};

export const askQuestionUtil = ({
  question,
}: {
  question: QuestionInterface;
}) => {
  switch (question.style) {
    case "MAGIC_EIGHT_BALL":
      return answerMagicEightBallQuestion();
    case "HOROSCOPE":
      return answerHoroscopeQuestion();
    case "FORTUNE":
      return answerFortuneQuestion();
    default:
      return "nada";
  }
};
