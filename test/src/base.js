'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Defaults = function Defaults(obj) {
  _classCallCheck(this, Defaults);

  this._defaults = {
    useLog: { 'editable': false, 'value': true },
    root: { 'editabe': false, 'value': '/' }
  };
};