import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

import { askQuestionUtil } from "./resolverUtils";

const questionType = new GraphQLInputObjectType({
  name: "Question",
  description: "A question will lead you towards an answer - not happiness.",
  fields: {
    style: {
      type: GraphQLString,
      description: "Fate does not have a style preference.",
    },
    askedBy: {
      type: GraphQLString,
      description: "The one seeking answers",
    },
    questionAsked: {
      type: GraphQLString,
      description: "Choose your words wisely.",
    },
  },
});

const responseType = new GraphQLObjectType({
  name: "response",
  fields: {
    answer: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

const queryType = new GraphQLObjectType({
  name: "Query",
  description: "this is the query type",
  fields: {
    askQuestion: {
      type: GraphQLNonNull(responseType),
      args: {
        question: { type: questionType },
      },
      resolve: (_, { question }) => {
        return askQuestionUtil(question);
      },
    },
  },
});

export const schema = new GraphQLSchema({ query: queryType });
