/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/


// t: current time, b: begInnIng value, c: change In value, d: duration

jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

/*
 * jQuery Easing Compatibility v1 - http://gsgd.co.uk/sandbox/jquery.easing.php
 *
 * Adds compatibility for applications that use the pre 1.2 easing names
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */

jQuery.extend( jQuery.easing,
{
	easeIn: function (x, t, b, c, d) {
		return jQuery.easing.easeInQuad(x, t, b, c, d);
	},
	easeOut: function (x, t, b, c, d) {
		return jQuery.easing.easeOutQuad(x, t, b, c, d);
	},
	easeInOut: function (x, t, b, c, d) {
		return jQuery.easing.easeInOutQuad(x, t, b, c, d);
	},
	expoin: function(x, t, b, c, d) {
		return jQuery.easing.easeInExpo(x, t, b, c, d);
	},
	expoout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutExpo(x, t, b, c, d);
	},
	expoinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutExpo(x, t, b, c, d);
	},
	bouncein: function(x, t, b, c, d) {
		return jQuery.easing.easeInBounce(x, t, b, c, d);
	},
	bounceout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutBounce(x, t, b, c, d);
	},
	bounceinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutBounce(x, t, b, c, d);
	},
	elasin: function(x, t, b, c, d) {
		return jQuery.easing.easeInElastic(x, t, b, c, d);
	},
	elasout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutElastic(x, t, b, c, d);
	},
	elasinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutElastic(x, t, b, c, d);
	},
	backin: function(x, t, b, c, d) {
		return jQuery.easing.easeInBack(x, t, b, c, d);
	},
	backout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutBack(x, t, b, c, d);
	},
	backinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutBack(x, t, b, c, d);
	}
});

// version 1.6.0
// http://welcome.totheinter.net/columnizer-jquery-plugin/
// created by: Adam Wulf @adamwulf, adam.wulf@gmail.com

(function($){

 $.fn.columnize = function(options) {
	this.cols  =[]; 
	this.offset= 0; 
	this.before=[];
	this.lastOther=0;  
	this.prevMax =0;
	this.debug=0; 
	this.setColumnStart =null;
	this.elipsisText='';

	var defaults = {
		// default width of columns
		width: 400,
		// optional # of columns instead of width
		columns : false,
		// true to build columns once regardless of window resize
		// false to rebuild when content box changes bounds
		buildOnce : false,
		// an object with options if the text should overflow
		// it's container if it can't fit within a specified height
		overflow : false,
		// this function is called after content is columnized
		doneFunc : function(){},
		// if the content should be columnized into a 
		// container node other than it's own node
		target : false,
		// re-columnizing when images reload might make things
		// run slow. so flip this to true if it's causing delays
		ignoreImageLoading : true,
		// should columns float left or right
		columnFloat : "left",
		// ensure the last column is never the tallest column
		lastNeverTallest : false,
		// (int) the minimum number of characters to jump when splitting
		// text nodes. smaller numbers will result in higher accuracy
		// column widths, but will take slightly longer
		accuracy : false,
		// don't automatically layout columns, only use manual columnbreak
		manualBreaks : false,
		// previx for all the CSS classes used by this plugin
		// default to empty string for backwards compatibility
		cssClassPrefix : "",
		elipsisText:'...',
		debug:0,	
	};
	options = $.extend(defaults, options);

	if(typeof(options.width) == "string"){
		options.width = parseInt(options.width,10);
		if(isNaN(options.width)){
			options.width = defaults.width;
		}
	}
	if(typeof options.setColumnStart== 'function') {
		this.setColumnStart=options.setColumnStart;
	}
	if(typeof options.elipsisText== 'string') {
		this.elipsisText=options.elipsisText;
	}
	if(options.debug) { // assert is off by default
		this.debug=options.debug;
	}	

	/**
	 * appending a text node to a <table> will
	 * cause a jquery crash.
	 * so wrap all append() calls and revert to
	 * a simple appendChild() in case it fails
	 */
	function appendSafe($target, $elem){
		try{
			$target.append($elem);
		}catch(e){
			$target[0].appendChild($elem[0]);
		}
	}

    return this.each(function() {
		var $inBox = options.target ? $(options.target) : $(this);
		var maxHeight = $(this).height();
		var $cache = $('<div></div>'); // this is where we'll put the real content
		var lastWidth = 0;
		var columnizing = false;
		var manualBreaks = options.manualBreaks;
		var cssClassPrefix = defaults.cssClassPrefix;
		if(typeof(options.cssClassPrefix) == "string"){
			cssClassPrefix = options.cssClassPrefix;
		}


		var adjustment = 0;

		appendSafe($cache, $(this).contents().clone(true));

		// images loading after dom load
		// can screw up the column heights,
		// so recolumnize after images load
		if(!options.ignoreImageLoading && !options.target){
			if(!$inBox.data("imageLoaded")){
				$inBox.data("imageLoaded", true);
				if($(this).find("img").length > 0){
					// only bother if there are
					// actually images...
					var func = function($inBox,$cache){ return function(){
							if(!$inBox.data("firstImageLoaded")){
								$inBox.data("firstImageLoaded", "true");
								appendSafe($inBox.empty(), $cache.children().clone(true));
								$inBox.columnize(options);
							}
						};
					}($(this), $cache);
					$(this).find("img").one("load", func);
					$(this).find("img").one("abort", func);
					return;
				}
			}
		}

		$inBox.empty();

		columnizeIt();

		if(!options.buildOnce){
			$(window).resize(function() {
				if(!options.buildOnce){
					if($inBox.data("timeout")){
						clearTimeout($inBox.data("timeout"));
					}
					$inBox.data("timeout", setTimeout(columnizeIt, 200));
				}
			});
		}

		function prefixTheClassName(className, withDot){
			var dot = withDot ? "." : "";
			if(cssClassPrefix.length){
				return dot + cssClassPrefix + "-" + className;
			}
			return dot + className;
		}

		/**
		 * this fuction builds as much of a column as it can without
		 * splitting nodes in half. If the last node in the new column
		 * is a text node, then it will try to split that text node. otherwise
		 * it will leave the node in $pullOutHere and return with a height
		 * smaller than targetHeight.
		 * 
         * Returns a boolean on whether we did some splitting successfully at a text point
         * (so we know we don't need to split a real element). return false if the caller should
         * split a node if possible to end this column.
		 *
		 * @param putInHere, the jquery node to put elements into for the current column
		 * @param $pullOutHere, the jquery node to pull elements out of (uncolumnized html)
		 * @param $parentColumn, the jquery node for the currently column that's being added to
		 * @param targetHeight, the ideal height for the column, get as close as we can to this height
		 */
		function columnize($putInHere, $pullOutHere, $parentColumn, targetHeight){
			//
			// add as many nodes to the column as we can,
			// but stop once our height is too tall
			while((manualBreaks || $parentColumn.height() < targetHeight) &&
				$pullOutHere[0].childNodes.length){
				var node = $pullOutHere[0].childNodes[0];
				//
				// Because we're not cloning, jquery will actually move the element"
				// http://welcome.totheinter.net/2009/03/19/the-undocumented-life-of-jquerys-append/
				if($(node).find(prefixTheClassName("columnbreak", true)).length){
					//
					// our column is on a column break, so just end here
					return;
				}
				if($(node).hasClass(prefixTheClassName("columnbreak"))){
					//
					// our column is on a column break, so just end here
					return;
				}
				appendSafe($putInHere, $(node));
			}
			if($putInHere[0].childNodes.length === 0) return;

			// now we're too tall, so undo the last one
			var kids = $putInHere[0].childNodes;
			var lastKid = kids[kids.length-1];
			$putInHere[0].removeChild(lastKid);
			var $item = $(lastKid);

			// now lets try to split that last node
			// to fit as much of it as we can into this column
			if($item[0].nodeType == 3){
				// it's a text node, split it up
				var oText = $item[0].nodeValue;
				var counter2 = options.width / 18;
				if(options.accuracy)
				counter2 = options.accuracy;
				var columnText;
				var latestTextNode = null;
				while($parentColumn.height() < targetHeight && oText.length){
					//
					// it's been brought up that this won't work for chinese
					// or other languages that don't have the same use of whitespace
					// as english. This will need to be updated in the future
					// to better handle non-english languages.
					//
					// https://github.com/adamwulf/Columnizer-jQuery-Plugin/issues/124
					var indexOfSpace = oText.indexOf(' ', counter2);
					if (indexOfSpace != -1) {
						columnText = oText.substring(0, indexOfSpace);
					} else {
						columnText = oText;
					}
					latestTextNode = document.createTextNode(columnText);
					appendSafe($putInHere, $(latestTextNode));

					if(oText.length > counter2 && indexOfSpace != -1){
						oText = oText.substring(indexOfSpace);
					}else{
						oText = "";
					}
				}
				if($parentColumn.height() >= targetHeight && latestTextNode !== null){
					// too tall :(
					$putInHere[0].removeChild(latestTextNode);
					oText = latestTextNode.nodeValue + oText;
				}
				if(oText.length){
					$item[0].nodeValue = oText;
				}else{
					return false; // we ate the whole text node, move on to the next node
				}
			}

			if($pullOutHere.contents().length){
				$pullOutHere.prepend($item);
			}else{
				appendSafe($pullOutHere, $item);
			}

			return $item[0].nodeType == 3;
		}

		/**
		 * Split up an element, which is more complex than splitting text. We need to create 
		 * two copies of the element with it's contents divided between each
		 */
		function split($putInHere, $pullOutHere, $parentColumn, targetHeight){
			if($putInHere.contents(":last").find(prefixTheClassName("columnbreak", true)).length){
				//
				// our column is on a column break, so just end here
				return;
			}
			if($putInHere.contents(":last").hasClass(prefixTheClassName("columnbreak"))){
				//
				// our column is on a column break, so just end here
				return;
			}
			if($pullOutHere.contents().length){
				var $cloneMe = $pullOutHere.contents(":first");
				//
				// make sure we're splitting an element
				if( typeof $cloneMe.get(0) == 'undefined' || $cloneMe.get(0).nodeType != 1 ) return;

				//
				// clone the node with all data and events
				var $clone = $cloneMe.clone(true);
				//
				// need to support both .prop and .attr if .prop doesn't exist.
				// this is for backwards compatibility with older versions of jquery.
				if($cloneMe.hasClass(prefixTheClassName("columnbreak"))){
					//
					// ok, we have a columnbreak, so add it into
					// the column and exit
					appendSafe($putInHere, $clone);
					$cloneMe.remove();
				}else if (manualBreaks){
					// keep adding until we hit a manual break
					appendSafe($putInHere, $clone);
					$cloneMe.remove();
				}else if($clone.get(0).nodeType == 1 && !$clone.hasClass(prefixTheClassName("dontend"))){
					appendSafe($putInHere, $clone);
					if($clone.is("img") && $parentColumn.height() < targetHeight + 20){
						//
						// we can't split an img in half, so just add it
						// to the column and remove it from the pullOutHere section
						$cloneMe.remove();
					}else if($cloneMe.hasClass(prefixTheClassName("dontsplit")) && $parentColumn.height() < targetHeight + 20){
						//
						// pretty close fit, and we're not allowed to split it, so just
						// add it to the column, remove from pullOutHere, and be done
						$cloneMe.remove();
					}else if($clone.is("img") || $cloneMe.hasClass(prefixTheClassName("dontsplit"))){
						//
						// it's either an image that's too tall, or an unsplittable node
						// that's too tall. leave it in the pullOutHere and we'll add it to the 
						// next column
						$clone.remove();
					}else{
						//
						// ok, we're allowed to split the node in half, so empty out
						// the node in the column we're building, and start splitting
						// it in half, leaving some of it in pullOutHere
						$clone.empty();
						if(!columnize($clone, $cloneMe, $parentColumn, targetHeight)){
							// this node may still have non-text nodes to split
							// add the split class and then recur
							$cloneMe.addClass(prefixTheClassName("split"));

							//if this node was ol element, the child should continue the number ordering
							if($cloneMe.get(0).tagName == 'OL'){
								var startWith = $clone.get(0).childElementCount + $clone.get(0).start;
								$cloneMe.attr('start',startWith+1);
							}

							if($cloneMe.children().length){
								split($clone, $cloneMe, $parentColumn, targetHeight);
							}
						}else{
							// this node only has text node children left, add the
							// split class and move on.
							$cloneMe.addClass(prefixTheClassName("split"));
						}
						if($clone.get(0).childNodes.length === 0){
							// it was split, but nothing is in it :(
							$clone.remove();
							$cloneMe.removeClass(prefixTheClassName("split"));
						}
					}
				}
			}
		}


		function singleColumnizeIt() {
			if ($inBox.data("columnized") && $inBox.children().length == 1) {
				return;
			}
			$inBox.data("columnized", true);
			$inBox.data("columnizing", true);

			$inBox.empty();
			$inBox.append($("<div class='"
				+ prefixTheClassName("first") + " "
				+ prefixTheClassName("last") + " "
				+ prefixTheClassName("column") + " "
				+ "' style='width:100%; float: " + options.columnFloat + ";'></div>")); //"
			$col = $inBox.children().eq($inBox.children().length-1);
			$destroyable = $cache.clone(true);
			if(options.overflow){
				targetHeight = options.overflow.height;
				columnize($col, $destroyable, $col, targetHeight);
				// make sure that the last item in the column isn't a "dontend"
				if(!$destroyable.contents().find(":first-child").hasClass(prefixTheClassName("dontend"))){
					split($col, $destroyable, $col, targetHeight);
				}

				while($col.contents(":last").length && checkDontEndColumn($col.contents(":last").get(0))){
					var $lastKid = $col.contents(":last");
					$lastKid.remove();
					$destroyable.prepend($lastKid);
				}

				var html = "";
				var div = document.createElement('DIV');
				while($destroyable[0].childNodes.length > 0){
					var kid = $destroyable[0].childNodes[0];
					if(kid.attributes){
						for(var i=0;i<kid.attributes.length;i++){
							if(kid.attributes[i].nodeName.indexOf("jQuery") === 0){
								kid.removeAttribute(kid.attributes[i].nodeName);
							}
						}
					}
					div.innerHTML = "";
					div.appendChild($destroyable[0].childNodes[0]);
					html += div.innerHTML;
				}
				var overflow = $(options.overflow.id)[0];
				overflow.innerHTML = html;

			}else{
				appendSafe($col, $destroyable.contents());
			}
			$inBox.data("columnizing", false);

			if(options.overflow && options.overflow.doneFunc){
				options.overflow.doneFunc();
			}

		}

		/**
		 * returns true if the input dom node
		 * should not end a column.
		 * returns false otherwise
		 */
		function checkDontEndColumn(dom){
			if(dom.nodeType == 3){
				// text node. ensure that the text
				// is not 100% whitespace
				if(/^\s+$/.test(dom.nodeValue)){
						//
						// ok, it's 100% whitespace,
						// so we should return checkDontEndColumn
						// of the inputs previousSibling
						if(!dom.previousSibling) return false;
					return checkDontEndColumn(dom.previousSibling);
				}
				return false;
			}
			if(dom.nodeType != 1) return false;
			if($(dom).hasClass(prefixTheClassName("dontend"))) return true;
			if(dom.childNodes.length === 0) return false;
			return checkDontEndColumn(dom.childNodes[dom.childNodes.length-1]);
		}

		function columnizeIt() {
			//reset adjustment var
			adjustment = 0;
			if(lastWidth == $inBox.width()) return;
			lastWidth = $inBox.width();

			var numCols = Math.round($inBox.width() / options.width);
			var optionWidth = options.width;
			var optionHeight = options.height;
			if(options.columns) numCols = options.columns;
			if(manualBreaks){
				numCols = $cache.find(prefixTheClassName("columnbreak", true)).length + 1;
				optionWidth = false;
			}

//			if ($inBox.data("columnized") && numCols == $inBox.children().length) {
//				return;
//			}
			if(numCols <= 1){
				return singleColumnizeIt();
			}
			if($inBox.data("columnizing")) return;
			$inBox.data("columnized", true);
			$inBox.data("columnizing", true);

			$inBox.empty();
			$inBox.append($("<div style='width:" + (Math.floor(100 / numCols))+ "%; float: " + options.columnFloat + ";'></div>")); //"
			$col = $inBox.children(":last");
			appendSafe($col, $cache.clone());
			maxHeight = $col.height();
			$inBox.empty();

			var targetHeight = maxHeight / numCols;
			var firstTime = true;
			var maxLoops = 3;
			var scrollHorizontally = false;
			if(options.overflow){
				maxLoops = 1;
				targetHeight = options.overflow.height;
			}else if(optionHeight && optionWidth){
				maxLoops = 1;
				targetHeight = optionHeight;
				scrollHorizontally = true;
			}

			//
			// We loop as we try and workout a good height to use. We know it initially as an average 
			// but if the last column is higher than the first ones (which can happen, depending on split
			// points) we need to raise 'adjustment'. We try this over a few iterations until we're 'solid'.
			//
			// also, lets hard code the max loops to 20. that's /a lot/ of loops for columnizer,
			// and should keep run aways in check. if somehow someone has content combined with
			// options that would cause an infinite loop, then this'll definitely stop it.
			for(var loopCount=0;loopCount<maxLoops && loopCount<20;loopCount++){
				$inBox.empty();
				var $destroyable, className, $col, $lastKid;
				try{
					$destroyable = $cache.clone(true);
				}catch(e){
					// jquery in ie6 can't clone with true
					$destroyable = $cache.clone();
				}
				$destroyable.css("visibility", "hidden");
				// create the columns
				for (var i = 0; i < numCols; i++) {
					/* create column */
					className = (i === 0) ? prefixTheClassName("first") : "";
					className += " " + prefixTheClassName("column");
					className = (i == numCols - 1) ? (prefixTheClassName("last") + " " + className) : className;
					$inBox.append($("<div class='" + className + "' style='width:" + (Math.floor(100 / numCols))+ "%; float: " + options.columnFloat + ";'></div>")); //"
				}

				// fill all but the last column (unless overflowing)
				i = 0;
				while(i < numCols - (options.overflow ? 0 : 1) || scrollHorizontally && $destroyable.contents().length){
					if($inBox.children().length <= i){
						// we ran out of columns, make another
						$inBox.append($("<div class='" + className + "' style='width:" + (Math.floor(100 / numCols))+ "%; float: " + options.columnFloat + ";'></div>")); //"
					}
					$col = $inBox.children().eq(i);
					if(scrollHorizontally){
						$col.width(optionWidth + "px");
					}
					columnize($col, $destroyable, $col, targetHeight);
					// make sure that the last item in the column isn't a "dontend"
					split($col, $destroyable, $col, targetHeight);

					while($col.contents(":last").length && checkDontEndColumn($col.contents(":last").get(0))){
						$lastKid = $col.contents(":last");
						$lastKid.remove();
						$destroyable.prepend($lastKid);
					}
					i++;

					//
					// https://github.com/adamwulf/Columnizer-jQuery-Plugin/issues/47
					//
					// check for infinite loop.
					//
					// this could happen when a dontsplit or dontend item is taller than the column
					// we're trying to build, and its never actually added to a column.
					//
					// this results in empty columns being added with the dontsplit item
					// perpetually waiting to get put into a column. lets force the issue here
					if($col.contents().length === 0 && $destroyable.contents().length){
						//
						// ok, we're building zero content columns. this'll happen forever
						// since nothing can ever get taken out of destroyable.
						//
						// to fix, lets put 1 item from destroyable into the empty column
						// before we iterate
						$col.append($destroyable.contents(":first"));
					}else if(i == numCols - (options.overflow ? 0 : 1) && !options.overflow){
						//
						// ok, we're about to exit the while loop because we're done with all
						// columns except the last column.
						//
						// if $destroyable still has columnbreak nodes in it, then we need to keep
						// looping and creating more columns.
						if($destroyable.find(prefixTheClassName("columnbreak", true)).length){
							numCols ++;
						}
					}
				}
				if(options.overflow && !scrollHorizontally){
					var IE6 = false;
					/*@cc_on 
					@if (@_jscript_version < 5.7)
						IE6 = true;
					@end
					@*/
					var IE7 = (document.all) && (navigator.appVersion.indexOf("MSIE 7.") != -1);
					if(IE6 || IE7){
						var html = "";
						var div = document.createElement('DIV');
						while($destroyable[0].childNodes.length > 0){
							var kid = $destroyable[0].childNodes[0];
							for(i=0;i<kid.attributes.length;i++){
								if(kid.attributes[i].nodeName.indexOf("jQuery") === 0){
									kid.removeAttribute(kid.attributes[i].nodeName);
								}
							}
							div.innerHTML = "";
							div.appendChild($destroyable[0].childNodes[0]);
							html += div.innerHTML;
						}
						var overflow = $(options.overflow.id)[0];
						overflow.innerHTML = html;
					}else{
						$(options.overflow.id).empty().append($destroyable.contents().clone(true));
					}
				}else if(!scrollHorizontally){
					// the last column in the series
					$col = $inBox.children().eq($inBox.children().length-1);
					$destroyable.contents().each( function() {
						$col.append( $(this) );
					});
					var afterH = $col.height();
					var diff = afterH - targetHeight;
					var totalH = 0;
					var min = 10000000;
					var max = 0;
					var lastIsMax = false;
					var numberOfColumnsThatDontEndInAColumnBreak = 0;
					$inBox.children().each(function($inBox){ return function($item){
						var $col = $inBox.children().eq($item);
						var endsInBreak = $col.children(":last").find(prefixTheClassName("columnbreak", true)).length;
						if(!endsInBreak){
							var h = $col.height();
							lastIsMax = false;
							totalH += h;
							if(h > max) {
								max = h;
								lastIsMax = true;
							}
							if(h < min) min = h;
							numberOfColumnsThatDontEndInAColumnBreak++;
						}
					};
				}($inBox));

					var avgH = totalH / numberOfColumnsThatDontEndInAColumnBreak;
					if(totalH === 0){
						//
						// all columns end in a column break,
						// so we're done here
						loopCount = maxLoops;
					}else if(options.lastNeverTallest && lastIsMax){
						// the last column is the tallest
						// so allow columns to be taller
						// and retry
						//
						// hopefully this'll mean more content fits into
						// earlier columns, so that the last column
						// can be shorter than the rest
						adjustment += 5;

						targetHeight = targetHeight + 30;
						if(loopCount == maxLoops-1) maxLoops++;
					}else if(max - min > 30){
						// too much variation, try again
						targetHeight = avgH + 30;
					}else if(Math.abs(avgH-targetHeight) > 20){
						// too much variation, try again
						targetHeight = avgH;
					}else {
						// solid, we're done
						loopCount = maxLoops;
					}
				}else{
					// it's scrolling horizontally, fix the width/classes of the columns
					$inBox.children().each(function(i){
						$col = $inBox.children().eq(i);
						$col.width(optionWidth + "px");
						if(i === 0){
							$col.addClass(prefixTheClassName("first"));
						}else if(i==$inBox.children().length-1){
							$col.addClass(prefixTheClassName("last"));
						}else{
							$col.removeClass(prefixTheClassName("first"));
							$col.removeClass(prefixTheClassName("last"));
						}
					});
					$inBox.width($inBox.children().length * optionWidth + "px");
				}
				$inBox.append($("<br style='clear:both;'>"));
			}
			$inBox.find(prefixTheClassName("column", true)).find(":first" + prefixTheClassName("removeiffirst", true)).remove();
			$inBox.find(prefixTheClassName("column", true)).find(':last' + prefixTheClassName("removeiflast", true)).remove();
			$inBox.find(prefixTheClassName("split", true)).find(":first" + prefixTheClassName("removeiffirst", true)).remove();
			$inBox.find(prefixTheClassName("split", true)).find(':last' + prefixTheClassName("removeiflast", true)).remove();
			$inBox.data("columnizing", false);

			if(options.overflow){
				options.overflow.doneFunc();
			}
			options.doneFunc();
		}
    });
 };

$.fn.renumberByJS=function($searchTag, $colno, $targetId, $targetClass ) {
	this.setList = function($cols, $list, $tag1) {
		var $parents	= this.before.parents();
		var $rest;

		$rest			= $($cols[this.offset-1]).find('>*');

		if( ($rest.last())[0].tagName!=$tag1.toUpperCase()) {
			if(this.debug) {
				console.log("Last item in previous column, isn't a list...");
			}
			return 0;
		}
		$rest			= $rest.length;
		var $tint		= 1;

		if(this.lastOther<=0) {
			$tint		= this.before.children().length+1;
		} else {
			$tint		= $($parents[this.lastOther]).children().length+1;
		}
		// if the first LI in the current column is split, decrement, as we want the same number/key
		if( $($cols[this.offset]).find($tag1+':first li.split').length ) {
			var $whereElipsis=$($cols[this.offset-1]).find($tag1+':last li:last');
			if( this.elipsisText==='' || 
				$($cols[this.offset-1]).find($tag1+':last ~ div').length || 
				$($cols[this.offset-1]).find($tag1+':last ~ p').length  ) {
				;
			} else {
				if($($whereElipsis).find('ul, ol, dl').length ==0 ) {

					var $txt=$whereElipsis.last().text();
					// char counting, 'cus MSIE 8 is appearently stupid
					var $len=$txt.length;
					if($txt.substring($len-1)==';') {
						if($txt.substring($len-4)!=this.elipsisText+';') {
							$txt=$txt.substring(0, $len-1)+this.elipsisText+';';
						}
					} else {
						if($txt.substring($len-3)!=this.elipsisText) {
							$txt+=this.elipsisText;
						}
					}
					$whereElipsis.last().text($txt);
				}
			}
			// an item in split between two columns.  it only holds one key...
			if($($cols[this.offset]).find($tag1+':first >li.split >'+$tag1).length==0) {
				$tint--; 
			}
		}
		if($rest==1) {
			// the last column only held one thing, so assume its wrapped to the column before that as well.
			$tint		+= this.prevMax ;
		}
		if(this.nest>1) {
			if(this.debug) {
				console.log("Supposed to be a nested list...decr");
			}
			$tint--;
// some how, id previous list starts split, need  secins decrement, 
// if "split" is now correct, reference this
			var $tt		= $($cols[this.offset -1]).find($tag1+':first li.split:first');
			if($tt.length>0) {
				if(this.debug) {
					console.log("Previous column started with a split item, so that count is one less than expected");
				}
				$tint--;
			}


			$tt			= $($cols[this.offset]).find($tag1+':first li:first').clone();
			$tt.children().remove();
			if( $.trim($tt.text()).length>0 ){
				if(this.debug) {
					console.log("If that was a complete list in the previous column, don't decr.");
				}
				$tint++;

				if($($cols[this.offset-1]).find(">"+$tag1+':last ').children().length==0 ) {
					if(this.debug) {
						console.log("unless that was empty, in which case revert");
					}
					$tint--;
				}
			}

		} else {
			var $tt		= $($cols[this.offset]).find($tag1+':first li:first '+$tag1+".split li.split");
			if($tt.length>0) {
				if(this.debug) {
					console.log("[Nested] Column started with a split item, so that count is one less than expected");
				}
				$tint--;
			}

		}

		if(this.debug) {
			console.log("Setting the start value to "+$tint+" ("+this.prevMax +")");
		}
		if($tint >0) {
			// if the above computation leads to 0, or an empty list (more likely), don't set, leave as 1
			if(typeof this.setColumnStart == 'function') {
				this.setColumnStart($list, $tint);
			} else {
				$list.attr('start', $tint);
			}
		}
		return 0; 
	}

	if(typeof $targetId === 'undefined') { $targetId=false; }
	if(typeof $targetClass === 'undefined') { $targetClass=false; }
	if(! $targetId && !$targetClass ) {
		throw "renumberByJS(): Bad param, must pass an id or a class";
	}

	var $target 			='';
	this.prevMax			=1;

	if($targetClass) {
		$target 			="."+$targetClass;
	} else {
		$target 			="#"+$targetId;
	}
	var $tag1				= $searchTag.toLowerCase();
	var $tag2				= $searchTag.toUpperCase();

	this.cols  				= $($target);
	if(this.debug) {
		console.log("There are "+this.cols.length+" items, looking for "+$tag1);
	}

	this.before				= $(this.cols[0]).find($tag1+':last');
	this.prevMax			= this.before.children().length;

// start at 1, as must compare to previous...
	for(this.offset=1; this.offset<this.cols.length; this.offset++) {
		if(this.debug) {
			console.log("iterating "+this.offset+"...[of "+this.cols.length+"]");
		}
// if the first column again, nothing to the left of you, do nothing...
		if(this.offset % $colno==0) { 
			if(this.debug) {
				console.log("First column (in theory..)");
			}

			this.prevMax	= 1;
			continue;
		}

		this.before			= $(this.cols[this.offset-1]).find($tag1+':last');
// if there are no occurences of the searchTag, do nothing
		if(this.before.length) {
			if(this.debug) {
				console.log("Have some "+$searchTag+" elements in the previous column");
			}

			var $list		= $(this.cols[this.offset]).find($tag1+':first');
			var $first		= $(this.cols[this.offset]).find('*:first');
			if($first[0] !== $list[0]) {
// don't renumber anything, its not a rollover list
				continue;
			}

			var $parents	= this.before.parents();
			this.lastOther	= 0;
			var $found		= false;
			for(; this.lastOther<$parents.length; this.lastOther++) {
				if($parents[this.lastOther].tagName != $tag2 && $parents[this.lastOther].tagName != "LI") {
					$found  = true;
					this.lastOther--;
					break;
				}
			}

			this.nest		=1;
			if($(this.cols[this.offset]).find(">"+$tag1+':first li '+$tag1+":first").length) {
				this.nest	= 2;
			}
			this.setList(this.cols, $list, $tag1);
			this.lastOther--;
			$list			= $(this.cols[this.offset]).find($tag1+':first li '+$tag1+":first");
			if($list.length) {
// I hope the two columns have same nesting, or its busted

				this.before= $(this.cols[this.offset-1]).find(">"+$tag1+':last li '+$tag1+":last");
				this.prevMax= 0;
				this.nest	=1;
				this.setList(this.cols, $list, $tag1);
			}
			var $reset		= $(this.cols[this.offset-1]).find(">"+$tag1+':last');
			this.prevMax	= $reset.children().length;
		}
	}
	return 0;
};

})(jQuery);

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (arguments.length > 1 && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));


