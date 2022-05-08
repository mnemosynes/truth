import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema-sdl";
import { roots } from "./roots";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: roots,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
