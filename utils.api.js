/**
* @name : utils.ajax.js
* @depends: $.ajax 
*/
(function (window, document, $) {
    var utils = window.utils || {};
    /**
    * @name : api
    * @return : 
    */
    utils.api = {
    	getMessage : function(callback) {
    		utils.ajax.get({
    			url : utils.getApiUrl('/messages'),
    			success : function(res) {
    				callback && callback(res);
    			} 
    		});
    	},
    	getCategory : function(id, callback) {
    		utils.ajax.get({
    			url : utils.getApiUrl('/steps/{0}/categories', id),
    			success : function(res) {
    				callback && callback(res);
    			}
    		});
    	},
    	getExcludesItems : function(carId, ids, callback) {
    		utils.ajax.get({
    			url : utils.getApiUrl('/items/excludes'),
    			data : {
    				carId : carId,
    				ids : ids
    			},
    			success : function(res) {
    				callback && callback(res);
    			}
    		})
    	}
    };

})(window, document, jQuery);