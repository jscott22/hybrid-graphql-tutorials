require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/api/resources/users/user.resolvers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userResolvers; });
getUser = function getUser(parentValue, args) {
  return _.find(users, {
    id: args.id
  });
};

var userResolvers = {
  Query: {},
  Mutation: {},
  User: {}
};

/***/ })

};
//# sourceMappingURL=0.a35ae35a9ca01f0f7eeb.hot-update.js.map