import * as _ from "lodash";

const users = [
  {
    id: "23",
    firstName: "Bill",
    age: 20
  },
  {
    id: "47",
    firstName: "Samantha",
    age: 21
  }
];

const user = (parentValue, args) => {
  return _.find(users, {
    id: args.id
  });
};

export const userResolvers = {
  Query: {
    user
  }
};
