/* ###########################################################################

GLOBAL ASSETS RELEASE v3.1

SUN SNIFF & COMMON JS LIB v6.0

BUILD DATE: 20070914

COPYRIGHT SUN MICROSYSTEMS INC. 2007

CONTACT webdesign -at- sun.com WITH ANY QUESTIONS

########################################################################### */

var is = new ottosniff();
function ottosniff(){
	var ua = navigator.userAgent.toLowerCase();
	var b = navigator.appName;
	if (b=="Netscape") this.b = "ns";
	else this.b = b;
	this.version = navigator.appVersion;
	this.v = parseInt(this.version);
	this.gecko = (ua.match(/\bgecko\/(20\d\d)(\d\d)(\d\d)\b/)) ? true : false;
	this.ns = (this.b=="ns" && this.v>=5);
	this.op = (ua.indexOf('opera')>-1);
	this.safari = (ua.indexOf('safari')>-1);
	this.op7 = (this.op && this.v>=7 && this.v<8);
	this.op78 = (this.op && this.v>=7 || this.op && this.v>=8);
	this.ie5 = (this.version.indexOf('MSIE 5')>-1);
	this.ie6 = (this.version.indexOf('MSIE 6')>-1);
	this.ie7 = (this.version.indexOf('MSIE 7')>-1);
	this.ie56 = (this.ie5||this.ie6);
	this.ie567 = (this.ie5||this.ie6||this.ie7);
	this.iewin = (this.ie56 && ua.indexOf('windows')>-1 || this.ie7 && ua.indexOf('windows')>-1);
	this.iemac = (this.ie56 && ua.indexOf('mac')>-1);
	this.moz = (ua.indexOf('mozilla')>-1);
	this.ff = (ua.indexOf('firefox')>-1);
	this.moz13 = (ua.indexOf('mozilla')>-1 && ua.indexOf('1.3')>-1);
	this.oldmoz = (ua.indexOf('sunos')>-1 || this.moz13 && !this.ff || this.moz && ua.indexOf('1.4')>-1 && !this.ff || this.moz && ua.indexOf('1.5')>-1 && !this.ff || this.moz && ua.indexOf('1.6')>-1 && !this.ff);
	this.anymoz = this.gecko;
	this.ns6 = (ua.indexOf('netscape6')>-1);
	this.docom = (this.ie56||this.ns||this.iewin||this.op||this.iemac||this.safari||this.moz||this.oldmoz||this.ns6);
}

// VARS
ptest="noprint";
var oldmenu = new Array();
var navmenu = new Array();
var a1menus = new Array();
var a1hrefs = new Array();
var imgpreload = new Array();
var imgpostload = new Array();
var preloaderOn = new Array();
var preloaderOff = new Array();
var preloaderActive = new Array();
var activeImg = new Array();
var plx = 0;
var rtl = false; //in here as false if not stated in menucontent.js

// ADD BROWSER CLASS TO HTML TAG
if (document.getElementsByTagName('html')[0]){
	if(is.op){var bclass = "browserOpera";}
	else if(is.safari){var bclass = "browserSafari";}
	else if(is.ie56){var bclass = "browserExplorer56 browserExplorer";}
	else if(is.ie7){var bclass = "browserExplorer7 browserExplorer";}
	else if(is.iemac){var bclass = "browserExplorerMac";}
	else if(is.oldmoz){var bclass = "browserOldMoz";}
	else {var bclass = "";}
	if(is.gecko){bclass += " gecko";}
	bclass += " jsenabled";
	if (typeof a1menuwrap != 'undefined' && a1menuwrap){bclass = bclass+" hasA1menus";}
	addClassName(document.getElementsByTagName('html')[0], bclass);
}

// sniff for various page elements
var kdoc = document;
var sniffStatus = {'a1':false,'pagetitle':false,'sunhome':false}

// PAGE PREP
function prepSunPage(){
	if (is.docom){
		// sunhome test & omni test
		if(kdoc.getElementById('a0v2') && window.s_account){
			sniffStatus.sunhome = true;
		}
		//copyright
		if(kdoc.getElementById('copyDate')){
			var thisdate = new Date();
			kdoc.getElementById('copyDate').innerHTML = "1994-"+thisdate.getFullYear();
		}
		// no hardcode A2
		if (ptest.indexOf("yesprint") == -1 && ptest.indexOf("prepmenus") == -1 && document.getElementById('mtopic1') && navmenu['1.0']){
			printmenus();
			prepmenus();
		}
		// add actions to global search
		if (kdoc.getElementById('searchfield')){
			kdoc.getElementById('searchfield').onfocus = function(){
				if(kdoc.getElementById('searchfield').value==kdoc.getElementById('searchfield').defaultValue)kdoc.getElementById('searchfield').value='';
				if (!is.iemac){
					kdoc.getElementById('searchfield').style.width='110px';
				}
			};
			kdoc.getElementById('searchfield').onblur = function(){
				if(kdoc.getElementById('searchfield').value=="")kdoc.getElementById('searchfield').value=kdoc.getElementById('searchfield').defaultValue;
				if (!is.iemac){
					kdoc.getElementById('searchfield').style.width='67px'
				}
			};
		}
		// add blur action to logo
		if (kdoc.getElementById('sunlogo')){
			kdoc.getElementById('sunlogo').onfocus = function(){hideA2(0)};
		}
		// add bg spacer gif to off divs in IE for better response
		if(is.ie56 && kdoc.getElementById('offdiv') && kdoc.getElementById('offdivL') && kdoc.getElementById('offdivT') && kdoc.getElementById('offdivR') && imdir && !is.iemac){
			kdoc.getElementById('offdiv').style.background = kdoc.getElementById('offdivL').style.background = kdoc.getElementById('offdivT').style.background = kdoc.getElementById('offdivR').style.background = 'url('+imdir+'/a.gif)';
		}
		//dom crawl
		domCrawl(kdoc);
		// prep homepage
		if (kdoc.getElementById('newsitem2') || kdoc.getElementById('subhover2') || kdoc.getElementById('a0v2')){
			prephome();
			done = true;
		}
		if (typeof postCrawl != 'undefined') {
			for (func in postCrawl) { postCrawl[func](); }
		}
	}
}

//DOM CRAWL
function domCrawl(domObject,tagList){
	if (is.ie5 && !tagList){
		 var tagList = new Array('a','b','div','span','td','li','ul','input','select','img','option','area','a','div','span');
	}else if (!tagList){
		 var tagList = new Array('*');
	}else if (tagList){
		 var tagList = tagList.split(',');
	}
	for (var ivp=0;ivp<tagList.length;ivp++){
		var an = domObject.getElementsByTagName(tagList[ivp]);
		for (var i=0;i<an.length;i++){
			var lcNodeName = an[i].nodeName.toLowerCase();
			
			if (an[i].className.indexOf('cTool-') > -1){
				sniffClassTool(an[i]);
			}

			if (lcNodeName == 'img' && an[i].src.indexOf('_off.') > -1){
				sniffRollover(an[i]);
			}else if(!an[i].className){
				// do nothing, thus preventing much unnecessary checking
			}else if (an[i].className.indexOf('k2ajax-') > -1){
				sniffK2ajax(an[i]);
			}else if (an[i].className.indexOf('k2over') > -1 || an[i].className.indexOf('k2focus') > -1 || an[i].className.indexOf('k2cl') > -1 || an[i].className.indexOf('a2menu') > -1 || an[i].className.indexOf('k2show') > -1 || an[i].className.indexOf('k2hide') > -1){
				sniffK2(an[i]);
			}else if (sniffStatus.sunhome == true && an[i].className.indexOf('tickeritem') > -1){
				sniffTicker(an[i]);
			}else if (lcNodeName == 'div' && hasClassName(an[i], 'g23')){
				sniffG23(an[i]);
			}else if (lcNodeName == 'a' && hasClassName(an[i], 'media-launch')){
				sniffMedia(an[i]);
			}else if (hasClassName(an[i], 'modal-launch') || hasClassName(an[i], 'modal-close')){
				sniffModal(an[i]);
			}else if (sniffStatus.pagetitle == false && lcNodeName == 'div' && (hasClassName(an[i],'pagetitle') || hasClassName(an[i],'smallpagetitle')) && !hasClassName(document.body,'a0v3')){
				sniffStatus.pagetitle = true; sniffSharePage(an[i]);
			}else if (lcNodeName == 'input' && hasClassName(an[i], 'autoclear')){
				sniffAutoclear(an[i]);
			}else if (lcNodeName == 'img' && hasClassName(an[i], 'spriteswap')){
				sniffSpriteSwap(an[i]);
			}else if (lcNodeName == 'div' && hasClassName(an[i], 'g27w2')){
				sniffG27(an[i]);
			}else if (lcNodeName == 'div' && hasClassName(an[i], 'imgbox')){
				sniffImgbox(an[i]);
			}else if (lcNodeName == 'ul' && hasClassName(an[i], 'selectTabs')){
				sniffSelectTab(an[i]);
			}else if (sniffStatus.a1 == false && lcNodeName == 'div' && hasClassName(an[i], 'a1r2')){
				sniffStatus.a1 = true; sniffA1(an[i]);
			}else if (lcNodeName == 'select' && hasClassName(an[i], 'goto') || lcNodeName == 'select' && hasClassName(an[i], 'showDiv')){
				sniffGoto(an[i]);
			}else if (lcNodeName == 'ul' && hasClassName(an[i], 'goto') || lcNodeName == 'ul' && hasClassName(an[i], 'showDiv')){
				sniffGotoUL(an[i]);
			}else if (hasClassName(an[i], 'xfadefirst')){
				sniffXfade(an[i]);
			}else if (lcNodeName == 'ul' && hasClassName(an[i], 'listfade')){
				sniffListfade(an[i]);
			}else if (lcNodeName == 'a' && hasClassName(an[i], 'loadUrl') && an[i].href){
				sniffLoadUrl(an[i]);
			}else if (lcNodeName == 'a' && hasClassName(an[i], 'popup') || lcNodeName == 'area' && hasClassName(an[i], 'popup')){
				sniffPopUp(an[i]);
			}else if (lcNodeName == 'a' && hasClassName(an[i], 'imgswap') || lcNodeName == 'area' && hasClassName(an[i], 'imgswap') || lcNodeName == 'img' && hasClassName(an[i], 'imgswap') || lcNodeName == 'span' && hasClassName(an[i], 'imgswap')){
				sniffImgswap(an[i]);
			}else if ((lcNodeName == 'a' || lcNodeName == 'area' || lcNodeName == 'span' || lcNodeName == 'img') && an[i].className.indexOf('mswap') > -1 ){
				sniffMultiswap(an[i]);
			}else if (lcNodeName == 'img' && hasClassName(an[i], 'postload')){
				imgpostload.push(an[i]);
			}else if (lcNodeName == 'a' && hasClassName(an[i], 'toggleObj') || lcNodeName == 'area' && hasClassName(an[i], 'toggleObj')){
				sniffToggler(an[i]);
			}else if (lcNodeName == 'a' && hasClassName(an[i], "toggle-all-table-checkboxes")){
				sniffToggleAllCheckboxesInTable(an[i]);
			}else if (lcNodeName == 'div' && hasClassName(an[i], "pc1collapsible")){
				sniffExpandCollapsePc1(an[i]);
			}else if (lcNodeName == 'form' && an[i].className.indexOf('wgform-') > -1){
				sniffFormHijax(an[i]);
			}else if (lcNodeName == 'a' && an[i].className.indexOf('hijax-') > -1 || lcNodeName == 'span' && an[i].className.indexOf('hijax-') > -1 || lcNodeName == 'ul' && an[i].className.indexOf('hijax-') > -1){
				sniffLinkHijax(an[i]);
			}else if (lcNodeName == 'span' && hasClassName(an[i],'site-select')){
				sniffSiteSelector(an[i]);
			}else if ((lcNodeName == 'a' || lcNodeName == 'area') && hasClassName(an[i],'k5')){
				sniffK5(an[i]);
			}
			if(lcNodeName == 'a' && sniffStatus.sunhome == true || lcNodeName == 'area' && sniffStatus.sunhome == true || lcNodeName == 'input' && sniffStatus.sunhome == true){
				var fn = function(){ OmnitureSetObject(this) };
				addEvent(an[i],"click",fn);
			}
			if (typeof widgets != 'undefined') {
				if (hasClassName(an[i], 'wg1')){
					sniffWg1(an[i]);
				}
			}
		}
	}
	for (var imp=0;imp<imgpostload.length;imp++){
		if(imgpostload[imp].title){
			imgpostload[imp].src = imgpostload[imp].title;
			imgpostload[imp].title = "";
		}
	}
}

