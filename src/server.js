import express from "express";
import expressGraphQl from "express-graphql";
import { express as middleware } from "graphql-voyager/middleware";
import { schema } from "./api/schema";

const app = express();

app.use(
  "/graphql",
  expressGraphQl({
    schema,
    graphiql: true
  })
);

app.use("/voyager", middleware({ endpointUrl: "/graphql" }));

export default app;
