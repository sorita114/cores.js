/**
* @name : utils.ajax.js
* @depends: $.ajax 
*/
(function(window, document, $) {

    var utils = window.utils || {};

    function getStringFormat(str) {

        str = str || '';

        if(str.indexOf('{') > -1 && arguments.length > 1) {
            for(var i = 0,
                    len = arguments.length - 1; i < len; i++) {
                str = str.substring(0, str.indexOf('{')) + arguments[i + 1] + str.substring(str.indexOf('}') + 1, str.length);
            }
        }

        return str;
    }

    utils.getApiUrl = function(path) {
    	var prefix = '/proxy';
    	
        return utils.config('apiPath') + prefix + getStringFormat.apply(this, arguments);
    };

    /**
    * @name : ajax
    * @return : {get, post, jsonp}
    */
    utils.ajax = {
        /**
        * @name : get
        * @param : option{object}
        */
        get: function(obj) {
        	
            if(!obj.url) {
                utils.error('not defined url');
            }
            var ajaxOptions = {
                url: obj.url,
                type: 'GET',
                async: true,
                data: obj.data || {},
                dataType: obj.dataType || "json",
                success: function(res) {
                    successHandler(obj, res);
                },
                error: function (e) {
                    errorHandler(obj, e);
                }
            };

            if(obj.cache) {
                ajaxOptions.cache = true;
            }

            beforeAjax();
            $.ajax(ajaxOptions);
        },
        /**
        * @name : post
        * @param : option{object}
        */
        post: function(obj, options) {
            if(!obj.url) {
                utils.error('not defined url');
            }
            var ajaxOptions = {
                url: obj.url,
                type: 'POST',
                headers: {},
                async: true,
                contentType: 'text/plain',
                dataType: 'json',
                crossDomain: true,
                cache: false,
                processData: true,
                data: obj.data,
                xhrFields: {
                    withCredentials: true
                },
                beforeSend: function(xhr, settings) {
                    xhr.setRequestHeader("Content-type", 'Application/x-www-form-urlencoded');
                },
                success: function (res) {
                    successHandler(obj, res);
                },
                error: function(e) {
                    errorHandler(obj, e);
                }
            };
            if (options) {
                $.extend(ajaxOptions, options);
            }
            
            beforeAjax();
            $.ajax(ajaxOptions);
        },
        /**
        * @name : jsonp
        * @param : option{object}
        */
        jsonp: function(obj) {

            if(!obj.url) {
                utils.error('not defined url');
            }

            beforeAjax();
            $.ajax({
                url: obj.url,
                contentType: 'text/plain',
                data: obj.data || {},
                dataType: 'jsonp'
                //cache: false
            }).done(function(res) {
                successHandler(obj, res);
            }).fail(function(e) {
                errorHandler(obj, e);
            });
        },        
    };

    function successHandler(obj, res) {    	
        afterAjax();

        if(res.isSucceed) {
        	obj.success && obj.success(res.body);
        } else {
        	var errorMessages = res.errors && res.erros.messages ? res.errors.messages : 'A failure occurred while communicating with the server.\nPlease try again.',
        		errorCode = res.errors && res.errors.code ?  res.errors.code : '';
            	
        	alert(errorMessages);
        	utils.error(errorCode + ' ' + errorMessages);
        }
    }

    function errorHandler(obj, e) {
        afterAjax();
        
        obj.error && obj.error(e);
        utils.error('A failure occurred while communicating with the server.\nPlease try again.');
    }

    function beforeAjax() {
        $.showLoading && $.showLoading();
    }

    function afterAjax() {
        $.hideLoading && $.hideLoading();
    }

})(window, document, jQuery);