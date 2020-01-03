"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _home = _interopRequireDefault(require("./views/home"));

var _about = _interopRequireDefault(require("./views/about"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class App extends _react.default.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      page: this.props.page
    });

    _defineProperty(this, "onChangePage", e => {
      const page = e.target.dataset.page;
      window.history.pushState(page, '', `/${page}`);
      this.setState({
        page
      });
    });
  }

  componentDidMount() {
    window.onpopstate = event => {
      this.setState({
        page: event.state
      });
    };
  }

  render() {
    const {
      page
    } = this.state;
    const PageComponent = page === 'home' ? _home.default : _about.default;
    return _react.default.createElement("div", {
      className: "container"
    }, _react.default.createElement("button", {
      "data-page": "home",
      onClick: this.onChangePage
    }, "Home"), _react.default.createElement("button", {
      "data-page": "about",
      onClick: this.onChangePage
    }, "About"), _react.default.createElement(PageComponent, null));
  }

}

var _default = App;
exports.default = _default;