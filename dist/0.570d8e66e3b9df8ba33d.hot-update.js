require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/api/resources/users/typeDefs.graphql":
/***/ (function(module, exports) {

module.exports = "type User {\n  id: ID!\n  firstName: String!\n  age: Int!\n}\n\ntype Query {\n  user: User!\n}\n\nschema {\n  query: Query\n}\n"

/***/ }),

/***/ "./src/api/resources/users/user.graphQLRouter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__typeDefs_graphql__ = __webpack_require__("./src/api/resources/users/typeDefs.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__typeDefs_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__typeDefs_graphql__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__typeDefs_graphql__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_resolvers__ = __webpack_require__("./src/api/resources/users/user.resolvers.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__user_resolvers__["a"]; });





/***/ }),

/***/ "./src/api/resources/users/user.graphql":
false

};
//# sourceMappingURL=0.570d8e66e3b9df8ba33d.hot-update.js.map