import { buildSchema } from "graphql";

export const schema = buildSchema(`

  input Question {
    style: String
    askedBy: String
    questionAsked: String
  }

  type Response {
    answer: String!
  }

  type Query {
    askQuestion(question: Question): Response
  }
`);