// CAPTURE CLICKS AT BODY LEVEL W/ BUBBLING
function catchBodyClicks() {
	if (document.body) {
		addEvent(document.body,'click',function(e){
			if (!e) var e = window.event;
			if (e.target) { var targ = e.target; }
			else if (e.srcElement) { var targ = e.srcElement; }
			if (targ.nodeType == 3) { targ = targ.parentNode; } // we don't need no stinkin' text nodes
			if (typeof bodyClickHandlers != 'undefined') {
				selectors:for (sel in bodyClickHandlers) {
					var el = targ;
					var tries = 0;
					while (el.nodeType == 1) {
						try { if (elementMatchesSelector(el, sel)) { bodyClickHandlers[sel](el, e); break; } }
						catch (e) { continue selectors; }
						if (!el.parentNode || tries > 20) { break; }
						el = el.parentNode;
						tries++;
					}
				}
			}
		});
	} else {
		window.setTimeout('catchBodyClicks()',100);
	}
}
catchBodyClicks();
window.bodyClickHandlers = {};

// MATCHES AN ELEMENT AGAINST A MULTI-PART CSS-LIKE SELECTOR
// EXAMPLE: html > body div#foo + div.bar > a
function elementMatchesSelector(el, sel) {
	sel = sel.replace(/\+/g, ' + ');
	sel = sel.replace(/>/g, ' > ');
	sel = sel.replace(/\s\s+/g, ' ');
	var itms = sel.split(/\s+/);
	var itm = itms.pop();
	if (!elementMatchesSelectorItem(el, itm)) { return false; }
	items:while (itms.length > 0) {
		itm = itms.pop();
		if (itm == '>') {
			el = el.parentNode;
			if (!elementMatchesSelectorItem(el, itms.pop())) { return false; }
		}
		else if (itm == '+') {
			el = el.previousSibling;
			while (el && el.nodeType != 1) { el = el.previousSibling; }
			if (!elementMatchesSelectorItem(el, itms.pop())) { return false; }
		}
		else while (true) {
			el = el.parentNode;
			if (!el || el.nodeType != 1) { return false; }
			if (elementMatchesSelectorItem(el, itm)) { continue items; }
		}
	}
	return true;
}

// MATCHES AN ELEMENT AGAINST A SINGLE PART CSS-LIKE SELECTOR
// EXAMPLE: a.foo#bar
function elementMatchesSelectorItem(el, sel) {
	if (!el) { throw 'el is null'; }
	if (el.nodeType != 1) { throw el+' is not an element node'; }
	var origSel = sel;
	var tagNameMatches = sel.match(/^([a-zA-Z_][a-zA-Z0-9_-]*)/);
	var tagName = '*';
	if (tagNameMatches) {
		tagName = tagNameMatches[1];
		sel = sel.replace(tagNameMatches[1],'');
	}
	var idMatches = sel.match(/(#([a-zA-Z0-9_-]+))/);
	var id = '';
	if (idMatches) {
		id = idMatches[2];
		sel = sel.replace(idMatches[1],'');
	}
	var classNameMatches = sel.match(/(\.([a-zA-Z0-9_-]+))/);
	var className = '';
	if (classNameMatches) {
		className = classNameMatches[2];
		sel = sel.replace(classNameMatches[1],'');
	}
	if (sel) { throw 'could not parse '+origSel; }
	if (tagName != '*' && el.nodeName.toLowerCase() != tagName) { return false; }
	if (id && el.id != id) { return false; }
	if (className && !hasClassName(el, className)) { return false; }
	return true;
}

//GET PARENT
function hasParent(obj,tag,classname){
	var parent = obj;
	if(classname){
		while (parent = parent.parentNode) {
			if (parent.nodeName.toLowerCase() == tag && hasClassName(parent,classname) || tag == "*" && hasClassName(parent,classname)){
				return parent;
			}
		}
	}else{
		while (parent = parent.parentNode) {
			if (parent.id == tag){
				return parent;
			}
		}
	}
}

//OPEN K2
function showK2(popupID,callerID,Xoffset,Yoffset,Zindex,posy,btmup,ort,etype){
	if (popupID.indexOf('flymenu') > -1){
		var oam = popupID;
		oam = (oam.replace(/flymenu(\d)/,"$1") * 1);
		hideA2(oam);
		clrtopic(oam,true);
	}
	var popupObj = document.getElementById(popupID);
	if (!popupObj){
		var popupObj = popupID;
	}

	if(popupID.indexOf('flymenu') > -1 && popupObj.offsetTop > 0 && is.op || popupID.indexOf('offdiv') > -1 && popupObj.offsetTop > 0 && is.op ){
		callerID = null;
	}

	if (callerID){
		var ptop = plft = 0;
		var callerObj = document.getElementById(callerID);
		if (!callerObj){
			var callerObj = callerID;
		}
	
		if (ort == "hLeft"){
			plft = plft - popupObj.offsetWidth;
		}else if (ort == "hMiddleLeft"){
			plft = plft - popupObj.offsetWidth;
			plft = plft + parseInt(callerObj.offsetWidth / 2);
		}else if (ort == "hMiddle"){
			plft = parseInt(callerObj.offsetWidth / 2);
			plft = plft - parseInt(popupObj.offsetWidth / 2);
		}else if (ort == "hMiddleRight"){
			plft = parseInt(callerObj.offsetWidth / 2);
		}else if (ort == "hRight"){
			plft = callerObj.offsetWidth;
		}else if (ort == "hAlignRight"){
			plft = plft + callerObj.offsetWidth - popupObj.offsetWidth;
		}

		if (btmup == "vTop"){
			ptop = ptop - popupObj.offsetHeight;
		}else if (btmup == "vMiddle"){
			ptop = ptop + parseInt(callerObj.offsetHeight / 2);
			ptop = ptop - parseInt(popupObj.offsetHeight / 2);
		}else if (btmup == "vBottom"){
			ptop = ptop + callerObj.offsetHeight;
		}else if (btmup == "vAlignBottom"){
			ptop = ptop + callerObj.offsetHeight - popupObj.offsetHeight;
		}else if (btmup == "vAlignTopBottom"){
			var scrolltop = 0;
			if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
				scrolltop = document.body.scrollTop;
			}else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop)){
				scrolltop = document.documentElement.scrollTop;
			}
			var winheight = 0;
			if( typeof( window.innerWidth ) == 'number' ) {
				winheight = window.innerHeight;
			} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
				winheight = document.documentElement.clientHeight;
			}
			var alignbottom = callerObj.offsetHeight - popupObj.offsetHeight;
		}
		if (is.op && posy != "a2" || is.safari && posy == "Absolute"){
			if (posy != "Absolute" && posy != "a2"){
				callerObj.style.position = "relative";
			}
			while(callerObj.offsetParent){
				plft = plft + callerObj.offsetLeft;
				ptop = ptop + callerObj.offsetTop;
				callerObj = callerObj.offsetParent;
			}
		}else{
			while(callerObj){
				plft = plft + callerObj.offsetLeft;
				ptop = ptop + callerObj.offsetTop;
				callerObj = callerObj.offsetParent;
			}
		}

		if (btmup == "vAlignTopBottom" && ptop > scrolltop + (winheight/2)){
			ptop = ptop + alignbottom;
			Yoffset = Yoffset * -1;
		}

		plft = plft + Xoffset;
		ptop = ptop + Yoffset;

		popupObj.style.top=ptop+'px';
		popupObj.style.left=plft+'px';
	}
	if (Zindex){
		popupObj.style.zIndex = Zindex;
	}
	popupObj.style.visibility = "visible";

	if (etype == 'f' && popupObj.getElementsByTagName('a')[0]){
		popupObj.getElementsByTagName('a')[0].focus();
		if(!popupObj.getElementsByTagName('a')[(popupObj.getElementsByTagName('a').length -1)].blurset){
			addEvent(popupObj.getElementsByTagName('a')[(popupObj.getElementsByTagName('a').length -1)],"blur",function(){
				hideK2(popupObj);
			});
			popupObj.getElementsByTagName('a')[(popupObj.getElementsByTagName('a').length -1)].blurset = true;
		}
	}
}

//CLOSE K2
ked = new Array();
function hideK2(popupID,popcls,fader){
	var popupObj = document.getElementById(popupID);
	if (!popupObj){
		var popupObj = popupID;
	}
	popupObj.style.visibility = "hidden";
	if (popcls){
		ked[popupID] = "";
	}
}

//HIDE A2 MENUS
function hideA2(nwf){
	var fa = 1;
	while (typeof flym != "undefined" && flym[fa]){
		if(fa != nwf){
			flym[fa].style.visibility = "hidden";
		}
		clrtopic(fa, null);
		fa++;
	}
	if(nwf == 0){
		flym[0].style.visibility = "hidden";
		flym[1000].style.visibility = "hidden";
		flym[1001].style.visibility = "hidden";
		flym[1002].style.visibility = "hidden";
	}
	clrmenu(null);
}

//ADD OPENED K2s
function addK2(p0,p1,p2,p3,p4,p5,p6,p7){
	if (is.docom){
		ked[p0] = new Array(p0,p1,p2,p3,p4,p5,p6,p7);
	}
}

//MOVE OPENED
window.onresize = function moveK2(){
	for (kdp in ked){
		if (ked[kdp][0]){
			if (is.iemac){
				hideK2(ked[kdp][0]);
			}else{
				showK2(ked[kdp][0],ked[kdp][1],ked[kdp][2],ked[kdp][3],ked[kdp][4],ked[kdp][5],ked[kdp][6],ked[kdp][7]);
			}
		}
	}
	if(typeof flym != "undefined" && flym[1] && is.op){
		var fa = 0;
		while (flym[fa]){
			flym[fa].style.top = "-1500px";
			fa++;
		}
		flym[1000].style.top = "-1500px";
		flym[1001].style.top = "-1500px";
		flym[1002].style.top = "-1500px";
	}
}

// ADD PREPSUNPAGE ONLOAD
if (is.docom){
	if (window.attachEvent){
		window.attachEvent('onload',prepSunPage);
	}else if (window.addEventListener){
		window.addEventListener('load',prepSunPage,false);
	}else if (is.iemac){
		document.onreadystatechange = function(){if (document.readyState == "interactive"){prepSunPage()}};
	}
}

