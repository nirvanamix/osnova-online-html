function function_global_form(id, number_frame, frame_id, porduct_id){
	var script = document.getElementById(id);
	var par = script.parentNode;
	script.parentNode.style.overflow = 'hidden';
	var iframe = document.createElement('iframe');
	iframe.src = 'https://vtkosnova.org/pl/lite/widget/widget'
		+ "?" + window.location.search.substring(1)
		+ "&id=" + porduct_id
		+ "&ref=" + encodeURIComponent(document.referrer)
		+ "&loc=" + encodeURIComponent(document.location.href);
	iframe.style.width = '100%';
	iframe.style.height = '0px';
	iframe.style.border = 'none';
	iframe.style.overflow = 'hidden';
	iframe.className = number_frame;
	iframe.id = frame_id + '_' + iframe.className;
	// name можно получить изнутри iframe
	iframe.name = iframe.className;

	var iframeId = iframe.id;

	var gcEmbedOnMessage = function(e) {
		var insertedIframe = document.getElementById(iframeId);
		if (!insertedIframe) {
			return;
		}

		if (e.data.uniqName == id) {
			if (e.data.height) {
			    if (e.data.iframeName) {
					if (e.data.iframeName == iframe.name) {
                        par.style.height = ( e.data.height ) + "px";
						insertedIframe.style.height = (e.data.height) + "px";
                    }
                } else {
                    par.style.height = ( e.data.height ) + "px";
					insertedIframe.style.height = (e.data.height) + "px";
                }
            }
		}
	};

	if (window.addEventListener) {
		window.addEventListener("message", gcEmbedOnMessage, false);
	}  else if (window.attachEvent) {
		window.attachEvent('onmessage', gcEmbedOnMessage)
	} else {
		window['onmessage'] = gcEmbedOnMessage
	}

	script.parentNode.insertBefore(iframe, script);
	par.removeChild( script )


	var getLocation = function(href) {
		var l = document.createElement("a");
		l.href = href;
		return l;
	};
	var currentScript = document.currentScript || (function() {
		var scripts = document.getElementsByTagName('script');
		return scripts[scripts.length - 1];
	})();
	var domain = ( (getLocation( currentScript.src )).hostname );
}










/*--------------------------------------------------------------------------------------------------*/
;(function($) {
	var defaults = {
		class_insert: '.name-class', // class where the form will be displayed
		class_close: '.name-class', // the class that will delete the form
		svg_loader: 'loader text or svg file' // loader text/svg
	};
	$.fn.slaider = function(options){
		var config = $.extend({}, defaults, options);
		var jfirst = this.first();
		jfirst.init = function(){
			this.click(function(event) {
				event.preventDefault();
				$(config.class_insert).find('*').remove();
				$(config.class_insert).removeAttr('style');
				var th_data = $(this).attr('data-script-form');
				var arr = th_data.split(', ');
				$(config.class_insert).append('<div id="' + arr[0] + '"></div>').prepend('<div class="loader">' + config.svg_loader + '</div>');
				var parameners = {
					id: arr[0],
					number: arr[1],
					frame_id: arr[2],
					product_id: arr[3],
				}
				function_global_form(parameners.id, parameners.number, parameners.frame_id, parameners.product_id);
				$(config.class_insert).find('*').on("load",function(){
					$(config.class_insert).find('.loader').remove();
				});
			});
			$(config.class_close).click(function(event) {
				$(config.class_insert).find('*').remove();
				$(config.class_insert).removeAttr('style');
			});
		}
		jfirst.init()
		return jfirst;
	};
}(jQuery));




$(function (){
	$('a[data-script-form]').each(function(index, el) {
		$(this).slaider({
			class_insert: '.block-form-script',
			class_close: '.close-win',
			svg_loader: '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#38abd1" fill-opacity="1"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1800ms" repeatCount="indefinite"></animateTransform></g></svg>'
		});
	});
	
})




