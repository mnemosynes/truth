import { QuestionInterface } from "./typescriptTypes";
import { magicEightBallResponses } from "./data";

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

const answerMagicEightBallQuestion = () => {
  const randomIndex = () => {
    return Math.floor(Math.random() * 19);
  };

  return { answer: magicEightBallResponses[randomIndex()] };
};

const answerHoroscopeQuestion = () => {
  return;
};

const answerFortuneQuestion = () => {
  return;
};
