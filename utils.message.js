(function($, window, document, undefined) {
	var utils = window.utils || {};
	
	utils.message = new function() {
		var objData = null;
		
		this.init = function(callback) {
			utils.api.getMessage(function(data) {
				objData = data;
				
				callback && callback();
			});		
		};
		this.getLabel = function(key) {
			return getProperty('labels', key);
		};
		this.getMessage = function(key) {
			return getProperty('messages', key);
		};
		
		function getProperty(type, property) {
			var returnValue = undefined;
			switch(type) {
				case 'labels' :
					returnValue = objData.labels[property];
					break;
				case 'messages' :
					returnValue = objData.messages[property];
					break;
			}
			
			return returnValue || property;
		}
	};
	
	
})(jQuery, window, document)