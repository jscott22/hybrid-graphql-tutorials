require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/api/graphQLRouter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return schema; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tools__ = __webpack_require__("graphql-tools");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources_users_user_graphQLRouter__ = __webpack_require__("./src/api/resources/users/user.graphQLRouter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_merge__ = __webpack_require__("lodash/merge");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_server_express__ = __webpack_require__("apollo-server-express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_server_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_apollo_server_express__);





var schema = Object(__WEBPACK_IMPORTED_MODULE_0_graphql_tools__["makeExecutableSchema"])({
  typeDefs: [baseSchema, __WEBPACK_IMPORTED_MODULE_1__resources_users_user_graphQLRouter__["b" /* userType */]],
  resolvers: __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default()({}, __WEBPACK_IMPORTED_MODULE_1__resources_users_user_graphQLRouter__["a" /* userResolvers */])
});

// export const graphQLRouter = graphqlExpress(req => ({
//   schema,
//   context: {
//     req
//   }
// }));

/***/ }),

/***/ "apollo-server-express":
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ })

};
//# sourceMappingURL=0.7ff12de72f20a7f01532.hot-update.js.map