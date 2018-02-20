require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/api/graphQLRouter.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
// import { makeExecutableSchema } from "graphql-tools";
// import { userType, userResolvers } from "./resources/users/user.graphQLRouter";
// import merge from "lodash/merge";
// import { graphqlExpress } from "apollo-server-express";

// export const schema = makeExecutableSchema({
//   typeDefs: [userType],
//   resolvers: merge({}, userResolvers)
// });

/***/ }),

/***/ "./src/api/resources/users/typeDefs.graphql":
false,

/***/ "./src/api/resources/users/user.graphQLRouter.js":
false,

/***/ "./src/api/resources/users/user.resolvers.js":
false,

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express_graphql__ = __webpack_require__("express-graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_graphQLRouter__ = __webpack_require__("./src/api/graphQLRouter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_graphQLRouter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__api_graphQLRouter__);




var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.use("/graphql", __WEBPACK_IMPORTED_MODULE_1_express_graphql___default()({
  schema: __WEBPACK_IMPORTED_MODULE_2__api_graphQLRouter__["schema"],
  graphiql: true
}));

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "apollo-server-express":
false,

/***/ "graphql-tools":
false,

/***/ "lodash":
false,

/***/ "lodash/merge":
false

};
//# sourceMappingURL=0.21e564ed108289eb1e4a.hot-update.js.map