/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    var div = document.createElement('div'),
        ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

    div.className = 'fit-vids-style';
    div.innerHTML = '&shy;<style>         \
      .fluid-width-video-wrapper {        \
         width: 100%;                     \
         position: relative;              \
         padding: 0;                      \
      }                                   \
                                          \
      .fluid-width-video-wrapper iframe,  \
      .fluid-width-video-wrapper object,  \
      .fluid-width-video-wrapper embed {  \
         position: absolute;              \
         top: 0;                          \
         left: 0;                         \
         width: 100%;                     \
         height: 100%;                    \
      }                                   \
    </style>';

    ref.parentNode.insertBefore(div,ref);

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='www.youtube.com']",
        "iframe[src*='www.kickstarter.com']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
})( jQuery );


/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);

(function($){var undef,window=this,doc=window.document,$doc=$(doc),$win=$(window),protoArray=Array.prototype,VERSION=1.29,DEBUG=true,TIMEOUT=3e4,DUMMY=false,NAV=navigator.userAgent.toLowerCase(),HASH=window.location.hash.replace(/#\//,""),F=function(){},FALSE=function(){return false},IE=function(){var v=3,div=doc.createElement("div"),all=div.getElementsByTagName("i");do{div.innerHTML="<!--[if gt IE "+ ++v+"]><i></i><![endif]-->"}while(all[0]);return v>4?v:undef}(),DOM=function(){return{html:doc.documentElement,body:doc.body,head:doc.getElementsByTagName("head")[0],title:doc.title}},IFRAME=window.parent!==window.self,_eventlist="data ready thumbnail loadstart loadfinish image play pause progress "+"fullscreen_enter fullscreen_exit idle_enter idle_exit rescale "+"lightbox_open lightbox_close lightbox_image",_events=function(){var evs=[];$.each(_eventlist.split(" "),function(i,ev){evs.push(ev);if(/_/.test(ev)){evs.push(ev.replace(/_/g,""))}});return evs}(),_legacyOptions=function(options){var n;if(typeof options!=="object"){return options}$.each(options,function(key,value){if(/^[a-z]+_/.test(key)){n="";$.each(key.split("_"),function(i,k){n+=i>0?k.substr(0,1).toUpperCase()+k.substr(1):k});options[n]=value;delete options[key]}});return options},_patchEvent=function(type){if($.inArray(type,_events)>-1){return Galleria[type.toUpperCase()]}return type},_video={youtube:{reg:/https?:\/\/(?:[a-zA_Z]{2,3}.)?(?:youtube\.com\/watch\?)((?:[\w\d\-\_\=]+&amp;(?:amp;)?)*v(?:&lt;[A-Z]+&gt;)?=([0-9a-zA-Z\-\_]+))/i,embed:function(id){return"http://www.youtube.com/embed/"+id},getThumb:function(id,success,fail){fail=fail||F;$.getJSON(window.location.protocol+"//gdata.youtube.com/feeds/api/videos/"+id+"?v=2&alt=json-in-script&callback=?",function(data){try{success(data.entry.media$group.media$thumbnail[0].url)}catch(e){fail()}}).error(fail)}},vimeo:{reg:/https?:\/\/(?:www\.)?(vimeo\.com)\/(?:hd#)?([0-9]+)/i,embed:function(id){return"http://player.vimeo.com/video/"+id},getThumb:function(id,success,fail){fail=fail||F;$.getJSON("http://vimeo.com/api/v2/video/"+id+".json?callback=?",function(data){try{success(data[0].thumbnail_medium)}catch(e){fail()}}).error(fail)}},dailymotion:{reg:/https?:\/\/(?:www\.)?(dailymotion\.com)\/video\/([^_]+)/,embed:function(id){return"http://www.dailymotion.com/embed/video/"+id},getThumb:function(id,success,fail){fail=fail||F;$.getJSON("https://api.dailymotion.com/video/"+id+"?fields=thumbnail_medium_url&callback=?",function(data){try{success(data.thumbnail_medium_url)}catch(e){fail()}}).error(fail)}}},_videoTest=function(url){var match;for(var v in _video){match=url&&url.match(_video[v].reg);if(match&&match.length){return{id:match[2],provider:v}}}return false},_nativeFullscreen={support:function(){var html=DOM().html;return!IFRAME&&(html.requestFullscreen||html.mozRequestFullScreen||html.webkitRequestFullScreen)}(),callback:F,enter:function(instance,callback,elem){this.instance=instance;this.callback=callback||F;elem=elem||DOM().html;if(elem.requestFullscreen){elem.requestFullscreen()}else if(elem.mozRequestFullScreen){elem.mozRequestFullScreen()}else if(elem.webkitRequestFullScreen){elem.webkitRequestFullScreen()}},exit:function(callback){this.callback=callback||F;if(doc.exitFullscreen){doc.exitFullscreen()}else if(doc.mozCancelFullScreen){doc.mozCancelFullScreen()}else if(doc.webkitCancelFullScreen){doc.webkitCancelFullScreen()}},instance:null,listen:function(){if(!this.support){return}var handler=function(){if(!_nativeFullscreen.instance){return}var fs=_nativeFullscreen.instance._fullscreen;if(doc.fullscreen||doc.mozFullScreen||doc.webkitIsFullScreen){fs._enter(_nativeFullscreen.callback)}else{fs._exit(_nativeFullscreen.callback)}};doc.addEventListener("fullscreenchange",handler,false);doc.addEventListener("mozfullscreenchange",handler,false);doc.addEventListener("webkitfullscreenchange",handler,false)}},_galleries=[],_instances=[],_hasError=false,_canvas=false,_pool=[],_themeLoad=function(theme){Galleria.theme=theme;$.each(_pool,function(i,instance){if(!instance._initialized){instance._init.call(instance)}});_pool=[]},Utils=function(){return{clearTimer:function(id){$.each(Galleria.get(),function(){this.clearTimer(id)})},addTimer:function(id){$.each(Galleria.get(),function(){this.addTimer(id)})},array:function(obj){return protoArray.slice.call(obj,0)},create:function(className,nodeName){nodeName=nodeName||"div";var elem=doc.createElement(nodeName);elem.className=className;return elem},removeFromArray:function(arr,elem){$.each(arr,function(i,el){if(el==elem){arr.splice(i,1);return false}});return arr},getScriptPath:function(src){src=src||$("script:last").attr("src");var slices=src.split("/");if(slices.length==1){return""}slices.pop();return slices.join("/")+"/"},animate:function(){var transition=function(style){var props="transition WebkitTransition MozTransition OTransition".split(" "),i;if(window.opera){return false}for(i=0;props[i];i++){if(typeof style[props[i]]!=="undefined"){return props[i]}}return false}((doc.body||doc.documentElement).style);var endEvent={MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[transition];var easings={_default:[.25,.1,.25,1],galleria:[.645,.045,.355,1],galleriaIn:[.55,.085,.68,.53],galleriaOut:[.25,.46,.45,.94],ease:[.25,0,.25,1],linear:[.25,.25,.75,.75],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]};var setStyle=function(elem,value,suffix){var css={};suffix=suffix||"transition";$.each("webkit moz ms o".split(" "),function(){css["-"+this+"-"+suffix]=value});elem.css(css)};var clearStyle=function(elem){setStyle(elem,"none","transition");if(Galleria.WEBKIT&&Galleria.TOUCH){setStyle(elem,"translate3d(0,0,0)","transform");if(elem.data("revert")){elem.css(elem.data("revert"));elem.data("revert",null)}}};var change,strings,easing,syntax,revert,form,css;return function(elem,to,options){options=$.extend({duration:400,complete:F,stop:false},options);elem=$(elem);if(!options.duration){elem.css(to);options.complete.call(elem[0]);return}if(!transition){elem.animate(to,options);return}if(options.stop){elem.unbind(endEvent);clearStyle(elem)}change=false;$.each(to,function(key,val){css=elem.css(key);if(Utils.parseValue(css)!=Utils.parseValue(val)){change=true}elem.css(key,css)});if(!change){window.setTimeout(function(){options.complete.call(elem[0])},options.duration);return}strings=[];easing=options.easing in easings?easings[options.easing]:easings._default;syntax=" "+options.duration+"ms"+" cubic-bezier("+easing.join(",")+")";window.setTimeout(function(elem,endEvent,to,syntax){return function(){elem.one(endEvent,function(elem){return function(){clearStyle(elem);options.complete.call(elem[0])}}(elem));if(Galleria.WEBKIT&&Galleria.TOUCH){revert={};form=[0,0,0];$.each(["left","top"],function(i,m){if(m in to){form[i]=Utils.parseValue(to[m])-Utils.parseValue(elem.css(m))+"px";revert[m]=to[m];delete to[m]}});if(form[0]||form[1]){elem.data("revert",revert);strings.push("-webkit-transform"+syntax);setStyle(elem,"translate3d("+form.join(",")+")","transform")}}$.each(to,function(p,val){strings.push(p+syntax)});setStyle(elem,strings.join(","));elem.css(to)}}(elem,endEvent,to,syntax),2)}}(),removeAlpha:function(elem){if(IE<9&&elem){var style=elem.style,currentStyle=elem.currentStyle,filter=currentStyle&&currentStyle.filter||style.filter||"";if(/alpha/.test(filter)){style.filter=filter.replace(/alpha\([^)]*\)/i,"")}}},forceStyles:function(elem,styles){elem=$(elem);if(elem.attr("style")){elem.data("styles",elem.attr("style")).removeAttr("style")}elem.css(styles)},revertStyles:function(){$.each(Utils.array(arguments),function(i,elem){elem=$(elem);elem.removeAttr("style");elem.attr("style","");if(elem.data("styles")){elem.attr("style",elem.data("styles")).data("styles",null)}})},moveOut:function(elem){Utils.forceStyles(elem,{position:"absolute",left:-1e4})},moveIn:function(){Utils.revertStyles.apply(Utils,Utils.array(arguments))},elem:function(elem){if(elem instanceof $){return{$:elem,dom:elem[0]}}else{return{$:$(elem),dom:elem}}},hide:function(elem,speed,callback){callback=callback||F;var el=Utils.elem(elem),$elem=el.$;elem=el.dom;if(!$elem.data("opacity")){$elem.data("opacity",$elem.css("opacity"))}var style={opacity:0};if(speed){var complete=IE<9&&elem?function(){Utils.removeAlpha(elem);elem.style.visibility="hidden";callback.call(elem)}:callback;Utils.animate(elem,style,{duration:speed,complete:complete,stop:true})}else{if(IE<9&&elem){Utils.removeAlpha(elem);elem.style.visibility="hidden"}else{$elem.css(style)}}},show:function(elem,speed,callback){callback=callback||F;var el=Utils.elem(elem),$elem=el.$;elem=el.dom;var saved=parseFloat($elem.data("opacity"))||1,style={opacity:saved};if(speed){if(IE<9){$elem.css("opacity",0);elem.style.visibility="visible"}var complete=IE<9&&elem?function(){if(style.opacity==1){Utils.removeAlpha(elem)}callback.call(elem)}:callback;Utils.animate(elem,style,{duration:speed,complete:complete,stop:true})}else{if(IE<9&&style.opacity==1&&elem){Utils.removeAlpha(elem);elem.style.visibility="visible"}else{$elem.css(style)}}},optimizeTouch:function(){var node,evs,fakes,travel,evt={},handler=function(e){e.preventDefault();evt=$.extend({},e,true)},attach=function(){this.evt=evt},fake=function(){this.handler.call(node,this.evt)};return function(elem){$(elem).bind("touchend",function(e){node=e.target;travel=true;while(node.parentNode&&node!=e.currentTarget&&travel){evs=$(node).data("events");fakes=$(node).data("fakes");if(evs&&"click"in evs){travel=false;e.preventDefault();$(node).click(handler).click();evs.click.pop();$.each(evs.click,attach);$(node).data("fakes",evs.click);delete evs.click}else if(fakes){travel=false;e.preventDefault();$.each(fakes,fake)}node=node.parentNode}})}}(),wait:function(options){options=$.extend({until:FALSE,success:F,error:function(){Galleria.raise("Could not complete wait function.")},timeout:3e3},options);var start=Utils.timestamp(),elapsed,now,fn=function(){now=Utils.timestamp();elapsed=now-start;if(options.until(elapsed)){options.success();return false}if(typeof options.timeout=="number"&&now>=start+options.timeout){options.error();return false}window.setTimeout(fn,10)};window.setTimeout(fn,10)},toggleQuality:function(img,force){if(IE!==7&&IE!==8||!img||img.nodeName.toUpperCase()!="IMG"){return}if(typeof force==="undefined"){force=img.style.msInterpolationMode==="nearest-neighbor"}img.style.msInterpolationMode=force?"bicubic":"nearest-neighbor"},insertStyleTag:function(styles,id){if(id&&$("#"+id).length){return}var style=doc.createElement("style");if(id){style.id=id}DOM().head.appendChild(style);if(style.styleSheet){style.styleSheet.cssText=styles}else{var cssText=doc.createTextNode(styles);style.appendChild(cssText)}},loadScript:function(url,callback){var done=false,script=$("<scr"+"ipt>").attr({src:url,async:true}).get(0);script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){done=true;script.onload=script.onreadystatechange=null;if(typeof callback==="function"){callback.call(this,this)}}};DOM().head.appendChild(script)},parseValue:function(val){if(typeof val==="number"){return val}else if(typeof val==="string"){var arr=val.match(/\-?\d|\./g);return arr&&arr.constructor===Array?arr.join("")*1:0}else{return 0}},timestamp:function(){return(new Date).getTime()},loadCSS:function(href,id,callback){var link,length;$("link[rel=stylesheet]").each(function(){if(new RegExp(href).test(this.href)){link=this;return false}});if(typeof id==="function"){callback=id;id=undef}callback=callback||F;if(link){callback.call(link,link);return link}length=doc.styleSheets.length;if($("#"+id).length){$("#"+id).attr("href",href);length--}else{link=$("<link>").attr({rel:"stylesheet",href:href,id:id}).get(0);var styles=$('link[rel="stylesheet"], style');if(styles.length){styles.get(0).parentNode.insertBefore(link,styles[0])}else{DOM().head.appendChild(link)}if(IE){if(length>=31){Galleria.raise("You have reached the browser stylesheet limit (31)",true);return}}}if(typeof callback==="function"){var $loader=$("<s>").attr("id","galleria-loader").hide().appendTo(DOM().body);Utils.wait({until:function(){return $loader.height()==1},success:function(){$loader.remove();callback.call(link,link)},error:function(){$loader.remove();Galleria.raise("Theme CSS could not load after 20 sec. "+(Galleria.QUIRK?"Your browser is in Quirks Mode, please add a correct doctype.":"Please download the latest theme at http://galleria.io/customer/."),true)},timeout:5e3})}return link}}}(),_transitions=function(){var _slide=function(params,complete,fade,door){var easing=this.getOptions("easing"),distance=this.getStageWidth(),from={left:distance*(params.rewind?-1:1)},to={left:0};if(fade){from.opacity=0;to.opacity=1}else{from.opacity=1}$(params.next).css(from);Utils.animate(params.next,to,{duration:params.speed,complete:function(elems){return function(){complete();elems.css({left:0})}}($(params.next).add(params.prev)),queue:false,easing:easing});if(door){params.rewind=!params.rewind}if(params.prev){from={left:0};to={left:distance*(params.rewind?1:-1)};if(fade){from.opacity=1;to.opacity=0}$(params.prev).css(from);Utils.animate(params.prev,to,{duration:params.speed,queue:false,easing:easing,complete:function(){$(this).css("opacity",0)}})}};return{active:false,init:function(effect,params,complete){if(_transitions.effects.hasOwnProperty(effect)){_transitions.effects[effect].call(this,params,complete)}},effects:{fade:function(params,complete){$(params.next).css({opacity:0,left:0});Utils.animate(params.next,{opacity:1},{duration:params.speed,complete:complete});if(params.prev){$(params.prev).css("opacity",1).show();Utils.animate(params.prev,{opacity:0},{duration:params.speed})}},flash:function(params,complete){$(params.next).css({opacity:0,left:0});if(params.prev){Utils.animate(params.prev,{opacity:0},{duration:params.speed/2,complete:function(){Utils.animate(params.next,{opacity:1},{duration:params.speed,complete:complete})}})}else{Utils.animate(params.next,{opacity:1},{duration:params.speed,complete:complete})}},pulse:function(params,complete){if(params.prev){$(params.prev).hide()}$(params.next).css({opacity:0,left:0}).show();Utils.animate(params.next,{opacity:1},{duration:params.speed,complete:complete})},slide:function(params,complete){_slide.apply(this,Utils.array(arguments))},fadeslide:function(params,complete){_slide.apply(this,Utils.array(arguments).concat([true]))},doorslide:function(params,complete){_slide.apply(this,Utils.array(arguments).concat([false,true]))}}}}();_nativeFullscreen.listen();Galleria=function(){var self=this;this._options={};this._playing=false;this._playtime=5e3;this._active=null;this._queue={length:0};this._data=[];this._dom={};this._thumbnails=[];this._layers=[];this._initialized=false;this._firstrun=false;this._stageWidth=0;this._stageHeight=0;this._target=undef;this._binds=[];this._id=parseInt(Math.random()*1e4,10);var divs="container stage images image-nav image-nav-left image-nav-right "+"info info-text info-title info-description "+"thumbnails thumbnails-list thumbnails-container thumb-nav-left thumb-nav-right "+"loader counter tooltip",spans="current total";$.each(divs.split(" "),function(i,elemId){self._dom[elemId]=Utils.create("galleria-"+elemId)});$.each(spans.split(" "),function(i,elemId){self._dom[elemId]=Utils.create("galleria-"+elemId,"span")});var keyboard=this._keyboard={keys:{UP:38,DOWN:40,LEFT:37,RIGHT:39,RETURN:13,ESCAPE:27,BACKSPACE:8,SPACE:32},map:{},bound:false,press:function(e){var key=e.keyCode||e.which;if(key in keyboard.map&&typeof keyboard.map[key]==="function"){keyboard.map[key].call(self,e)}},attach:function(map){var key,up;for(key in map){if(map.hasOwnProperty(key)){up=key.toUpperCase();if(up in keyboard.keys){keyboard.map[keyboard.keys[up]]=map[key]}else{keyboard.map[up]=map[key]}}}if(!keyboard.bound){keyboard.bound=true;$doc.bind("keydown",keyboard.press)}},detach:function(){keyboard.bound=false;keyboard.map={};$doc.unbind("keydown",keyboard.press)}};var controls=this._controls={0:undef,1:undef,active:0,swap:function(){controls.active=controls.active?0:1},getActive:function(){return controls[controls.active]},getNext:function(){return controls[1-controls.active]}};var carousel=this._carousel={next:self.$("thumb-nav-right"),prev:self.$("thumb-nav-left"),width:0,current:0,max:0,hooks:[],update:function(){var w=0,h=0,hooks=[0];$.each(self._thumbnails,function(i,thumb){if(thumb.ready){w+=thumb.outerWidth||$(thumb.container).outerWidth(true);hooks[i+1]=w;h=Math.max(h,thumb.outerHeight||$(thumb.container).outerHeight(true))}});self.$("thumbnails").css({width:w,height:h});carousel.max=w;carousel.hooks=hooks;carousel.width=self.$("thumbnails-list").width();carousel.setClasses();self.$("thumbnails-container").toggleClass("galleria-carousel",w>carousel.width);carousel.width=self.$("thumbnails-list").width()},bindControls:function(){var i;carousel.next.bind("click",function(e){e.preventDefault();if(self._options.carouselSteps==="auto"){for(i=carousel.current;i<carousel.hooks.length;i++){if(carousel.hooks[i]-carousel.hooks[carousel.current]>carousel.width){carousel.set(i-2);break}}}else{carousel.set(carousel.current+self._options.carouselSteps)}});carousel.prev.bind("click",function(e){e.preventDefault();if(self._options.carouselSteps==="auto"){for(i=carousel.current;i>=0;i--){if(carousel.hooks[carousel.current]-carousel.hooks[i]>carousel.width){carousel.set(i+2);break}else if(i===0){carousel.set(0);break}}}else{carousel.set(carousel.current-self._options.carouselSteps)}})},set:function(i){i=Math.max(i,0);while(carousel.hooks[i-1]+carousel.width>=carousel.max&&i>=0){i--}carousel.current=i;carousel.animate()},getLast:function(i){return(i||carousel.current)-1},follow:function(i){if(i===0||i===carousel.hooks.length-2){carousel.set(i);return}var last=carousel.current;while(carousel.hooks[last]-carousel.hooks[carousel.current]<carousel.width&&last<=carousel.hooks.length){last++}if(i-1<carousel.current){carousel.set(i-1)}else if(i+2>last){carousel.set(i-last+carousel.current+2)}},setClasses:function(){carousel.prev.toggleClass("disabled",!carousel.current);carousel.next.toggleClass("disabled",carousel.hooks[carousel.current]+carousel.width>=carousel.max)},animate:function(to){carousel.setClasses();var num=carousel.hooks[carousel.current]*-1;if(isNaN(num)){return}Utils.animate(self.get("thumbnails"),{left:num},{duration:self._options.carouselSpeed,easing:self._options.easing,queue:false})}};var tooltip=this._tooltip={initialized:false,open:false,timer:"tooltip"+self._id,swapTimer:"swap"+self._id,init:function(){tooltip.initialized=true;var css=".galleria-tooltip{padding:3px 8px;max-width:50%;background:#ffe;color:#000;z-index:3;position:absolute;font-size:11px;line-height:1.3;"+"opacity:0;box-shadow:0 0 2px rgba(0,0,0,.4);-moz-box-shadow:0 0 2px rgba(0,0,0,.4);-webkit-box-shadow:0 0 2px rgba(0,0,0,.4);}";Utils.insertStyleTag(css,"galleria-tooltip");self.$("tooltip").css({opacity:.8,visibility:"visible",display:"none"})},move:function(e){var mouseX=self.getMousePosition(e).x,mouseY=self.getMousePosition(e).y,$elem=self.$("tooltip"),x=mouseX,y=mouseY,height=$elem.outerHeight(true)+1,width=$elem.outerWidth(true),limitY=height+15;var maxX=self.$("container").width()-width-2,maxY=self.$("container").height()-height-2;if(!isNaN(x)&&!isNaN(y)){x+=10;y-=height+8;x=Math.max(0,Math.min(maxX,x));y=Math.max(0,Math.min(maxY,y));if(mouseY<limitY){y=limitY}$elem.css({left:x,top:y})}},bind:function(elem,value){if(Galleria.TOUCH){return}if(!tooltip.initialized){tooltip.init()}var mouseout=function(){self.$("container").unbind("mousemove",tooltip.move);self.clearTimer(tooltip.timer);self.$("tooltip").stop().animate({opacity:0},200,function(){self.$("tooltip").hide();self.addTimer(tooltip.swapTimer,function(){tooltip.open=false},1e3)})};var hover=function(elem,value){tooltip.define(elem,value);$(elem).hover(function(){self.clearTimer(tooltip.swapTimer);self.$("container").unbind("mousemove",tooltip.move).bind("mousemove",tooltip.move).trigger("mousemove");tooltip.show(elem);self.addTimer(tooltip.timer,function(){self.$("tooltip").stop().show().animate({opacity:1});tooltip.open=true},tooltip.open?0:500)},mouseout).click(mouseout)};if(typeof value==="string"){hover(elem in self._dom?self.get(elem):elem,value)}else{$.each(elem,function(elemID,val){hover(self.get(elemID),val)})}},show:function(elem){elem=$(elem in self._dom?self.get(elem):elem);var text=elem.data("tt"),mouseup=function(e){window.setTimeout(function(ev){return function(){tooltip.move(ev)}}(e),10);elem.unbind("mouseup",mouseup)};text=typeof text==="function"?text():text;if(!text){return}self.$("tooltip").html(text.replace(/\s/,"&#160;"));elem.bind("mouseup",mouseup)},define:function(elem,value){if(typeof value!=="function"){var s=value;value=function(){return s}}elem=$(elem in self._dom?self.get(elem):elem).data("tt",value);tooltip.show(elem)}};var fullscreen=this._fullscreen={scrolled:0,crop:undef,active:false,keymap:self._keyboard.map,parseCallback:function(callback,enter){return _transitions.active?function(){if(typeof callback=="function"){callback.call(self)}var active=self._controls.getActive(),next=self._controls.getNext();self._scaleImage(next);self._scaleImage(active);if(enter&&self._options.trueFullscreen){$(active.container).add(next.container).trigger("transitionend")}}:callback},enter:function(callback){callback=fullscreen.parseCallback(callback,true);if(self._options.trueFullscreen&&_nativeFullscreen.support){fullscreen.active=true;Utils.forceStyles(self.get("container"),{width:"100%",height:"100%"});self.rescale();if(Galleria.MAC){if(Galleria.WEBKIT&&!(Galleria.SAFARI&&/version\/[1-5]/.test(NAV))){self.$("container").css("opacity",0).addClass("fullscreen");window.setTimeout(function(){fullscreen.scale();self.$("container").css("opacity",1)},50)}else{self.$("stage").css("opacity",0);window.setTimeout(function(){fullscreen.scale();self.$("stage").css("opacity",1)},4)}}else{self.$("container").addClass("fullscreen")}$win.resize(fullscreen.scale);_nativeFullscreen.enter(self,callback,self.get("container"))}else{fullscreen.scrolled=$win.scrollTop();window.scrollTo(0,0);fullscreen._enter(callback)}},_enter:function(callback){fullscreen.active=true;if(IFRAME){fullscreen.iframe=function(){var elem,refer=doc.referrer,test=doc.createElement("a"),loc=window.location;test.href=refer;if(test.protocol!=loc.protocol||test.hostname!=loc.hostname||test.port!=loc.port){Galleria.raise("Parent fullscreen not available. Iframe protocol, domains and ports must match.");return false}fullscreen.pd=window.parent.document;$(fullscreen.pd).find("iframe").each(function(){var idoc=this.contentDocument||this.contentWindow.document;if(idoc===doc){elem=this;return false}});return elem}()}Utils.hide(self.getActiveImage());if(IFRAME&&fullscreen.iframe){fullscreen.iframe.scrolled=$(window.parent).scrollTop();window.parent.scrollTo(0,0)}var data=self.getData(),options=self._options,inBrowser=!self._options.trueFullscreen||!_nativeFullscreen.support,htmlbody={height:"100%",overflow:"hidden",margin:0,padding:0};if(inBrowser){self.$("container").addClass("fullscreen");Utils.forceStyles(self.get("container"),{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:1e4});Utils.forceStyles(DOM().html,htmlbody);Utils.forceStyles(DOM().body,htmlbody)}if(IFRAME&&fullscreen.iframe){Utils.forceStyles(fullscreen.pd.documentElement,htmlbody);Utils.forceStyles(fullscreen.pd.body,htmlbody);Utils.forceStyles(fullscreen.iframe,$.extend(htmlbody,{width:"100%",height:"100%",top:0,left:0,position:"fixed",zIndex:1e4,border:"none"}))}fullscreen.keymap=$.extend({},self._keyboard.map);self.attachKeyboard({escape:self.exitFullscreen,right:self.next,left:self.prev});fullscreen.crop=options.imageCrop;if(options.fullscreenCrop!=undef){options.imageCrop=options.fullscreenCrop}if(data&&data.big&&data.image!==data.big){var big=new Galleria.Picture,cached=big.isCached(data.big),index=self.getIndex(),thumb=self._thumbnails[index];self.trigger({type:Galleria.LOADSTART,cached:cached,rewind:false,index:index,imageTarget:self.getActiveImage(),thumbTarget:thumb,galleriaData:data});big.load(data.big,function(big){self._scaleImage(big,{complete:function(big){self.trigger({type:Galleria.LOADFINISH,cached:cached,index:index,rewind:false,imageTarget:big.image,thumbTarget:thumb});var image=self._controls.getActive().image;if(image){$(image).width(big.image.width).height(big.image.height).attr("style",$(big.image).attr("style")).attr("src",big.image.src)}}})})}self.rescale(function(){self.addTimer(false,function(){if(inBrowser){Utils.show(self.getActiveImage())}if(typeof callback==="function"){callback.call(self)}},100);self.trigger(Galleria.FULLSCREEN_ENTER)});if(!inBrowser){Utils.show(self.getActiveImage())}else{$win.resize(fullscreen.scale)}},scale:function(){self.rescale()},exit:function(callback){callback=fullscreen.parseCallback(callback);if(self._options.trueFullscreen&&_nativeFullscreen.support){_nativeFullscreen.exit(callback)}else{fullscreen._exit(callback)}},_exit:function(callback){fullscreen.active=false;var inBrowser=!self._options.trueFullscreen||!_nativeFullscreen.support;self.$("container").removeClass("fullscreen");if(inBrowser){Utils.hide(self.getActiveImage());Utils.revertStyles(self.get("container"),DOM().html,DOM().body);window.scrollTo(0,fullscreen.scrolled)}if(IFRAME&&fullscreen.iframe){Utils.revertStyles(fullscreen.pd.documentElement,fullscreen.pd.body,fullscreen.iframe);if(fullscreen.iframe.scrolled){window.parent.scrollTo(0,fullscreen.iframe.scrolled)}}self.detachKeyboard();self.attachKeyboard(fullscreen.keymap);self._options.imageCrop=fullscreen.crop;var big=self.getData().big,image=self._controls.getActive().image;if(!self.getData().iframe&&image&&big&&big==image.src){window.setTimeout(function(src){return function(){image.src=src}}(self.getData().image),1)}self.rescale(function(){self.addTimer(false,function(){if(inBrowser){Utils.show(self.getActiveImage())}if(typeof callback==="function"){callback.call(self)}$win.trigger("resize")},50);self.trigger(Galleria.FULLSCREEN_EXIT)});$win.unbind("resize",fullscreen.scale)}};var idle=this._idle={trunk:[],bound:false,active:false,add:function(elem,to,from,hide){if(!elem){return}if(!idle.bound){idle.addEvent()}elem=$(elem);if(typeof from=="boolean"){hide=from;from={}}from=from||{};var extract={},style;for(style in to){if(to.hasOwnProperty(style)){extract[style]=elem.css(style)}}elem.data("idle",{from:$.extend(extract,from),to:to,complete:true,busy:false});if(!hide){idle.addTimer()}else{elem.css(to)}idle.trunk.push(elem)},remove:function(elem){elem=$(elem);$.each(idle.trunk,function(i,el){if(el&&el.length&&!el.not(elem).length){elem.css(elem.data("idle").from);idle.trunk.splice(i,1)}});if(!idle.trunk.length){idle.removeEvent();self.clearTimer(idle.timer)}},addEvent:function(){idle.bound=true;self.$("container").bind("mousemove click",idle.showAll);if(self._options.idleMode=="hover"){self.$("container").bind("mouseleave",idle.hide)}},removeEvent:function(){idle.bound=false;self.$("container").bind("mousemove click",idle.showAll);if(self._options.idleMode=="hover"){self.$("container").unbind("mouseleave",idle.hide)}},addTimer:function(){if(self._options.idleMode=="hover"){return}self.addTimer("idle",function(){idle.hide()},self._options.idleTime)},hide:function(){if(!self._options.idleMode||self.getIndex()===false||self.getData().iframe){return}self.trigger(Galleria.IDLE_ENTER);var len=idle.trunk.length;$.each(idle.trunk,function(i,elem){var data=elem.data("idle");if(!data){return}elem.data("idle").complete=false;Utils.animate(elem,data.to,{duration:self._options.idleSpeed,complete:function(){if(i==len-1){idle.active=false}}})})},showAll:function(){self.clearTimer("idle");$.each(idle.trunk,function(i,elem){idle.show(elem)})},show:function(elem){var data=elem.data("idle");if(!idle.active||!data.busy&&!data.complete){data.busy=true;self.trigger(Galleria.IDLE_EXIT);self.clearTimer("idle");Utils.animate(elem,data.from,{duration:self._options.idleSpeed/2,complete:function(){idle.active=true;$(elem).data("idle").busy=false;$(elem).data("idle").complete=true}})}idle.addTimer()}};var lightbox=this._lightbox={width:0,height:0,initialized:false,active:null,image:null,elems:{},keymap:false,init:function(){self.trigger(Galleria.LIGHTBOX_OPEN);if(lightbox.initialized){return}lightbox.initialized=true;var elems="overlay box content shadow title info close prevholder prev nextholder next counter image",el={},op=self._options,css="",abs="position:absolute;",prefix="lightbox-",cssMap={overlay:"position:fixed;display:none;opacity:"+op.overlayOpacity+";filter:alpha(opacity="+op.overlayOpacity*100+");top:0;left:0;width:100%;height:100%;background:"+op.overlayBackground+";z-index:99990",box:"position:fixed;display:none;width:400px;height:400px;top:50%;left:50%;margin-top:-200px;margin-left:-200px;z-index:99991",shadow:abs+"background:#000;width:100%;height:100%;",content:abs+"background-color:#fff;top:10px;left:10px;right:10px;bottom:10px;overflow:hidden",info:abs+"bottom:10px;left:10px;right:10px;color:#444;font:11px/13px arial,sans-serif;height:13px",close:abs+"top:10px;right:10px;height:20px;width:20px;background:#fff;text-align:center;cursor:pointer;color:#444;font:16px/22px arial,sans-serif;z-index:99999",image:abs+"top:10px;left:10px;right:10px;bottom:30px;overflow:hidden;display:block;",prevholder:abs+"width:50%;top:0;bottom:40px;cursor:pointer;",nextholder:abs+"width:50%;top:0;bottom:40px;right:-1px;cursor:pointer;",prev:abs+"top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;left:20px;display:none;text-align:center;color:#000;font:bold 16px/36px arial,sans-serif",next:abs+"top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;right:20px;left:auto;display:none;font:bold 16px/36px arial,sans-serif;text-align:center;color:#000",title:"float:left",counter:"float:right;margin-left:8px;"},hover=function(elem){return elem.hover(function(){$(this).css("color","#bbb")},function(){$(this).css("color","#444")})},appends={};if(IE&&IE>7){cssMap.nextholder+="background:#000;filter:alpha(opacity=0);";cssMap.prevholder+="background:#000;filter:alpha(opacity=0);"}$.each(cssMap,function(key,value){css+=".galleria-"+prefix+key+"{"+value+"}"});css+=".galleria-"+prefix+"box.iframe .galleria-"+prefix+"prevholder,"+".galleria-"+prefix+"box.iframe .galleria-"+prefix+"nextholder{"+"width:100px;height:100px;top:50%;margin-top:-70px}";Utils.insertStyleTag(css,"galleria-lightbox");$.each(elems.split(" "),function(i,elemId){self.addElement("lightbox-"+elemId);el[elemId]=lightbox.elems[elemId]=self.get("lightbox-"+elemId)});lightbox.image=new Galleria.Picture;$.each({box:"shadow content close prevholder nextholder",info:"title counter",content:"info image",prevholder:"prev",nextholder:"next"},function(key,val){var arr=[];$.each(val.split(" "),function(i,prop){arr.push(prefix+prop)});appends[prefix+key]=arr});self.append(appends);$(el.image).append(lightbox.image.container);$(DOM().body).append(el.overlay,el.box);Utils.optimizeTouch(el.box);hover($(el.close).bind("click",lightbox.hide).html("&#215;"));$.each(["Prev","Next"],function(i,dir){var $d=$(el[dir.toLowerCase()]).html(/v/.test(dir)?"&#8249;&#160;":"&#160;&#8250;"),$e=$(el[dir.toLowerCase()+"holder"]);$e.bind("click",function(){lightbox["show"+dir]()});if(IE<8||Galleria.TOUCH){$d.show();return}$e.hover(function(){$d.show()},function(e){$d.stop().fadeOut(200)})});$(el.overlay).bind("click",lightbox.hide);if(Galleria.IPAD){self._options.lightboxTransitionSpeed=0}},rescale:function(event){var width=Math.min($win.width()-40,lightbox.width),height=Math.min($win.height()-60,lightbox.height),ratio=Math.min(width/lightbox.width,height/lightbox.height),destWidth=Math.round(lightbox.width*ratio)+40,destHeight=Math.round(lightbox.height*ratio)+60,to={width:destWidth,height:destHeight,"margin-top":Math.ceil(destHeight/2)*-1,"margin-left":Math.ceil(destWidth/2)*-1};
if(event){$(lightbox.elems.box).css(to)}else{$(lightbox.elems.box).animate(to,{duration:self._options.lightboxTransitionSpeed,easing:self._options.easing,complete:function(){var image=lightbox.image,speed=self._options.lightboxFadeSpeed;self.trigger({type:Galleria.LIGHTBOX_IMAGE,imageTarget:image.image});$(image.container).show();$(image.image).animate({opacity:1},speed);Utils.show(lightbox.elems.info,speed)}})}},hide:function(){lightbox.image.image=null;$win.unbind("resize",lightbox.rescale);$(lightbox.elems.box).hide();Utils.hide(lightbox.elems.info);self.detachKeyboard();self.attachKeyboard(lightbox.keymap);lightbox.keymap=false;Utils.hide(lightbox.elems.overlay,200,function(){$(this).hide().css("opacity",self._options.overlayOpacity);self.trigger(Galleria.LIGHTBOX_CLOSE)})},showNext:function(){lightbox.show(self.getNext(lightbox.active))},showPrev:function(){lightbox.show(self.getPrev(lightbox.active))},show:function(index){lightbox.active=index=typeof index==="number"?index:self.getIndex()||0;if(!lightbox.initialized){lightbox.init()}if(!lightbox.keymap){lightbox.keymap=$.extend({},self._keyboard.map);self.attachKeyboard({escape:lightbox.hide,right:lightbox.showNext,left:lightbox.showPrev})}$win.unbind("resize",lightbox.rescale);var data=self.getData(index),total=self.getDataLength(),n=self.getNext(index),ndata,p,i;Utils.hide(lightbox.elems.info);try{for(i=self._options.preload;i>0;i--){p=new Galleria.Picture;ndata=self.getData(n);p.preload("big"in ndata?ndata.big:ndata.image);n=self.getNext(n)}}catch(e){}lightbox.image.isIframe=!!data.iframe;$(lightbox.elems.box).toggleClass("iframe",!!data.iframe);lightbox.image.load(data.iframe||data.big||data.image,function(image){if(image.isIframe){var cw=$(window).width(),ch=$(window).height();if(self._options.maxVideoSize){var r=Math.min(self._options.maxVideoSize/cw,self._options.maxVideoSize/ch);if(r<1){cw*=r;ch*=r}}lightbox.width=cw;lightbox.height=ch}else{lightbox.width=image.original.width;lightbox.height=image.original.height}$(image.image).css({width:image.isIframe?"100%":"100.1%",height:image.isIframe?"100%":"100.1%",top:0,zIndex:99998,opacity:0,visibility:"visible"});lightbox.elems.title.innerHTML=data.title||"";lightbox.elems.counter.innerHTML=index+1+" / "+total;$win.resize(lightbox.rescale);lightbox.rescale()});$(lightbox.elems.overlay).show().css("visibility","visible");$(lightbox.elems.box).show()}};var _timer=this._timer={trunk:{},add:function(id,fn,delay,loop){id=id||(new Date).getTime();loop=loop||false;this.clear(id);if(loop){var old=fn;fn=function(){old();_timer.add(id,fn,delay)}}this.trunk[id]=window.setTimeout(fn,delay)},clear:function(id){var del=function(i){window.clearTimeout(this.trunk[i]);delete this.trunk[i]},i;if(!!id&&id in this.trunk){del.call(this,id)}else if(typeof id==="undefined"){for(i in this.trunk){if(this.trunk.hasOwnProperty(i)){del.call(this,i)}}}}};return this};Galleria.prototype={constructor:Galleria,init:function(target,options){var self=this;options=_legacyOptions(options);this._original={target:target,options:options,data:null};this._target=this._dom.target=target.nodeName?target:$(target).get(0);this._original.html=this._target.innerHTML;_instances.push(this);if(!this._target){Galleria.raise("Target not found",true);return}this._options={autoplay:false,carousel:true,carouselFollow:true,carouselSpeed:400,carouselSteps:"auto",clicknext:false,dailymotion:{foreground:"%23EEEEEE",highlight:"%235BCEC5",background:"%23222222",logo:0,hideInfos:1},dataConfig:function(elem){return{}},dataSelector:"img",dataSort:false,dataSource:this._target,debug:undef,dummy:undef,easing:"galleria",extend:function(options){},fullscreenCrop:undef,fullscreenDoubleTap:true,fullscreenTransition:undef,height:0,idleMode:true,idleTime:3e3,idleSpeed:200,imageCrop:false,imageMargin:0,imagePan:false,imagePanSmoothness:12,imagePosition:"50%",imageTimeout:undef,initialTransition:undef,keepSource:false,layerFollow:true,lightbox:false,lightboxFadeSpeed:200,lightboxTransitionSpeed:200,linkSourceImages:true,maxScaleRatio:undef,maxVideoSize:undef,minScaleRatio:undef,overlayOpacity:.85,overlayBackground:"#0b0b0b",pauseOnInteraction:true,popupLinks:false,preload:2,queue:true,responsive:true,show:0,showInfo:true,showCounter:true,showImagenav:true,swipe:true,thumbCrop:true,thumbEventType:"click",thumbFit:true,thumbMargin:0,thumbQuality:"auto",thumbDisplayOrder:true,thumbnails:true,touchTransition:undef,transition:"fade",transitionInitial:undef,transitionSpeed:400,trueFullscreen:true,useCanvas:false,vimeo:{title:0,byline:0,portrait:0,color:"aaaaaa"},wait:5e3,width:"auto",youtube:{modestbranding:1,autohide:1,color:"white",hd:1,rel:0,showinfo:0}};this._options.initialTransition=this._options.initialTransition||this._options.transitionInitial;if(options&&options.debug===false){DEBUG=false}if(options&&typeof options.imageTimeout==="number"){TIMEOUT=options.imageTimeout}if(options&&typeof options.dummy==="string"){DUMMY=options.dummy}$(this._target).children().hide();if(Galleria.QUIRK){Galleria.raise("Your page is in Quirks mode, Galleria may not render correctly. Please validate your HTML and add a correct doctype.")}if(typeof Galleria.theme==="object"){this._init()}else{_pool.push(this)}return this},_init:function(){var self=this,options=this._options;if(this._initialized){Galleria.raise("Init failed: Gallery instance already initialized.");return this}this._initialized=true;if(!Galleria.theme){Galleria.raise("Init failed: No theme found.",true);return this}$.extend(true,options,Galleria.theme.defaults,this._original.options,Galleria.configure.options);(function(can){if(!("getContext"in can)){can=null;return}_canvas=_canvas||{elem:can,context:can.getContext("2d"),cache:{},length:0}})(doc.createElement("canvas"));this.bind(Galleria.DATA,function(){this._original.data=this._data;this.get("total").innerHTML=this.getDataLength();var $container=this.$("container");if(self._options.height<2){self._userRatio=self._ratio=self._options.height}var num={width:0,height:0};var testHeight=function(){return self.$("stage").height()};Utils.wait({until:function(){num=self._getWH();$container.width(num.width).height(num.height);return testHeight()&&num.width&&num.height>50},success:function(){self._width=num.width;self._height=num.height;self._ratio=self._ratio||num.height/num.width;if(Galleria.WEBKIT){window.setTimeout(function(){self._run()},1)}else{self._run()}},error:function(){if(testHeight()){Galleria.raise("Could not extract sufficient width/height of the gallery container. Traced measures: width:"+num.width+"px, height: "+num.height+"px.",true)}else{Galleria.raise("Could not extract a stage height from the CSS. Traced height: "+testHeight()+"px.",true)}},timeout:typeof this._options.wait=="number"?this._options.wait:false})});this.append({"info-text":["info-title","info-description"],info:["info-text"],"image-nav":["image-nav-right","image-nav-left"],stage:["images","loader","counter","image-nav"],"thumbnails-list":["thumbnails"],"thumbnails-container":["thumb-nav-left","thumbnails-list","thumb-nav-right"],container:["stage","thumbnails-container","info","tooltip"]});Utils.hide(this.$("counter").append(this.get("current"),doc.createTextNode(" / "),this.get("total")));this.setCounter("&#8211;");Utils.hide(self.get("tooltip"));this.$("container").addClass(Galleria.TOUCH?"touch":"notouch");$.each(new Array(2),function(i){var image=new Galleria.Picture;$(image.container).css({position:"absolute",top:0,left:0}).prepend(self._layers[i]=$(Utils.create("galleria-layer")).css({position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:2})[0]);self.$("images").append(image.container);self._controls[i]=image});this.$("images").css({position:"relative",top:0,left:0,width:"100%",height:"100%"});this.$("thumbnails, thumbnails-list").css({overflow:"hidden",position:"relative"});this.$("image-nav-right, image-nav-left").bind("click",function(e){if(options.clicknext){e.stopPropagation()}if(options.pauseOnInteraction){self.pause()}var fn=/right/.test(this.className)?"next":"prev";self[fn]()});$.each(["info","counter","image-nav"],function(i,el){if(options["show"+el.substr(0,1).toUpperCase()+el.substr(1).replace(/-/,"")]===false){Utils.moveOut(self.get(el.toLowerCase()))}});this.load();if(!options.keepSource&&!IE){this._target.innerHTML=""}if(this.get("errors")){this.appendChild("target","errors")}this.appendChild("target","container");if(options.carousel){var count=0,show=options.show;this.bind(Galleria.THUMBNAIL,function(){this.updateCarousel();if(++count==this.getDataLength()&&typeof show=="number"&&show>0){this._carousel.follow(show)}})}if(options.responsive){$win.bind("resize",function(){if(!self.isFullscreen()){self.resize()}})}if(options.swipe){(function(images){var swipeStart=[0,0],swipeStop=[0,0],limitX=30,limitY=100,multi=false,tid=0,data,ev={start:"touchstart",move:"touchmove",stop:"touchend"},getData=function(e){return e.originalEvent.touches?e.originalEvent.touches[0]:e},moveHandler=function(e){if(e.originalEvent.touches&&e.originalEvent.touches.length>1){return}data=getData(e);swipeStop=[data.pageX,data.pageY];if(!swipeStart[0]){swipeStart=swipeStop}if(Math.abs(swipeStart[0]-swipeStop[0])>10){e.preventDefault()}},upHandler=function(e){images.unbind(ev.move,moveHandler);if(e.originalEvent.touches&&e.originalEvent.touches.length||multi){multi=!multi;return}if(Utils.timestamp()-tid<1e3&&Math.abs(swipeStart[0]-swipeStop[0])>limitX&&Math.abs(swipeStart[1]-swipeStop[1])<limitY){e.preventDefault();self[swipeStart[0]>swipeStop[0]?"next":"prev"]()}swipeStart=swipeStop=[0,0]};images.bind(ev.start,function(e){if(e.originalEvent.touches&&e.originalEvent.touches.length>1){return}data=getData(e);tid=Utils.timestamp();swipeStart=swipeStop=[data.pageX,data.pageY];images.bind(ev.move,moveHandler).one(ev.stop,upHandler)})})(self.$("images"));if(options.fullscreenDoubleTap){this.$("stage").bind("touchstart",function(){var last,cx,cy,lx,ly,now,getData=function(e){return e.originalEvent.touches?e.originalEvent.touches[0]:e};return function(e){now=Galleria.utils.timestamp();cx=getData(e).pageX;cy=getData(e).pageY;if(now-last<500&&cx-lx<20&&cy-ly<20){self.toggleFullscreen();e.preventDefault();self.$("stage").unbind("touchend",arguments.callee);return}last=now;lx=cx;ly=cy}}())}}Utils.optimizeTouch(this.get("container"));$.each(Galleria.on.binds,function(i,bind){if($.inArray(bind.hash,self._binds)==-1){self.bind(bind.type,bind.callback)}});return this},addTimer:function(){this._timer.add.apply(this._timer,Utils.array(arguments));return this},clearTimer:function(){this._timer.clear.apply(this._timer,Utils.array(arguments));return this},_getWH:function(){var $container=this.$("container"),$target=this.$("target"),self=this,num={},arr;$.each(["width","height"],function(i,m){if(self._options[m]&&typeof self._options[m]==="number"){num[m]=self._options[m]}else{arr=[Utils.parseValue($container.css(m)),Utils.parseValue($target.css(m)),$container[m](),$target[m]()];if(!self["_"+m]){arr.splice(arr.length,Utils.parseValue($container.css("min-"+m)),Utils.parseValue($target.css("min-"+m)))}num[m]=Math.max.apply(Math,arr)}});if(self._userRatio){num.height=num.width*self._userRatio}return num},_createThumbnails:function(push){this.get("total").innerHTML=this.getDataLength();var src,thumb,data,special,$container,self=this,o=this._options,i=push?this._data.length-push.length:0,chunk=i,thumbchunk=[],loadindex=0,gif=IE<8?"http://upload.wikimedia.org/wikipedia/commons/c/c0/Blank.gif":"data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D",active=function(){var a=self.$("thumbnails").find(".active");if(!a.length){return false}return a.find("img").attr("src")}(),optval=typeof o.thumbnails==="string"?o.thumbnails.toLowerCase():null,getStyle=function(prop){return doc.defaultView&&doc.defaultView.getComputedStyle?doc.defaultView.getComputedStyle(thumb.container,null)[prop]:$container.css(prop)},fake=function(image,index,container){return function(){$(container).append(image);self.trigger({type:Galleria.THUMBNAIL,thumbTarget:image,index:index,galleriaData:self.getData(index)})}},onThumbEvent=function(e){if(o.pauseOnInteraction){self.pause()}var index=$(e.currentTarget).data("index");if(self.getIndex()!==index){self.show(index)}e.preventDefault()},thumbComplete=function(thumb,callback){$(thumb.container).css("visibility","visible");self.trigger({type:Galleria.THUMBNAIL,thumbTarget:thumb.image,index:thumb.data.order,galleriaData:self.getData(thumb.data.order)});if(typeof callback=="function"){callback.call(self,thumb)}},onThumbLoad=function(thumb,callback){thumb.scale({width:thumb.data.width,height:thumb.data.height,crop:o.thumbCrop,margin:o.thumbMargin,canvas:o.useCanvas,complete:function(thumb){var top=["left","top"],arr=["Width","Height"],m,css,data=self.getData(thumb.index),special=data.thumb.split(":");$.each(arr,function(i,measure){m=measure.toLowerCase();if((o.thumbCrop!==true||o.thumbCrop===m)&&o.thumbFit){css={};css[m]=thumb[m];$(thumb.container).css(css);css={};css[top[i]]=0;$(thumb.image).css(css)}thumb["outer"+measure]=$(thumb.container)["outer"+measure](true)});Utils.toggleQuality(thumb.image,o.thumbQuality===true||o.thumbQuality==="auto"&&thumb.original.width<thumb.width*3);if(data.iframe&&special.length==2&&special[0]in _video){_video[special[0]].getThumb(special[1],function(img){return function(src){img.src=src;thumbComplete(thumb,callback)}}(thumb.image))}else if(o.thumbDisplayOrder&&!thumb.lazy){$.each(thumbchunk,function(i,th){if(i===loadindex&&th.ready&&!th.displayed){loadindex++;th.displayed=true;thumbComplete(th,callback);return}})}else{thumbComplete(thumb,callback)}}})};if(!push){this._thumbnails=[];this.$("thumbnails").empty()}for(;this._data[i];i++){data=this._data[i];src=data.thumb||data.image;if((o.thumbnails===true||optval=="lazy")&&(data.thumb||data.image)){thumb=new Galleria.Picture(i);thumb.index=i;thumb.displayed=false;thumb.lazy=false;thumb.video=false;this.$("thumbnails").append(thumb.container);$container=$(thumb.container);$container.css("visibility","hidden");thumb.data={width:Utils.parseValue(getStyle("width")),height:Utils.parseValue(getStyle("height")),order:i,src:src};if(o.thumbFit&&o.thumbCrop!==true){$container.css({width:"auto",height:"auto"})}else{$container.css({width:thumb.data.width,height:thumb.data.height})}special=src.split(":");if(special.length==2&&special[0]in _video){thumb.video=true;thumb.ready=true;thumb.load(gif,{height:thumb.data.height,width:thumb.data.height*1.25},onThumbLoad)}else if(optval=="lazy"){$container.addClass("lazy");thumb.lazy=true;thumb.load(gif,{height:thumb.data.height,width:thumb.data.width})}else{thumb.load(src,onThumbLoad)}if(o.preload==="all"){thumb.preload(data.image)}}else if(data.iframe||optval==="empty"||optval==="numbers"){thumb={container:Utils.create("galleria-image"),image:Utils.create("img","span"),ready:true};if(optval==="numbers"){$(thumb.image).text(i+1)}if(data.iframe){$(thumb.image).addClass("iframe")}this.$("thumbnails").append(thumb.container);window.setTimeout(fake(thumb.image,i,thumb.container),50+i*20)}else{thumb={container:null,image:null}}$(thumb.container).add(o.keepSource&&o.linkSourceImages?data.original:null).data("index",i).bind(o.thumbEventType,onThumbEvent).data("thumbload",onThumbLoad);if(active===src){$(thumb.container).addClass("active")}this._thumbnails.push(thumb)}thumbchunk=this._thumbnails.slice(chunk);return this},lazyLoad:function(index,complete){var arr=index.constructor==Array?index:[index],self=this,thumbnails=this.$("thumbnails").children().filter(function(){return $(this).data("lazy-src")}),loaded=0;$.each(arr,function(i,ind){if(ind>self._thumbnails.length-1){return}var thumb=self._thumbnails[ind],data=thumb.data,special=data.src.split(":"),callback=function(){if(++loaded==arr.length&&typeof complete=="function"){complete.call(self)}},thumbload=$(thumb.container).data("thumbload");if(thumb.video){thumbload.call(self,thumb,callback)}else{thumb.load(data.src,function(thumb){thumbload.call(self,thumb,callback)})}});return this},lazyLoadChunks:function(size,delay){var len=this.getDataLength(),i=0,n=0,arr=[],temp=[],self=this;delay=delay||0;for(;i<len;i++){temp.push(i);if(++n==size||i==len-1){arr.push(temp);n=0;temp=[]}}var init=function(wait){var a=arr.shift();if(a){window.setTimeout(function(){self.lazyLoad(a,function(){init(true)})},delay&&wait?delay:0)}};init(false);return this},_run:function(){var self=this;self._createThumbnails();Utils.wait({timeout:1e4,until:function(){if(Galleria.OPERA){self.$("stage").css("display","inline-block")}self._stageWidth=self.$("stage").width();self._stageHeight=self.$("stage").height();return self._stageWidth&&self._stageHeight>50},success:function(){_galleries.push(self);Utils.show(self.get("counter"));if(self._options.carousel){self._carousel.bindControls()}if(self._options.autoplay){self.pause();if(typeof self._options.autoplay==="number"){self._playtime=self._options.autoplay}self._playing=true}if(self._firstrun){if(self._options.autoplay){self.trigger(Galleria.PLAY)}if(typeof self._options.show==="number"){self.show(self._options.show)}return}self._firstrun=true;if(Galleria.History){Galleria.History.change(function(value){if(isNaN(value)){window.history.go(-1)}else{self.show(value,undef,true)}})}self.trigger(Galleria.READY);Galleria.theme.init.call(self,self._options);$.each(Galleria.ready.callbacks,function(i,fn){if(typeof fn=="function"){fn.call(self,self._options)}});self._options.extend.call(self,self._options);if(/^[0-9]{1,4}$/.test(HASH)&&Galleria.History){self.show(HASH,undef,true)}else if(self._data[self._options.show]){self.show(self._options.show)}if(self._options.autoplay){self.trigger(Galleria.PLAY)}},error:function(){Galleria.raise("Stage width or height is too small to show the gallery. Traced measures: width:"+self._stageWidth+"px, height: "+self._stageHeight+"px.",true)}})},load:function(source,selector,config){var self=this,o=this._options;this._data=[];this._thumbnails=[];this.$("thumbnails").empty();if(typeof selector==="function"){config=selector;selector=null}source=source||o.dataSource;selector=selector||o.dataSelector;config=config||o.dataConfig;if(/^function Object/.test(source.constructor)){source=[source]}if(source.constructor===Array){if(this.validate(source)){this._data=source}else{Galleria.raise("Load failed: JSON Array not valid.")}}else{selector+=",.video,.iframe";$(source).find(selector).each(function(i,elem){elem=$(elem);var data={},parent=elem.parent(),href=parent.attr("href"),rel=parent.attr("rel");if(href&&(elem[0].nodeName=="IMG"||elem.hasClass("video"))&&_videoTest(href)){data.video=href}else if(href&&elem.hasClass("iframe")){data.iframe=href}else{data.image=data.big=href}if(rel){data.big=rel}$.each("big title description link layer".split(" "),function(i,val){if(elem.data(val)){data[val]=elem.data(val)}});self._data.push($.extend({title:elem.attr("title")||"",thumb:elem.attr("src"),image:elem.attr("src"),big:elem.attr("src"),description:elem.attr("alt")||"",link:elem.attr("longdesc"),original:elem.get(0)},data,config(elem)))})}if(typeof o.dataSort=="function"){protoArray.sort.call(this._data,o.dataSort)}else if(o.dataSort=="random"){this._data.sort(function(){return Math.round(Math.random())-.5})}if(this.getDataLength()){this._parseData().trigger(Galleria.DATA)}return this},_parseData:function(){var self=this,current;$.each(this._data,function(i,data){current=self._data[i];if("thumb"in data===false){current.thumb=data.image}if(!"big"in data){current.big=data.image}if("video"in data){var result=_videoTest(data.video);if(result){current.iframe=_video[result.provider].embed(result.id)+function(){if(typeof self._options[result.provider]=="object"){var str="?",arr=[];$.each(self._options[result.provider],function(key,val){arr.push(key+"="+val)});if(result.provider=="youtube"){arr=["wmode=opaque"].concat(arr)}return str+arr.join("&")}return""}();delete current.video;if(!("thumb"in current)||!current.thumb){current.thumb=result.provider+":"+result.id}}}});return this},destroy:function(){this.$("target").data("galleria",null);this.$("container").unbind("galleria");this.get("target").innerHTML=this._original.html;this.clearTimer();Utils.removeFromArray(_instances,this);Utils.removeFromArray(_galleries,this);return this},splice:function(){var self=this,args=Utils.array(arguments);window.setTimeout(function(){protoArray.splice.apply(self._data,args);self._parseData()._createThumbnails()},2);return self},push:function(){var self=this,args=Utils.array(arguments);if(args.length==1&&args[0].constructor==Array){args=args[0]}window.setTimeout(function(){protoArray.push.apply(self._data,args);self._parseData()._createThumbnails(args)},2);return self},_getActive:function(){return this._controls.getActive()},validate:function(data){return true},bind:function(type,fn){type=_patchEvent(type);this.$("container").bind(type,this.proxy(fn));return this},unbind:function(type){type=_patchEvent(type);this.$("container").unbind(type);return this},trigger:function(type){type=typeof type==="object"?$.extend(type,{scope:this}):{type:_patchEvent(type),scope:this};this.$("container").trigger(type);return this},addIdleState:function(elem,styles,from,hide){this._idle.add.apply(this._idle,Utils.array(arguments));return this},removeIdleState:function(elem){this._idle.remove.apply(this._idle,Utils.array(arguments));return this},enterIdleMode:function(){this._idle.hide();return this},exitIdleMode:function(){this._idle.showAll();return this},enterFullscreen:function(callback){this._fullscreen.enter.apply(this,Utils.array(arguments));return this},exitFullscreen:function(callback){this._fullscreen.exit.apply(this,Utils.array(arguments));return this},toggleFullscreen:function(callback){this._fullscreen[this.isFullscreen()?"exit":"enter"].apply(this,Utils.array(arguments));return this},bindTooltip:function(elem,value){this._tooltip.bind.apply(this._tooltip,Utils.array(arguments));return this},defineTooltip:function(elem,value){this._tooltip.define.apply(this._tooltip,Utils.array(arguments));return this},refreshTooltip:function(elem){this._tooltip.show.apply(this._tooltip,Utils.array(arguments));return this},openLightbox:function(){this._lightbox.show.apply(this._lightbox,Utils.array(arguments));return this},closeLightbox:function(){this._lightbox.hide.apply(this._lightbox,Utils.array(arguments));return this},getActiveImage:function(){return this._getActive().image||undef},getActiveThumb:function(){return this._thumbnails[this._active].image||undef},getMousePosition:function(e){return{x:e.pageX-this.$("container").offset().left,y:e.pageY-this.$("container").offset().top}},addPan:function(img){if(this._options.imageCrop===false){return}img=$(img||this.getActiveImage());var self=this,x=img.width()/2,y=img.height()/2,destX=parseInt(img.css("left"),10),destY=parseInt(img.css("top"),10),curX=destX||0,curY=destY||0,distX=0,distY=0,active=false,ts=Utils.timestamp(),cache=0,move=0,position=function(dist,cur,pos){if(dist>0){move=Math.round(Math.max(dist*-1,Math.min(0,cur)));if(cache!==move){cache=move;if(IE===8){img.parent()["scroll"+pos](move*-1)}else{var css={};css[pos.toLowerCase()]=move;img.css(css)}}}},calculate=function(e){if(Utils.timestamp()-ts<50){return}active=true;x=self.getMousePosition(e).x;y=self.getMousePosition(e).y},loop=function(e){if(!active){return}distX=img.width()-self._stageWidth;distY=img.height()-self._stageHeight;destX=x/self._stageWidth*distX*-1;destY=y/self._stageHeight*distY*-1;curX+=(destX-curX)/self._options.imagePanSmoothness;curY+=(destY-curY)/self._options.imagePanSmoothness;position(distY,curY,"Top");position(distX,curX,"Left")};if(IE===8){img.parent().scrollTop(curY*-1).scrollLeft(curX*-1);img.css({top:0,left:0})}this.$("stage").unbind("mousemove",calculate).bind("mousemove",calculate);this.addTimer("pan"+self._id,loop,50,true);return this},proxy:function(fn,scope){if(typeof fn!=="function"){return F}scope=scope||this;return function(){return fn.apply(scope,Utils.array(arguments))}},removePan:function(){this.$("stage").unbind("mousemove");this.clearTimer("pan"+this._id);return this},addElement:function(id){var dom=this._dom;$.each(Utils.array(arguments),function(i,blueprint){dom[blueprint]=Utils.create("galleria-"+blueprint)});return this},attachKeyboard:function(map){this._keyboard.attach.apply(this._keyboard,Utils.array(arguments));return this},detachKeyboard:function(){this._keyboard.detach.apply(this._keyboard,Utils.array(arguments));return this},appendChild:function(parentID,childID){this.$(parentID).append(this.get(childID)||childID);return this},prependChild:function(parentID,childID){this.$(parentID).prepend(this.get(childID)||childID);return this},remove:function(elemID){this.$(Utils.array(arguments).join(",")).remove();return this},append:function(data){var i,j;for(i in data){if(data.hasOwnProperty(i)){if(data[i].constructor===Array){for(j=0;data[i][j];j++){this.appendChild(i,data[i][j])}}else{this.appendChild(i,data[i])}}}return this},_scaleImage:function(image,options){image=image||this._controls.getActive();if(!image){return}var self=this,complete,scaleLayer=function(img){$(img.container).children(":first").css({top:Math.max(0,Utils.parseValue(img.image.style.top)),left:Math.max(0,Utils.parseValue(img.image.style.left)),width:Utils.parseValue(img.image.width),height:Utils.parseValue(img.image.height)})};options=$.extend({width:this._stageWidth,height:this._stageHeight,crop:this._options.imageCrop,max:this._options.maxScaleRatio,min:this._options.minScaleRatio,margin:this._options.imageMargin,position:this._options.imagePosition,iframelimit:this._options.maxVideoSize},options);if(this._options.layerFollow&&this._options.imageCrop!==true){if(typeof options.complete=="function"){complete=options.complete;options.complete=function(){complete.call(image,image);scaleLayer(image)}}else{options.complete=scaleLayer}}else{$(image.container).children(":first").css({top:0,left:0})}image.scale(options);return this},updateCarousel:function(){this._carousel.update();return this},resize:function(measures,complete){if(typeof measures=="function"){complete=measures;measures=undef}measures=$.extend({width:0,height:0},measures);var self=this,$container=this.$("container");$.each(measures,function(m,val){if(!val){$container[m]("auto");measures[m]=self._getWH()[m]}});$.each(measures,function(m,val){$container[m](val)});return this.rescale(complete)},rescale:function(width,height,complete){var self=this;if(typeof width==="function"){complete=width;width=undef}var scale=function(){self._stageWidth=width||self.$("stage").width();self._stageHeight=height||self.$("stage").height();self._scaleImage();if(self._options.carousel){self.updateCarousel()}self.trigger(Galleria.RESCALE);if(typeof complete==="function"){complete.call(self)}};scale.call(self);return this},refreshImage:function(){this._scaleImage();if(this._options.imagePan){this.addPan()}return this},show:function(index,rewind,_history){if(this._queue.length>3||index===false||!this._options.queue&&this._queue.stalled){return}index=Math.max(0,Math.min(parseInt(index,10),this.getDataLength()-1));rewind=typeof rewind!=="undefined"?!!rewind:index<this.getIndex();_history=_history||false;if(!_history&&Galleria.History){Galleria.History.set(index.toString());return}this._active=index;protoArray.push.call(this._queue,{index:index,rewind:rewind});if(!this._queue.stalled){this._show()}return this},_show:function(){var self=this,queue=this._queue[0],data=this.getData(queue.index);if(!data){return}var src=data.iframe||(this.isFullscreen()&&"big"in data?data.big:data.image),active=this._controls.getActive(),next=this._controls.getNext(),cached=next.isCached(src),thumb=this._thumbnails[queue.index],mousetrigger=function(){$(next.image).trigger("mouseup")};var complete=function(data,next,active,queue,thumb){return function(){var win;_transitions.active=false;Utils.toggleQuality(next.image,self._options.imageQuality);self._layers[self._controls.active].innerHTML="";$(active.container).css({zIndex:0,opacity:0}).show();if(active.isIframe){$(active.container).find("iframe").remove()}self.$("container").toggleClass("iframe",!!data.iframe);$(next.container).css({zIndex:1,left:0,top:0}).show();self._controls.swap();if(self._options.imagePan){self.addPan(next.image)}if(data.link||self._options.lightbox||self._options.clicknext){$(next.image).css({cursor:"pointer"}).bind("mouseup",function(e){if(typeof e.which=="number"&&e.which>1){return}if(self._options.clicknext&&!Galleria.TOUCH){if(self._options.pauseOnInteraction){self.pause()}self.next();return}if(data.link){if(self._options.popupLinks){win=window.open(data.link,"_blank")}else{window.location.href=data.link}return}if(self._options.lightbox){self.openLightbox()}})}self._playCheck();self.trigger({type:Galleria.IMAGE,index:queue.index,imageTarget:next.image,thumbTarget:thumb.image,galleriaData:data});protoArray.shift.call(self._queue);self._queue.stalled=false;if(self._queue.length){self._show()}}}(data,next,active,queue,thumb);if(this._options.carousel&&this._options.carouselFollow){this._carousel.follow(queue.index)}if(this._options.preload){var p,i,n=this.getNext(),ndata;try{for(i=this._options.preload;i>0;i--){p=new Galleria.Picture;ndata=self.getData(n);p.preload(this.isFullscreen()&&"big"in ndata?ndata.big:ndata.image);n=self.getNext(n)}}catch(e){}}Utils.show(next.container);next.isIframe=!!data.iframe;$(self._thumbnails[queue.index].container).addClass("active").siblings(".active").removeClass("active");self.trigger({type:Galleria.LOADSTART,cached:cached,index:queue.index,rewind:queue.rewind,imageTarget:next.image,thumbTarget:thumb.image,galleriaData:data});self._queue.stalled=true;next.load(src,function(next){var layer=$(self._layers[1-self._controls.active]).html(data.layer||"").hide();self._scaleImage(next,{complete:function(next){if("image"in active){Utils.toggleQuality(active.image,false)}Utils.toggleQuality(next.image,false);self.removePan();self.setInfo(queue.index);self.setCounter(queue.index);if(data.layer){layer.show();if(data.link||self._options.lightbox||self._options.clicknext){layer.css("cursor","pointer").unbind("mouseup").mouseup(mousetrigger)}}var transition=self._options.transition;$.each({initial:active.image===null,touch:Galleria.TOUCH,fullscreen:self.isFullscreen()},function(type,arg){if(arg&&self._options[type+"Transition"]!==undef){transition=self._options[type+"Transition"];return false}});if(transition in _transitions.effects===false){complete()}else{var params={prev:active.container,next:next.container,rewind:queue.rewind,speed:self._options.transitionSpeed||400};_transitions.active=true;_transitions.init.call(self,transition,params,complete)}self.trigger({type:Galleria.LOADFINISH,cached:cached,index:queue.index,rewind:queue.rewind,imageTarget:next.image,thumbTarget:self._thumbnails[queue.index].image,galleriaData:self.getData(queue.index)})}})})},getNext:function(base){base=typeof base==="number"?base:this.getIndex();return base===this.getDataLength()-1?0:base+1},getPrev:function(base){base=typeof base==="number"?base:this.getIndex();return base===0?this.getDataLength()-1:base-1},next:function(){if(this.getDataLength()>1){this.show(this.getNext(),false)}return this},prev:function(){if(this.getDataLength()>1){this.show(this.getPrev(),true)}return this},get:function(elemId){return elemId in this._dom?this._dom[elemId]:null},getData:function(index){return index in this._data?this._data[index]:this._data[this._active]},getDataLength:function(){return this._data.length},getIndex:function(){return typeof this._active==="number"?this._active:false},getStageHeight:function(){return this._stageHeight},getStageWidth:function(){return this._stageWidth},getOptions:function(key){return typeof key==="undefined"?this._options:this._options[key]},setOptions:function(key,value){if(typeof key==="object"){$.extend(this._options,key)}else{this._options[key]=value}return this},play:function(delay){this._playing=true;
this._playtime=delay||this._playtime;this._playCheck();this.trigger(Galleria.PLAY);return this},pause:function(){this._playing=false;this.trigger(Galleria.PAUSE);return this},playToggle:function(delay){return this._playing?this.pause():this.play(delay)},isPlaying:function(){return this._playing},isFullscreen:function(){return this._fullscreen.active},_playCheck:function(){var self=this,played=0,interval=20,now=Utils.timestamp(),timer_id="play"+this._id;if(this._playing){this.clearTimer(timer_id);var fn=function(){played=Utils.timestamp()-now;if(played>=self._playtime&&self._playing){self.clearTimer(timer_id);self.next();return}if(self._playing){self.trigger({type:Galleria.PROGRESS,percent:Math.ceil(played/self._playtime*100),seconds:Math.floor(played/1e3),milliseconds:played});self.addTimer(timer_id,fn,interval)}};self.addTimer(timer_id,fn,interval)}},setPlaytime:function(delay){this._playtime=delay;return this},setIndex:function(val){this._active=val;return this},setCounter:function(index){if(typeof index==="number"){index++}else if(typeof index==="undefined"){index=this.getIndex()+1}this.get("current").innerHTML=index;if(IE){var count=this.$("counter"),opacity=count.css("opacity");if(parseInt(opacity,10)===1){Utils.removeAlpha(count[0])}else{this.$("counter").css("opacity",opacity)}}return this},setInfo:function(index){var self=this,data=this.getData(index);$.each(["title","description"],function(i,type){var elem=self.$("info-"+type);if(!!data[type]){elem[data[type].length?"show":"hide"]().html(data[type])}else{elem.empty().hide()}});return this},hasInfo:function(index){var check="title description".split(" "),i;for(i=0;check[i];i++){if(!!this.getData(index)[check[i]]){return true}}return false},jQuery:function(str){var self=this,ret=[];$.each(str.split(","),function(i,elemId){elemId=$.trim(elemId);if(self.get(elemId)){ret.push(elemId)}});var jQ=$(self.get(ret.shift()));$.each(ret,function(i,elemId){jQ=jQ.add(self.get(elemId))});return jQ},$:function(str){return this.jQuery.apply(this,Utils.array(arguments))}};$.each(_events,function(i,ev){var type=/_/.test(ev)?ev.replace(/_/g,""):ev;Galleria[ev.toUpperCase()]="galleria."+type});$.extend(Galleria,{IE9:IE===9,IE8:IE===8,IE7:IE===7,IE6:IE===6,IE:IE,WEBKIT:/webkit/.test(NAV),CHROME:/chrome/.test(NAV),SAFARI:/safari/.test(NAV)&&!/chrome/.test(NAV),QUIRK:IE&&doc.compatMode&&doc.compatMode==="BackCompat",MAC:/mac/.test(navigator.platform.toLowerCase()),OPERA:!!window.opera,IPHONE:/iphone/.test(NAV),IPAD:/ipad/.test(NAV),ANDROID:/android/.test(NAV),TOUCH:"ontouchstart"in doc});Galleria.addTheme=function(theme){if(!theme.name){Galleria.raise("No theme name specified")}if(typeof theme.defaults!=="object"){theme.defaults={}}else{theme.defaults=_legacyOptions(theme.defaults)}var css=false,reg;if(typeof theme.css==="string"){$("link").each(function(i,link){reg=new RegExp(theme.css);if(reg.test(link.href)){css=true;_themeLoad(theme);return false}});if(!css){$("script").each(function(i,script){reg=new RegExp("galleria\\."+theme.name.toLowerCase()+"\\.");if(reg.test(script.src)){css=script.src.replace(/[^\/]*$/,"")+theme.css;window.setTimeout(function(){Utils.loadCSS(css,"galleria-theme",function(){_themeLoad(theme)})},1)}})}if(!css){Galleria.raise("No theme CSS loaded")}}else{_themeLoad(theme)}return theme};Galleria.loadTheme=function(src,options){if($("script").filter(function(){return $(this).attr("src")==src}).length){return}var loaded=false,err;$(window).load(function(){if(!loaded){err=window.setTimeout(function(){if(!loaded&&!Galleria.theme){Galleria.raise("Galleria had problems loading theme at "+src+". Please check theme path or load manually.",true)}},2e4)}});Galleria.unloadTheme();Utils.loadScript(src,function(){loaded=true;window.clearTimeout(err)});return Galleria};Galleria.unloadTheme=function(){if(typeof Galleria.theme=="object"){$("script").each(function(i,script){if(new RegExp("galleria\\."+Galleria.theme.name+"\\.").test(script.src)){$(script).remove()}});Galleria.theme=undef}return Galleria};Galleria.get=function(index){if(!!_instances[index]){return _instances[index]}else if(typeof index!=="number"){return _instances}else{Galleria.raise("Gallery index "+index+" not found")}};Galleria.configure=function(key,value){var opts={};if(typeof key=="string"&&value){opts[key]=value;key=opts}else{$.extend(opts,key)}Galleria.configure.options=opts;$.each(Galleria.get(),function(i,instance){instance.setOptions(opts)});return Galleria};Galleria.configure.options={};Galleria.on=function(type,callback){if(!type){return}callback=callback||F;var hash=type+callback.toString().replace(/\s/g,"")+Utils.timestamp();$.each(Galleria.get(),function(i,instance){instance._binds.push(hash);instance.bind(type,callback)});Galleria.on.binds.push({type:type,callback:callback,hash:hash});return Galleria};Galleria.on.binds=[];Galleria.run=function(selector,options){if($.isFunction(options)){options={extend:options}}$(selector||"#galleria").galleria(options);return Galleria};Galleria.addTransition=function(name,fn){_transitions.effects[name]=fn;return Galleria};Galleria.utils=Utils;Galleria.log=function(){var args=Utils.array(arguments);if("console"in window&&"log"in window.console){try{return window.console.log.apply(window.console,args)}catch(e){$.each(args,function(){window.console.log(this)})}}else{return window.alert(args.join("<br>"))}};Galleria.ready=function(fn){if(typeof fn!="function"){return Galleria}$.each(_galleries,function(i,gallery){fn.call(gallery,gallery._options)});Galleria.ready.callbacks.push(fn);return Galleria};Galleria.ready.callbacks=[];Galleria.raise=function(msg,fatal){var type=fatal?"Fatal error":"Error",self=this,css={color:"#fff",position:"absolute",top:0,left:0,zIndex:1e5},echo=function(msg){var html='<div style="padding:4px;margin:0 0 2px;background:#'+(fatal?"811":"222")+';">'+(fatal?"<strong>"+type+": </strong>":"")+msg+"</div>";$.each(_instances,function(){var cont=this.$("errors"),target=this.$("target");if(!cont.length){target.css("position","relative");cont=this.addElement("errors").appendChild("target","errors").$("errors").css(css)}cont.append(html)});if(!_instances.length){$("<div>").css($.extend(css,{position:"fixed"})).append(html).appendTo(DOM().body)}};if(DEBUG){echo(msg);if(fatal){throw new Error(type+": "+msg)}}else if(fatal){if(_hasError){return}_hasError=true;fatal=false;echo("Gallery could not load.")}};Galleria.version=VERSION;Galleria.requires=function(version,msg){msg=msg||"You need to upgrade Galleria to version "+version+" to use one or more components.";if(Galleria.version<version){Galleria.raise(msg,true)}return Galleria};Galleria.Picture=function(id){this.id=id||null;this.image=null;this.container=Utils.create("galleria-image");$(this.container).css({overflow:"hidden",position:"relative"});this.original={width:0,height:0};this.ready=false;this.isIframe=false};Galleria.Picture.prototype={cache:{},show:function(){Utils.show(this.image)},hide:function(){Utils.moveOut(this.image)},clear:function(){this.image=null},isCached:function(src){return!!this.cache[src]},preload:function(src){$(new Image).load(function(src,cache){return function(){cache[src]=src}}(src,this.cache)).attr("src",src)},load:function(src,size,callback){if(typeof size=="function"){callback=size;size=null}if(this.isIframe){var id="if"+(new Date).getTime();this.image=$("<iframe>",{src:src,frameborder:0,id:id,allowfullscreen:true,css:{visibility:"hidden"}})[0];$(this.container).find("iframe,img").remove();this.container.appendChild(this.image);$("#"+id).load(function(self,callback){return function(){window.setTimeout(function(){$(self.image).css("visibility","visible");if(typeof callback=="function"){callback.call(self,self)}},10)}}(this,callback));return this.container}this.image=new Image;if(Galleria.IE8){$(this.image).css("filter","inherit")}var i=0,reload=false,resort=false,$container=$(this.container),$image=$(this.image),onerror=function(){if(!reload){reload=true;window.setTimeout(function(image,src){return function(){image.attr("src",src+"?"+Utils.timestamp())}}($(this),src),50)}else{if(DUMMY){$(this).attr("src",DUMMY)}else{Galleria.raise("Image not found: "+src)}}},onload=function(self,callback,src){return function(){var complete=function(){$(this).unbind("load");self.original=size||{height:this.height,width:this.width};self.container.appendChild(this);self.cache[src]=src;if(typeof callback=="function"){window.setTimeout(function(){callback.call(self,self)},1)}};if(!this.width||!this.height){window.setTimeout(function(img){return function(){if(img.width&&img.height){complete.call(img)}else{if(!resort){$(new Image).load(onload).attr("src",img.src);resort=true}else{Galleria.raise("Could not extract width/height from image: "+img.src+". Traced measures: width:"+img.width+"px, height: "+img.height+"px.")}}}}(this),2)}else{complete.call(this)}}}(this,callback,src);$container.find("iframe,img").remove();$image.css("display","block");Utils.hide(this.image);$.each("minWidth minHeight maxWidth maxHeight".split(" "),function(i,prop){$image.css(prop,/min/.test(prop)?"0":"none")});$image.load(onload).error(onerror).attr("src",src);return this.container},scale:function(options){var self=this;options=$.extend({width:0,height:0,min:undef,max:undef,margin:0,complete:F,position:"center",crop:false,canvas:false,iframelimit:undef},options);if(this.isIframe){var cw=options.width,ch=options.height,nw,nh;if(options.iframelimit){var r=Math.min(options.iframelimit/cw,options.iframelimit/ch);if(r<1){nw=cw*r;nh=ch*r;$(this.image).css({top:ch/2-nh/2,left:cw/2-nw/2,position:"absolute"})}else{$(this.image).css({top:0,left:0})}}$(this.image).width(nw||cw).height(nh||ch).removeAttr("width").removeAttr("height");$(this.container).width(cw).height(ch);options.complete.call(self,self);try{if(this.image.contentWindow){$(this.image.contentWindow).trigger("resize")}}catch(e){}return this.container}if(!this.image){return this.container}var width,height,$container=$(self.container),data;Utils.wait({until:function(){width=options.width||$container.width()||Utils.parseValue($container.css("width"));height=options.height||$container.height()||Utils.parseValue($container.css("height"));return width&&height},success:function(){var newWidth=(width-options.margin*2)/self.original.width,newHeight=(height-options.margin*2)/self.original.height,min=Math.min(newWidth,newHeight),max=Math.max(newWidth,newHeight),cropMap={"true":max,width:newWidth,height:newHeight,"false":min,landscape:self.original.width>self.original.height?max:min,portrait:self.original.width<self.original.height?max:min},ratio=cropMap[options.crop.toString()],canvasKey="";if(options.max){ratio=Math.min(options.max,ratio)}if(options.min){ratio=Math.max(options.min,ratio)}$.each(["width","height"],function(i,m){$(self.image)[m](self[m]=self.image[m]=Math.round(self.original[m]*ratio))});$(self.container).width(width).height(height);if(options.canvas&&_canvas){_canvas.elem.width=self.width;_canvas.elem.height=self.height;canvasKey=self.image.src+":"+self.width+"x"+self.height;self.image.src=_canvas.cache[canvasKey]||function(key){_canvas.context.drawImage(self.image,0,0,self.original.width*ratio,self.original.height*ratio);try{data=_canvas.elem.toDataURL();_canvas.length+=data.length;_canvas.cache[key]=data;return data}catch(e){return self.image.src}}(canvasKey)}var pos={},mix={},getPosition=function(value,measure,margin){var result=0;if(/\%/.test(value)){var flt=parseInt(value,10)/100,m=self.image[measure]||$(self.image)[measure]();result=Math.ceil(m*-1*flt+margin*flt)}else{result=Utils.parseValue(value)}return result},positionMap={top:{top:0},left:{left:0},right:{left:"100%"},bottom:{top:"100%"}};$.each(options.position.toLowerCase().split(" "),function(i,value){if(value==="center"){value="50%"}pos[i?"top":"left"]=value});$.each(pos,function(i,value){if(positionMap.hasOwnProperty(value)){$.extend(mix,positionMap[value])}});pos=pos.top?$.extend(pos,mix):mix;pos=$.extend({top:"50%",left:"50%"},pos);$(self.image).css({position:"absolute",top:getPosition(pos.top,"height",height),left:getPosition(pos.left,"width",width)});self.show();self.ready=true;options.complete.call(self,self)},error:function(){Galleria.raise("Could not scale image: "+self.image.src)},timeout:1e3});return this}};$.extend($.easing,{galleria:function(_,t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t+b}return c/2*((t-=2)*t*t+2)+b},galleriaIn:function(_,t,b,c,d){return c*(t/=d)*t+b},galleriaOut:function(_,t,b,c,d){return-c*(t/=d)*(t-2)+b}});$.fn.galleria=function(options){var selector=this.selector;if(!$(this).length){$(function(){if($(selector).length){$(selector).galleria(options)}else{Galleria.utils.wait({until:function(){return $(selector).length},success:function(){$(selector).galleria(options)},error:function(){Galleria.raise('Init failed: Galleria could not find the element "'+selector+'".')},timeout:5e3})}});return this}return this.each(function(){if($.data(this,"galleria")){$.data(this,"galleria").destroy();$(this).find("*").hide()}$.data(this,"galleria",(new Galleria).init(this,options))})}})(jQuery);

