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

getUser = function getUser(parentValue, args) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash__["find"](users, {
    id: args.id
  });
};

var userResolvers = {
  Query: {},
  Mutation: {},
  User: {}
};

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })

};
//# sourceMappingURL=0.6c7eb30abe2fd2a25b23.hot-update.js.map