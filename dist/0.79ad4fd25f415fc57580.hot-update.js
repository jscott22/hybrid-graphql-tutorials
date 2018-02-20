require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/api/resources/users/user.graphql":
/***/ (function(module, exports) {

module.exports = "type User {\n  id: ID!\n  firstName: String!\n  age: Int!\n}\n\ninput UpdatedUser {\n  id: ID!\n  firstName: String\n  age: Int\n}\n\ntype Query {\n  user: User!\n}\n\ntype Mutation {\n  updateUser(input: UpdatedUser!): User!\n}\n"

/***/ })

};
//# sourceMappingURL=0.79ad4fd25f415fc57580.hot-update.js.map