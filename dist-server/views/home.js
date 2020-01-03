"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
  return _react.default.createElement("div", {
    className: "home"
  }, _react.default.createElement("div", {
    className: "home__name"
  }, "\uC800\uB294 \uAE40\uC885\uD601\uC785\uB2C8\uB2E4"), _react.default.createElement("div", {
    className: "home__age"
  }, "\uB098\uC774\uB294 \uC2A4\uBB3C\uB2E4\uC12F\uC0B4\uC785\uB2C8\uB2E4"));
}