import express from "express";
import expressGraphQl from "express-graphql";
import { schema } from "./api/graphQl";

const app = express();

app.use(
  "/graphql",
  expressGraphQl({
    schema,
    graphiql: true
  })
);

export default app;