// ADD ONRESIZE EVENTS
function addOnresizeEvent(func){
  var oldrsize = window.onresize;
  if (typeof window.onresize != 'function'){
	window.onresize = func;
  }else {
	window.onresize = function(){
	  oldrsize();
	  func();
	}
  }
}

// ADD CLASSES TO OBJECTS
function addClassName(element, className){
	if (hasClassName(element, className)) { return false; }
	if (!element.className) { element.className = className; }
	else { element.className += ' '+className; }
	return true;
}

// REMOVE CLASSES FROM OBJECTS
function removeClassName(element, className){
	if (!hasClassName(element, className)) { return false; }
	var classNames = element.className.split(' ');
	var newClassNames = [];
	for (var a=0; a<classNames.length; a++){
		if (classNames[a] != className) { newClassNames[newClassNames.length] = classNames[a]; }
	}
	element.className = newClassNames.join(' ');
	return true;
}

// TEST FOR CLASS NAME
function hasClassName(element, className){
	var exp = new RegExp("(^|\\s)"+className+"($|\\s)");
	return (element.className && exp.exec(element.className))?true:false;
}

// TEST FOR CLASS NAME BY PATTERN
function matchClassName(element, pattern){
	var classNames = element.className.split(' ');
	for (var a=0; a<classNames.length; a++){
		var matches = classNames[a].match(pattern);
		if (matches) { return matches; }
	}
	return null;
}

// GET ELEMENTS BY CLASS NAME
function getElementsByClassName(node, className){
	var results = [];
	var els = node.getElementsByTagName("*");
	var len=els.length;
	for(var a=0; a<len; a++){
		if(hasClassName(els[a], className)){
			results.push(els[a]);
		}
	}
	return results;
}

// GET FULL CLASS NAME FROM PARTIAL STRING
function getClassContains(obj,subst){
	var rcl = false;
	var cls = obj.className.split(' ');
	for (var v=0;v<cls.length;v++){
		if (cls[v].indexOf(subst) > -1){
			rcl = cls[v]; 
		}
	}
	return rcl;
}

// GET CHILD NODES VIA TAG NAME
function getChildNodesByTagName(el, tagName){
	var cn = el.childNodes;
	var nd = new Array();
	for (var n=0;n<cn.length;n++){
		if(tagName == cn[n].nodeName.toLowerCase()){
			nd.push(cn[n]);
		}
	}
	return nd;
}

// IS OBJECT AN ARRAY
function isArray(obj){
	return obj && typeof obj.unshift != 'undefined';
}

