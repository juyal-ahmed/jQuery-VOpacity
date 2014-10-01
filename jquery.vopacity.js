/*
---------------------------------------------------------------------------------------
    Variable / Dynamic Content Opacity depends on page scroll or page down
    Plugin: jQuery Vopacity
	Version 1.0.0
	Author: Jewel Ahmed
	Author URL: http://www.codeatomic.com/

	Licensed under The MIT License (MIT)
	Usage: jQuery('div.class').vopacity(0.15, true);
---------------------------------------------------------------------------------------
*/
(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();
	var windowWidth = $window.width();
	
	$window.resize(function () {
		windowHeight = $window.height();
		windowWidth = $window.width();
	});

	$.fn.vopacity = function( extraDownSpeed, outerHeight ) {
		var $this = $(this);
		var getHeight;
		var paddingTop = 0;
		
		
		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
			
		if (arguments.length < 1 || extraDownSpeed === null) extraDownSpeed = 0;
		if (arguments.length < 2 || outerHeight === null) outerHeight = true;
		
		function update(){
			var windowScrollTop = $window.scrollTop();				
			
			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);
	
				if (top + height < windowScrollTop) { //Hidden at screen top area / just above of the viewport
					return;
				} else if (top > windowScrollTop + windowHeight) { //Hidden at screen bottom area / just below of the viewport
					return;
				}
				
				var $visibleHeight = ( ( top + height ) - windowScrollTop );
				if ( $visibleHeight > height ) {
					$visibleHeight = height;
				}
				
				var $calculatedOpacity = ( 1 / height ) * $visibleHeight;
				if ( $calculatedOpacity < 1 && extraDownSpeed > 0 ) {
					$calculatedOpacity-= extraDownSpeed;
				}
				if ( typeof $(this).data('content-dynamic-opacity-class') !== 'undefined' && $(this).data('content-dynamic-opacity-class') != '') {
					$element.find('.'+$(this).data('content-dynamic-opacity-class')).stop(true,true).animate( { 'opacity' : $calculatedOpacity }, 0, 'swing' );			
				} else {
					$element.stop(true,true).animate( { 'opacity' : $calculatedOpacity }, 0, 'swing' );
				}
			});
		}	

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);