/*!
	Colorbox v1.5.9 - 2014-04-25
	jQuery lightbox and modal window plugin
	(c) 2014 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function ($, document, window) {
	var
	// Default settings object.
	// See http://jacklmoore.com/colorbox for details.
	defaults = {
		// data sources
		html: false,
		photo: false,
		iframe: false,
		inline: false,

		// behavior and appearance
		transition: "elastic",
		speed: 300,
		fadeOut: 300,
		width: false,
		initialWidth: "600",
		innerWidth: false,
		maxWidth: false,
		height: false,
		initialHeight: "450",
		innerHeight: false,
		maxHeight: false,
		scalePhotos: true,
		scrolling: true,
		opacity: 0.9,
		preloading: true,
		className: false,
		overlayClose: true,
		escKey: true,
		arrowKey: true,
		top: false,
		bottom: false,
		left: false,
		right: false,
		fixed: false,
		data: undefined,
		closeButton: true,
		fastIframe: true,
		open: false,
		reposition: true,
		loop: true,
		slideshow: false,
		slideshowAuto: true,
		slideshowSpeed: 2500,
		slideshowStart: "start slideshow",
		slideshowStop: "stop slideshow",
		photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,

		// alternate image paths for high-res displays
		retinaImage: false,
		retinaUrl: false,
		retinaSuffix: '@2x.$1',

		// internationalization
		current: "image {current} of {total}",
		previous: "previous",
		next: "next",
		close: "close",
		xhrError: "This content failed to load.",
		imgError: "This image failed to load.",

		// accessbility
		returnFocus: true,
		trapFocus: true,

		// callbacks
		onOpen: false,
		onLoad: false,
		onComplete: false,
		onCleanup: false,
		onClosed: false,

		rel: function() {
			return this.rel;
		},
		href: function() {
			// using this.href would give the absolute url, when the href may have been inteded as a selector (e.g. '#container')
			return $(this).attr('href');
		},
		title: function() {
			return this.title;
		}
	},


	// Abstracting the HTML and event identifiers for easy rebranding
	colorbox = 'colorbox',
	prefix = 'cbox',
	boxElement = prefix + 'Element',
	
	// Events
	event_open = prefix + '_open',
	event_load = prefix + '_load',
	event_complete = prefix + '_complete',
	event_cleanup = prefix + '_cleanup',
	event_closed = prefix + '_closed',
	event_purge = prefix + '_purge',

	// Cached jQuery Object Variables
	$overlay,
	$box,
	$wrap,
	$content,
	$topBorder,
	$leftBorder,
	$rightBorder,
	$bottomBorder,
	$related,
	$window,
	$loaded,
	$loadingBay,
	$loadingOverlay,
	$title,
	$current,
	$slideshow,
	$next,
	$prev,
	$close,
	$groupControls,
	$events = $('<a/>'), // $({}) would be prefered, but there is an issue with jQuery 1.4.2
	
	// Variables for cached values or use across multiple functions
	settings,
	interfaceHeight,
	interfaceWidth,
	loadedHeight,
	loadedWidth,
	index,
	photo,
	open,
	active,
	closing,
	loadingTimer,
	publicMethod,
	div = "div",
	requests = 0,
	previousCSS = {},
	init;

	// ****************
	// HELPER FUNCTIONS
	// ****************
	
	// Convenience function for creating new jQuery objects
	function $tag(tag, id, css) {
		var element = document.createElement(tag);

		if (id) {
			element.id = prefix + id;
		}

		if (css) {
			element.style.cssText = css;
		}

		return $(element);
	}
	
	// Get the window height using innerHeight when available to avoid an issue with iOS
	// http://bugs.jquery.com/ticket/6724
	function winheight() {
		return window.innerHeight ? window.innerHeight : $(window).height();
	}

	function Settings(element, options) {
		if (options !== Object(options)) {
			options = {};
		}

		this.cache = {};
		this.el = element;

		this.value = function(key) {
			var dataAttr;

			if (this.cache[key] === undefined) {
				dataAttr = $(this.el).attr('data-cbox-'+key);

				if (dataAttr !== undefined) {
					this.cache[key] = dataAttr;
				} else if (options[key] !== undefined) {
					this.cache[key] = options[key];
				} else if (defaults[key] !== undefined) {
					this.cache[key] = defaults[key];
				}
			}

			return this.cache[key];
		};

		this.get = function(key) {
			var value = this.value(key);
			return $.isFunction(value) ? value.call(this.el, this) : value;
		};
	}

	// Determine the next and previous members in a group.
	function getIndex(increment) {
		var
		max = $related.length,
		newIndex = (index + increment) % max;
		
		return (newIndex < 0) ? max + newIndex : newIndex;
	}

	// Convert '%' and 'px' values to integers
	function setSize(size, dimension) {
		return Math.round((/%/.test(size) ? ((dimension === 'x' ? $window.width() : winheight()) / 100) : 1) * parseInt(size, 10));
	}
	
	// Checks an href to see if it is a photo.
	// There is a force photo option (photo: true) for hrefs that cannot be matched by the regex.
	function isImage(settings, url) {
		return settings.get('photo') || settings.get('photoRegex').test(url);
	}

	function retinaUrl(settings, url) {
		return settings.get('retinaUrl') && window.devicePixelRatio > 1 ? url.replace(settings.get('photoRegex'), settings.get('retinaSuffix')) : url;
	}

	function trapFocus(e) {
		if ('contains' in $box[0] && !$box[0].contains(e.target) && e.target !== $overlay[0]) {
			e.stopPropagation();
			$box.focus();
		}
	}

	function setClass(str) {
		if (setClass.str !== str) {
			$box.add($overlay).removeClass(setClass.str).addClass(str);
			setClass.str = str;
		}
	}

	function getRelated(rel) {
		index = 0;
		
		if (rel && rel !== false) {
			$related = $('.' + boxElement).filter(function () {
				var options = $.data(this, colorbox);
				var settings = new Settings(this, options);
				return (settings.get('rel') === rel);
			});
			index = $related.index(settings.el);
			
			// Check direct calls to Colorbox.
			if (index === -1) {
				$related = $related.add(settings.el);
				index = $related.length - 1;
			}
		} else {
			$related = $(settings.el);
		}
	}

	function trigger(event) {
		// for external use
		$(document).trigger(event);
		// for internal use
		$events.triggerHandler(event);
	}

	var slideshow = (function(){
		var active,
			className = prefix + "Slideshow_",
			click = "click." + prefix,
			timeOut;

		function clear () {
			clearTimeout(timeOut);
		}

		function set() {
			if (settings.get('loop') || $related[index + 1]) {
				clear();
				timeOut = setTimeout(publicMethod.next, settings.get('slideshowSpeed'));
			}
		}

		function start() {
			$slideshow
				.html(settings.get('slideshowStop'))
				.unbind(click)
				.one(click, stop);

			$events
				.bind(event_complete, set)
				.bind(event_load, clear);

			$box.removeClass(className + "off").addClass(className + "on");
		}

		function stop() {
			clear();
			
			$events
				.unbind(event_complete, set)
				.unbind(event_load, clear);

			$slideshow
				.html(settings.get('slideshowStart'))
				.unbind(click)
				.one(click, function () {
					publicMethod.next();
					start();
				});

			$box.removeClass(className + "on").addClass(className + "off");
		}

		function reset() {
			active = false;
			$slideshow.hide();
			clear();
			$events
				.unbind(event_complete, set)
				.unbind(event_load, clear);
			$box.removeClass(className + "off " + className + "on");
		}

		return function(){
			if (active) {
				if (!settings.get('slideshow')) {
					$events.unbind(event_cleanup, reset);
					reset();
				}
			} else {
				if (settings.get('slideshow') && $related[1]) {
					active = true;
					$events.one(event_cleanup, reset);
					if (settings.get('slideshowAuto')) {
						start();
					} else {
						stop();
					}
					$slideshow.show();
				}
			}
		};

	}());


	function launch(element) {
		var options;

		if (!closing) {

			options = $(element).data('colorbox');

			settings = new Settings(element, options);
			
			getRelated(settings.get('rel'));

			if (!open) {
				open = active = true; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.

				setClass(settings.get('className'));
				
				// Show colorbox so the sizes can be calculated in older versions of jQuery
				$box.css({visibility:'hidden', display:'block', opacity:''});
				
				$loaded = $tag(div, 'LoadedContent', 'width:0; height:0; overflow:hidden; visibility:hidden');
				$content.css({width:'', height:''}).append($loaded);

				// Cache values needed for size calculations
				interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height();
				interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
				loadedHeight = $loaded.outerHeight(true);
				loadedWidth = $loaded.outerWidth(true);

				// Opens inital empty Colorbox prior to content being loaded.
				var initialWidth = setSize(settings.get('initialWidth'), 'x');
				var initialHeight = setSize(settings.get('initialHeight'), 'y');
				var maxWidth = settings.get('maxWidth');
				var maxHeight = settings.get('maxHeight');

				settings.w = (maxWidth !== false ? Math.min(initialWidth, setSize(maxWidth, 'x')) : initialWidth) - loadedWidth - interfaceWidth;
				settings.h = (maxHeight !== false ? Math.min(initialHeight, setSize(maxHeight, 'y')) : initialHeight) - loadedHeight - interfaceHeight;

				$loaded.css({width:'', height:settings.h});
				publicMethod.position();

				trigger(event_open);
				settings.get('onOpen');

				$groupControls.add($title).hide();

				$box.focus();
				
				if (settings.get('trapFocus')) {
					// Confine focus to the modal
					// Uses event capturing that is not supported in IE8-
					if (document.addEventListener) {

						document.addEventListener('focus', trapFocus, true);
						
						$events.one(event_closed, function () {
							document.removeEventListener('focus', trapFocus, true);
						});
					}
				}

				// Return focus on closing
				if (settings.get('returnFocus')) {
					$events.one(event_closed, function () {
						$(settings.el).focus();
					});
				}
			}

			$overlay.css({
				opacity: parseFloat(settings.get('opacity')) || '',
				cursor: settings.get('overlayClose') ? 'pointer' : '',
				visibility: 'visible'
			}).show();
			
			if (settings.get('closeButton')) {
				$close.html(settings.get('close')).appendTo($content);
			} else {
				$close.appendTo('<div/>'); // replace with .detach() when dropping jQuery < 1.4
			}

			load();
		}
	}

	// Colorbox's markup needs to be added to the DOM prior to being called
	// so that the browser will go ahead and load the CSS background images.
	function appendHTML() {
		if (!$box && document.body) {
			init = false;
			$window = $(window);
			$box = $tag(div).attr({
				id: colorbox,
				'class': $.support.opacity === false ? prefix + 'IE' : '', // class for optional IE8 & lower targeted CSS.
				role: 'dialog',
				tabindex: '-1'
			}).hide();
			$overlay = $tag(div, "Overlay").hide();
			$loadingOverlay = $([$tag(div, "LoadingOverlay")[0],$tag(div, "LoadingGraphic")[0]]);
			$wrap = $tag(div, "Wrapper");
			$content = $tag(div, "Content").append(
				$title = $tag(div, "Title"),
				$current = $tag(div, "Current"),
				$prev = $('<button type="button"/>').attr({id:prefix+'Previous'}),
				$next = $('<button type="button"/>').attr({id:prefix+'Next'}),
				$slideshow = $tag('button', "Slideshow"),
				$loadingOverlay
			);

			$close = $('<button type="button"/>').attr({id:prefix+'Close'});
			
			$wrap.append( // The 3x3 Grid that makes up Colorbox
				$tag(div).append(
					$tag(div, "TopLeft"),
					$topBorder = $tag(div, "TopCenter"),
					$tag(div, "TopRight")
				),
				$tag(div, false, 'clear:left').append(
					$leftBorder = $tag(div, "MiddleLeft"),
					$content,
					$rightBorder = $tag(div, "MiddleRight")
				),
				$tag(div, false, 'clear:left').append(
					$tag(div, "BottomLeft"),
					$bottomBorder = $tag(div, "BottomCenter"),
					$tag(div, "BottomRight")
				)
			).find('div div').css({'float': 'left'});
			
			$loadingBay = $tag(div, false, 'position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;');
			
			$groupControls = $next.add($prev).add($current).add($slideshow);

			$(document.body).append($overlay, $box.append($wrap, $loadingBay));
		}
	}

	// Add Colorbox's event bindings
	function addBindings() {
		function clickHandler(e) {
			// ignore non-left-mouse-clicks and clicks modified with ctrl / command, shift, or alt.
			// See: http://jacklmoore.com/notes/click-events/
			if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				launch(this);
			}
		}

		if ($box) {
			if (!init) {
				init = true;

				// Anonymous functions here keep the public method from being cached, thereby allowing them to be redefined on the fly.
				$next.click(function () {
					publicMethod.next();
				});
				$prev.click(function () {
					publicMethod.prev();
				});
				$close.click(function () {
					publicMethod.close();
				});
				$overlay.click(function () {
					if (settings.get('overlayClose')) {
						publicMethod.close();
					}
				});
				
				// Key Bindings
				$(document).bind('keydown.' + prefix, function (e) {
					var key = e.keyCode;
					if (open && settings.get('escKey') && key === 27) {
						e.preventDefault();
						publicMethod.close();
					}
					if (open && settings.get('arrowKey') && $related[1] && !e.altKey) {
						if (key === 37) {
							e.preventDefault();
							$prev.click();
						} else if (key === 39) {
							e.preventDefault();
							$next.click();
						}
					}
				});

				if ($.isFunction($.fn.on)) {
					// For jQuery 1.7+
					$(document).on('click.'+prefix, '.'+boxElement, clickHandler);
				} else {
					// For jQuery 1.3.x -> 1.6.x
					// This code is never reached in jQuery 1.9, so do not contact me about 'live' being removed.
					// This is not here for jQuery 1.9, it's here for legacy users.
					$('.'+boxElement).live('click.'+prefix, clickHandler);
				}
			}
			return true;
		}
		return false;
	}

	// Don't do anything if Colorbox already exists.
	if ($.colorbox) {
		return;
	}

	// Append the HTML when the DOM loads
	$(appendHTML);


	// ****************
	// PUBLIC FUNCTIONS
	// Usage format: $.colorbox.close();
	// Usage from within an iframe: parent.jQuery.colorbox.close();
	// ****************
	
	publicMethod = $.fn[colorbox] = $[colorbox] = function (options, callback) {
		var settings;
		var $obj = this;

		options = options || {};

		if ($.isFunction($obj)) { // assume a call to $.colorbox
			$obj = $('<a/>');
			options.open = true;
		} else if (!$obj[0]) { // colorbox being applied to empty collection
			return $obj;
		}


		if (!$obj[0]) { // colorbox being applied to empty collection
			return $obj;
		}
		
		appendHTML();

		if (addBindings()) {

			if (callback) {
				options.onComplete = callback;
			}

			$obj.each(function () {
				var old = $.data(this, colorbox) || {};
				$.data(this, colorbox, $.extend(old, options));
			}).addClass(boxElement);

			settings = new Settings($obj[0], options);
			
			if (settings.get('open')) {
				launch($obj[0]);
			}
		}
		
		return $obj;
	};

	publicMethod.position = function (speed, loadedCallback) {
		var
		css,
		top = 0,
		left = 0,
		offset = $box.offset(),
		scrollTop,
		scrollLeft;
		
		$window.unbind('resize.' + prefix);

		// remove the modal so that it doesn't influence the document width/height
		$box.css({top: -9e4, left: -9e4});

		scrollTop = $window.scrollTop();
		scrollLeft = $window.scrollLeft();

		if (settings.get('fixed')) {
			offset.top -= scrollTop;
			offset.left -= scrollLeft;
			$box.css({position: 'fixed'});
		} else {
			top = scrollTop;
			left = scrollLeft;
			$box.css({position: 'absolute'});
		}

		// keeps the top and left positions within the browser's viewport.
		if (settings.get('right') !== false) {
			left += Math.max($window.width() - settings.w - loadedWidth - interfaceWidth - setSize(settings.get('right'), 'x'), 0);
		} else if (settings.get('left') !== false) {
			left += setSize(settings.get('left'), 'x');
		} else {
			left += Math.round(Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2);
		}
		
		if (settings.get('bottom') !== false) {
			top += Math.max(winheight() - settings.h - loadedHeight - interfaceHeight - setSize(settings.get('bottom'), 'y'), 0);
		} else if (settings.get('top') !== false) {
			top += setSize(settings.get('top'), 'y');
		} else {
			top += Math.round(Math.max(winheight() - settings.h - loadedHeight - interfaceHeight, 0) / 2);
		}

		$box.css({top: offset.top, left: offset.left, visibility:'visible'});
		
		// this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
		// but it has to be shrank down around the size of div#colorbox when it's done.  If not,
		// it can invoke an obscure IE bug when using iframes.
		$wrap[0].style.width = $wrap[0].style.height = "9999px";
		
		function modalDimensions() {
			$topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = (parseInt($box[0].style.width,10) - interfaceWidth)+'px';
			$content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = (parseInt($box[0].style.height,10) - interfaceHeight)+'px';
		}

		css = {width: settings.w + loadedWidth + interfaceWidth, height: settings.h + loadedHeight + interfaceHeight, top: top, left: left};

		// setting the speed to 0 if the content hasn't changed size or position
		if (speed) {
			var tempSpeed = 0;
			$.each(css, function(i){
				if (css[i] !== previousCSS[i]) {
					tempSpeed = speed;
					return;
				}
			});
			speed = tempSpeed;
		}

		previousCSS = css;

		if (!speed) {
			$box.css(css);
		}

		$box.dequeue().animate(css, {
			duration: speed || 0,
			complete: function () {
				modalDimensions();
				
				active = false;
				
				// shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
				$wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + "px";
				$wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + "px";
				
				if (settings.get('reposition')) {
					setTimeout(function () {  // small delay before binding onresize due to an IE8 bug.
						$window.bind('resize.' + prefix, publicMethod.position);
					}, 1);
				}

				if (loadedCallback) {
					loadedCallback();
				}
			},
			step: modalDimensions
		});
	};

	publicMethod.resize = function (options) {
		var scrolltop;
		
		if (open) {
			options = options || {};
			
			if (options.width) {
				settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
			}

			if (options.innerWidth) {
				settings.w = setSize(options.innerWidth, 'x');
			}

			$loaded.css({width: settings.w});
			
			if (options.height) {
				settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
			}

			if (options.innerHeight) {
				settings.h = setSize(options.innerHeight, 'y');
			}

			if (!options.innerHeight && !options.height) {
				scrolltop = $loaded.scrollTop();
				$loaded.css({height: "auto"});
				settings.h = $loaded.height();
			}

			$loaded.css({height: settings.h});

			if(scrolltop) {
				$loaded.scrollTop(scrolltop);
			}
			
			publicMethod.position(settings.get('transition') === "none" ? 0 : settings.get('speed'));
		}
	};

	publicMethod.prep = function (object) {
		if (!open) {
			return;
		}
		
		var callback, speed = settings.get('transition') === "none" ? 0 : settings.get('speed');

		$loaded.remove();

		$loaded = $tag(div, 'LoadedContent').append(object);
		
		function getWidth() {
			settings.w = settings.w || $loaded.width();
			settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
			return settings.w;
		}
		function getHeight() {
			settings.h = settings.h || $loaded.height();
			settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
			return settings.h;
		}
		
		$loaded.hide()
		.appendTo($loadingBay.show())// content has to be appended to the DOM for accurate size calculations.
		.css({width: getWidth(), overflow: settings.get('scrolling') ? 'auto' : 'hidden'})
		.css({height: getHeight()})// sets the height independently from the width in case the new width influences the value of height.
		.prependTo($content);
		
		$loadingBay.hide();
		
		// floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.
		
		$(photo).css({'float': 'none'});

		setClass(settings.get('className'));

		callback = function () {
			var total = $related.length,
				iframe,
				complete;
			
			if (!open) {
				return;
			}
			
			function removeFilter() { // Needed for IE8 in versions of jQuery prior to 1.7.2
				if ($.support.opacity === false) {
					$box[0].style.removeAttribute('filter');
				}
			}
			
			complete = function () {
				clearTimeout(loadingTimer);
				$loadingOverlay.hide();
				trigger(event_complete);
				settings.get('onComplete');
			};

			
			$title.html(settings.get('title')).show();
			$loaded.show();
			
			if (total > 1) { // handle grouping
				if (typeof settings.get('current') === "string") {
					$current.html(settings.get('current').replace('{current}', index + 1).replace('{total}', total)).show();
				}
				
				$next[(settings.get('loop') || index < total - 1) ? "show" : "hide"]().html(settings.get('next'));
				$prev[(settings.get('loop') || index) ? "show" : "hide"]().html(settings.get('previous'));
				
				slideshow();
				
				// Preloads images within a rel group
				if (settings.get('preloading')) {
					$.each([getIndex(-1), getIndex(1)], function(){
						var img,
							i = $related[this],
							settings = new Settings(i, $.data(i, colorbox)),
							src = settings.get('href');

						if (src && isImage(settings, src)) {
							src = retinaUrl(settings, src);
							img = document.createElement('img');
							img.src = src;
						}
					});
				}
			} else {
				$groupControls.hide();
			}
			
			if (settings.get('iframe')) {
				iframe = document.createElement('iframe');
				
				if ('frameBorder' in iframe) {
					iframe.frameBorder = 0;
				}
				
				if ('allowTransparency' in iframe) {
					iframe.allowTransparency = "true";
				}

				if (!settings.get('scrolling')) {
					iframe.scrolling = "no";
				}
				
				$(iframe)
					.attr({
						src: settings.get('href'),
						name: (new Date()).getTime(), // give the iframe a unique name to prevent caching
						'class': prefix + 'Iframe',
						allowFullScreen : true // allow HTML5 video to go fullscreen
					})
					.one('load', complete)
					.appendTo($loaded);
				
				$events.one(event_purge, function () {
					iframe.src = "//about:blank";
				});

				if (settings.get('fastIframe')) {
					$(iframe).trigger('load');
				}
			} else {
				complete();
			}
			
			if (settings.get('transition') === 'fade') {
				$box.fadeTo(speed, 1, removeFilter);
			} else {
				removeFilter();
			}
		};
		
		if (settings.get('transition') === 'fade') {
			$box.fadeTo(speed, 0, function () {
				publicMethod.position(0, callback);
			});
		} else {
			publicMethod.position(speed, callback);
		}
	};

	function load () {
		var href, setResize, prep = publicMethod.prep, $inline, request = ++requests;
		
		active = true;
		
		photo = false;
		
		trigger(event_purge);
		trigger(event_load);
		settings.get('onLoad');
		
		settings.h = settings.get('height') ?
				setSize(settings.get('height'), 'y') - loadedHeight - interfaceHeight :
				settings.get('innerHeight') && setSize(settings.get('innerHeight'), 'y');
		
		settings.w = settings.get('width') ?
				setSize(settings.get('width'), 'x') - loadedWidth - interfaceWidth :
				settings.get('innerWidth') && setSize(settings.get('innerWidth'), 'x');
		
		// Sets the minimum dimensions for use in image scaling
		settings.mw = settings.w;
		settings.mh = settings.h;
		
		// Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
		// If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
		if (settings.get('maxWidth')) {
			settings.mw = setSize(settings.get('maxWidth'), 'x') - loadedWidth - interfaceWidth;
			settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
		}
		if (settings.get('maxHeight')) {
			settings.mh = setSize(settings.get('maxHeight'), 'y') - loadedHeight - interfaceHeight;
			settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
		}
		
		href = settings.get('href');
		
		loadingTimer = setTimeout(function () {
			$loadingOverlay.show();
		}, 100);
		
		if (settings.get('inline')) {
			var $target = $(href);
			// Inserts an empty placeholder where inline content is being pulled from.
			// An event is bound to put inline content back when Colorbox closes or loads new content.
			$inline = $('<div>').hide().insertBefore($target);

			$events.one(event_purge, function () {
				$inline.replaceWith($target);
			});

			prep($target);
		} else if (settings.get('iframe')) {
			// IFrame element won't be added to the DOM until it is ready to be displayed,
			// to avoid problems with DOM-ready JS that might be trying to run in that iframe.
			prep(" ");
		} else if (settings.get('html')) {
			prep(settings.get('html'));
		} else if (isImage(settings, href)) {

			href = retinaUrl(settings, href);

			photo = new Image();

			$(photo)
			.addClass(prefix + 'Photo')
			.bind('error',function () {
				prep($tag(div, 'Error').html(settings.get('imgError')));
			})
			.one('load', function () {
				if (request !== requests) {
					return;
				}

				// A small pause because some browsers will occassionaly report a 
				// img.width and img.height of zero immediately after the img.onload fires
				setTimeout(function(){
					var percent;

					$.each(['alt', 'longdesc', 'aria-describedby'], function(i,val){
						var attr = $(settings.el).attr(val) || $(settings.el).attr('data-'+val);
						if (attr) {
							photo.setAttribute(val, attr);
						}
					});

					if (settings.get('retinaImage') && window.devicePixelRatio > 1) {
						photo.height = photo.height / window.devicePixelRatio;
						photo.width = photo.width / window.devicePixelRatio;
					}

					if (settings.get('scalePhotos')) {
						setResize = function () {
							photo.height -= photo.height * percent;
							photo.width -= photo.width * percent;
						};
						if (settings.mw && photo.width > settings.mw) {
							percent = (photo.width - settings.mw) / photo.width;
							setResize();
						}
						if (settings.mh && photo.height > settings.mh) {
							percent = (photo.height - settings.mh) / photo.height;
							setResize();
						}
					}
					
					if (settings.h) {
						photo.style.marginTop = Math.max(settings.mh - photo.height, 0) / 2 + 'px';
					}
					
					if ($related[1] && (settings.get('loop') || $related[index + 1])) {
						photo.style.cursor = 'pointer';
						photo.onclick = function () {
							publicMethod.next();
						};
					}

					photo.style.width = photo.width + 'px';
					photo.style.height = photo.height + 'px';
					prep(photo);
				}, 1);
			});
			
			photo.src = href;

		} else if (href) {
			$loadingBay.load(href, settings.get('data'), function (data, status) {
				if (request === requests) {
					prep(status === 'error' ? $tag(div, 'Error').html(settings.get('xhrError')) : $(this).contents());
				}
			});
		}
	}
		
	// Navigates to the next page/image in a set.
	publicMethod.next = function () {
		if (!active && $related[1] && (settings.get('loop') || $related[index + 1])) {
			index = getIndex(1);
			launch($related[index]);
		}
	};
	
	publicMethod.prev = function () {
		if (!active && $related[1] && (settings.get('loop') || index)) {
			index = getIndex(-1);
			launch($related[index]);
		}
	};

	// Note: to use this within an iframe use the following format: parent.jQuery.colorbox.close();
	publicMethod.close = function () {
		if (open && !closing) {
			
			closing = true;
			open = false;
			trigger(event_cleanup);
			settings.get('onCleanup');
			$window.unbind('.' + prefix);
			$overlay.fadeTo(settings.get('fadeOut') || 0, 0);
			
			$box.stop().fadeTo(settings.get('fadeOut') || 0, 0, function () {
				$box.hide();
				$overlay.hide();
				trigger(event_purge);
				$loaded.remove();
				
				setTimeout(function () {
					closing = false;
					trigger(event_closed);
					settings.get('onClosed');
				}, 1);
			});
		}
	};

	// Removes changes Colorbox made to the document, but does not remove the plugin.
	publicMethod.remove = function () {
		if (!$box) { return; }

		$box.stop();
		$.colorbox.close();
		$box.stop().remove();
		$overlay.remove();
		closing = false;
		$box = null;
		$('.' + boxElement)
			.removeData(colorbox)
			.removeClass(boxElement);

		$(document).unbind('click.'+prefix);
	};

	// A method for fetching the current element Colorbox is referencing.
	// returns a jQuery object.
	publicMethod.element = function () {
		return $(settings.el);
	};

	publicMethod.settings = defaults;

}(jQuery, document, window));

/*! jquery-ui-map rc1 | Johan S�ll Larsson */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('(3(d){d.a=3(a,b){9 c=a.t(".")[0],a=a.t(".")[1];d[c]=d[c]||{};d[c][a]=3(a,b){I.N&&2.15(a,b)};d[c][a].G=d.y({1l:c,1k:a},b);d.F[a]=3(b){9 e="1m"===1p b,h=E.G.1a.18(I,1),i=2;k(e&&"1o"===b.1n(0,1))8 i;2.1d(3(){9 f=d.13(2,a);f||(f=d.13(2,a,l d[c][a](b,2)));k(e&&(f=f[b].Z(f,h),"7"===b||s!=f))i=f});8 i}};d.a("1i.1h",{p:{1g:"1f",1B:5},1E:3(a,b){k(b)2.p[a]=b,2.7("j").A(a,b);M 8 2.p[a]},15:3(a,b){2.w=b;a=a||{};n.y(2.p,a,{17:2.z(a.17)});2.1c();2.10&&2.10()},1c:3(){9 a=2;2.o={j:l 4.6.1u(a.w,a.p),K:[],W:[],U:[]};4.6.r.1x(a.o.j,"1v",3(){d(a.w).19("1w",a.o.j)});a.u(a.p.1r,a.o.j)},R:3(a){9 b=2.7("V",l 4.6.1s);b.y(2.z(a));2.7("j").1t(b)},1y:3(a){9 b=2.7("j").1D();8 b?b.1F(a.X()):!1},1C:3(a,b){2.7("j").1z[b].Y(2.D(a))},1A:3(a,b){a.j=2.7("j");a.Q=2.z(a.Q);9 c=l(a.1q||4.6.1e)(a),g=2.7("K");c.O?g[c.O]=c:g.Y(c);c.V&&2.R(c.X());2.u(b,a.j,c);8 d(c)},x:3(a){2.v(2.7(a));2.A(a,[])},v:3(a){B(9 b H a)a.S(b)&&(a[b]m 4.6.J?(4.6.r.16(a[b]),a[b].P&&a[b].P(s)):a[b]m E&&2.v(a[b]),a[b]=s)},1j:3(a,b,c){a=2.7(a);b.q=d.1G(b.q)?b.q:[b.q];B(9 g H a)k(a.S(g)){9 e=!1,h;B(h H b.q)k(-1<d.1Z(b.q[h],a[g][b.25]))e=!0;M k(b.T&&"20"===b.T){e=!1;23}c(a[g],e)}},7:3(a,b){9 c=2.o;k(!c[a]){k(-1<a.22(">")){B(9 d=a.1b(/ /g,"").t(">"),e=0;e<d.N;e++){k(!c[d[e]])k(b)c[d[e]]=e+1<d.N?[]:b;M 8 s;c=c[d[e]]}8 c}b&&!c[a]&&2.A(a,b)}8 c[a]},24:3(a,b,c){9 d=2.7("L",a.1Y||l 4.6.21);d.26(a);d.2b(2.7("j"),2.D(b));2.u(c,d)},2a:3(){s!=2.7("L")&&2.7("L").28()},A:3(a,b){2.o[a]=b},29:3(){9 a=2.7("j"),b=a.27();d(a).12("2c");a.1M(b)},1L:3(){2.x("K");2.x("U");2.x("W");2.v(2.o);n.1O(2.w,2.1N)},u:3(a){a&&d.1I(a)&&a.Z(2,E.G.1a.18(I,1))},z:3(a){k(!a)8 l 4.6.C(0,0);k(a m 4.6.C)8 a;a=a.1b(/ /g,"").t(",");8 l 4.6.C(a[0],a[1])},D:3(a){8!a?s:a m n?a[0]:a m 1H?a:d("#"+a)[0]}});n.F.y({12:3(a){4.6.r.19(2[0],a);8 2},11:3(a,b,c){4.6&&2[0]m 4.6.J?4.6.r.1K(2[0],a,b):c?2.14(a,b,c):2.14(a,b);8 2},1J:3(a){4.6&&2[0]m 4.6.J?a?4.6.r.1P(2[0],a):4.6.r.16(2[0]):2.1V(a);8 2}});n.1d("1U 1X 1W 1R 1Q 1T 1S".t(" "),3(a,b){n.F[b]=3(a,d){8 2.11(b,a,d)}})})(n);',62,137,'||this|function|google||maps|get|return|var||||||||||map|if|new|instanceof|jQuery|instance|options|value|event|null|split|_call|_c|el|clear|extend|_latLng|set|for|LatLng|_unwrap|Array|fn|prototype|in|arguments|MVCObject|markers|iw|else|length|id|setMap|position|addBounds|hasOwnProperty|operator|services|bounds|overlays|getPosition|push|apply|_init|addEventListener|triggerEvent|data|bind|_setup|clearInstanceListeners|center|call|trigger|slice|replace|_create|each|Marker|roadmap|mapTypeId|gmap|ui|find|pluginName|namespace|string|substring|_|typeof|marker|callback|LatLngBounds|fitBounds|Map|bounds_changed|init|addListenerOnce|inViewport|controls|addMarker|zoom|addControl|getBounds|option|contains|isArray|Object|isFunction|removeEventListener|addListener|destroy|setCenter|name|removeData|clearListeners|mouseout|mouseover|dragend|drag|click|unbind|dblclick|rightclick|infoWindow|inArray|AND|InfoWindow|indexOf|break|openInfoWindow|property|setOptions|getCenter|close|refresh|closeInfoWindow|open|resize'.split('|'),0,{}));

