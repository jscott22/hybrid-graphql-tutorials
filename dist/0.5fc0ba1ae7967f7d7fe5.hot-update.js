require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/api/graphQLRouter.js":
false,

/***/ "./src/api/graphQl.js":
/***/ (function(module, exports) {

// import { makeExecutableSchema } from "graphql-tools";
// import { userType, userResolvers } from "./resources/users/user.graphQLRouter";
// import merge from "lodash/merge";
// import { graphqlExpress } from "apollo-server-express";

// export const schema = makeExecutableSchema({
//   typeDefs: [userType],
//   resolvers: merge({}, userResolvers)
// });

/***/ }),

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express_graphql__ = __webpack_require__("express-graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_graphQl__ = __webpack_require__("./src/api/graphQl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_graphQl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__api_graphQl__);




var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.use("/graphql", __WEBPACK_IMPORTED_MODULE_1_express_graphql___default()({
  schema: __WEBPACK_IMPORTED_MODULE_2__api_graphQl__["schema"],
  graphiql: true
}));

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ })

};
//# sourceMappingURL=0.5fc0ba1ae7967f7d7fe5.hot-update.js.map