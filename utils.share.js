/**
* @name : utils.share.js
* @depends: 
*/
(function(window) {

    var utils = window.utils || {};

    utils.shareHandler = new function() {
        var config = {
                isMobile: utils.isMobile(),                
                title: getMeta('og:title'),
                image: getMeta('og:image'),
                url: getMeta('og:url')
            },
            services = {
                facebook: function facebook(url) {
                    url = url || config.url;                    
                    var params = {u: setDomain(url)},
                        path = 'http://facebook.com/sharer.php',
                        openUrl = path + getParamString(params);                    
                    
                    window.open(openUrl, 'share_facebook', 'directories=no,location=no,menubar=no,status=no,toolbar=no,scrollbars=no,resizable=no,width=420,height=370');                    
                },
                twitter: function twitter(url, title) {
                    url = url || config.url;
                    title = title || getMeta('og:title');

                    var popup = null,
                        settngs = 'directories=no,location=no,menubar=no,status=no,toolbar=no,scrollbars=no,resizable=no,width=640, height=440';

                    if (popup == null) { popup = window.open('', 'share_twitter', settngs); }

                    shortenUrl(setDomain(url), function(res) {
                        var params = { text: title, url: res },
                            path = 'https://twitter.com/intent/tweet',
                            openUrl = path + '?' + $.param(params);                           

                        popup.location.href = openUrl;                            
                    });
                },
                googleplus : function googleplus(url) { 
                	url = url || config.url;
                	
                	var params = { 
            			url: setDomain(url),
            			hl: 'ko'
    				},
    				path = 'https://plus.google.com/share',
    				openUrl = path + '?' + $.param(params);
                	
                	var popup = null,
                    	settngs = 'directories=no,location=no,menubar=no,status=no,toolbar=no,scrollbars=no,resizable=no,width=500,height=370';
                	
                	if (popup == null) { popup = window.open('', 'share_google', settngs); }
                	
                	popup.location.href = openUrl;
                }
            };
       

        function getMeta(name) {
            var metaTag = $('meta'),
                rtn = '',
                $this = null;

            metaTag.each(function() {
                $this = $(this);

                if($this.attr('property') !== undefined && $this.attr('property') === name) {
                    rtn = $this.attr('content');
                } else if($this.attr('name') !== undefined && $this.attr('name') === name) {
                    rtn = $this.attr('content');
                }
            });

            return rtn;
        }

        function setDomain(path) {
            var domainPath = utils.config('root');

            if(path && path.indexOf('http') != 0) {
                path = domainPath + path;
            }
            return path;
        }

        function shortenUrl(url, callback) {
        	//TODO shortenUrl 만들기
//            $.getProductShortenUrl(function(url) {
//
//                var productId = $.getProductId ? $.getProductId() : '';
//
//                callback && callback(url);
//                if(!productId.isEmpty()) {
//                    utils.api.addShortenUrl({device: 'mobile', id: productId, url: url});
//                }
//            });
        	
        	callback && callback(url);
        }

        function clickHandler() {

            config.title = getMeta('og:title');
            config.image = getMeta('og:image');
            config.url = getMeta('og:url');

            var $btn = $(this),
                service = $btn.data('service'), // twitter, facebook....
                url = $btn.data('url'),
                title = $btn.data('title'),
                func = services[service];
            
            if(service === 'copyurl') {
            	$btn.copyUrl();
            } else {
	            if(typeof func == 'function') {
	                func(url, title);
	            }
            }

            return false;
        };

        function getParamString(params) {
            var strParams = '?';
            $.each(params, function(i, v) {
                if(v != '') {
                    strParams += i + '=' + v + '&';
                }
            });
            return strParams;
        }

        this.bind = function($t) {
            if(!$t || !$t.length || !$t.data('service')) {
                return;
            }
            $t.on('click', clickHandler);
        };

        this.unbind = function($t) {
            if(!$t || !$t.length || !$t.data('service')) {
                return;
            }
            $t.off('click', clickHandler);
        };

        this.todoSearch = function() {
            alert('검색엔진 작업 후, 처리');
            return false;
        };

        this.todoDefinedNeed = function() {
            alert('기능 정의 필요.');
            return false;
        };

    };

})(window);