(function($) {

    jQuery.fn.scheduler = function(options)
    {
        var rawData;
        var parsedData;
        var container;
        var hourWidth;
        var calData = null;
        
        var config =
        {
            'baseJsonUrl'   : (location.protocol + "//" + location.hostname + (location.port && ":" + location.port) + "/"),
            'lang'          : '',
            'day'           : 0,
            'month'         : 0,
            'year'          : 0,
            'dayGrid'       : [],
            'hourGrid'      : ['10','11','12','13','14','15','16','17','18','19','20','21','22','23','00','01'],
            'width'         : '100%',
            'height'        : '',
            'loadHtml'      : '<img class="loading" src="/images/bx_loader.gif" alt="Dohvaćanje podataka rasporeda..." />',
            'errorHtml'     : 'Greška kod dohvaćanja kalendara.'
        };
        
        if (options){$.extend(config, options);}

        
        
        return this.each(function()
        {
            container = $(this);
            
            onInit();
            
            
            
            
            function onInit()
            {
                harvestUrl();
                fetchData();
            }
            
            function harvestUrl()
            {
                // get from url
                var url = window.location.pathname.split( '/' );
                config.lang = url[1];
                config.year = url[2];
            }
            
            function fetchData()
            {
                container.html( config.loadHtml );

                $.ajax
                ({
                    dataType: "json",
                    url: config.baseJsonUrl + config.lang + '/' + config.year + '/schedule.json'
                })
                .done(function(data)
                {
                    rawData = data;
                    loadContent( config.day, config.month );
                })
                .fail(function()
                {
                    showError();
                });
            }
                
            function loadContent( pDay, pMonth )
            {
                // kroz parametre / klik na dan kalendara
                if( parseInt(pDay) > 0 && parseInt(pMonth) > 0 )
                {
                    config.day = pDay;
                    config.month = pMonth;
                }
                // kroz hash url-a
                else if( location.hash != '' )
                {
                    var hash = location.hash.slice(1);
                    var arrHash = hash.split('-');
                    if( arrHash.length == 3 )
                    {
                        config.month = parseInt(arrHash[1]);
                        config.day = parseInt(arrHash[2]);
                    }
                }
                // default prvi dan iz json-a
                else{
                    var arrData = rawData.schedule.dates[0].split('-');
                    
                    config.month = parseInt(arrData[1]);
                    config.day = parseInt(arrData[2]);
                }
                
                parsedData = [];
                parseData();
                populateData();
            }
            
            function getDate(pDateString)
            {
                var timestamp = new Date(pDateString).getTime() / 1000 + 60*60*2;
                
                // Multiply by 1000 because JS works in milliseconds instead of the UNIX seconds
                var date = new Date(timestamp * 1000);
                     
                var year    = date.getUTCFullYear();
                var month   = date.getUTCMonth() + 1; // getMonth() is zero-indexed, so we'll increment to get the correct month number
                var day     = date.getUTCDate();
                var hours   = date.getUTCHours();
                var minutes = date.getUTCMinutes();
                var seconds = date.getUTCSeconds();
                     
                /*
                month   = (month < 10) ? '0' + month : month;
                day     = (day < 10) ? '0' + day : day;
                hours   = (hours < 10) ? '0' + hours : hours;
                minutes = (minutes < 10) ? '0' + minutes : minutes;
                seconds = (seconds < 10) ? '0' + seconds: seconds;
                */
                
                //return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
                var arr = [];
                arr[0] = year;
                arr[1] = month;
                arr[2] = day;
                arr[3] = hours;
                arr[4] = minutes;
                
                return arr;
            };
            
            function getDateJson(d)
            {
                m = d.match(/(\d{4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2}):(\d{2})/);
                return new Date(+m[1],+m[2]-1,+m[3],+m[4],+m[5],+m[6]);
            };


            
            function parseData()
            {
                parsedData.locations = [];
                parsedData.pro = [];
                parsedData.side = [];
                
                // kreiraj dane
                $.each( rawData.schedule.dates,
                    function(i, date)
                    {
                        config.dayGrid[i] = date;
                    }
                );
                
                // kreiraj lokacije
                $.each( rawData.schedule.locations,
                    function(i, s_location)
                    {
                        var objLocation = {};
                        objLocation.type = 'location';
                        objLocation.title = s_location.title;
                        objLocation.id = s_location.id;
                        objLocation.slots = [];
                        parsedData.locations[s_location.id] = objLocation;
                        
                        var objPro = {};
                        objPro.type = 'location';
                        objPro.title = s_location.title;
                        objPro.id = s_location.id;
                        objPro.slots = [];
                        parsedData.pro[s_location.id] = objPro;
                        
                        var objSide = {};
                        objSide.type = 'location';
                        objSide.title = s_location.title;
                        objSide.id = s_location.id;
                        objSide.slots = [];
                        parsedData.side[s_location.id] = objSide;
                    }
                );

                // popuni lokacije sa slotovima
                $.each( rawData.schedule.slots,
                    function(s_i, slot)
                    {
                        var objSlot = {};
                        var slot_date_start = getDateJson(slot.starts_at);
                        var slot_date_end = getDateJson(slot.ends_at);
                        slot.year = slot_date_start.getFullYear();
                        slot.month = slot_date_start.getMonth()+1;
                        slot.day = slot_date_start.getDate();
                        slot.start_hour = slot.start_hour_position = slot_date_start.getHours();
                        slot.start_minute = slot_date_start.getMinutes();
                        slot.end_hour = slot.end_hour_position = slot_date_end.getHours();
                        slot.end_minute = slot_date_end.getMinutes();
                        // ako je vrijeme ponoc, pomakni datum za -1 dan i postavi vrijeme na 24
                        if( slot.start_hour == 0 ){
                            var slot_date_new = new Date( new Date(slot_date_start).valueOf() - 1*24*60*60*1000)
                            slot.month = slot_date_new.getMonth()+1;
                            slot.day = slot_date_new.getDate();
                            slot.start_hour_position = 24;
                        }
                        // ako je vrijeme ponoc, pomakni datum za -1 dan i postavi vrijeme na 24
                        
                        if( slot.end_hour == 0 ){
                            var slot_date_new = new Date( new Date(slot_date_end).valueOf() - 1*24*60*60*1000)
                            slot.month = slot_date_new.getMonth()+1;
                            slot.day = slot_date_new.getDate();
                            slot.end_hour_position = 24;
                        }
                        
                        

                        
                        // dodaj slot u lokaciju ako je na definirani dan
                        if( slot.day == config.day && slot.month == config.month && slot.year == config.year )
                        {
                            objSlot.type = 'slot';
                            objSlot.category = slot.category;
                            objSlot.title = slot.title;
                            objSlot.url = slot.url;
                            objSlot.location = slot.location;
                            objSlot.program = slot.program;
                            objSlot.ticket = ( config.lang == 'hr' ) ? slot.ticket_hr : slot.ticket_en;
                            objSlot.children = slot.for_children;
                            objSlot.style = slot.style;
                            
                            objSlot.start_hour = slot.start_hour;
                            objSlot.start_minute = slot.start_minute;
                            objSlot.start_hour_position = slot.start_hour_position;
                            objSlot.end_hour = slot.end_hour;
                            objSlot.end_minute = slot.end_minute;
                            objSlot.end_hour_position = slot.end_hour_position;
                            
                            objSlot.parsedFilms = [];
                            objSlot.parsedEvents = [];
                            
                            for( var i in slot.films ){
                                var filmSet = getDataById(rawData.schedule.films, slot.films[i] );
                                if( filmSet != null ){
                                    objSlot.parsedFilms[ i ] = filmSet;
                                }
                            }
                            for( var i in slot.events ){
                                var eventSet = getDataById(rawData.schedule.side_events, slot.side_events[i] );
                                if( eventSet != null )
                                {
                                    objSlot.parsedEvents[ i ] = eventSet;
                                }
                            }
                            
                            // official
                            if( slot.category == 1 || slot.official == true ){
                                parsedData.locations[slot.location] && (parsedData.locations[slot.location].slots[s_i] = objSlot);
                            }
                            
                            // pro
                            if( slot.category == 2 && slot.official == false )
                            {
                                parsedData.pro[slot.location] && (parsedData.pro[slot.location].slots[s_i] = objSlot);
                            }
                            // side
                            if( slot.category == 3 && slot.official == false )
                            {
                                parsedData.side[slot.location] && (parsedData.side[slot.location].slots[s_i] = objSlot);
                            }
                        }
                    }
                );
                
                // ukloni lokacije koje nemaju ni jedan slot
                for( var loc_i in parsedData.locations )
                {
                    var objLoc = parsedData.locations[loc_i];
                    if( objLoc.slots.length <= 0 )
                    {
                        delete parsedData.locations[objLoc.id];
                    }
                }
                // ukloni pro koje nemaju ni jedan slot
                for( var pro_i in parsedData.pro )
                {
                    var objPro = parsedData.pro[pro_i];
                    if( objPro.slots.length <= 0 )
                    {
                        delete parsedData.pro[objPro.id];
                    }
                }
                // ukloni side koje nemaju ni jedan slot
                for( var side_i in parsedData.side )
                {
                    var objSide = parsedData.side[side_i];
                    if( objSide.slots.length <= 0 )
                    {
                        delete parsedData.side[objSide.id];
                    }
                }

            }
            
            
            function populateData()
            {
                container.html('');
                
                var str = '';
                
                // top days
                str += '<div class="top-days-day"></div>';
                str += '<ul class="top-days" >';
                $.each( config.dayGrid, function( i, item )
                {
                    var activeClass = ( isActiveDay(item) ) ? 'active' : '';
                    str += '<li class=" t-bld t-smallcaps t-lcase ' + activeClass + '">';
                    str += '<div class="wrapper">';
                    str += '<a class="button-day" data-date-day="' + item + '" >'+ getTopDayName( item ) +'</a>';
                    str += '</div>';
                    str += '</li>';
                });
                str += '</ul>';
                
                // official program
                
                $.each(rawData.schedule.locations, function(i, location){
                    var dd_location = parsedData.locations[location.id];
                    if(!dd_location){return;}
                    
                    str += '<div class="location-row" data-row-type="location" data-location-id="'+dd_location.id+'" >';
                    str += '<div class="location"><p class="t-bld t-smallcaps t-lcase lh-12">'+dd_location.title+'</p></div>';
                    str += '<div class="days" >';
                    
                    for( var ls in dd_location.slots )
                    {
                        var dd_slot = dd_location.slots[ls];
                        str += addSlot( dd_slot );
                    }
                    
                    str += '</div>';
                    str += '</div>';

                });
                
                // pro
                if( realLength(parsedData.pro) > 0 )
                {
                    str += '<div class="location-row title" data-row-type="pro" >';
                    str += '<div class="location"><p class="t-bld t-14 t-smallcaps t-lcase lh-12">animafest pro</p></div>';
                    str += '<div class="days" ></div>';
                    str += '</div>';
                }
                for( var i in parsedData.pro )
                {
                    var dd_pro = parsedData.pro[i];
                    
                    str += '<div class="location-row" data-row-type="pro" data-location-id="'+dd_pro.id+'" >';
                    str += '<div class="location"><p class="t-bld t-smallcaps t-lcase lh-12">'+dd_pro.title+'</p></div>';
                    str += '<div class="days" >';
                    
                    for( var ps in dd_pro.slots )
                    {
                        var pd_slot = dd_pro.slots[ps];
                        str += addSlot( pd_slot );
                    }
                    
                    str += '</div>';
                    str += '</div>';
                }
                
                // side
                if( realLength(parsedData.side) > 0 )
                {
                    str += '<div class="location-row title" data-row-type="side" >';
                    str += '<div class="location"><p class="t-bld t-14 t-smallcaps t-lcase lh-12">';
                    str += ( config.lang == 'hr' ) ? 'popratna događanja' : 'special events';
                    str += '</p></div>';
                    str += '<div class="days" ></div>';
                    str += '</div>';
                }
                for( var i in parsedData.side )
                {
                    var dd_side = parsedData.side[i];
                    
                    str += '<div class="location-row" data-row-type="side" data-location-id="'+dd_side.id+'" >';
                    str += '<div class="location"><p class="t-bld t-smallcaps t-lcase lh-12">'+dd_side.title+'</p></div>';
                    str += '<div class="days" >';
                    
                    for( var ss in dd_side.slots )
                    {
                        var sd_slot = dd_side.slots[ss];
                        str += addSlot( sd_slot );
                    }
                    
                    str += '</div>';
                    str += '</div>';
                }
                
                // legend
                var legendData = ( rawData.schedule.legend != ''  ) ? rawData.schedule.legend : '';
                str += '<div class="location-row" data-row-type="legend" >';
                str += '<div class="location legend" >&nbsp;</div>';
                str += '<div class="days" >'+ legendData +'</div>';
                str += '</div>';
                
                // hours
                str += '<ul class="hours" >';
                $.each( config.hourGrid, function( i, item )
                {
                    var hour = ( item == 0 ) ? 24 : item;
                    str += '<li data-hour="'+hour+'" data-index="'+i+'"><span>' + item + ' h</span></li>';
                });
                str += '</ul>';
                
                // add html
                container.append( str );
                
                // positions + dimensions
                makeLayout();
            }
                       
            function makeLayout()
            {
                // master layout
                $('body.program #content').width(1160);
                
                // izracunaj sirinu jednog sata
                hourWidth = Math.floor( container.children('.location-row').first().children('.days').width() / config.hourGrid.length );
                
                // dimenzije dana
                $('.top-days li').css( 'width', Math.floor(hourWidth*2) );
                
                // dimenzije satova
                $('.hours li').css( 'width', Math.floor(hourWidth) );
                
                // pomakni sva dogadjanja na svoja vremena
                $('.day').each( function(){
                    positionElementX( $(this) );
                })
                
                // provjeri da li se preklapaju pa ako da, pomakni red niže i povećaj visinu kontainera
                $('.location-row').each( function(){
                    positionElements( $(this) );
                });
                
                var contentH = 0;
                container.children('.location-row').each(function(){ contentH += $(this).outerHeight(); });
                $('#content').height( $('ul.top-days').outerHeight() + contentH );
                $('.hours li').css( 'height', $('#content').innerHeight() - $('ul.top-days').outerHeight() );
                
                // set behaviours
                addBehaviours();
            }
            



            function getDataById( pData, pId )
            {
                var objRet = null;
                
                for( var i in pData )
                {
                    if( pData[i].id == pId )
                    {
                        objRet = pData[i];
                    }
                }
                
                return objRet;
            }
            
            function isActiveDay( pDate )
            {
                var arrDate = pDate.split('-');
                
                // check hash split size
                if( parseInt(arrDate[0]) == config.year && parseInt(arrDate[1]) == config.month && parseInt(arrDate[2]) == config.day ){
                    return true;
                }
                else{
                    return false;
                }
            }
            
            function getTopDayName( pDate )
            {
                var arrDate = pDate.split('-');
                
                var weekday = new Array();
                weekday['hr'] = new Array();
                weekday['en'] = new Array();
                
                weekday['hr'][0]=  "Nedjelja";
                weekday['hr'][1] = "Ponedjeljak";
                weekday['hr'][2] = "Utorak";
                weekday['hr'][3] = "Srijeda";
                weekday['hr'][4] = "Četvrtak";
                weekday['hr'][5] = "Petak";
                weekday['hr'][6] = "Subota";
                
                weekday['en'][0]=  "Sunday";
                weekday['en'][1] = "Monday";
                weekday['en'][2] = "Tuesday";
                weekday['en'][3] = "Wednesday";
                weekday['en'][4] = "Thursday";
                weekday['en'][5] = "Friday";
                weekday['en'][6] = "Saturday";
                
                var jsDate = new Date( arrDate[0],arrDate[1]-1,arrDate[2] );
                
                var str = '';
                str += weekday[config.lang][jsDate.getDay()];
                str += '<br />';
                str += arrDate[2] + '.';
                str += arrDate[1] + '.';
                
                return str;
            }
            
            function getLeadingZero( pNumber )
            {
                return ( pNumber > 9 ) ? pNumber : '0' + pNumber;
            }
            
            function addSlot( pSlot )
            {
                if( pSlot == undefined ){
                    return '';
                }
                
                var str = '';
                
                str += '<div class="day animate lh-14" data-start-hour="'+pSlot.start_hour_position+'" data-start-minute="'+pSlot.start_minute+'" data-end-hour="'+pSlot.end_hour_position+'" data-end-minute="'+pSlot.end_minute+'" data-children="'+pSlot.children +'" data-style="'+pSlot.style+'" >';
                str += '<div class="bar estyle_'+pSlot.style+'"></div>';
                str += '<div class="time t-nrm">' + getLeadingZero(pSlot.start_hour) + ':' + getLeadingZero(pSlot.start_minute) + 'h</div>';
                str += '<div class="title t-nrm t-smallcaps t-lcase">' + pSlot.title + '</div>';
                
                if( pSlot.children != '' && pSlot.children == true ){
                    str += '<div class="for-children"></div>';
                }
                if( pSlot.ticket != '' && pSlot.ticket != null ){
                    str += '<a class="buy-top" href="'+pSlot.ticket+'"><img class="icon-buy" src="'+baseUrl+'images/icons/buy_ticket.png" alt="buy" /></a>';
                }
                if( pSlot.ticket == '' && pSlot.category == 1 ){
                    //str += '<span class="buy-top"><img class="icon-buy" src="'+baseUrl+'images/icons/no_ticket.png" alt="buy" /></span>';
                }
                
                    str += '<div class="day-info lh-14">';
                    str += '<br />';
                    str += '<p class="t-bld"><a href="'+pSlot.url+'">' + pSlot.program + '</a></p>';
                    str += '<br />';
                    for( var i in pSlot.parsedFilms)
                    {
                        var film = pSlot.parsedFilms[i];
                        str += '<p class="bottom-line"><a href="'+film.url+'">' + film.title + '</a></p>';
                    }
                    for( var i in pSlot.parsedEvents)
                    {
                        var event = pSlot.parsedEvents[i];
                        str += '<p class="bottom-line">' + event.title + '</p>';
                    }
                    if( pSlot.ticket != '' && pSlot.ticket != null )
                    {
                        str += '<br />';
                        str += '<br />';
                        str += '<a class="buy-bottom" href="'+pSlot.ticket+'"><img class="icon-buy" src="'+baseUrl+'images/icons/buy_ticket.png" alt="buy" />';
                        str += (config.lang == 'hr') ? 'Kupi ulaznice' : 'Buy ticket';
                        str += '</a>';
                    }
                    str += '</div>';
                    
                str += '</div>';
                
                return str;
            }
            
            function positionElementX( pElem )
            {
                var elemHour = pElem.data('start-hour');
                var elemMinute = pElem.data('start-minute');
                var elemHourEnd = pElem.data('end-hour');
                var elemMinuteEnd = pElem.data('end-minute');
                
                var identifyIndex = pElem.parent().parent().data('row-type');
                
                var timeIndex;
                var timeSubtract;
                if( parseInt( pElem.data('start-hour')) >= parseInt(config.hourGrid[0]) ){
                    timeIndex = $('ul.hours li[data-hour="' + elemHour + '"]').data('index');
                    timeSubtract = 0;
                }
                else{
                    elemMinute = 0;
                    timeIndex = 0;
                    timeSubtract = parseInt( (config.hourGrid[0] - pElem.data('start-hour')) * hourWidth );
                    
                }
                
                var timeOffset = (timeIndex * (hourWidth)) + ((elemMinute/60)*hourWidth);
                
                var cssClass = '';
                cssClass += 'identify-type-' + identifyIndex;
                cssClass += ( identifyIndex == 'location' ) ? pElem.parent().parent().data('location-id') : '';
                cssClass += ' identify-index-' + timeIndex;
                pElem.addClass( cssClass );

                var diffHours = elemHourEnd < elemHour ? (elemHourEnd + 24) - elemHour :  elemHourEnd-elemHour;
                pElem.width( diffHours*hourWidth + ((elemMinuteEnd-elemMinute)/60)*hourWidth - timeSubtract );

                pElem.css('left', Math.floor(timeOffset) );
                pElem.data('pos-start', Math.floor(timeOffset) );
                pElem.data('pos-end', Math.floor(timeOffset) + pElem.width() );
                
            }
            function positionElements( pContainer )
            {
                
            }
            
            function between(x, min, max) {
                return x >= min && x <= max;
            }
            function realLength( pArr )
            {
                var cnt  = 0;
                for ( var indx in pArr ){
                    if ( ! isNaN(indx) ){
                        cnt ++;
                    }
                }
                return cnt;
            }
            
            function addBehaviours()
            {
                $( '.day .bar' ).each(function()
                {
                    $(this).mouseover( function(e)
                    {
                        e.preventDefault();
                        var elemDay = $(this).parent();
                        $('.day').not( elemDay ).removeClass('active');
                        elemDay.addClass('active');
                    });
                    
                    $(this).parent().mouseleave( function(e)
                    {
                        e.preventDefault();
                        $(this).removeClass('active');
                    });
                });
                
                $( '.button-day' ).each(function()
                {
                    $(this).click(function()
                    {
                        var day = $(this).data('date-day').split('-');
                        loadContent( parseInt(day[2]), parseInt(day[1]));
                    });
                });
            }
            
            function showError()
            {
                container.html(config.errorHtml);
            }
            
        });
    
        
    
    }
    
}(jQuery));


