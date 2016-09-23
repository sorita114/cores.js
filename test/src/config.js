'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Config = function Config(superclass) {
  return function (_superclass) {
    _inherits(_class, _superclass);

    function _class() {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

      _this.config = function () {
        var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
        var value = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

        var isExist = function isExist(prop) {
          return _this._defaults.hasOwnProperty(prop);
        };

        var _get = function _get(k) {
          if (k === '') {
            return _this._defaults;
          }
          return _this._defaults[k].value;
        };

        var _set = function _set(k, v) {
          if (isExist(k)) {
            var obj = _this._defaults[k];

            if (obj.editable) {
              obj = {
                value: v,
                editable: false
              };
            }
          } else {
            _this._defaults[k] = {
              editable: false,
              value: v
            };
          }
        };

        var _setObject = function _setObject(obj) {
          for (var i in obj) {
            var isE = isExist(i),
                _value = obj[i],
                editable = false;

            if (isE && _this._defaults[i].editable || !isE) {
              _this._defaults[i] = {
                value: _value,
                editable: editable
              };
            }
          }
        };

        if (value === '') {
          if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
            _setObject(key);
          } else {
            return _get(key);
          }
        } else {
          _set(key, value);
        }
      };
      return _this;
    }

    return _class;
  }(superclass);
};