'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Utils = function (_mix$with) {
  _inherits(Utils, _mix$with);

  function Utils(obj) {
    _classCallCheck(this, Utils);

    var _this = _possibleConstructorReturn(this, (Utils.__proto__ || Object.getPrototypeOf(Utils)).call(this));

    if (obj !== undefined && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.length === undefined) {
      for (var i in obj) {
        _this._defaults[i] = {
          value: obj[i],
          editable: false
        };
      }
    }
    return _this;
  }

  return Utils;
}(mix(Defaults).with(Config, Log, Cookie));