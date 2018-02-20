// @flow
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';
import baseType from './baseTypeDef.graphql';
import { userType, userResolvers } from './resources/users';
import { companyType, companyResolvers } from './resources/companies';

export default makeExecutableSchema({
  typeDefs: [baseType, userType, companyType],
  resolvers: merge({}, userResolvers, companyResolvers),
});
