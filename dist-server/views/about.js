"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = About;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function About() {
  return _react.default.createElement("div", {
    className: "about"
  }, _react.default.createElement("div", {
    className: "about__name"
  }, "\uC774\uAC74 \uC81C \uAE43\uD5D9\uC8FC\uC18C\uC785\uB2C8\uB2E4", _react.default.createElement("div", {
    className: "about_tell"
  }, _react.default.createElement("input", {
    placeholder: "\uC5F0\uB77D\uCC98\uB97C \uC801\uC5B4\uC8FC\uC138\uC694"
  }))), _react.default.createElement("div", {
    className: "about__github"
  }, _react.default.createElement("a", {
    href: "https://github.com/MaxKim-J"
  }, "\uAE43\uD5D9 \uC8FC\uC18C\uB85C \uAC00\uAE30!")));
}