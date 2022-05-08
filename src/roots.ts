import { QuestionInterface } from "./typescriptTypes";
import { askQuestionUtil } from "./resolverUtils";

export const roots = {
  askQuestion: (question: { question: QuestionInterface }) => {
    console.log(question, "?????");
    const result = askQuestionUtil(question);
    console.log("askQuestionUtil: ", result);

    return result;
  },
};