// (10).rnd() => returns random number from 1 to 10
Number.prototype.rnd = function(){
  return Math.floor(Math.random()*this+1);
};

$(function(){

  var replace_ids = function(s){
    // Random id with timestamp and counter for positions preserving
    window.new_id_counter = window.new_id_counter || 0;
    var new_id = new Date().getTime() + (new_id_counter++);
    return s.replace(/NEW_RECORD/g, new_id);
  };



  $(document.body).on('click', '.add_nested_item',  function(e){
    e.preventDefault();
    var template = eval(this.href.replace(/.*#/, ''));
    var child = $(replace_ids(template));
    $('#' + this.rel).append(child);
    $(document.body).trigger("nf:add", {template: template, element: this, child: child  });
  });


  $(document.body).on('click', '.remove', function(e) {
    e.preventDefault();
    var $this = $(this);
    var p_target = this.rel;
    var target = this.href.replace(/.*#/, '.');
    var child_container = $this.parents(target);
    var parent_container = p_target ? child_container.parents(p_target) : child_container.parents();
    var last_one = parent_container.find(target+':not(.hidden)').length > 1;

    if(last_one){
      var hidden_input = $this.prev("input[type=hidden]");
      if(hidden_input.length){
        hidden_input.val(1);
        child_container.hide();
        child_container.addClass('hidden');
      }
      else{
        child_container.remove();
      }
    }

    $(document.body).trigger("nf:remove");

  });
});



$(function(){

  if(!$('.new_film_entry').length){return;}


  function toggle_nickname(e){
    var $this = $(this);
    var checked = this.checked;
    var parent = $this.closest(".toggle_nickname");
    var nickname = parent.find('.nickname').hide();
    var full_name = parent.find('.full_name');

    if(checked){
      nickname.show();
      full_name.hide();
    }else{
      nickname.hide();
      full_name.show();
    }
  }


  function toggle_mail_online(e){
    var $this = $(this);
    var value = $this.val();
    var checked = this.checked;

    var $by_online = $('.by_online');
    var $by_mail = $('.by_mail');
    var $by_vimeo = $('.by_vimeo');

    if(!checked){return;}

    if(value == 1){
      $by_online.show();
      $by_mail.hide();
      $by_vimeo.hide();
    }else if(value == 2){
      $by_online.hide();
      $by_mail.show();
      $by_vimeo.hide();
    }else{
      $by_online.hide();
      $by_mail.hide();
      $by_vimeo.show();
    }
  }



  function toggle_subtitles(e){
    var $this = $('#film_entry_narration_dialogue');
    var subtitles = $('.subtitles', $this.closest('fieldset'));
    var subtitles_select = $('#film_entry_subtitles');

    if($this.val() != 1){
      subtitles.show();
    }else{
      subtitles.hide();
      subtitles_select.attr('value', 1).change();
    }
  }

  toggle_subtitles();




  function add_remove_star_on_labels(){
    var check = $(this);
    var container = check.closest('.film_entry_person');
    var labels = container.find('label[for*=address], label[for*=city], label[for*=country]');
    var l;
    labels.each(function(){
      l = $(this);
      l.data('original_label') || l.data('original_label', l.html());
      if(check.is(':checked')){
        l.html(l.data('original_label') + '<strong>*</strong>');
      }else{
        l.html(l.data('original_label'));
      }
    });
  }

  $('input[name*=film_return].checkbox').each(add_remove_star_on_labels);


  function prepare_toggle_nickname(){
    $('.toggle_nickname .checkbox').each(toggle_nickname);
    $('input[name="film_entry[deliver_materials_as]"]').each(toggle_mail_online);
  }
  prepare_toggle_nickname();



   $(".selector .hrow").each(function(){
    var $this = $(this);
    var sel =  $this.closest(".selector").find("select");
    var triggers = sel.get(0).className.match(/triggers_([0-9-]+)/);
    triggers = triggers ? triggers[1].split("-") : [0];
    var contains = $.inArray(sel.val(), triggers) >= 0;
    if(!contains) {$this.hide();}
  });


  $(".selector select").change(function(){
      var $this = $(this);
      var triggers = $this.get(0).className.match(/triggers_([0-9-]+)/);
      triggers = triggers ? triggers[1].split("-") : [0];
      var input_polje = $this.closest(".selector").find(".hrow");
      var contains = $.inArray($this.val(), triggers)  >= 0;

      if(contains){
        input_polje.show();
      }else{
        input_polje.hide();
      }
  });



  /* Mark errors */

  var alert_errors = [];
  var formatted_errors = "";

  $('.application_content > div').each(function(){
    var $this = $(this);
    var id = this.id.replace('content_', '');
    var e = $this.find('.fieldWithErrors').length;
    var $tab = $('.application_tabs [data-content="'+id+'"]');
    if (e){
      $tab.addClass("errors");
      alert_errors.push($tab.text());
    }
  });


  if(alert_errors.length){
   $("#alert_errors_top_text").css({opacity:0, display: 'block'}).delay(500).animate({opacity: 1});
   /*
   formatted_errors += $("#alert_errors_top_text").html();
   formatted_errors += "\n\n";
   formatted_errors += alert_errors.join("\n");
   console.log(formatted_errors);
   */
  }


  $(document.body)
    .on('change', '#film_entry_narration_dialogue', toggle_subtitles)
    .on('click', '.toggle_nickname .checkbox', toggle_nickname)
    .on('click', 'input[name="film_entry[deliver_materials_as]"]', toggle_mail_online)
    .on('change', 'input[name*=film_return].checkbox', add_remove_star_on_labels)


    .on('nf:add', function(){
      prepare_toggle_nickname();//.delay(0.01);
    })
    .on('nf:remove', function(){

    });


  var $competition_categories_checkboxes = $('.competition_categories .checkbox');
  function get_selected_competition_categories(){
    return $competition_categories_checkboxes.map(function(){
      if(this.checked){
        return $(this).val();
      }
    }).get();
  }

  /*

  function show_competition_categories_notices(){
    var croatian_movie;
    $('.fe_countries select, .nationality').each(function(){
      croatian_movie = croatian_movie || $(this).val() === 'HR';
    });

    //console.log(croatian_movie);

    var values = get_selected_competition_categories();
    //console.log(values);
    if(values.length == 1 && values[0] == 6){
      //console.log("Ne prikaži notice jer je samo feature film selektiran");
      $('.competition_categories .notice').hide();
    }else if(values.length){
      if(croatian_movie){
        $('.competition_categories .notice-croatian').show();
        $('.competition_categories .notice-global').show();
      }else{
        $('.competition_categories .notice-croatian').hide();
        $('.competition_categories .notice-global').show();
      }
    }else{
      $('.competition_categories .notice').hide();
    }
  }

  show_competition_categories_notices();

  $(document.body).on('change', '.fe_countries select, .nationality', function(){
    show_competition_categories_notices();
  });

  $competition_categories_checkboxes.on('click', function(){
    show_competition_categories_notices();
  });

  */


});


/*
 * jQuery Textarea Characters Counter Plugin v 2.0
 * Examples and documentation at: http://roy-jin.appspot.com/jsp/textareaCounter.jsp
 * Copyright (c) 2010 Roy Jin
 * Version: 2.0 (11-JUN-2010)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.4.2 or later
 */
(function($){
	$.fn.textareaCount = function(options, fn) {
		
		var defaults = {  
			maxCharacterSize: -1,  
			originalStyle: 'originalTextareaInfo',
			warningStyle: 'warningTextareaInfo',  
			warningNumber: 20,
			displayFormat: '#input characters | #words words'
		};  

		options = $.extend(defaults, options);

		this.each(function(){
			
			var container = $(this);
			
			$("<div class='charleft'>&nbsp;</div>").insertAfter(container);
			
			//create charleft css
			var charLeftCss = {
				'width' : container.width()
			};
			
			var charLeftInfo = getNextCharLeftInformation(container);
			charLeftInfo.addClass(options.originalStyle);
			charLeftInfo.css(charLeftCss);
			
			var numInput = 0;
			var maxCharacters = options.maxCharacterSize;
			var numLeft = 0;
			var numWords = 0;
					
			container.bind('keyup', function(event){limitTextAreaByCharacterCount();})
					 .bind('mouseover', function(event){setTimeout(function(){limitTextAreaByCharacterCount();}, 10);})
					 .bind('paste', function(event){setTimeout(function(){limitTextAreaByCharacterCount();}, 10);});
			
			
			function limitTextAreaByCharacterCount(){
				charLeftInfo.html(countByCharacters());
				//function call back
				if(typeof fn != 'undefined'){
					fn.call(this, getInfo());
				}
				return true;
			}
			
			function countByCharacters(){
				var content = container.val();
				var contentLength = content.length;
				
				//Start Cut
				if(options.maxCharacterSize > 0){
					//If copied content is already more than maxCharacterSize, chop it to maxCharacterSize.
					if(contentLength >= options.maxCharacterSize) {
						content = content.substring(0, options.maxCharacterSize); 				
					}
					
					var newlineCount = getNewlineCount(content);
					
					// newlineCount new line character. For windows, it occupies 2 characters
					var systemmaxCharacterSize = options.maxCharacterSize - newlineCount;
					if (!isWin()){
						 systemmaxCharacterSize = options.maxCharacterSize
					}
					if(contentLength > systemmaxCharacterSize){
						//avoid scroll bar moving
						var originalScrollTopPosition = this.scrollTop;
						container.val(content.substring(0, systemmaxCharacterSize));
						this.scrollTop = originalScrollTopPosition;
					}
					charLeftInfo.removeClass(options.warningStyle);
					if(systemmaxCharacterSize - contentLength <= options.warningNumber){
						charLeftInfo.addClass(options.warningStyle);
					}
					
					numInput = container.val().length + newlineCount;
					if(!isWin()){
						numInput = container.val().length;
					}
				
					numWords = countWord(getCleanedWordString(container.val()));
					
					numLeft = maxCharacters - numInput;
				} else {
					//normal count, no cut
					var newlineCount = getNewlineCount(content);
					numInput = container.val().length + newlineCount;
					if(!isWin()){
						numInput = container.val().length;
					}
					numWords = countWord(getCleanedWordString(container.val()));
				}
				
				return formatDisplayInfo();
			}
			
			function formatDisplayInfo(){
				var format = options.displayFormat;
				format = format.replace('#input', numInput);
				format = format.replace('#words', numWords);
				//When maxCharacters <= 0, #max, #left cannot be substituted.
				if(maxCharacters > 0){
					format = format.replace('#max', maxCharacters);
					format = format.replace('#left', numLeft);
				}
				return format;
			}
			
			function getInfo(){
				var info = {
					input: numInput,
					max: maxCharacters,
					left: numLeft,
					words: numWords
				};
				return info;
			}
			
			function getNextCharLeftInformation(container){
					return container.next('.charleft');
			}
			
			function isWin(){
				var strOS = navigator.appVersion;
				if (strOS.toLowerCase().indexOf('win') != -1){
					return true;
				}
				return false;
			}
			
			function getNewlineCount(content){
				var newlineCount = 0;
				for(var i=0; i<content.length;i++){
					if(content.charAt(i) == '\n'){
						newlineCount++;
					}
				}
				return newlineCount;
			}
			
			function getCleanedWordString(content){
				var fullStr = content + " ";
				var initial_whitespace_rExp = /^[^A-Za-z0-9]+/gi;
				var left_trimmedStr = fullStr.replace(initial_whitespace_rExp, "");
				var non_alphanumerics_rExp = rExp = /[^A-Za-z0-9]+/gi;
				var cleanedStr = left_trimmedStr.replace(non_alphanumerics_rExp, " ");
				var splitString = cleanedStr.split(" ");
				return splitString;
			}
			
			function countWord(cleanedWordString){
				var word_count = cleanedWordString.length-1;
				return word_count;
			}
		
			limitTextAreaByCharacterCount();

		});
		return this;
	};  
})(jQuery); 


// $(function(){
//     var bg_num = Math.floor(Math.random() * 4) + 1;
//     $('body').css({ "background": "#fff url(/images/bg_2015/bg_"+'1'+".png) no-repeat center 0 fixed"})
// });

/*** VARS ***/

var baseUrl = location.protocol + "//" + location.hostname + (location.port && ":" + location.port) + "/";

// dimensions
var winW = 0;
var winH = 0;

// columnizer
var colElement;
var colColumns;
var colAddClass;


// char limiter options
var limitOptions = {  
    'maxCharacterSize': 750,
    'originalStyle': '',  
    'warningStyle': '',  
    'warningNumber': 0,  
    'displayFormat': '#input/#max'  
};  


(function($){
    $.fn.limit  = function(options) {
        var defaults = {
        limit: 200,
        id_result: false,
        alertClass: false
        }
        var options = $.extend(defaults,  options);
        return this.each(function() {
            var characters = options.limit;
            if(options.id_result != false)
            {
                $("#"+options.id_result).append("You have <strong>"+  characters+"</strong> characters remaining");
            }
            $(this).keyup(function(){
                if($(this).val().length > characters){
                    $(this).val($(this).val().substr(0, characters));
                }
                if(options.id_result != false)
                {
                    var remaining =  characters - $(this).val().length;
                    $("#"+options.id_result).html("You have <strong>"+  remaining+"</strong> characters remaining");
                    if(remaining <= 10)
                    {
                        $("#"+options.id_result).addClass(options.alertClass);
                    }
                    else
                    {
                        $("#"+options.id_result).removeClass(options.alertClass);
                    }
                }
            });
        });
    };
})(jQuery);


/*** FUNCTIONS ***/

// layout
function setLayout()
{
    winW = $(window).innerWidth();
    winH = $(window).innerHeight();
    
    // set dynamic home days width
    $('#content ul.home-days li').width( $('#content ul.home-days').innerWidth() / $('#content ul.home-days li').length /*home-days a margin-right*/ );
    
    // open active sidebar ul list
    $('#sidebar ul li ul:has(li.active)').show();
    $('#sidebar ul > li.active').parent().not('.root').addClass('active-border');
}

// behaviour
function setBehaviours()
{   
    // search click show input and set focus
    $( 'header #search img' ).click(function(e){
        e.preventDefault();
        $('header #search input').show().focus();
    });
    
    // header active color line on logo
    $( 'header #logo_hover img' ).css('left', -( $('header ul#menu > li.active').index() * 125 ) );
    
    // header mouseover color line on logo
    $( 'header ul#menu > li' ).mouseenter(function(e){
        e.preventDefault();
        $('header #logo_hover img').css('left', -( $(this).index()*125) );
    })
    .mouseleave(function(){
        $('header #logo_hover img').css('left', -( $('header ul#menu > li.active').index() * 125 ) );
    });
    
    // show/hide sidebar nested categories   
    $( '#sidebar li.collapsable .hand' ).click(function(e){
        e.preventDefault();
        $(this).parent().children('ul').toggle();
    });
    
    // show/hide mobile menu
    $( '#menu-mobile > li:first-child' ).click(function(e){
        e.preventDefault();
        $(this).parent().children('li:not(:first-child)').toggle();
    });
    
    // autors filter select
    $( '#sidebar #letter' ).change(function(e){
        e.preventDefault();
        location.href = $(this).find(':selected').data('url');
    });
    
    // archive godine select
    $( '#sidebar #ayear' ).change(function(e){
        e.preventDefault();
        location.href = $(this).find(':selected').data('url');
    });
    
    // history
    $('.go_back').click(function(e){
        e.preventDefault();
        history.back();
    });
    
    // forma volonteri
    $('#content2 .express_submission h3').click(function(e){
        $('#content2 .express_submission .inner').toggle();
    });
    
    $('#content2 .express_submission .btn.submit').click(function(e){
        $('#content2 .express_submission .inner').hide();
    });
    

    $(document.body).on('click', '.application_tabs div.button', function(e){
        //console.log(e, this);
        var cntntId = $(this).data('content');
        $('.application_tabs div.styled-tab').removeClass('active');
        $(this).addClass('active');
        
        $('.application_content > div').addClass('nodisp');
        $('.application_content').find('#content_' + cntntId ).removeClass('nodisp');
    });

    $('.limit-input').textareaCount(limitOptions);

}

// columnizer
function doColumnize( pElement, pColumns, pAddClass )
{
    if( $(pElement).length <= 0 ){
        return false;
    }
    
    $(pElement).find('p').addClass('dontsplit');
    
    colElement = pElement;
    colColumns = pColumns;
    colAddClass = pAddClass;
    
    $(colElement).columnize
    (
        {
            columns: pColumns,
            ignoreImageLoading: true,
            buildOnce: true,
            doneFunc: afterColumnize
        }
    );
}
function afterColumnize()
{
    $(colElement).children('.column').attr('style','').addClass(colAddClass);
}





function initGalleria( pSelector, pGalOptions )
{
    if( $(pSelector).length <= 0 )
    {
        return false;
    }
    
    Galleria.loadTheme(baseUrl + 'javascripts/galleria/themes/classic/galleria.classic.min.js');
    
    var _galOptions =
    {
        height: 10,
        _toggleInfo: false,
        debug: false,
        imageCrop: true,
        imagePan: false,
        thumbnails: false,
        showImagenav: 1,
        imagePanSmoothness: 1,
        lightbox: true,
        transitionSpeed: 1000,
        initialTransition: 'fade',
        transition: 'slide',
        clicknext: false,
        showCounter: false,
        dataConfig: function(img) {return { title: '', description: '' }; }
    }
    
    Galleria.run
    (
        pSelector,
        jQuery.extend( _galOptions, pGalOptions)
    );
    
    Galleria.ready
    (
        function()
        {
            this.attachKeyboard
            ({
                left: this.prev,
                right: this.next
            });
        }
    );
}

function initBxslider( pSelector, pBxOptions )
{
    if( $(pSelector).length <= 0 ){
        return false;
    }
    
    var _BxOptions =
    {
        auto: true,
        autoControls: true,
        controls: false,
        speed: 500,
        pause: 5000,
        slideMargin: 0,
        onSliderLoad: function()
        {
            // default
            $('.slideshow-navigation .navi-foto').addClass('t-bld');
            $('.slideshow-navigation .navi-video').removeClass('t-bld');
            // photo
            $('.slideshow-navigation .navi-foto').click(function(){
                BXslider.goToSlide(0);
                $('#elem_slides_navi').show();
                $('.slideshow-title').removeClass('nodisp');
                $('.slideshow-navigation .navi-foto').addClass('t-bld');
                $('.slideshow-navigation .navi-video').removeClass('t-bld');
            });
            // video
            $('.slideshow-navigation .navi-video').click(function(){
                $('#elem_slides_navi').hide();
                BXslider.goToSlide( BXslider.getSlideCount()-1 );
                $('.slideshow-title').addClass('nodisp');
                $('.slideshow-navigation .navi-foto').removeClass('t-bld');
                $('.slideshow-navigation .navi-video').addClass('t-bld');
            });
            // thumbs
            $('.slideshow-navigation .navi-thumb').click(function(){
                $('.slideshow-title').removeClass('nodisp');
                $('.slideshow-navigation .navi-foto').addClass('t-bld');
                $('.slideshow-navigation .navi-video').removeClass('t-bld');
            });
        }
    }
    
    var BXslider = $( pSelector ).bxSlider
    (
        jQuery.extend(_BxOptions, pBxOptions)
    );
}



function initGoogleMaps( pElementId )
{
    if( $('#' + pElementId).length <= 0 ){
        return false;
    }
    
    var map = $('#' + pElementId);
    
    function initialize()
    {
        map.gmap
        (
            {
                'center': new google.maps.LatLng( map.data('lat') , map.data('lng') ),
                'zoom'  : map.data('zoom')
            }
        );
        
        // set location button events
        $('.button-location').each(function()
        {
            $(this).click(function(e)
            {
                e.preventDefault();
                
                map.gmap('clear', 'markers');
                $('.button-location').removeClass( map.data('active-class') );
                
                var butt = $(this);
                butt.addClass( map.data('active-class') );

                var latLng = new google.maps.LatLng( butt.data('lat'), butt.data('lng'));
                
                var markerOptions = { title: butt.data('title'), position: latLng }
                var marker = map.gmap("addMarker", markerOptions);
                
                map.gmap('option', 'center', latLng);
                map.gmap('option', 'zoom', 18);
                
                var gmInfo = $(this).data('info');
                if( gmInfo != '' )
                {
                    marker.click(function() { map.gmap('openInfoWindow', { 'content': gmInfo }, this); });
                    marker.triggerEvent('click');
                }
            });
        });
        
        // triger first location
        $('.button-location').first().trigger('click');
    }

    google.maps.event.addDomListener(window, 'load', initialize);
}

function initLightbox()
{   
    var photoWidth = $('#content').innerWidth();
    //var photoHeight = Math.max( 600, $('#content').innerHeight() );
    var photoHeight = Math.max( 600, winH );
    
    if( $('a.gallery').length > 0 )
    {
        $('a.gallery').colorbox({
            rel:'gal',
            fixed: false,
            top: 0,
            left: 0,
            photo: true,
            scrolling: false,
            transition: 'none',
            width: photoWidth,
            height: photoHeight,
            
            onOpen: function(){
                $('#cboxOverlay').appendTo('#lightbox-container');
                $('#colorbox').appendTo('#lightbox-container');
                $('#cboxOverlay').width( photoWidth );
                $('#cboxOverlay').height( photoHeight );
                $('#lightbox-container').css('position', 'static' );
                //$('#lightbox-container').css('top', $(window).scrollTop() - $('header').height() );
                return false;
            }
        });
    }
    
    
    var videoWidth = $('#content').innerWidth();
    var videoHeight = 500;
    if( $('a.video').length > 0 )
    {
        $('a.video').colorbox({
            rel:'',
            fixed: false,
            top: 0,
            left: 0,
            inline: true,
            scrolling: false,
            transition: 'none',
            width: videoWidth,
            height: videoHeight,
            
            href: function ()
            {
                var elementData = $(this).parent().children('.video-data').html();
                return elementData;
            }, 
            
            onOpen: function(){
                $('#cboxOverlay').appendTo('#lightbox-container');
                $('#colorbox').appendTo('#lightbox-container');
                $('#cboxOverlay').width( videoWidth );
                $('#cboxOverlay').height( videoHeight );
                return false;
            },
            
            onClosed: function (message) {
                //alert('remove video');
                $('#cboxLoadedContent').empty();
            }
        });
    }
}

function removeAutoplay()
{
    $( 'iframe' ).each(function(){
        
        var iframeSrc = $(this).attr('src');
        
        // youtube
        $(this).attr('src', iframeSrc.replace('autoplay=1','') );
    });
}


// Animafest 2014 - Planets background
// 
// 
// var offsetTop = 0;
// function initVisuals()
// {
//     var cnt = 0;
//     // podijeli left / right class
//     $('#visuals .skelet .wrapper img').not('vis-left').not('.vis-right').each(function(i,e){
//         cnt = (cnt>=3)?1:cnt+=1;
//         $(this).addClass('vis-'+cnt);
//         //$(this).attr('src','/images/visuals/'+parseInt(Math.random()*10+1)+'.png');
//     });

//     maxLimit = ( winW - $( '#container' ).outerWidth() ) / 2;
//     $('#visuals .skelet').width( $( '#container' ).outerWidth() );
//     $('#visuals .skelet').css('margin-left', maxLimit );
// }
// function updateVisuals()
// {
//     var visualsIntoContentH = 50; // koliko pixela lopte mogu u sadrzaj / left right
//     var visualsIntoContentV = 100; // koliko pixela lopte mogu u sadrzaj / top
    
//     // lefts
//     $('.vis-1').each(function(){
//         $( this ).css( 'left', - parseInt( Math.max( 100,$(this).width()) + (Math.random()*visualsIntoContentH )) );
//         $(this).show();
//     });
//     // rights
//     $('.vis-2').each(function(){
//         $( this ).css( 'right', - parseInt( Math.max(100,$(this).width()) + (Math.random()*visualsIntoContentH)) );
//         $(this).show();
//     });
//     // top
//     $('.vis-3').each(function(){
//         $( this ).css( 'left', winW*Math.random()-$(this).width() );
//         $( this ).css( 'top', Math.max(-$(this).height()+visualsIntoContentV,-$(this).height()*Math.random()-visualsIntoContentV) );
//         $(this).show();
//     });
    
//     $('.vis').not('.vis-3').each(function(){
        
//         $( this ).css( 'margin-top', Math.random() * winH * 1.5);
//     });
// }
// $(window).load(function(){ updateVisuals(); });





/*** EVENTS ***/


// load
$(document).ready
(
    function()
    {
        setLayout();
        setBehaviours();
        
        
        /*** HOME ***/
        initBxslider( '#elem_home_news', {} );
        initGalleria( '#elem_home_gallery', {height: 310, dataSelector: 'img', autoplay: true, showImagenav: false, transitionSpeed: 500, carouselSpeed: 500} );
     
        /*** DETAIL SLIDES ***/
        initBxslider( '#elem_slides', {autoStart: false, controls: false,autoControls:false, pager: true, pagerCustom: '#elem_slides_navi', infiniteLoop: false, } );
        
        /*** COLUMNIZER ***/
        doColumnize('.clmn-to-2', 2, 'column-item-3');
        doColumnize('.clmn-to-3', 3, 'column-item-3');
        
        /*** CALENDAR ***/
        $('#scheduler').scheduler();
        
        /*** GOOGLE MAPS ***/
        initGoogleMaps('googlemaps');
        
        // LIGHTBOX
        initLightbox();
        
        // IFRAME VIDEO AUTOPLAYS
        removeAutoplay();
        
        // PARALLAX VISUALS
        //initVisuals();
        
        /*** CUSTOM FORMS only css ***/
        $( '#content2 select' ).each(function(index,element){
            $(this).wrap('<div class="filter styled-select simple ' + $(this).attr('class') + '"></div>');
        });
        $( '#content .application_content select' ).each(function(index,element){
            $(this).wrap('<div class="filter styled-select simple ' + $(this).attr('class') + '"></div>');
        });
        
        $(document.body).on("nf:add", function(e,opts){
            // style select
            var origCss = $( opts.child ).find('select').attr('class');
            $( opts.child ).find('select').wrap('<div class="filter styled-select simple '+origCss+'"></div>');
            // character limiter
            $(opts.child).find('textarea.limit-input').textareaCount(limitOptions);
        });
        
    }
);

// rezize
$(window).resize
(
    function()
    {
        setLayout();
    }
);
$(window).scroll
(
    function()
    {
        
    }
);