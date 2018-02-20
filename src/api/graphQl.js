import { makeExecutableSchema } from "graphql-tools";
import { userType, userResolvers } from "./resources/users";
import merge from "lodash/merge";
import { graphqlExpress } from "apollo-server-express";

export const schema = makeExecutableSchema({
  typeDefs: [userType],
  resolvers: merge({}, userResolvers)
});
