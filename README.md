jQuery-VOpacity
===============

Variable / Dynamic Content Opacity depends on page scroll or page down.

By default when a container on the viewport, it will have a default 1.0 opacity css property.

Then, When you scroll down your page and it's visible area are going less then it's actual height it's content will go to 0 opacity in a percentage calculation, this is what this plugins does.

Usages:
===============
jQuery('div.class').vopacity(0.15, true);
jQuery('.class').vopacity(0.15, true);
jQuery('div').vopacity(0.15, true);

Where first arg 0.15 is first opacity down value that will be applied when the container first time going to apply it's calculated opacity.
The send arg is a bool one, you can use true to use container outerHeight(true) as it's height otherwise it will use height() to calculate it's height.

You can use vopacity on a container and mention it's another container to apply opacity with below listed example with mentioning a data attributes "data-content-dynamic-opacity-class".

Plugins Used Container:
==============================
<div class="vopacity" data-content-dynamic-opacity-class="vopacity-inner-content">
	PADDING-TOP = 100PX;
	<div class="vopacity-inner-content">
		CONTENT
	</div>
	PADDING-BOTTOM = 100PX;
</div>
<script>
	jQuery('.vopacity').vopacity(0.15, true);
</script>