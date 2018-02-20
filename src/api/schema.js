import { makeExecutableSchema } from "graphql-tools";
import baseType from "./baseTypeDef.graphql";
import { userType, userResolvers } from "./resources/users";
import { companyType, companyResolvers } from "./resources/companies";
import merge from "lodash/merge";

export const schema = makeExecutableSchema({
  typeDefs: [baseType, userType, companyType],
  resolvers: merge({}, userResolvers, companyResolvers)
});
