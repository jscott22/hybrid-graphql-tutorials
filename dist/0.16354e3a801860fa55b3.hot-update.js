require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/api/graphQl.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return schema; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tools__ = __webpack_require__("graphql-tools");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources_users__ = __webpack_require__("./src/api/resources/users/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_merge__ = __webpack_require__("lodash/merge");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_server_express__ = __webpack_require__("apollo-server-express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_server_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_apollo_server_express__);





var schema = Object(__WEBPACK_IMPORTED_MODULE_0_graphql_tools__["makeExecutableSchema"])({
  typeDefs: [__WEBPACK_IMPORTED_MODULE_1__resources_users__["b" /* userType */]],
  resolvers: __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default()({}, __WEBPACK_IMPORTED_MODULE_1__resources_users__["a" /* userResolvers */])
});

/***/ }),

/***/ "./src/api/resources/users/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return userType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__typeDefs_graphql__ = __webpack_require__("./src/api/resources/users/typeDefs.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__typeDefs_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__typeDefs_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resolvers__ = __webpack_require__("./src/api/resources/users/resolvers.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__resolvers__["a"]; });

var userType = __WEBPACK_IMPORTED_MODULE_0__typeDefs_graphql__;


/***/ }),

/***/ "./src/api/resources/users/resolvers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userResolvers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);


var users = [{
  id: "23",
  firstName: "Bill",
  age: 20
}, {
  id: "47",
  firstName: "Samantha",
  age: 21
}];

user = function user(parentValue, args) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash__["find"](users, {
    id: args.id
  });
};

var userResolvers = {
  Query: {
    user: user
  }
};

/***/ }),

/***/ "./src/api/resources/users/typeDefs.graphql":
/***/ (function(module, exports) {

module.exports = "type User {\n  id: ID!\n  firstName: String!\n  age: Int!\n}\n\ntype Query {\n  user: User!\n}\n\nschema {\n  query: Query\n}\n"

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




var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.use("/graphql", __WEBPACK_IMPORTED_MODULE_1_express_graphql___default()({
  schema: __WEBPACK_IMPORTED_MODULE_2__api_graphQl__["a" /* schema */],
  graphiql: true
}));

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "apollo-server-express":
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "graphql-tools":
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "lodash/merge":
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ })

};
//# sourceMappingURL=0.16354e3a801860fa55b3.hot-update.js.map