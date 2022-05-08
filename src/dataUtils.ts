import { magicEightBallResponses } from "./data";

export const answerMagicEightBallQuestion = () => {
  const randomIndex = () => {
    return Math.floor(Math.random() * 19);
  };

  return { answer: magicEightBallResponses[randomIndex()] };
};

export const answerHoroscopeQuestion = () => {
  return;
};

export const answerFortuneQuestion = () => {
  return;
};
