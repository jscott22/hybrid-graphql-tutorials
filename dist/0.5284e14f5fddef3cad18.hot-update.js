require("source-map-support").install();
exports.id = 0;
exports.modules = {

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

var user = function user(parentValue, args) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash__["find"](users, {
    id: args.id
  });
};

var userResolvers = {
  Query: {
    user: user
  }
};

/***/ })

};
//# sourceMappingURL=0.5284e14f5fddef3cad18.hot-update.js.map