// SHORTCUT FOR BUILDING ELEMENTS
function elem(name, atts, content) {
	// name: a tag name, with optional class or id: 'div', 'div.foo', 'div#bar', 'div.foo#bar', 'div#bar.foo'
	// atts: optional. object where keys=attribute names, values=attribute values: {'href':'page.html','target':'_blank'}
	// content: optional. either a string, or an element, or an arry of strings or elements
	if (name.indexOf('.') + name.indexOf('#') > -2) {
	var className = (name.indexOf('.') > -1) ? name.replace(/^.*\.([^\.#]*).*$/,"$1") : "";
		var id = (name.indexOf('#') > -1) ? name.replace(/^.*#([^\.#]*).*$/,"$1") : "";
		name = name.replace(/^([^\.#]*).*$/,'$1');
	}
	var e = document.createElement(name);
	if (className) { e.className = className; }
	if (id) { e.id = id; }
	if (atts) {
		for (key in atts) {
			// setAttribute() has shaky support, try direct methods first
			if (key == 'class') { e.className = atts[key]; }
			else if (key == 'id') { e.id = atts[key]; }
			else if (key == 'href') { e.href = atts[key]; }
			else if (key == 'action') { e.action = atts[key]; }
			else if (key == 'method') { e.method = atts[key]; }
			else if (key == 'title') { e.title = atts[key]; }
			else if (key == 'alt') { e.alt = atts[key]; }
			else if (key == 'border') { e.border = atts[key]; }
			else if (key == 'caption') { e.caption = atts[key]; }
			else if (key == 'cellspacing') { e.cellspacing = atts[key]; }
			else if (key == 'for') { e.htmlFor = atts[key]; }
			else { e.setAttribute(key, atts[key]); }
		}
	}
	if (content) {
		if (!isArray(content)) { // it's not an array
			content = [content];
		}
		for (var a=0; a<content.length; a++) {
			if (typeof content[a] == 'string') {
				e.appendChild(document.createTextNode(content[a]));
			} else {
				e.appendChild(content[a]);
			}
		}
	}
	if (name.toLowerCase() == 'img' && !e.alt) { e.alt = ''; }
	return e;
}

// GRAB JUST THE TEXTUAL DATA OF AN ELEMENT
function elemText(el) {
	// <a id="foo" href="page.html">click <b>here</b></a>
	// elemText(document.getElementById('foo')) == "click here"
	// warning: recurses through *all* descendants of el
	var chlds = el.childNodes;
	var result = '';
	for (var a=0; a<chlds.length; a++) {
		if (3 == chlds[a].nodeType) {
			result += chlds[a].data;
		} else if (1 == chlds[a].nodeType) {
			if (chlds[a].nodeName.toLowerCase() == 'img') { result += chlds[a].alt; }
			else { result += elemText(chlds[a]); }
		}
	}
	return result;
}

// FIND PREVIOUS ELEMENT
function prevElem(el) {
	var prev = el.previousSibling;
	for (var a=0; a<1000; a++) {
		if (!prev) { return null; }
		if (prev.nodeType==1) { return prev; }
		prev = prev.previousSibling;
	}
	throw "couldn't find previous sibling";
}

// FIND NEXT ELEMENT
function nextElem(el) {
	var next = el.nextSibling;
	for (var a=0; a<1000; a++) {
		if (!next) { return null; }
		if (next.nodeType==1) { return next; }
		next = next.nextSibling;
	}
	throw "couldn't find next sibling";
}

// SET OPACITY
function setopacity(id_or_obj,opac){
	if (document.getElementById(id_or_obj)){
		var oobj = document.getElementById(id_or_obj);
	}else if(id_or_obj){
		var oobj = id_or_obj;
	}
	if (oobj){
		if (document.all && !is.op){
			oobj.filters.alpha.opacity = opac * 100;
		}else{
			oobj.style.MozOpacity = opac;
			oobj.style.opacity = opac;
		}
	}
}


/*
	AddEvent()
	See <http://www.dustindiaz.com/rock-solid-addevent/> for more information.
	This software is licensed under the CC-GNU LGPL <http://creativecommons.org/licenses/LGPL/2.1/>
*/

//ADD EVENT
function addEvent( obj, type, fn ) {
	if (obj.addEventListener) {
		obj.addEventListener( type, fn, false );
	}
	else if (obj.attachEvent) {
		obj["e"+type+fn] = fn;
		obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
		obj.attachEvent( "on"+type, obj[type+fn] );
	}
	else {
		obj["on"+type] = obj["e"+type+fn];
	}
}

/*
	EventCache Version 1.0
	Copyright 2005 Mark Wubben
	Provides a way for automagically removing events from nodes and thus preventing memory leakage.
	See <http://novemberborn.net/javascript/event-cache> for more information.
	This software is licensed under the CC-GNU LGPL <http://creativecommons.org/licenses/LGPL/2.1/>
*/

//EVENT CACHE


// SNIFF -> SPRITE SWAP
function sniffSpriteSwap(fobj){
	fobj.onmouseout = function(){
		fobj.style.left = 0+'px';
	};
	fobj.onmouseover = function(){
		fobj.style.left = (fobj.width)/2 * -1 +'px';
	};
}

// SNIFF -> CROSSFADER
var xfade = new Array();
var xfadeObj = new Array();
var xfadeLoop = new Array();
var xfadeStop = new Array();

function sniffXfade(fobj){
	if ((fobj.id.substring((fobj.id.length - 1),fobj.id.length) * 1) == 1){
		var transparent = false;
		var bgforie;
		var pause = 10000;
		var id =  fobj.id.substring(0,(fobj.id.length - 1));
		var cls = fobj.className.split(' ');
		for (var v=0;v<cls.length;v++){
			if (cls[v].indexOf("pause") == 0){
				pause = cls[v].replace(/pause(.*)$/,"$1");
				pause = pause * 1000;
			}else if (cls[v].indexOf("transparent") == 0){
				transparent = true;
			}else if (cls[v].indexOf(".jpg") == 0 || cls[v].indexOf(".gif") == 0){
				bgforie = cls[v];
			}
		}
		var xf = 1;
		while (document.getElementById(id+xf)){
			xfadeObj[id+xf] = new Array(document.getElementById(id+xf),0);
			xfadeObj[id+xf][0].onmouseover = function(){if(xfadeStop[id][0] != -1){xfadeStop[id][0] = 0;}}
			xfadeObj[id+xf][0].onmouseout  = function(){if(xfadeStop[id][0] != -1){xfadeStop[id][0] = 1;}}
			// transparent obj
			if (transparent){
				if (is.oldmoz){
					setopacity(xfadeObj[id+xf][0],1);
					xfadeObj[id+xf][0].style.visibility = "hidden";
				}
				if (bgforie && is.iewin){
					xfadeObj[id+xf][0].style.backgroundImage = 'url('+bgforie+')';
				}
				if (is.oldmoz && xf == 1){
					xfadeObj[id+xf][0].style.visibility = "visible";
				}
			}
			xf++;
		}
		xf--;
		xfade[id] = new Array(xf,1,pause);
		if (document.getElementById(id+'Total')){
			document.getElementById(id+'Total').innerHTML = xf;
		}
		if (document.getElementById(id+'Back')){
			document.getElementById(id+'Back').onclick = function(){
				xfadeStop[id] = new Array(-1,-1);
				clearTimeout(xfadeLoop[id]);
				xfader(id);
				return false;
			};
		}
		if (document.getElementById(id+'Next')){
			document.getElementById(id+'Next').onclick = function(){
				xfadeStop[id] = new Array(-1,1);
				clearTimeout(xfadeLoop[id]);
				xfader(id);
				return false;
			};
		}
		xfadeStop[id] = new Array(1,1);
		xfadeLoop[id] = setTimeout('xfader(\''+id+'\')',pause);
	}
}

// CROSSFADER
function xfader(id){
	// define this/next frame
	var nx = xfade[id][1] + xfadeStop[id][1];
	if(nx > xfade[id][0]){
		nx = 1;
	}
	if(nx < 1){
		nx = xfade[id][0];
	}
	var stillfading = false;
	if (xfadeStop[id][0] == 0 && xfadeObj[id+nx][1] != 0){
		var stillfading = true;
	}
	var ox = xfade[id][1];
	if (xfadeObj[id+ox][1] == 0){
		xfadeObj[id+ox][1] = 1;
	}
	if (xfadeStop[id][0] != 0 || stillfading){
		// set up objects
		if (xfadeObj[id+nx][1] == 0){
			if (!is.oldmoz){
				setopacity(xfadeObj[id+nx][0],.1);
			}
			xfadeObj[id+nx][0].style.visibility = "visible";
			xfadeObj[id+ox][0].style.zIndex = 2;
			xfadeObj[id+nx][0].style.zIndex = 10;
		}
		// if skip to next
		if (xfadeStop[id][0] == -1){
			xfadeObj[id+nx][1] = 1;
		}else{
			if (is.safari || is.oldmoz || is.ns6 || is.iemac){
				xfadeObj[id+nx][1] = 1;
			}else{
				xfadeObj[id+nx][1] = xfadeObj[id+nx][1] + .2;
			}
		}

		// set opac
		if (is.anymoz && xfadeObj[id+nx][1] == 1){
			if (!is.oldmoz){
				setopacity(xfadeObj[id+nx][0],.99);
			}
		}else{
			setopacity(xfadeObj[id+nx][0],xfadeObj[id+nx][1]);
		}
		// if fading else, complete and pause
		if (xfadeObj[id+nx][1] < 1){
			setTimeout('xfader(\''+id+'\')',120);
		}else{
			xfade[id][1] = nx;
			xfadeObj[id+ox][0].style.visibility = "hidden";
			xfadeObj[id+ox][1] = 0;
			if (document.getElementById(id+'This')){
				document.getElementById(id+'This').innerHTML = nx;
			}
			if (xfadeStop[id][0] != 0){
				xfadeStop[id] = new Array(1,1);
				xfadeLoop[id] = setTimeout('xfader(\''+id+'\')',xfade[id][2]);
			}
		}
	}
	// if paused
	if(xfadeStop[id][0] == 0){
		clearTimeout(xfadeLoop[id]);
		xfadeLoop[id] = setTimeout('xfader(\''+id+'\')',200);
	}
}

// MAKE THE K4 BOX APPEAR (ALSO SETS FOCUS)
function showK4(id){
	var div = document.getElementById(id);
	if (!div) { return; }
	removeClassName(div, "k4hidden");
	var inputs = div.getElementsByTagName("input");
	for (var a=0;a<inputs.length;a++){
		if (inputs[a].type == 'text'){
			inputs[a].focus();
			break;
		}
	}
	if (is.ie6){
		var selects = document.getElementsByTagName("select");
		for (var a=0;a<selects.length;a++){
			addClassName(selects[a], 'k4in-effect');
		}
	}
}

// MAKE THE K4 BOX DISAPPEAR
function hideK4(id){
	var div = document.getElementById(id);
	addClassName(div, "k4hidden");
	if (is.ie6){
		var selects = document.getElementsByTagName("select");
		for (var a=0;a<selects.length;a++){
			removeClassName(selects[a], 'k4in-effect');
		}
	}
}

// K5 TEMPLATE FUNCTION
function k5Click(e) {
	var idMatches = matchClassName(this,/^id-(\S+)$/);
	if (idMatches) {
		var id = idMatches[1];
	} else if (this.href.indexOf('#')!=-1) {
		var id = this.href.substring(this.href.indexOf('#')+1);
	} else { alert('no id value was specified for k5 object. className "id-someId" or URL anchor reference "...page.html#someId"'); }
	var t = (this.title) ? this.title : elemText(this);
	var title = elem('h2.k5title',{},t);
	var close = elem('a',{'href':'#'},[elem('img',{'alt':'[x]','src':imdir+'/ic_close_win.gif','border':'0'}),' Close'])
	var objectDiv = elem('div.k5w2',{},' ');
	objectDiv.refId = id;
	var k5Div = elem('div',{'class':'k5 k5empty'},elem('div.k5w1',{},[title,elem('p.k5close',{},close),objectDiv,elem('span.k5x1',{}),elem('span.k5x2',{}),elem('span.k5x3',{}),elem('span.k5x4',{})]));
	document.body.appendChild(k5Div);
	k5Div.sized = false;
	var matches = matchClassName(this,/^(\d+)(x(\d+))?$/);
	if (matches) {
		k5Div.sized = true;
		k5Div.firstChild.style.width = matches[1] + 'px';
		if (matches[3]) { objectDiv.style.height = matches[3] + 'px'; }
	}
	close.k5Div = k5Div;
	addEvent(close,'click',function(e){
		document.body.removeChild(this.k5Div);
		window.scrollTo(0,this.k5Div.oldTop);
		resumeAll();
		if (is.ie6) { document.body.removeChild(window.k5ie6bg); }
		cancelDefault(e);
	});
	this.k5Div = k5Div;
	k5Div.setError = function(error,url) {
		removeClassName(this,'k5empty');
		addClassName(this,'k5error');
		this.firstChild.style.width = null;
		var objectDiv = this.firstChild.getElementsByTagName('div')[0];
		objectDiv.style.height = null;
		objectDiv.appendChild(elem('div',{'class':'g29 g29v2'},elem('div.g29w1',{},elem('div.g29w2',{},[elem('h5',{},"Unable to display content."),elem('p',{},"Error: "+error),elem('p',{},"URL: "+url),elem('p',{},"Please notify the website owner of this problem.")]))));
	};
	if (is.ie6) {
		window.k5ie6bg = elem('div.k5ie6bg',{},'.');
		window.k5ie6bg.style.width = document.documentElement.clientWidth + 'px';
		window.k5ie6bg.style.height = document.documentElement.scrollHeight + 'px';
		document.body.appendChild(window.k5ie6bg);
		window.k5ie6bg.style.filter = 'alpha(opacity=85)';
		k5Div.style.width = document.documentElement.clientWidth + 'px';
		k5Div.oldTop = document.documentElement.scrollTop;
	}
	else { k5Div.oldTop = self.pageYOffset; }
	k5Div.style.height = document.documentElement.scrollHeight + 'px';
	if (is.safari) { k5Div.style.height = self.innerHeight + 'px'; } // safari! >:(
	window.scrollTo(0,0);
	var href = this.href;
	if (href.indexOf('#')!=-1) { href = href.substring(0,href.indexOf('#')); }
	getfile(href, function(str, objectDiv){ // XHR SUCCESS
		var k5Div = objectDiv.parentNode.parentNode;
		var el = getRequestObject(objectDiv.refId,str);
		if (!el) { k5Div.setError("id "+objectDiv.refId+" not found",href); return; } // OOPS, #FRAG NOT FOUND
		removeClassName(k5Div,'k5empty');
		objectDiv.appendChild(el);
		var matches = matchClassName(el,/^(\d+)(x(\d+))?$/);
		if (matches && !k5Div.sized) {
			k5Div.firstChild.style.width = matches[1] + 'px';
			if (matches[3]) { objectDiv.style.height = matches[3] + 'px'; }
		}
	}, objectDiv, function(objectDiv, href, status, statusText){ // XHR FAIL
		var k5Div = objectDiv.parentNode.parentNode;
		var err = (statusText) ? status + ' ' + statusText : status;
		k5Div.setError(err,href);
	});
	pauseAll();
	cancelDefault(e);
}

// SNIFF K5
function sniffK5(el) {
	if (!window.cssK5) {
		window.cssK5 = elem('link',{'type':'text/css','href':cssdir+'/k5.css','rel':'stylesheet'});
		if (typeof postCrawl == 'undefined') { window.postCrawl = {}; }
		window.postCrawl['adding k5 css']=function() {
			document.getElementsByTagName('head')[0].appendChild(window.cssK5);
		};
	}
	addEvent(el, 'click', k5Click);
}

function pauseAll() {
	window.paused = true;
	addClassName(document.body,'paused');
}
function resumeAll() {
	window.paused = false;
	removeClassName(document.body,'paused');
}

// SNIFF -> K2
function sniffK2(fobj,shownow){
	var pdoc = document;
	fobj.prp = new Array(0,0,0,"","","");
	fobj.className = fobj.className.replace(/(k2over) +/,"$1-");
	fobj.className = fobj.className.replace(/(k2click) +/,"$1-");
	fobj.className = fobj.className.replace(/(k2focus) +/,"$1-");
	fobj.className = fobj.className.replace(/(k2close) +/,"$1-");

	var cls = fobj.className.split(' ');
	var cls = fobj.className.split(' ');

	for (var v=0;v<cls.length;v++){
		if (cls[v].indexOf("k2over") > -1 || cls[v].indexOf("k2click") > -1 || cls[v].indexOf("k2focus") > -1){
			var p_objs = fobj.aob = cls[v].split('-');
			if (!p_objs[2]){
				fobj.aob[2] = p_objs[2] = p_objs[1];
				fobj.aob[1] = fobj;
			}
			kpop = pdoc.getElementById(p_objs[2]);
			kpop.kp_objs = p_objs[2];
			kpop.kp_trig = p_objs[1];
		}else if (cls[v].indexOf("a2menu") > -1){
			fobj.aob = p_objs = new Array("a2menu","mtopic"+fobj.getAttribute('id').substring(5),fobj.getAttribute('id').substring(5));
			fobj.aob[2] = p_objs[2] = "flymenu"+fobj.aob[2];
			if(pdoc.getElementById(p_objs[2])){
				kpop = pdoc.getElementById(p_objs[2]);
				kpop.kp_objs = p_objs[2];
			}
		}else if (cls[v].indexOf("k2close") > -1){
			fobj.aob = cls[v].split('-');
		}else if (cls[v].indexOf("x") == 0){
			fobj.prp[0] = (cls[v].substring(1) * 1) + fobj.prp[0];
		}else if (cls[v].indexOf("y") == 0){
			fobj.prp[1] = (cls[v].substring(1) * 1) + fobj.prp[1];
		}else if (cls[v].indexOf("z") == 0){
			fobj.prp[2] = (cls[v].substring(1) * 1);
		}else if (cls[v].indexOf("pAbsolute") == 0){
			fobj.prp[3] = (cls[v].substring(1));
		}else if (cls[v].indexOf("vBottom") == 0 || cls[v].indexOf("vTop") == 0 || cls[v].indexOf("vMiddle") == 0 || cls[v].indexOf("vAlignTopBottom") == 0){
			fobj.prp[4] = cls[v];
		}else if (cls[v].indexOf("hRight") == 0 || cls[v].indexOf("hMiddleRight") == 0 || cls[v].indexOf("hLeft") == 0 || cls[v].indexOf("hMiddleLeft") == 0 || cls[v].indexOf("hMiddle") == 0 || cls[v].indexOf("hAlignRight") == 0){
			fobj.prp[5] = cls[v];
		}
	}
	if (fobj.aob[0].indexOf("a2menu") > -1){
			if(rtl){
				fobj.prp[5] = "hAlignRight";
			}
			if(rtl && is.ie56 && kdoc.getElementById('a0v2')){
				fobj.prp[0] = fobj.prp[0] + 2;
			}else if(rtl && is.ie56 && kdoc.getElementById('a0v1')){
				fobj.prp[0] = fobj.prp[0] - 10;
			}else{
				fobj.prp[0] = fobj.prp[0] - 20;
			}
			addEvent(fobj,"mouseover",function(){
				showK2(this.aob[2],this.aob[1],this.prp[0],this.prp[1],this.prp[2],"a2","vBottom",this.prp[5]);
				showK2('offdiv','mtopics',-110,this.prp[1],"","a2","vBottom","");
				showK2('offdivT','mtopics',-110,this.prp[1],"","a2","vTop","");
				showK2('offdivL','mtopics',0,this.prp[1],"","a2","vMiddle","hLeft");
				showK2('offdivR','mtopics',0,this.prp[1],"","a2","vMiddle","hRight");
			});
			addEvent(fobj,"focus",function(){
				if(!is.op){
					showK2(this.aob[2],this.aob[1],this.prp[0],this.prp[1],this.prp[2],"a2","vBottom",this.prp[5]);
				}
			});
			addEvent(fobj,"click",function(){
				if(window.s_account && this.getAttribute('title')){
					s_linkType='o';
					s_linkName='Masthead Menu: '+this.getAttribute('title');
					s_prop15=s_pageName;
					s_prop16=this.getAttribute('title');
					s_lnk=s_co(this);s_gs(s_account);
				}
			});
	}else if (fobj.aob[0].indexOf("k2over") > -1){
		addEvent(fobj,"mouseover",function(){
			showK2(this.aob[2],this.aob[1],this.prp[0],this.prp[1],this.prp[2],this.prp[3],this.prp[4],this.prp[5]);
		});
		if (!hasClassName(fobj, "mOverOff")){
			addEvent(kpop,"mouseover",function(){
				showK2(this.kp_objs);
			});
		}
		addEvent(kpop,"mouseout",function(){
			hideK2(this.kp_objs);
		});
		addEvent(fobj,"mouseout",function(){
			hideK2(this.aob[2]);
		});
		addEvent(fobj,"focus",function(){
			showK2(this.aob[2],this.aob[1],this.prp[0],this.prp[1],this.prp[2],this.prp[3],this.prp[4],this.prp[5],'f');
		});
		if(shownow){
			showK2(fobj.aob[2],fobj.aob[1],fobj.prp[0],fobj.prp[1],fobj.prp[2],fobj.prp[3],fobj.prp[4],fobj.prp[5]);
			return false;
		}
	}else if (fobj.aob[0] == "k2click"){
		addEvent(fobj,"click",function(e){
			showK2(this.aob[2],this.aob[1],this.prp[0],this.prp[1],this.prp[2],this.prp[3],this.prp[4],this.prp[5]);
			addK2(this.aob[2],this.aob[1],this.prp[0],this.prp[1],this.prp[2],this.prp[3],this.prp[4],this.prp[5]);
			cancelDefault(e);
			return false;
		});
		if(shownow){
			showK2(fobj.aob[2],fobj.aob[1],fobj.prp[0],fobj.prp[1],fobj.prp[2],fobj.prp[3],fobj.prp[4],fobj.prp[5]);
			addK2(fobj.aob[2],fobj.aob[1],fobj.prp[0],fobj.prp[1],fobj.prp[2],fobj.prp[3],fobj.prp[4],fobj.prp[5]);
			return false;
		}
	}else if (fobj.aob[0] == "k2focus"){
		addEvent(fobj,"focus",function(){
			showK2(this.aob[2],this.aob[1],this.prp[0],this.prp[1],this.prp[2],this.prp[3],this.prp[4],this.prp[5]);
			addK2(this.aob[2],this.aob[1],this.prp[0],this.prp[1],this.prp[2],this.prp[3],this.prp[4],this.prp[5]);
		});
		addEvent(fobj,"blur",function(){
			hideK2(this.aob[2],1);
		});
	}else if (fobj.aob[0] == "k2close"){
		addEvent(fobj,"click",function(e){
			hideK2(this.aob[1],1);
			cancelDefault(e);
		});
	}
	fobj.className = fobj.className.replace(/(k2over)-|(k2focus)-|(k2cl...)-/,"$1 ");
}

// SNIFF -> TICKER
function sniffTicker(fobj){
	fobj.omni = fobj.innerHTML;
	fobj.onclick = function(){
		s_linkType='o';
		s_linkName='ticker';
		s_prop15=s_pageName;
		s_prop16=this.omni;
		s_lnk=s_co(this);
		s_gs(s_account);
	};
}

// SNIFF -> G23
function sniffG23(fobj){
	var uls = fobj.getElementsByTagName('ul');
	for (var a=0;a<uls.length;a++){
		if (hasClassName(uls[a], 'g23tree')){
			var tree = uls[a];
			var lis = tree.getElementsByTagName('li');
			for (var b=0;b<lis.length;b++){
				var li = lis[b];
				var isDefaultExpanded = hasClassName(li, 'default-expanded');
				var isBranch = false;
				if (li.getElementsByTagName('ul').length>0){
					// it's a branch if there's a nested <ul>
					if (isDefaultExpanded) { addClassName(li, 'branch'); }
					else { addClassName(li, 'collapsed branch'); }
					isBranch = true;
				}
				var isLast = true;
				if (li.nextSibling){
					if (li.nextSibling.nodeType == 1) { isLast = false; }
					else if (li.nextSibling.nextSibling && li.nextSibling.nextSibling.nodeType == 1) { isLast = false; }
				}
				if (isLast) { addClassName(li, 'last'); }
				if (is.ie6) { li.isLast = isLast; li.isBranch = isBranch; }
				if (is.ie6 && li.isLast && li.isBranch && isDefaultExpanded) { addClassName(li, 'ie-expanded-last'); }
				else if (is.ie6 && li.isLast && li.isBranch && !isDefaultExpanded) { addClassName(li, 'ie-collapsed-last'); }
				if (isBranch){
					// build the expand/collapse button
					var link = document.createElement('a');
					link.className = 'g23toggler';
					var linkContent = document.createElement('img');
					linkContent.src = '/images/a.gif';
					linkContent.height = '10';
					linkContent.width = '20';
					linkContent.alt = 'expand / collapse ';
					link.appendChild(linkContent);
					link.onclick = function(){
						if (!hasClassName(this.parentNode, 'collapsed')){
							addClassName(this.parentNode, 'collapsed');
							if (is.ie6 && this.parentNode.isLast && this.parentNode.isBranch){
								addClassName(this.parentNode, 'ie-collapsed-last');
								removeClassName(this.parentNode, 'ie-expanded-last');
							}
						}else {
							removeClassName(this.parentNode, 'collapsed');
							if (is.ie6 && this.parentNode.isLast && this.parentNode.isBranch){
								removeClassName(this.parentNode, 'ie-collapsed-last');
								addClassName(this.parentNode, 'ie-expanded-last');
							}
						}
					};
					li.insertBefore(link, li.firstChild);
					if (hasClassName(tree, 'g23check-tree')){
						// build the indicator of how many children are checked
						var countSpan = document.createElement('span');
						countSpan.className = 'g23checked-count';
						for (var c=0;c<li.childNodes.length;c++){
							if (li.childNodes[c].nodeName.toLowerCase()=='ul') { li.sublist = li.childNodes[c]; }
							if (hasClassName(li.childNodes[c], 'g23item-extra-info')) { li.extraInfo = li.childNodes[c]; }
						}
						if (li.extraInfo) { li.insertBefore(countSpan, li.extraInfo); }
						else if (li.sublist) { li.insertBefore(countSpan, li.sublist); }
						li.countSpan = countSpan;
						countSpan.appendChild(document.createTextNode(' ')); // space, rather than empty string, for safari
						if (window.opera) { countSpan.innerHTML = '&nbsp;'; } // tickle opera!
						li.updateCount = function(){
							var count = 0;
							var inputs = this.sublist.getElementsByTagName('input');
							for (var b=0; b<inputs.length; b++){
								if (inputs[b].type != 'checkbox') { continue; }
								if (inputs[b].checked) { count++; }
							}
							inputs = null;
							if (this.countSpan){
								if (count  < 1) { this.countSpan.firstChild.data = ' '; if (window.opera) { this.countSpan.innerHTML = '&nbsp;'; } } // safari space, tickle opera
								if (count == 1) { this.countSpan.firstChild.data = '(1 checked item not shown)'; }
								if (count  > 1) { this.countSpan.firstChild.data = '('+count+' checked items not shown)'; }
							}
						}
					}
				}
				li = null;
			}
			if (hasClassName(tree, 'g23check-tree')){
				var inputs = tree.getElementsByTagName('input');
				for (var b=0; b<inputs.length; b++){
					if (inputs[b].type != 'checkbox') { continue; }
					if (inputs[b].parentNode.nodeName.toLowerCase() == 'li') { inputs[b].parentNode.checkBox = inputs[b]; }
					inputs[b].onclick = function(){
						var parent = this.parentNode;
						if (parent.nodeName.toLowerCase()=='li'){
							var subinputs = parent.getElementsByTagName('input');
							for (var c=0;c<subinputs.length;c++){
								subinputs[c].checked = this.checked;
							}
							var subitems = parent.getElementsByTagName('li');
							for (var c=0;c<subitems.length;c++){
								if (typeof subitems[c].updateCount == 'function') { subitems[c].updateCount(); }
							}
							if (!this.checked){
								parent = this;
								while (parent.parentNode){
									parent = parent.parentNode;
									if (parent.checkBox) { parent.checkBox.checked = false; }
								}
							}else if (parent.parentNode.parentNode.checkBox){
								subinputs = parent.parentNode.parentNode.getElementsByTagName('input');
								var allChecked = true;
								for (var c=0;c<subinputs.length;c++){
									if (subinputs[c].type != 'checkbox') { continue; }
									if (subinputs[c] != parent.parentNode.parentNode.checkBox && !subinputs[c].checked) { allChecked = false; }
								}
								parent.parentNode.parentNode.checkBox.checked = allChecked;
							}
						}
						parent = this;
						while (parent.parentNode){
							parent = parent.parentNode;
							if (typeof parent.updateCount == 'function') { parent.updateCount(); }
						}
						parent = null;
					}
				}
				if (location.hash){
					var target = location.hash.substring(1);
					for (var b=0;b<lis.length;b++){
						var li = lis[b];
						if (li.id == target){
							var inputs = li.getElementsByTagName('input');
							for (var c=0; c<inputs.length; c++){
								if (inputs[c].type != 'checkbox') { continue; }
								inputs[c].checked = true;
							}
							var el = li;
							while (el.parentNode && !hasClassName(el, 'g23tree')){
								if (el.nodeName.toLowerCase() == 'li' && hasClassName(el, 'branch')){
									removeClassName(el, 'collapsed');
									if (is.ie6 && el.isLast && el.isBranch){
										removeClassName(el, 'ie-collapsed-last');
										addClassName(el, 'ie-expanded-last');
									}
								}
								el = el.parentNode;
							}
							var subitems = li.getElementsByTagName('li');
							for (var c=0;c<subitems.length;c++){
								if (hasClassName(subitems[c], 'branch')){
									removeClassName(subitems[c], 'collapsed');
									if (is.ie6 && subitems[c].isLast && subitems[c].isBranch){
										removeClassName(subitems[c], 'ie-collapsed-last');
										addClassName(subitems[c], 'ie-expanded-last');
									}
								}
							}
							inputs = null;
							el = null;
						}
					}
				}
				for (var b=0;b<lis.length;b++){
					var li = lis[b];
					if (typeof li.updateCount == 'function') { li.updateCount(); }
					li = null;
				}
			}
			tree = null;
		}
	}
}

// SNIFF -> MEDIA SHELL
function sniffMedia(fobj){
	if (fobj.className.search('[0-9]+x[0-9]+') == -1){
		addClassName(fobj,'662x652');
	}
	addClassName(fobj,'popup yes_000000 name-_media_window');
	sniffPopUp(fobj);
}

// SNIFF -> MODAL POP UPS
function sniffModal(fobj){
	if (hasClassName(fobj, "modal-launch")){
		var matches = fobj.className.match(/launch\-id\-([a-z0-9_-]+)/);
		if (!matches) { return; }else { fobj.modalId = matches[1]; }
		fobj.onclick = function(e){
			showK4(this.modalId);
			return false;
		};
	}else{
		fobj.onclick = function(e){
			var k4 = this.parentNode;
			while (!hasClassName(k4, 'k4') && k4.parentNode) { k4 = k4.parentNode; }
			if (hasClassName(k4, 'k4') && k4.id) { hideK4(k4.id); }
			return false;
		};
	}
}

// SNIFF -> AUTOCLEAR
function sniffAutoclear(fobj){
	fobj.onfocus = function(){
		if(this.value == this.defaultValue){
			this.value='';
		};
	};
	fobj.onblur = function(){
		if(this.value==''){
			this.value = this.defaultValue;
		}
	};
}

// SNIFF -> ROLLOVERS
function sniffRollover(fobj){
	fobj.rsrc = fobj.src;
	preloaderOff[fobj.rsrc] = new Image();
	preloaderOff[fobj.rsrc].src = fobj.rsrc;
	if (hasClassName(fobj, "rollover")){
	  preloaderOn[fobj.rsrc] = new Image();
	  preloaderOn[fobj.rsrc].src = fobj.src.replace(/_off\./,"_on.");
	  fobj.onmouseout = function(){
		  if (activeImg[this.imgGroup] != this){
			  this.src = preloaderOff[this.rsrc].src
		  }
	  };
		fobj.onmouseover = function(){
			if (activeImg[this.imgGroup] != this){
				this.src = preloaderOn[this.rsrc].src
			}
		};
	}
	if (fobj.className.indexOf("active-") > -1){
	  fobj.imgGroup = fobj.className;
	  fobj.imgGroup = fobj.imgGroup.replace(/.*active-(.*).*/,"$1");
	  preloaderActive[fobj.rsrc] = new Image();
	  preloaderActive[fobj.rsrc].src = fobj.src.replace(/_off\./,"_active.");
	  if (fobj.className.indexOf("setactive-") > -1){
		  activeImg[fobj.imgGroup] = fobj;
		  fobj.src = preloaderActive[fobj.rsrc].src;
	  }
	  fobj.onclick = function(){
			if (this.src != preloaderActive[this.rsrc].src){
				this.src = preloaderActive[this.rsrc].src;
				if (activeImg[this.imgGroup]){
					activeImg[this.imgGroup].src = preloaderOff[activeImg[this.imgGroup].rsrc].src;
				}
				activeImg[this.imgGroup] = this;
			}
		};
	}
}

// SNIFF -> A1 menus
function sniffA1(fobj){
	var a1menuwrap  = new Array('<div set_outerwidth class="a1menu" id="','">\n<div class="a1menux1" set_outerwidth></div>\n<div class="a1menuw2"><div class="a1menuw1" set_width>\n','</div>\n<div class="a1menux2" set_outerwidth></div>\n</div>\n</div>');
	var alinks = fobj.getElementsByTagName('a');
	var a1divs = '';
	for (var a=0;a<alinks.length;a++){
		if (hasClassName(alinks[a], 'language-select')){
			addClassName(alinks[a], 'k2over-languageselector y3 x-10');
			var outw = 170;
			var w0 = a1menuwrap[0].replace(/set_outerwidth/,'style="width:'+outw+'px;min-width:'+outw+'px;"');
			var w1 = a1menuwrap[1].replace(/set_outerwidth/,'');
			var w2 = a1menuwrap[2].replace(/set_outerwidth/,'');
			a1divs = a1divs+w0+'languageselector'+w1+'<h5></h5><div></div>'+w2;
			continue;
		}
		addClassName(alinks[a], 'karrow');
		var thisText = /^[ \t\n]*(.*)[ \t\n]*$/.exec(alinks[a].innerHTML);
		if(!thisText){continue;}
		for (i in a1hrefs){
			if (a1hrefs[i][0] == thisText[1]){
				if (hasClassName(alinks[a], "a1cart")){
					alinks[a].innerHTML = '<span class="carticon small">'+alinks[a].innerHTML+'</span>';
					alinks[a].style.paddingLeft = "0px";
				}
				addClassName(alinks[a], 'k2over-'+i+' y3 x-6');
				if (a1menus[i]){
					var outw = (a1menus[i][0] * 1) + 22;
					var w0 = a1menuwrap[0].replace(/set_outerwidth/,'style="width:'+outw+'px;min-width:'+outw+'px;"');
					var w1 = a1menuwrap[1].replace(/set_outerwidth/,'');
					var w2 = a1menuwrap[2].replace(/set_outerwidth/,'');
					a1divs = a1divs+w0+i+w1+a1menus[i][1]+w2;
					a1menus[i][1] = "";
					a1menus[i] = false;
				}
			}
		}
	}
	if (a1divs != ''){
		fobj.innerHTML = fobj.innerHTML+a1divs;
	}
}

// SNIFF -> country and language selector
function sniffSiteSelector(span) {
	var lnks = span.getElementsByTagName('a');
	for (var a=0; a<lnks.length; a++) {
		var lnk = lnks[a];
		if (hasClassName(lnk, 'country-select')) {
			addClassName(lnk,'modal-launch launch-id-country-selector');
			sniffModal(lnk);
			var k4 = elem('div',{'class':'k4 k4v1 k4hidden','id':'country-selector'});
			k4.innerHTML = '<div class="k4w1"><div class="k4w2"><div class="k4w3"><div class="k4w4"><div class="k4title"><h2>'
				+'</h2><p class="modal-extra"><a href="" class="modal-close">[X]</a></p></div><div class="k4body">'
				+'</div></div></div></div></div>';
			k4.setTitle=function(txt){this.getElementsByTagName('h2')[0].innerHTML=txt;};
			k4.setBody=function(txt){this.getElementsByTagName('div')[5].innerHTML=txt;};
			document.body.appendChild(k4);
			addEvent(lnk, 'click', function(){
				var thisHref = this.href;
				try {
					getfile(this.href, function(rdata,fvar){
						try {
							var headingText = elemText(getRequestObject('country-data-title',rdata,'h2'));
							var bodyText = getRequestObject('country-data',rdata).innerHTML;
						} catch (ex) { window.location = thisHref; }
						k4.setTitle(headingText);
						k4.setBody(bodyText);
					});
				} catch (e) { window.location = thisHref; }
			});
		} else if (hasClassName(lnk, 'language-select')) {
			var k2 = document.getElementById('languageselector');
			k2.setTitle=function(txt){this.getElementsByTagName('h5')[0].innerHTML=txt;};
			k2.setBody=function(txt){this.getElementsByTagName('div')[3].innerHTML=txt;};
			addEvent(lnk, 'mouseover', function(){
				var thisHref = this.href;
				try {
					getfile(this.href, function(rdata,fvar){
						try {
							var headingText = elemText(getRequestObject('language-data-title',rdata,'h2'));
							var bodyText = getRequestObject('language-data',rdata).innerHTML;
						} catch (ex) {
							k2.setTitle('no data');
							return;
						}
						k2.setTitle(headingText);
						k2.setBody(bodyText);
					});
				} catch (e) { window.location = thisHref; }
			});
		}
	}
}

// SNIFF -> PopUps
function sniffPopUp(fobj){
	addEvent(fobj,"click",function(e){
		var popW = '800';
		var popH = '600';
		var param = new Array('no',0,0,0,0,0,0,'','');
		var popUrl = fobj.href;
		if (fobj.target){
			var popTarget = fobj.target;
		}else{
			var popTarget = "newpopup";
		}
		var cls = fobj.className.split(' ');
		for (var v=0;v<cls.length;v++){
			if (cls[v].search('[0-9]+x[0-9]+') > -1){
				var f = cls[v].split('x');
				popW = f[0];
				popH = f[1];
			}else if(cls[v].indexOf("name-") == 0){
				var f = cls[v].split('name-');
				popTarget = f[1];
			}else if(cls[v] == "scrolling"){
				var param = new Array('yes',1,0,0,0,0,0);
			}else if(cls[v] == "full"){
				var param = new Array('yes',1,1,1,1,1,1);
			}else if(cls[v].indexOf("yes_") == 0 || cls[v].indexOf("no_") == 0){
				var f = cls[v].split('_');
				f[1] = "f"+f[1];
				var param = f[1].split('');
				param[0] = f[0];
			}

			if(fobj.className.indexOf("centerpop") > 1){
				param[7] = screen.availHeight/2 - popH/2;
				param[8] = screen.availWidth/2 - popW/2;
 			}

		}
		openPopup(popUrl,popTarget,popW,popH,param[0],param[1],param[2],param[3],param[4],param[5],param[6],param[7],param[8]);
		cancelDefault(e);
	});
}

// CANCEL DEFAULT EVENT
function cancelDefault(e){
	if (is.ie567) {
		e.returnValue=false;
	}else{
		e.preventDefault();
	}
}

// GENERIC POP UP
function openPopup(url,name,width,height,resizable,scrollbars,menubar,toolbar,location,directories,status,top,left) {
	if(top && left){
		var tl = ',top=' + top +',left=' + left;
	}else{
		var tl = '';
	}
	popup = window.open(url, name, 'width=' + width + ',height=' + height + ',resizable=' + resizable + ',scrollbars=' + scrollbars	+ ',menubar=' + menubar + ',toolbar=' + toolbar + ',location=' + location + ',directories=' + directories + ',status=' + status+tl);
	popup.focus();
}

// SNIFF -> goto menu
function sniffGoto(fobj){
	if(hasClassName(fobj, 'showDiv')){
		addEvent(fobj,"change",function(){
				var divID = this.options[this.selectedIndex].value.split('#')[1];
				if (this.currentItem){
						addClassName(this.currentItem,'hidethis');
				}
				if(document.getElementById(divID)){
					this.currentItem = document.getElementById(divID);
					removeClassName(this.currentItem,'hidethis');
				}else{
					this.currentItem = null;
				}
		});
	}else{
		addEvent(fobj,"change",function(){
			if(this.options[this.selectedIndex].value != "" && this.options[this.selectedIndex].getAttribute("value")){
				document.location = this.options[this.selectedIndex].value;
			}
		});
	}
}

// SNIFF -> goto UL menu
function sniffGotoUL(fobj){
	var li = getChildNodesByTagName(fobj,'li');
	var options = "";
	var heading = prevElem(fobj);
	if(heading && hasClassName(heading, 'listTitle')){
		options = options+'<option value="">'+heading.innerHTML+'</option>\n<option value="">-------------------------------------------</option>';
	}
	var ulclass = "goto";
	var form = elem('form',{'action':''});
	fobj.parentNode.insertBefore(form, fobj);
	if(hasClassName(fobj, 'showDiv')){
		ulclass = "showDiv";
		var exdiv = document.createElement('div');
		fobj.parentNode.insertBefore(exdiv, fobj);
	}
	for (var n=0;n<li.length;n++){
		if (li[n].getElementsByTagName('a')[0]){
			options = options+'<option value="'+li[n].getElementsByTagName('a')[0].href+'">'+li[n].getElementsByTagName('a')[0].innerHTML+'</option>';
		}else if (li[n].innerHTML){
			options = options+'<option value="">'+li[n].innerHTML+'</option>';
		}
		if (hasClassName(fobj, 'showDiv') && li[n].getElementsByTagName('div')[0]){
			exdiv.appendChild(li[n].getElementsByTagName('div')[0]);
		}
	}
	form.innerHTML = '<select class="'+ulclass+'">'+options+'</select>';
	fobj.parentNode.removeChild(fobj);
}

// SNIFF -> IMG BOX & IMG ZOOM
var zimg = 1;
function sniffImgbox(imgdiv){
	var img = imgdiv.getElementsByTagName('img')[0];
	imgdiv.style.background  = 'url('+img.src+') no-repeat';
	imgdiv.style.width = img.width+'px';
	imgdiv.style.height = img.height+'px';
	img.style.display = 'none';

	if (is.ie56 && hasParent(imgdiv,'div','g20w1')){
		var wrapdiv = hasParent(imgdiv,'div','g20w1');
		wrapdiv.style.width = ((img.width * 1) + 12) + 'px';
		addClassName(wrapdiv, 'showcorners');
	}

	if (hasClassName(imgdiv,'imgcorners')){
		imgdiv.innerHTML = '<div class="imgw1"><div class="imgw2"><div class="imgw3"><div class="imgw4" style="width:'+img.width+'px;height:'+img.height+'px">'+imgdiv.innerHTML+'</div></div></div></div>';
	}
	if (hasClassName(imgdiv,'imgzoom')){
		var lgimg = imgdiv.getElementsByTagName('a')[0].href;
		var lgDiv = document.createElement('div');
		lgDiv.className = 'zoomimg k2';
		lgDiv.id = 'zoomimg'+zimg;
		var lgblur = document.createElement('a');
		lgblur.style.backgroundImage = 'none';
		lgblur.onclick = function(){return false;}
		var lgImg = document.createElement('img');
		lgImg.src = lgimg;
		lgblur.appendChild(lgImg);
		lgDiv.appendChild(lgblur);
		imgdiv.appendChild(lgDiv);
		if (hasClassName(imgdiv,'imgright')){
			imgdiv.className = imgdiv.className+' hAlignRight x10';
		}else{
			imgdiv.className = imgdiv.className+' x-10';
		}
		imgdiv.className = imgdiv.className+' vAlignTopBottom y-10 k2over-zoomimg'+zimg;
		sniffK2(imgdiv);
		imgdiv.getElementsByTagName('a')[0].onclick = function(){return false;}
		imgdiv.getElementsByTagName('a')[0].style.width = img.width+'px';
		imgdiv.getElementsByTagName('a')[0].style.height = img.height+'px';
		zimg++;
	}
}

// SNIFF -> SHARE THIS PAGE
function sniffSharePage(titleDiv) {
	titleDiv.id='sharepage';
	if (is.ie5) { return; }
	if (typeof shareThisPage == 'undefined') { return; }
	var metas = document.getElementsByTagName('meta');
	for (var a=0;a<metas.length;a++) {
		if (""+metas[a].name.toLowerCase()=='share-this-page' && ""+metas[a].content.toLowerCase()=='no') { return; }
	}
	var shareDiv = document.createElement('div');
	shareDiv.className = 'sharepage';
	titleDiv.appendChild(shareDiv);
	shareDiv.innerHTML = shareThisPage;
	var mult = document.getElementById("share-multiple-feeds");
	if (mult) {
		var lnk = mult.getElementsByTagName('a')[0];
		lnk.titleDiv = titleDiv;
		lnk.mult = mult;
		addEvent(lnk,'click',function(e){
			if (!this.feedListDiv) {
				var links = document.getElementsByTagName('link');
				var feedLinks = [];
				var feedListStr = '<ul class="feedicon icons">';
				for (var a=0; a<links.length; a++) {
					if (''+links[a].rel.toLowerCase() == 'alternate') {
						feedLinks[feedLinks.length] = links[a];
					}
				}
				for (var a=0; a<feedLinks.length; a++) {
					feedListStr += '<li';
					if (a==0) { feedListStr += ' class="first-child"'; }
					else if (a==feedLinks.length - 1) { feedListStr += ' class="last-child"'; }
					feedListStr += '><div><a class="sharelink feed" href="'+feedLinks[a].href+'">'+feedLinks[a].title+'</a></div></li>';
				}
				feedListStr += '</ul><span class="x1"></span><span class="x2"></span>';
				var feedListDiv = elem('div',{'id':'share-feed-list'});
				feedListDiv.innerHTML = feedListStr;
				this.titleDiv.appendChild(feedListDiv);
				this.feedListDiv = feedListDiv;
				addClassName(this.mult,'showing');
				tagOmnitureCustomLinksForSharePage(this.feedListDiv);
			} else {
				if (hasClassName(this.feedListDiv,'hidethis')) {
					removeClassName(this.feedListDiv,'hidethis');
					addClassName(this.mult,'showing');
				} else {
					addClassName(this.feedListDiv,'hidethis');
					removeClassName(this.mult,'showing');
				}
			}
			cancelDefault(e);
		});
	}
	tagOmnitureCustomLinksForSharePage(shareDiv);
}

function tagOmnitureCustomLinksForSharePage(el){
	if (typeof window.s_co!='undefined') {
		var custLink = function(e) {
			var prepend = this.className.replace(/sharelink /,"")+": ";
			s_linkType='o';
			s_linkName=prepend+this.href;
			s_lnk=s_co(this);
			s_gs(s_account);
		}
		var links = el.getElementsByTagName('a');
		for (var a=0; a<links.length; a++) {
			if (!hasClassName(links[a], 'sharelink')) { continue; }
			addEvent(links[a], 'click', custLink);
		}
	}
}

// SNIFF -> IMG SWAP
function sniffImgswap(link) {
	if (link.src){
		imgpreload[link.id] = new Image();
		imgpreload[link.id].src = link.src;
	}else{
		link.imgref = link.className.replace(/[^ ]* ?([^ ]+_\d).*/,"$1").split('_');
		link.src = document.getElementById(link.imgref[0]).src.replace(/_\d+\./,"_"+link.imgref[1]+".");
		imgpreload[link.src] = new Image();
		imgpreload[link.src].src = link.src;
		if (!hasClassName(link,'swapOnclick')){
			link.onmouseover = function(){
				document.getElementById(this.imgref[0]).src = imgpreload[this.src].src;
			}
			link.onmouseout = function(){
				document.getElementById(this.imgref[0]).src = imgpreload[this.imgref[0]].src;
			}
			if (!hasClassName(link,'followLink')){
				link.onclick = function(){return false;}
			}
		}else{
			link.onclick = function(){
				imgpreload[this.imgref[0]].src = document.getElementById(this.imgref[0]).src = imgpreload[this.src].src;
				return false;
			}
		}
	}
}

// SNIFF -> IMG MULTI SWAP
function sniffMultiswap(fobj) {
	if(fobj.src){
		imgpreload[fobj.id] = new Image();
		imgpreload[fobj.id].src = fobj.src;
		if(fobj.className.indexOf('mswap-') > -1){
			var aimg = fobj.className.split('mswap-')[1].split('-')[0].split(' ')[0];
			fobj.src = fobj.src.replace(/[^\/]+(\.....?)$/,aimg+'$1');
		}
	}else{
		fobj.targetid = fobj.className.split('mswap-')[1].split('-')[0].split(' ')[0];
		var prefixid = fobj.targetid.replace(/(.*)\d+?/,'$1');
		fobj.pre = prefixid;
		if(fobj.className.indexOf('mswap-'+fobj.targetid+'-') > -1){
			var imgfile = fobj.className.split('mswap-'+fobj.targetid+'-')[1].split(' ')[0];
		}else{
			var imgfile = fobj.href.replace(/.*\/([^\/]+)?/,'$1').split('.')[0];
		}
		fobj.src = document.getElementById(fobj.targetid).src.replace(/[^\/]+(\.....?)$/,imgfile+'$1');
		imgpreload[fobj] = new Image();
		imgpreload[fobj].src = fobj.src;

		addEvent(fobj,"click",function(e){
			var n = 1;
			while(document.getElementById(this.pre+n)){
				document.getElementById(this.pre+n).src = imgpreload[this.pre+n].src;
				n++;
			}
			document.getElementById(this.targetid).src = this.src;
			if (hasClassName(this,'followLink') || this.target != ''){
			}else{
				cancelDefault(e);
			}
		});
	}
}

// SNIFF -> G27
var g27c = 0;
function sniffG27(fobj) {
	fobj.getElementsByTagName('h3')[0].innerHTML = '<a href="#" class="toggleObj objects-g27obj'+g27c+'-g27ttp'+g27c+'-g27ttm'+g27c+'"><span id="g27ttp'+g27c+'" class="g27p">&nbsp;</span><span id="g27ttm'+g27c+'" class="hidethis g27m">&nbsp;</span> '+fobj.getElementsByTagName('h3')[0].innerHTML+'</a>';
	fobj.getElementsByTagName('div')[0].id = 'g27obj'+g27c;
	g27c++;
}

// SNIFF TOGGLE ALL CHECKBOXES IN A TABLE
function sniffToggleAllCheckboxesInTable(lnk){
	var pTab = lnk.parentNode;
	while(pTab.nodeName.toLowerCase()!='table'){pTab=pTab.parentNode;}
	lnk.checkStatus=true;
	lnk.titleSelect='Select All';
	lnk.titleUnselect='Unselect All';
	lnk.title=lnk.titleSelect;
	lnk.img=lnk.getElementsByTagName('img')[0];
	lnk.img.alt=lnk.titleSelect;
	var inputs=pTab.getElementsByTagName('input');
	lnk.checkboxes=[];
	for(var b=0;b<inputs.length;b++){
		if('checkbox'==inputs[b].type){lnk.checkboxes.push(inputs[b]);}
	}
	lnk.onclick=function(){
		for(var c=0;c<this.checkboxes.length;c++){
			this.checkboxes[c].checked=this.checkStatus;
		}
		this.title=(this.checkStatus)?this.titleUnselect:this.titleSelect;
		this.img.alt=(this.checkStatus)?this.titleUnselect:this.titleSelect;
		this.checkStatus=!this.checkStatus;
		return false;
	}
}

// SNIFF EXPANDIBLE / COLLAPSIBLE PC1
function sniffExpandCollapsePc1(div){
	addClassName(div,'pc1collapsed');
	removeClassName(div,'pc1collapsible');
	var h=div.getElementsByTagName('h2')[0];
	var lnk=elem('a',{'href':'#'},' '+elemText(h));
	var im=elem('img',{'src':'/images/pc1-expand.gif','alt':'','class':'pc1expand-collapse-icon','border':'0'});
	im.srcCollapse='/images/pc1-collapse.gif';
	im.srcExpand=im.src;
	lnk.titleCollapse='Collapse this section';
	lnk.titleExpand='Expand this section';
	lnk.title=lnk.titleExpand;
	lnk.insertBefore(im,lnk.firstChild);
	lnk.im=im;
	lnk.div=div;
	h.innerHTML='';
	h.appendChild(lnk);
	lnk.onclick=function(){
		if(hasClassName(this.div,'pc1expanded')){
			addClassName(this.div,'pc1collapsed');
			removeClassName(this.div,'pc1expanded');
			this.title=this.titleExpand;
			this.im.src=this.im.srcExpand;
		}else{
			addClassName(this.div,'pc1expanded');
			removeClassName(this.div,'pc1collapsed');
			this.title=this.titleCollapse;
			this.im.src=this.im.srcCollapse;
		}
		return false;
	};
	var innerContainer=getElementsByClassName(div, 'cornerBR')[0];
	var p=elem('p',{'class':'pc1expand-note'},' Click the plus icon to expand this section.');
	innerContainer.appendChild(p);
}

// SNIFF LINK AJAXER
var hijaxCache = {};
function sniffLinkHijax(fobj){
	if (fobj.nodeName.toLowerCase() == 'a'){
		var links = new Array(fobj);
	}else if(fobj.getElementsByTagName('a')[0]){
		var links = fobj.getElementsByTagName('a');
	}
	for (i=0; i<links.length; i++){
		links[i].targetDIV = fobj.className.split('hijax-')[1];
		addEvent(links[i],"click",function(e){
				var targetDIV = this.targetDIV;
				var hstring = this.href+' ';
				if (!hijaxCache[hstring]){
					getfile(this.href, function(rdata,fvar){
						if(rdata.indexOf('id="'+targetDIV+'"') > -1){
							rdata = getRequestObject(targetDIV,rdata).innerHTML;
							hijaxCache[hstring] = rdata;
							document.getElementById(targetDIV).innerHTML = rdata;
							domCrawl(document.getElementById(targetDIV));
						}
					});
					cancelDefault(e);
				}else{
					document.getElementById(targetDIV).innerHTML = hijaxCache[hstring];
					domCrawl(document.getElementById(targetDIV));
					cancelDefault(e);
				}
		});
	}
}

// SNIFF FORM AJAXER
function sniffFormHijax(fobj){
	addEvent(fobj,"submit",function(e){
				var targetDIV = getClassContains(this, "wgform-").split('wgform-')[1];
				if(hasParent(this,targetDIV)){
					var findSubmits = this.getElementsByTagName('input');
					var foundSubmits = new Array();
					for (i=0; i<findSubmits.length; i++){
						if(findSubmits[i].type == 'submit'){
							foundSubmits.push(findSubmits[i]);
						}
					}
					if (foundSubmits[1]){
						for (i=0; i<foundSubmits.length; i++){
							foundSubmits[i].style.display="none";
						}
						var p=elem('p',{'class':'wgSubmitting'}, processingRequest+'...');
						this.appendChild(p);
					}else if(foundSubmits[0]){
							foundSubmits[0].value=processingRequest;
							foundSubmits[0].disabled=true;
					}
				}
				getfile(this.action+'?'+getFormData(this), function(rdata,fvar){
				if(rdata.indexOf(targetDIV) > -1){
					rdata = getRequestObject(targetDIV,rdata).innerHTML;
				}
				document.getElementById(targetDIV).innerHTML = rdata;
				domCrawl(document.getElementById(targetDIV));
			});
		cancelDefault(e);
	});
}

// GATHER FORM DATA
function getFormData(thisform) {
	var argstring = "";
	var formElements = thisform.getElementsByTagName('input');
	for (i=0; i<formElements.length; i++){
		if (formElements[i].type == "text" || formElements[i].type == "hidden" || formElements[i].type == "submit" || formElements[i].type == "button" || formElements[i].type == "password"){
			argstring += formElements[i].name + "=" + escape(formElements[i].value) + "&";
		}
		if (formElements[i].type == "checkbox"){
			if (formElements[i].checked) {
				argstring += formElements[i].name + "=" + escape(formElements[i].value) + "&";
			} else {
				argstring += formElements[i].name + "=&";
			}
		}
		if (formElements[i].type == "radio"){
			if (formElements[i].checked) {
				argstring += formElements[i].name + "=" + escape(formElements[i].value) + "&";
			}
		}
	}
	var formElements = thisform.getElementsByTagName('select');
	for (i=0; i<formElements.length; i++){
		argstring += formElements[i].name + "=" + escape(formElements[i].options[formElements[i].selectedIndex].value) + "&";
	}
	var formElements = thisform.getElementsByTagName('textarea');
	for (i=0; i<formElements.length; i++){
		argstring += formElements[i].name + "=" + escape(formElements[i].value) + "&";
	}
	return argstring;
}

// cTool-t-ID-class-event
// cTool-a-ID-class-event
// cTool-r-ID-classANY-event

// SNIFF CLASS TOGGLE
function sniffClassTool(fobj){
	var cls = fobj.className.split(' ');
	for (var v=0;v<cls.length;v++){
		if (cls[v].indexOf('cTool-') == 0){
 			var objs = cls[v].split('cTool-')[1].split('-');
			
			if(objs[objs.length - 1].indexOf('RMV') > -1 || objs[objs.length - 1].indexOf('TGL') > -1 || objs[objs.length - 1].indexOf('ADD') > -1){
				var action = "click";					
			}else{
				var action = objs[objs.length - 1];
				objs.pop();
			}
			fobj.objs = objs;
			fobj.tid = objs.shift();
			
			if(fobj.tid == "this"){
				fobj.tid = fobj;
			}

 			if (action == 'hover'){ // all hovers need to be TGL, ADD/RMV will not work
				addEvent(fobj,"mouseout",function(e){
					classomatic(this.tid,this.objs);
				});
				var action = "mouseover";					
			}

			addEvent(fobj,action,function(e){
				classomatic(this.tid,this.objs);
 				if (action == 'click'){
 					cancelDefault(e);
 				}
			});
		}
	}
}

function classomatic(id,todo){
 	if(!document.getElementById(id)){
 		var tobj = id;
 	}else{
 		var tobj = document.getElementById(id);
 	}
 	for (var v=0;v<todo.length;v++){
		if(todo[v].indexOf('RMV') == 0){
			removeClassName(tobj, todo[v].substring(3,todo[v].length));
		}else if(todo[v].indexOf('ADD') == 0){
			addClassName(tobj, todo[v].substring(3,todo[v].length));
		}else if(todo[v].indexOf('TGL') == 0){
			if (hasClassName(tobj, todo[v].substring(3,todo[v].length))){
				removeClassName(tobj, todo[v].substring(3,todo[v].length));
			}else if (!hasClassName(tobj, todo[v].substring(3,todo[v].length))){
				addClassName(tobj, todo[v].substring(3,todo[v].length));
			}
 		}
 	}
}


// SNIFF GENERIC TOGGLER
function sniffToggler(fobj){
	if(hasClassName(fobj, 'showThis')){
			fobj.toggler = fobj.href.split('#')[1];
			addEvent(fobj,"click",function(e){
				var objRoot = this.toggler.replace(/\d+?/,"");
				var n = 1;
				while(document.getElementById(objRoot+n)){
					if(this.toggler == objRoot+n){
						removeClassName(document.getElementById(this.toggler), 'hidethis');
					}else{
						addClassName(document.getElementById(objRoot+n), 'hidethis');
					}
					n++;
				}
				cancelDefault(e);
			});
	}else{
		var cls = fobj.className.split(' ');
		for (var v=0;v<cls.length;v++){
			if (cls[v].indexOf('objects-') == 0){
				fobj.toggler = cls[v].replace(/objects-/,"");
			}
		}
		addEvent(fobj,"click",function(e){
			var tid = this.toggler.split('-');
			for (i in tid){
				if (tid[i].indexOf('ALL') > -1){
					var tAll = new Array();
					var x = 1;
					while (document.getElementById(tid[i].split('ALL')[0]+x)){
						tAll.push(tid[i].split('ALL')[0]+x);
						x++;
					}
					for (i in tAll){
						toggler(this,tAll[i]);
					}
				}else{
					toggler(this,tid[i]);
				}
			}
			cancelDefault(e);
		});
	}
}


function toggler(fobj,id){
	if (hasClassName(document.getElementById(id), 'hidethis') && !hasClassName(fobj, 'hideall') || hasClassName(fobj, 'showall')){
		removeClassName(document.getElementById(id), 'hidethis');
	}else if (!hasClassName(document.getElementById(id), 'hidethis') || hasClassName(fobj, 'hideall')){
		addClassName(document.getElementById(id), 'hidethis');
	}
}

// SNIFF UL.LISTFADE
var ulid = 0;
function sniffListfade(fobj){
	ulid++;
	var li = fobj.getElementsByTagName('li');
	var x = 0;
	while (li[x]){
		li[x].id = ulid+'ulfade'+(x+1);
		if (x==0){
			addClassName(li[x], 'xfadefirst');
			var p = 'pause5';
			if (fobj.className.indexOf('pause') > -1){
				p = getClassContains(fobj,'pause');
			}
			addClassName(li[x], p);
		}else{
			addClassName(li[x], 'xfade');
		}
		x++;
	}
}

// SNIFF K2 W/ AJAX
function sniffK2ajax(fobj){
	var containerID = fobj.className.split('k2ajax-')[1].split(' ')[0];
	var fileUrl = document.getElementById(containerID).getElementsByTagName('a')[0].href;
	if (fobj.className.indexOf('k2over-') > -1){
		var mvnt = "mouseover";
	}else{
		var mvnt = "click";
	}
	addEvent(fobj,mvnt,function(){
		if(document.getElementById(containerID).innerHTML.indexOf('getUrl') > -1){
			var fvars = new Array(containerID,fobj);
			getfile(fileUrl,function(rdata,fvar){
				if(rdata.indexOf('contentchunk') > -1){
					rdata = getRequestObject('contentchunk',rdata).innerHTML;
				}
				document.getElementById(fvar[0]).innerHTML = rdata;
				domCrawl(document.getElementById(fvar[0]));
				sniffK2(fvar[1],true);
			},fvars);
		}
	});
}

// GENERIC HTTP REQUEST
function getfile(filepath,ftodo,fvar,ferr){
	var http_request = false;
	if (window.XMLHttpRequest) {
		http_request = new XMLHttpRequest();
		if (http_request.overrideMimeType && filepath.indexOf('\.xml') > -1){
			http_request.overrideMimeType('text/xml');
		}
	}else if (window.ActiveXObject) { // IE
		try { http_request = new ActiveXObject("Msxml2.XMLHTTP");
		}catch(e){
			try{
				http_request = new ActiveXObject("Microsoft.XMLHTTP");
			}catch(e){}
		}
	}
	if (!http_request) {
		return false;
	}
	http_request.onreadystatechange = function() {
		if (http_request.readyState == 4) {
			if (http_request.status == 200) {
				if (filepath.indexOf('.xml') > -1){
					var rdata = http_request.responseXML.documentElement;
				}else{
					var rdata = http_request.responseText;
				}
				ftodo(rdata,fvar); // SUCCESS
   			}else{
   				if (ferr) { ferr(fvar,filepath,http_request.status,http_request.statusText); } // FAIL
  			}
		}
	};
	http_request.open('GET', filepath, true);
	http_request.send(null);
}

// RETURN OBJECT FROM STRING
function getRequestObject(elementID,rdata,elementTag) {
	if (!elementTag){ var elementTag = 'div'} // elementTag optional, defaults to DIV
	var sudocont = document.createElement(elementTag);
	sudocont.innerHTML = rdata;
	var x = sudocont.getElementsByTagName(elementTag);
	var chunk;
	for (var i=0;i<x.length;i++) {
		if (x[i].id == elementID) {
			chunk = x[i];
			break;
		}
	}
	return chunk;
}

// LOAD URL ON PAGE LOAD
function sniffLoadUrl(fobj){
	if(fobj.href.indexOf('#') > -1){
		var thehref = fobj.href.split('#')[0];
		var id = fobj.href.split('#')[1];
		getfile(thehref,function(rdata,objs){
//			alert('oooooooooooooo'); ie isn't getting to this point
			if(objs[0]){
				rdata = getRequestObject(objs[0],rdata).innerHTML;
			}
			var insertDIV = elem('div');
			objs[1].parentNode.insertBefore(insertDIV, objs[1]);
			insertDIV.innerHTML = rdata;
			domCrawl(insertDIV);
			objs[1].parentNode.removeChild(objs[1]);
		},[id,fobj]);
	}
}

function sniffSelectTab(fobj){
	var li = getChildNodesByTagName(fobj,'li');
	for (var n=0;n<li.length;n++){
		if (li[n].getElementsByTagName('a')[0]){
			li[n].getElementsByTagName('a')[0].u = fobj;
			addEvent(li[n].getElementsByTagName('a')[0],"click",function(e){
				var sl = getChildNodesByTagName(this.u,'li');
				for (var i=0;i<sl.length;i++){
					if (this.innerHTML == sl[i].getElementsByTagName('a')[0].innerHTML){
						addClassName(sl[i],'currentTab');
					}else{
						removeClassName(sl[i],'currentTab');
					}
				}
			});
		}
	}
}

