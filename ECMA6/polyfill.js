/*
* @name : trim [String]
* @desc : 공백 제거
*/
if(typeof String.prototype.trim != 'function') {
    String.prototype.trim = () => {
        return this.replace(/(^[\s　]+)|([\s　]+$)/g, "");
    };
}

/*
* @name : allTrim [String]
* @desc : 전체 공백 제거
*/
if (typeof String.prototype.allTrim != 'function') {
    String.prototype.allTrim = () => {
        return this.replace(/ /gi, '');
    };
}
/*
* @name : getByteLength [String]
* @desc : 문자열의 Byte 길이 반환.
*/
if(typeof String.prototype.getByteLength != 'function') {
    String.prototype.getByteLength = () => {
        let self = this,
            b,
            i,
            c;
        for(b = i = 0; c = self.charCodeAt(i++); b += c >> 11 ? 3 : c >> 7 ? c : 1) {;
        }
        return b;
    };
}
/*
* @name : cut [String]
*/
if(typeof String.prototype.cut != 'function') {
    String.prototype.cut = (len) => {
        let s = '',
            i = 0;
        while(i++ < len) {
            s += this;
        }
        return s;
    };
}
/*
* @name : zf
*/
if(typeof String.prototype.zf != 'function') {
    String.prototype.zf = (len) => {
        return "0".cut(len - this.length) + this;
    };
}
/*
* @name : toDate [String]
* @desc : yyyy.MM.dd or yyyy-MM-dd 형태의 string 을 date 객체로 parsing.
*/
if(typeof String.prototype.toDate != 'function') {
    String.prototype.toDate = () => {

        var d = this.replaceAll('.', '/').replaceAll('-', '/');
        return new Date(d);
    };
}
/*
* @name : toDateISO8061 [String]
* @desc : ISO8061 형식의 String 을 Date 객체로 parsing.
*/
if(typeof String.prototype.toDateISO8061 != 'function') {
    String.prototype.toDateISO8061 = () => {

        if(!this.valueOf()) {
            return " ";
        }

        var s = this.replace('T', ' ').split(/[- :]/);

        return new Date(s[0], s[1] - 1, s[2], s[3] || 0, s[4] || 0, s[5] || 0);
    };
}
/*
* @name : toLocation [String]
* @desc : url(loaction.href type) string 을 객체 형태로 분리해서 전달.
* @param : object
* @depends : $.deparam, $.param
*/
if(typeof String.prototype.toLocation != 'function') {
    String.prototype.toLocation = () => {
        var a = document.createElement('a'),
            loc = {hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', port: '', protocol: '', search: ''};

        a.href = this;
        //TODO require jquery dependence remove
        $.each(loc, function(n) {
            if(n == 'pathname' && a[n].indexOf('/') !== 0) {
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
if(typeof String.prototype.replaceParams != 'function') {
  //TODO require jquery dependence remove
    String.prototype.replaceParams = (obj) => {

        if(obj instanceof Object) {
            throw new Error('arguments type error');
        }

        if(typeof $.deparam != 'function') {
            utils.error('$.deparam is not defined.');
        }
        if(typeof $.param != 'function') {
            utils.error('$.param is not defined.');
        }

        var params = $.deparam(this.replace('?', ''));

        $.each(obj, function(n, v) {
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
if(typeof String.prototype.replaceAll != 'function') {
    String.prototype.replaceAll = (f, r) => {
        f = f.escapeRegExp();
        return this.replace(new RegExp(f, 'g'), r);
    };
}
/*
* @name : escapeRegExp [String]
* @desc : 정규식 filter keyword 형태 치환.
*/
if(typeof String.prototype.escapeRegExp != 'function') {
    String.prototype.escapeRegExp = () => {
        return this.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    };
}
/*
* @name : format [String]
* @desc : string format을 생성해주는 함수.
*/
if(typeof String.prototype.format !== 'function') {
    String.prototype.format = ( args ) => {
        var str = this.toString();

        for(let i = 0; i < args.length; i++) {
            let regExp = new RegExp('\\{' + i + '\\}', 'gm');

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
if(typeof String.prototype.contains !== 'function') {
    String.prototype.contains = (str) => {
        return this.indexOf(str) > -1;
    };
}
/*
* @name : isEmpty [String]
* @desc : Empty 여부
* ie8 동작 안함.
*/
if(typeof String.prototype.isEmpty != 'function') {
    String.prototype.isEmpty = () => {
        return (this.length === 0);
    };
}
/*
* @name : isEmpty [String]
* @desc : string 이 빈값인지 체크
*/
if(typeof String.prototype.isEmpty !== 'function') {
    String.prototype.isEmpty = () => {
        let str = this.toString();

        if(str === null || str === undefined || str === 'null' || str === 'undefined' || str === '') {
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
if(typeof String.prototype.toArray != 'function') {
    String.prototype.toArray = (separator) => {
        separator = separator || '-';
        return this.split(separator);
    };
}
/*
* @name : toKorChars [String]
* @desc :한글 초성/중성/종성 분리
*/
if(typeof String.prototype.toKorChars != 'function') {
    String.prototype.toKorChars = () => {
        let cCho = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
            cJung = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'],
            cJong = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
            cho,
            jung,
            jong;

        let str = this,
            cnt = str.length,
            chars = [],
            cCode;

        for(let i = 0; i < cnt; i++) {
            cCode = str.charCodeAt(i);

            if(cCode == 32) {
                continue;
            }

            // 한글이 아닌 경우
            if(cCode < 0xAC00 || cCode > 0xD7A3) {
                chars.push(str.charAt(i));
                continue;
            }

            cCode = str.charCodeAt(i) - 0xAC00;

            jong = cCode % 28; // 종성
            jung = ((cCode - jong) / 28) % 21; // 중성
            cho = (((cCode - jong) / 28) - jung) / 21; // 초성

            chars.push(cCho[cho], cJung[jung]);
            if(cJong[jong] !== '') {
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
    String.prototype.startsWith = (searchString, position) => {
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
    };
}
/*
* @name : endsWith
*/
if (!String.prototype.endsWith) {
    String.prototype.endsWith = (searchString, position) => {
        let subjectString = this.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        let lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}
/*
* @name : zf
*/
if(typeof Number.prototype.zf != 'function') {
    Number.prototype.zf = (len) => {
        return this.toString().zf(len);
    };
}

/*
* @name : isOdd
* @desc : 홀수 여부 반환
*/
if (typeof Number.prototype.isOdd != 'function') {
    Number.prototype.isOdd = () => {
        return (this % 2 !== 0);
    };
}
/*
* @name : isEven
* @desc : 짝수 여부 반환
*/
if (typeof Number.prototype.isEven != 'function') {
    Number.prototype.isEven = (len) => {
        return (this % 2 === 0);
    };
}
/**
* @name : toCurrency [Number]
* @desc : Number format
*/
if(typeof Number.prototype.toCurrency != 'function') {
    Number.prototype.toCurrency = (position) => {
        let result = '',
            pos = position || 3,
            val = this.zf();

        for(let i = val.length; i > 0; i--) {
            if(i !== val.length && i % pos === 0) {
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
if(typeof Array.prototype.filter != 'function') {
    Array.prototype.filter = (func) => {
        let newArray = [],
            self = this;

        for(let i = 0, len = self.length; i < len; i++) {
            if(func(self[i], i, self)) {
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
if(typeof Array.prototype.forEach != 'function') {
    Array.prototype.forEach = (func) => {
        let self = this;

        for(let i = 0,len = self.length; i < len; i++) {
            func.call(self, self[i], i, self);
        }
    };
}
/*
* @name : contains [Array]
* @desc : 원소의 존재 여부.
* @param : array item [...]
*/
if(typeof Array.prototype.contains != 'function') {
    Array.prototype.contains = (compareValue) => {
        let self = this;
        for(let i = 0,len = self.length; i < len; i++) {
            if(self[i] === compareValue) {
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
if(!Array.isArray) {
    Array.isArray = function() {
        return Object.prototype.toString.call(args) === '[object Array]';
    };
}
// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: http://es5.github.io/#x15.4.4.21
if(!Array.prototype.reduce) {
    Array.prototype.reduce = function (callback) {
        'use strict';
        if(this === null) {
            throw new TypeError('Array.prototype.reduce called on null or undefined');
        }
        if(typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        let t = Object(this),
            len = t.length >>> 0,
            k = 0,
            value;
        if(arguments.length == 2) {
            value = arguments[1];
        } else {
            while(k < len && !(k in t)) {
                k++;
            }
            if(k >= len) {
                throw new TypeError('Reduce of empty array with no initial value');
            }
            value = t[k++];
        }
        for(; k < len; k++) {
            if(k in t) {
                value = callback(value, t[k], k, t);
            }
        }
        return value;
    };
}
if(!Array.prototype.indexOf) {
    Array.prototype.indexOf = (searchElement, fromIndex) => {

        let k;

        if(this === null) {
            throw new TypeError('"this" is null or not defined');
        }

        let O = Object(this);

        let len = O.length >>> 0;

        if(len === 0) {
            return -1;
        }

        let n = +fromIndex || 0;

        if(Math.abs(n) === Infinity) {
            n = 0;
        }

        if(n >= len) {
            return -1;
        }

        k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        while(k < len) {
            if(k in O && O[k] === searchElement) {
                return k;
            }
            k++;
        }
        return -1;
    };
}
// Production steps of ECMA-262, Edition 5, 15.4.4.17
// Reference: http://es5.github.io/#x15.4.4.17
if(!Array.prototype.some) {
    Array.prototype.some = function (fun /*, thisArg*/) {
        'use strict';

        if(this === null) {
            throw new TypeError('Array.prototype.some called on null or undefined');
        }

        if(typeof fun !== 'function') {
            throw new TypeError();
        }

        let t = Object(this);
        let len = t.length >>> 0;

        let thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for(let i = 0; i < len; i++) {
            if(i in t && fun.call(thisArg, t[i], i, t)) {
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
if(typeof Date.prototype.addYear != 'function') {
    Date.prototype.addYear = (n) => {
        let dat = new Date(this.valueOf());

        dat.setFullYear(dat.getFullYear() + n);

        return dat;
    };
}
/*
* @name : addMonth [Date]
* @desc : 날짜 증가/감소 (월)
* @param : n[Number]
*/
if(typeof Date.prototype.addMonth != 'function') {
    Date.prototype.addMonth = (n) => {
        let dat = new Date(this.valueOf());

        dat.setMonth(dat.getMonth() + n);

        return dat;
    };
}
/*
* @name : addDate [Date]
* @desc : 날짜 증가/감소 (일)
* @param : n[Number]
*/
if(typeof Date.prototype.addDate != 'function') {
    Date.prototype.addDate = (n) => {
        let dat = new Date(this.valueOf());
        dat.setDate(dat.getDate() + n);
        return dat;
    };
}
/*
* @name : addMinutes [Date]
* @desc : 날짜 증가/감소 (분)
* @param : n[Number]
*/
if(typeof Date.prototype.addMinutes != 'function') {
    Date.prototype.addMinutes = (n) => {
        let dat = new Date(this.valueOf());
        dat.setMinutes(dat.getMinutes() + n);
        return dat;
    };
}
/*
* @name : addSeconds [Date]
* @desc : 날짜 증가/감소 (초)
* @param : n[Number]
*/
if(typeof Date.prototype.addSeconds != 'function') {
    Date.prototype.addSeconds = (n) => {
        let dat = new Date(this.valueOf());
        dat.setSeconds(dat.getSeconds() + n);
        return dat;
    };
}
/*
* @name : format [Date]
* @desc : 날짜 Formatter
* @param : format[string]
*/
if(typeof Date.prototype.format != 'function') {
    Date.prototype.format = (f) => {
        if(!this.valueOf()) {
            return " ";
        }

        let weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
            shortWeekName = ["일", "월", "화", "수", "목", "금", "토"],
            d = this;

        return f.replace(/(yyyy|yy|MM|dd|E|e|hh|mm|ss|a\/p)/gi, function($1) {
            switch($1) {
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

let mix = (superclass) => new MixinBuilder(superclass);

class MixinBuilder {
  constructor(superclass) {
    this.superclass = superclass;
  }

  with(...mixins) {
    return mixins.reduce((c, mixin) => mixin(c), this.superclass);
  }
}
