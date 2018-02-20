require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/api/schema.js":
/***/ (function(module, exports, __webpack_require__) {

var graphql = __webpack_require__("graphql");
var _ = __webpack_require__("lodash");

var GraphQLObjectType = graphql.GraphQLObjectType,
    GraphQLString = graphql.GraphQLString,
    GraphQLInt = graphql.GraphQLInt,
    GraphQLSchema = graphql.GraphQLSchema;


var users = [{
  id: "23",
  firstName: "Bill",
  age: 20
}, {
  id: "47",
  firstName: "Samantha",
  age: 21
}];

var UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: {
      type: GraphQLString
    },
    firstName: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    }
  }
});

var RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve: function resolve(parentValue, args) {
        return _.find(users, {
          id: args.id
        });
      }
    }
  }
});

/***/ })

};
//# sourceMappingURL=0.15015f53575e070c8713.hot-update.js.map