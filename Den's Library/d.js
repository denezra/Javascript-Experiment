/* Copyright 2015, den.segunial@gmail.com
 * Den's Javascript Library v 1.7.7
 */
function getElem(element) {return document.getElementById(element);}
// Embed image to element
function setImage(element, path, width, height, size, param) {element.setAttributes({'style':{'background':"url('"+path+"')"+param, 'background-size':size, 'height':height, 'width':width}});}
// Add class to element
function addClass(element, class_name){element.className += ' ' + class_name;}
// Remove class to element
function removeClass(element, class_name){element.className=element.className.replace(new RegExp('(?:^|\\s)'+class_name+'(?!\\S)'),'');}
// Check if element has this class
function hasClass(element, cls) {return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;}
// Preload 
function startPreload(){
	var ctr = 0, images_arr = new Array(), preArgumentsLength = startPreload.arguments.length-1, preArguments = startPreload.arguments; 
	for (i = 0; i < preArgumentsLength; i++) {images_arr[i] = new Image();images_arr[i].src = startPreload.arguments[i];addEvent(images_arr[i], 'load', imageLoaded);}
	function imageLoaded(){if ( ctr === (preArgumentsLength - 1)){preArguments[preArgumentsLength]();}else{ctr++;}} 
}
// Round off according to the decimal place
function roundOff(num,place) {return num.toFixed(place)}
// Transform Style
function transform(element, value) {element.setAttributes({'style':{'-webkit-transform':value,'-moz-transform':value,'-ms-transform':value,'-o-transform':value,'transform':value}});}
// Transition Style 
function transition() {if(arguments[1].search("transform") != -1) {arguments[0].setAttributes({'style':{'-webkit-transition':arguments[1], '-moz-transition':arguments[2], '-ms-transition':arguments[3], '-o-transition':arguments[4], 'transition': arguments[5]}});} else {arguments[0].setAttributes({'style':{'transition': arguments[1]}});}}
// Recode setAttribute to support IE 8++
Element.prototype.setAttributes = function (attrs) {for (var idx in attrs) {if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {for (var prop in attrs[idx]){this.style[prop] = attrs[idx][prop];}} else if (idx === 'html') {this.innerHTML = attrs[idx];} else {this.setAttribute(idx, attrs[idx]);}}};
// Get Pixel Ratio and Screen Size
function screenRatio() {var ratio = window.devicePixelRatio || 1, w = window.innerWidth, h = window.innerHeight;return {ratio:ratio, width:w, height:h};}
// Add Event Listener
function addEvent(obj, evt, fn) {if(obj.addEventListener) {obj.addEventListener(evt, fn, false);}else if(obj.attachEvent) {obj.attachEvent('on' + evt, fn)}}
// Add Event Listener
function removeEvent(obj, evt, fn) {if(obj.addEventListener) {obj.removeEventListener(evt, fn, false);}else if(obj.attachEvent) {obj.detachEvent('on' + evt, fn)}}
// TEMPORARY check if Safari
function isSafari() {return /^((?!chrome).)*safari/i.test(navigator.userAgent);}
// Mobile Checker 
function mobileChecker(){var isMobile = false;if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { isMobile = true;}return isMobile;}