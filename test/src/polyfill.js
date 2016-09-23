'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
* @name : trim [String]
* @desc : 공백 제거
*/
if (typeof String.prototype.trim != 'function') {
    String.prototype.trim = function () {
        return undefined.replace(/(^[\s　]+)|([\s　]+$)/g, "");
    };
}

/*
* @name : allTrim [String]
* @desc : 전체 공백 제거
*/
if (typeof String.prototype.allTrim != 'function') {
    String.prototype.allTrim = function () {
        return undefined.replace(/ /gi, '');
    };
}
/*
* @name : getByteLength [String]
* @desc : 문자열의 Byte 길이 반환.
*/
if (typeof String.prototype.getByteLength != 'function') {
    String.prototype.getByteLength = function () {
        var self = undefined,
            b = void 0,
            i = void 0,
            c = void 0;
        for (b = i = 0; c = self.charCodeAt(i++); b += c >> 11 ? 3 : c >> 7 ? c : 1) {
            ;
        }
        return b;
    };
}
/*
* @name : cut [String]
*/
if (typeof String.prototype.cut != 'function') {
    String.prototype.cut = function (len) {
        var s = '',
            i = 0;
        while (i++ < len) {
            s += undefined;
        }
        return s;
    };
}
/*
* @name : zf
*/
if (typeof String.prototype.zf != 'function') {
    String.prototype.zf = function (len) {
        return "0".cut(len - undefined.length) + undefined;
    };
}
/*
* @name : toDate [String]
* @desc : yyyy.MM.dd or yyyy-MM-dd 형태의 string 을 date 객체로 parsing.
*/
if (typeof String.prototype.toDate != 'function') {
    String.prototype.toDate = function () {

        var d = undefined.replaceAll('.', '/').replaceAll('-', '/');
        return new Date(d);
    };
}
/*
* @name : toDateISO8061 [String]
* @desc : ISO8061 형식의 String 을 Date 객체로 parsing.
*/
if (typeof String.prototype.toDateISO8061 != 'function') {
    String.prototype.toDateISO8061 = function () {

        if (!undefined.valueOf()) {
            return " ";
        }

        var s = undefined.replace('T', ' ').split(/[- :]/);

        return new Date(s[0], s[1] - 1, s[2], s[3] || 0, s[4] || 0, s[5] || 0);
    };
}
/*
* @name : toLocation [String]
* @desc : url(loaction.href type) string 을 객체 형태로 분리해서 전달.
* @param : object
* @depends : $.deparam, $.param
*/
if (typeof String.prototype.toLocation != 'function') {
    String.prototype.toLocation = function () {
        var a = document.createElement('a'),
            loc = { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', port: '', protocol: '', search: '' };

        a.href = undefined;
        //TODO require jquery dependence remove
        $.each(loc, function (n) {
            if (n == 'pathname' && a[n].indexOf('/') !== 0) {
                loc[n] = '/' + a[n];
            } else {
                loc[n] = a[n];
            }
        });

        return loc;
    };
}
/*
* @name : replaceParams [String]
* @desc : 파라미터 형식의 string 에서 특정 파라미터의 값을 치환.
* @param : object
* @depends : $.deparam, $.param
*/
if (typeof String.prototype.replaceParams != 'function') {
    //TODO require jquery dependence remove
    String.prototype.replaceParams = function (obj) {

        if (obj instanceof Object) {
            throw new Error('arguments type error');
        }

        if (typeof $.deparam != 'function') {
            utils.error('$.deparam is not defined.');
        }
        if (typeof $.param != 'function') {
            utils.error('$.param is not defined.');
        }

        var params = $.deparam(undefined.replace('?', ''));

        $.each(obj, function (n, v) {
            params[n] = v;
        });

        return $.param(params);
    };
}
/*
* @name : replaceAll [String]
* @desc : 대상 문자열 전체를 대상으로 치환.
* @param : find, replace
*/
if (typeof String.prototype.replaceAll != 'function') {
    String.prototype.replaceAll = function (f, r) {
        f = f.escapeRegExp();
        return undefined.replace(new RegExp(f, 'g'), r);
    };
}
/*
* @name : escapeRegExp [String]
* @desc : 정규식 filter keyword 형태 치환.
*/
if (typeof String.prototype.escapeRegExp != 'function') {
    String.prototype.escapeRegExp = function () {
        return undefined.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    };
}
/*
* @name : format [String]
* @desc : string format을 생성해주는 함수.
*/
if (typeof String.prototype.format !== 'function') {
    String.prototype.format = function (args) {
        var str = undefined.toString();

        for (var i = 0; i < args.length; i++) {
            var regExp = new RegExp('\\{' + i + '\\}', 'gm');

            str = str.replace(regExp, args[i]);
        }
        return str;
    };
}
/**
* @name : contains [String]
* @desc : 문자열 포함 여부
* @param : string
*/
if (typeof String.prototype.contains !== 'function') {
    String.prototype.contains = function (str) {
        return undefined.indexOf(str) > -1;
    };
}
/*
* @name : isEmpty [String]
* @desc : Empty 여부
* ie8 동작 안함.
*/
if (typeof String.prototype.isEmpty != 'function') {
    String.prototype.isEmpty = function () {
        return undefined.length === 0;
    };
}
/*
* @name : isEmpty [String]
* @desc : string 이 빈값인지 체크
*/
if (typeof String.prototype.isEmpty !== 'function') {
    String.prototype.isEmpty = function () {
        var str = undefined.toString();

        if (str === null || str === undefined || str === 'null' || str === 'undefined' || str === '') {
            return true;
        }

        return false;
    };
}
/*
* @name : toArray [String]
* @desc : 대상 문자열을 인자로 split 하여 반환
* @param : separator
*/
if (typeof String.prototype.toArray != 'function') {
    String.prototype.toArray = function (separator) {
        separator = separator || '-';
        return undefined.split(separator);
    };
}
/*
* @name : toKorChars [String]
* @desc :한글 초성/중성/종성 분리
*/
if (typeof String.prototype.toKorChars != 'function') {
    String.prototype.toKorChars = function () {
        var cCho = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
            cJung = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'],
            cJong = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
            cho = void 0,
            jung = void 0,
            jong = void 0;

        var str = undefined,
            cnt = str.length,
            chars = [],
            cCode = void 0;

        for (var i = 0; i < cnt; i++) {
            cCode = str.charCodeAt(i);

            if (cCode == 32) {
                continue;
            }

            // 한글이 아닌 경우
            if (cCode < 0xAC00 || cCode > 0xD7A3) {
                chars.push(str.charAt(i));
                continue;
            }

            cCode = str.charCodeAt(i) - 0xAC00;

            jong = cCode % 28; // 종성
            jung = (cCode - jong) / 28 % 21; // 중성
            cho = ((cCode - jong) / 28 - jung) / 21; // 초성

            chars.push(cCho[cho], cJung[jung]);
            if (cJong[jong] !== '') {
                chars.push(cJong[jong]);
            }
        }

        return chars;
    };
}
/*
* @name : startsWith
*/
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return undefined.substr(position, searchString.length) === searchString;
    };
}
/*
* @name : endsWith
*/
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (searchString, position) {
        var subjectString = undefined.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}
