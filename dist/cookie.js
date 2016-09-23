"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cookie = function Cookie(superclass) {
  return function (_superclass) {
    _inherits(_class, _superclass);

    function _class() {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

      _this.cookie = {
        get: function get(sKey) {
          if (!sKey) {
            return null;
          }

          var cookie = document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1") || null;

          if (cookie) {
            try {
              cookie = decodeURIComponent(cookie);
            } catch (e) {
              cookie = decodeURIComponent(unescape(cookie));
            }
          }

          return cookie;
        },
        set: function set(sKey, sValue) {
          var vEnd = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
          var sPath = arguments.length <= 3 || arguments[3] === undefined ? '/' : arguments[3];
          var sDomain = arguments[4];
          var bSecure = arguments[5];

          if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
          }
          var sExpires = "";

          if (vEnd) {
            switch (vEnd.constructor) {
              case Number:
                sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd * 60 * 60 * 24;
                break;
              case String:
                sExpires = "; expires=" + vEnd;
                break;
              case Date:
                sExpires = "; expires=" + vEnd.toUTCString();
                break;
            }
          }

          document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
          return true;
        },
        remove: function remove(sKey) {
          var sPath = arguments.length <= 1 || arguments[1] === undefined ? '/' : arguments[1];
          var sDomain = arguments[2];

          if (!this.has(sKey)) {
            return false;
          }
          document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
          return true;
        },
        has: function has(sKey) {
          if (!sKey) {
            return false;
          }
          return new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
        },
        keys: function keys() {
          var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
          for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
            aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
          }
          return aKeys;
        }
      };
      return _this;
    }

    return _class;
  }(superclass);
};