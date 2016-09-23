let Cookie = ( superclass ) => class extends superclass {
  constructor () {
    super ();
    this.cookie = {
      get ( sKey ) {
        if( !sKey ) {
          return null;
        }

        let cookie = document.cookie.replace( new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1") || null;

        if( cookie ) {
          try {
            cookie = decodeURIComponent( cookie );
          } catch( e ) {
            cookie = decodeURIComponent( unescape( cookie ) );
          }
        }

        return cookie;
      },
      set ( sKey, sValue, vEnd = 1, sPath = '/', sDomain, bSecure ) {
        if(!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
          return false;
        }
        let sExpires = "";

        if(vEnd) {
          switch(vEnd.constructor) {
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
      remove ( sKey, sPath = '/', sDomain ) {
        if(!this.has(sKey)) {
          return false;
        }
        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
        return true;
      },
      has ( sKey ) {
        if(!sKey) {
          return false;
        }
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
      },
      keys () {
        let aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for(let nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
          aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        }
        return aKeys;
      }
    }
  }
};