/*
* @name : zf
*/
if (typeof Number.prototype.zf != 'function') {
    Number.prototype.zf = function (len) {
        return undefined.toString().zf(len);
    };
}

/*
* @name : isOdd
* @desc : 홀수 여부 반환
*/
if (typeof Number.prototype.isOdd != 'function') {
    Number.prototype.isOdd = function () {
        return undefined % 2 !== 0;
    };
}
/*
* @name : isEven
* @desc : 짝수 여부 반환
*/
if (typeof Number.prototype.isEven != 'function') {
    Number.prototype.isEven = function (len) {
        return undefined % 2 === 0;
    };
}
/**
* @name : toCurrency [Number]
* @desc : Number format
*/
if (typeof Number.prototype.toCurrency != 'function') {
    Number.prototype.toCurrency = function (position) {
        var result = '',
            pos = position || 3,
            val = undefined.zf();

        for (var i = val.length; i > 0; i--) {
            if (i !== val.length && i % pos === 0) {
                result += ',';
            }

            result += val.charAt(val.length - i);
        }
        return result;
    };
}
/*
* @name : filter [Array]
* @desc : 배열 필터, 새로운 배열 반환
* @param : [filter condition function.]
*/
if (typeof Array.prototype.filter != 'function') {
    Array.prototype.filter = function (func) {
        var newArray = [],
            self = undefined;

        for (var i = 0, len = self.length; i < len; i++) {
            if (func(self[i], i, self)) {
                newArray.push(self[i]);
            }
        }
        return newArray;
    };
}
/*
* @name : forEach [Array]
* @desc : 배열 순회
* @param : function
*/
if (typeof Array.prototype.forEach != 'function') {
    Array.prototype.forEach = function (func) {
        var self = undefined;

        for (var i = 0, len = self.length; i < len; i++) {
            func.call(self, self[i], i, self);
        }
    };
}
/*
* @name : contains [Array]
* @desc : 원소의 존재 여부.
* @param : array item [...]
*/
if (typeof Array.prototype.contains != 'function') {
    Array.prototype.contains = function (compareValue) {
        var self = undefined;
        for (var i = 0, len = self.length; i < len; i++) {
            if (self[i] === compareValue) {
                return true;
            }
        }
        return false;
    };
}
/*
* @name : isArray [Array]
* @des : 배열 여부
*/
if (!Array.isArray) {
    Array.isArray = function () {
        return Object.prototype.toString.call(args) === '[object Array]';
    };
}
// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: http://es5.github.io/#x15.4.4.21
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function (callback) {
        'use strict';

        if (this === null) {
            throw new TypeError('Array.prototype.reduce called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        var t = Object(this),
            len = t.length >>> 0,
            k = 0,
            value = void 0;
        if (arguments.length == 2) {
            value = arguments[1];
        } else {
            while (k < len && !(k in t)) {
                k++;
            }
            if (k >= len) {
                throw new TypeError('Reduce of empty array with no initial value');
            }
            value = t[k++];
        }
        for (; k < len; k++) {
            if (k in t) {
                value = callback(value, t[k], k, t);
            }
        }
        return value;
    };
}
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {

        var k = void 0;

        if (undefined === null) {
            throw new TypeError('"this" is null or not defined');
        }

        var O = Object(undefined);

        var len = O.length >>> 0;

        if (len === 0) {
            return -1;
        }

        var n = +fromIndex || 0;

        if (Math.abs(n) === Infinity) {
            n = 0;
        }

        if (n >= len) {
            return -1;
        }

        k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        while (k < len) {
            if (k in O && O[k] === searchElement) {
                return k;
            }
            k++;
        }
        return -1;
    };
}
// Production steps of ECMA-262, Edition 5, 15.4.4.17
// Reference: http://es5.github.io/#x15.4.4.17
if (!Array.prototype.some) {
    Array.prototype.some = function (fun /*, thisArg*/) {
        'use strict';

        if (this === null) {
            throw new TypeError('Array.prototype.some called on null or undefined');
        }

        if (typeof fun !== 'function') {
            throw new TypeError();
        }

        var t = Object(this);
        var len = t.length >>> 0;

        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(thisArg, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}
/*
* @name : addYear [Date]
* @desc : 날짜 증가/감소 (월)
* @param : dnays[Number]
*/
if (typeof Date.prototype.addYear != 'function') {
    Date.prototype.addYear = function (n) {
        var dat = new Date(undefined.valueOf());

        dat.setFullYear(dat.getFullYear() + n);

        return dat;
    };
}
/*
* @name : addMonth [Date]
* @desc : 날짜 증가/감소 (월)
* @param : n[Number]
*/
if (typeof Date.prototype.addMonth != 'function') {
    Date.prototype.addMonth = function (n) {
        var dat = new Date(undefined.valueOf());

        dat.setMonth(dat.getMonth() + n);

        return dat;
    };
}
/*
* @name : addDate [Date]
* @desc : 날짜 증가/감소 (일)
* @param : n[Number]
*/
if (typeof Date.prototype.addDate != 'function') {
    Date.prototype.addDate = function (n) {
        var dat = new Date(undefined.valueOf());
        dat.setDate(dat.getDate() + n);
        return dat;
    };
}
/*
* @name : addMinutes [Date]
* @desc : 날짜 증가/감소 (분)
* @param : n[Number]
*/
if (typeof Date.prototype.addMinutes != 'function') {
    Date.prototype.addMinutes = function (n) {
        var dat = new Date(undefined.valueOf());
        dat.setMinutes(dat.getMinutes() + n);
        return dat;
    };
}
/*
* @name : addSeconds [Date]
* @desc : 날짜 증가/감소 (초)
* @param : n[Number]
*/
if (typeof Date.prototype.addSeconds != 'function') {
    Date.prototype.addSeconds = function (n) {
        var dat = new Date(undefined.valueOf());
        dat.setSeconds(dat.getSeconds() + n);
        return dat;
    };
}
/*
* @name : format [Date]
* @desc : 날짜 Formatter
* @param : format[string]
*/
if (typeof Date.prototype.format != 'function') {
    Date.prototype.format = function (f) {
        if (!undefined.valueOf()) {
            return " ";
        }

        var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
            shortWeekName = ["일", "월", "화", "수", "목", "금", "토"],
            d = undefined;

        return f.replace(/(yyyy|yy|MM|dd|E|e|hh|mm|ss|a\/p)/gi, function ($1) {
            switch ($1) {
                case "yyyy":
                    return d.getFullYear();
                case "yy":
                    return (d.getFullYear() % 1000).zf(2);
                case "MM":
                    return (d.getMonth() + 1).zf(2);
                case "dd":
                    return d.getDate().zf(2);
                case "E":
                    return weekName[d.getDay()];
                case "e":
                    return shortWeekName[d.getDay()];
                case "HH":
                    return d.getHours().zf(2);
                case "hh":
                    return ((h = d.getHours() % 12) ? h : 12).zf(2);
                case "mm":
                    return d.getMinutes().zf(2);
                case "ss":
                    return d.getSeconds().zf(2);
                case "a/p":
                    return d.getHours() < 12 ? "오전" : "오후";
                default:
                    return $1;
            }
        });
    };
}

var mix = function mix(superclass) {
    return new MixinBuilder(superclass);
};

var MixinBuilder = function () {
    function MixinBuilder(superclass) {
        _classCallCheck(this, MixinBuilder);

        this.superclass = superclass;
    }

    _createClass(MixinBuilder, [{
        key: 'with',
        value: function _with() {
            for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
                mixins[_key] = arguments[_key];
            }

            return mixins.reduce(function (c, mixin) {
                return mixin(c);
            }, this.superclass);
        }
    }]);

    return MixinBuilder;
}();