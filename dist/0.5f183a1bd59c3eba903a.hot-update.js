require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/api/resources/users/user.resolvers.js":
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
  },
  Mutation: {},
  User: {}
};

/***/ })

};
//# sourceMappingURL=0.5f183a1bd59c3eba903a.hot-update.js.map