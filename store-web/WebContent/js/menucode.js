/* ###########################################################################

GLOBAL ASSETS RELEASE v3.1

MENUCODE.JS v2.5

BUILD DATE: 20070914

COPYRIGHT SUN MICROSYSTEMS INC. 2007

CONTACT webdesign -at- sun.com WITH ANY QUESTIONS

########################################################################### */

// INIT VALUES
flym = new Array();
posi = new Array();
nlnk = new Array();
glnk = new Array();
mtopic = new Array();
mitm = new Array();
mlnk = new Array();
toplink = new Array();
glinkstate = new Array();
glinknull = 'url('+imdir+'/a2_menu_off.gif)';
glinkhover = "#ED9B09";	// main topic when active
glinkhighl = "#ED9B09";	// main topic when in that section
glinkdeflt = "#FFFFFF";	// main topic default
mitembgD = "#35556B";	// menu bg default
mitembgH = "#E97D19";	// menu bg hover
mitemlnD = "#A3B8CB";	// menu line default
mitemlnH = "#A14D00";	// menu line hover
oldmast = false;
omenu = null;
oitem = null;
ready = false;
clinks = false;
clkd = false;
done = false;
presetlink = 0;
thisdoc = document;

// COLOR MASTHEAD BG
function clrtopic(cid,clrval){
	if(mtopic[cid] && clrval){
		if (clinks){
			mtopic[cid].style.backgroundColor = mitembgD;
		}else{
			mtopic[cid].style.backgroundImage = glinkbimg;
		}
		glnk[cid].style.textDecoration = "underline";
	}else if(mtopic[cid]){
		if (clinks){
			mtopic[cid].style.backgroundColor = "transparent";
		}else{
			mtopic[cid].style.backgroundImage = glinknull;
		}
		glnk[cid].style.textDecoration = glinkstate[cid];
	}
}

// COLOR MENU ITEM
function clrmenu(dc){
	if (oitem){
		var whichlink = oitem.split('_'); 
		if (whichlink[1] != 1){
			mitm[oitem].style.borderTop = "1px solid "+mitemlnD;
		}else{
			mitm[oitem].style.borderTop = "1px solid "+mitembgD;
		}
		mitm[oitem].style.backgroundColor =  mitembgD;
		mlnk[oitem].style.textDecoration = "none";
	}
	if (dc){
		mitm[dc].style.backgroundColor = mitembgH;
		mitm[dc].style.borderTop = "1px solid "+mitemlnH;
		mlnk[dc].style.textDecoration = "underline";
	}
	oitem = dc;
}

// FILTER OLD/NEW 
function printmenus(){
	if (is.docom){
		ptest = window.onload+" yesprint";
		// hardcode w/old	
		if (document.getElementById('navlink1') && navmenu['1.0']){
			document.write('<script language="javascript1.2" type="text/javascript" src="/js/menucode_legacy.js"></script>');
		// hardcode w/new	
		}else if (document.getElementById('mtopic1') && navmenu['1.0']){
			insertmenus();
		}
	}
}

// INSERT MENUS
function insertmenus(){
		var clickaction = "";
		var mtwidth = mwidth + 20;
		var mtdwidth = mtwidth - 16;
		var x = 1;
		var xx = 1;
		while (navmenu[x+'.1']){
			checkforoldmenu(x);
			var thismenu =  "";
			var topiclink = navmenu[x+'.0'].split('|'); 
			while (navmenu[x+'.'+xx]){ 
				var itemnlink = navmenu[x+'.'+xx].split('|'); 
				var ml = (xx != 1)? "s": "1";
				//omniture onclick code
				if(window.s_account){
					var clickaction = "if(!clkd){s_linkType='o';s_linkName='Masthead Menu: "+topiclink[0]+"';s_prop15=s_pageName;s_prop16='"+itemnlink[0]+"';s_lnk=s_co(this);s_gs(s_account);clkd=true;}";
					var fullclick = ' onclick="'+clickaction+'"';
				}else{
					var clickaction = "";
					var fullclick = "";
				}
				thismenu = thismenu+'\
				<div style="background:'+mitembgD+'" class="menulink'+ml+'" onmouseover="clrmenu(\''+x+'_'+xx+'\');" id="'+x+'_'+xx+'" onclick="'+clickaction+'document.location = \''+itemnlink[1]+'\'">\
					<a href="'+itemnlink[1]+'" class="menulink" onfocus="clrmenu(\''+x+'_'+xx+'\');" id="mlink'+x+'_'+xx+'" '+fullclick+'>'+itemnlink[0]+'<\/a>\
				<\/div>\n';
				xx++;
			}
			var itemnlink = navmenu[x+'.0'].split('|'); 
			if (itemnlink[1]){
				//omniture onclick code
				var clickaction = "";
				var fullclick = "";
				if(window.s_account){
					var clickaction = "if(!clkd){s_linkType='o';s_linkName='Masthead Menu: "+topiclink[0]+"';s_prop15=s_pageName;s_prop16='"+itemnlink[0]+" (bottom menu link)';s_lnk=s_co(this);s_gs(s_account);clkd=true;}";
					var fullclick = ' onclick="'+clickaction+'"';
				}
				thismenu = thismenu+'\
				<div style="width:'+mwidth+'px" class="menulink'+ml+'" onmouseover="clrmenu(\''+x+'_0\');" id="'+x+'_0" onclick="'+clickaction+'document.location = \''+itemnlink[1]+'\'">\
					<a href="'+itemnlink[1]+'" class="menulink"  onfocus="clrmenu(\''+x+'_0\');" onblur="hideA2(0);" id="mlink'+x+'_0" '+fullclick+' title="'+seeall+' '+itemnlink[0]+'">'+seeall+' <\/a>&raquo;\
				<\/div>\n';
			}
			thismenu = '\
			<div class="flymenus" style="width:'+mtwidth+'px" id="flymenu'+x+'">\
				<div style="background:'+mitembgD+'"><div class="flyspcr"></div>'+thismenu+'</div>\
				<table cellpadding="0" cellspacing="0" border="0" class="menucorners" width="'+mtwidth+'">\n\
				<tr>\
				<td class="cornerBL">&nbsp;</td>\
				<td class="cornerBR">&nbsp;</td>\
				</tr>\
				</table>\
			</div>';
			if (!is.op){
				document.getElementById('mtopic'+x).innerHTML = document.getElementById('mtopic'+x).innerHTML+thismenu;
			}else{
				var vn = 9;
			 	while (!document.getElementById('a2v'+vn) && vn != -1){
					vn--;
				}
				document.getElementById('a2v'+vn).innerHTML = document.getElementById('a2v'+vn).innerHTML+thismenu;
			}
			mitm[x] = xx;
			x++;
			xx = 1;
		}
		 document.getElementById('mtopic1').innerHTML = document.getElementById('mtopic1').innerHTML+'\n<div id="offdiv" class="offdivs" onmouseover="hideA2(0);">&#160;<\/div>\n<div id="offdivL" class="offdivs" onmouseover="hideA2(0);">&#160;<\/div>\n<div id="offdivT" class="offdivs" onmouseover="hideA2(0);">&#160;<\/div>\n<div id="offdivR" class="offdivs" onmouseover="hideA2(0);">&#160;<\/div>\n';
}

//PREP MENUS
function prepmenus(){
	if (oldmast && document.getElementById('flymenu1')){
		prepOLDmenus();
	}else if (!oldmast && document.getElementById('flymenu1')){
		prepA2menus();
	}
}
function prepA2menus(){
	if (is.docom){
		toplink[0] = null;
		// determine section from breadcrumb or URL
		if (thisdoc.getElementById('breadcrumb') && presetlink == 0){
			aa = thisdoc.getElementById('breadcrumb').getElementsByTagName('a');
			if(aa[1]){
				mktoplink(aa[1]);
			}
		}else if (presetlink == 0){
			var allt = document.all? document.all : document.getElementsByTagName("div");
			for (var i=0;i<allt.length;i++){
				if (allt[i].className=="breadcrumb"){
					aa = allt[i].getElementsByTagName('a');
					if(aa[1]){
						mktoplink(aa[1]);
					}
					break;
				}
			}
			if (!toplink[0]){
				mktoplink(document.location);
			}
		}
	if(thisdoc.getElementById('flymenu1')){
			//prep menus & arrays
			var x = 1;
			while (navmenu[x+'.1']){
				glnk[x] = thisdoc.getElementById('glink'+x);
				flym[x] = thisdoc.getElementById('flymenu'+x);
				posi[x] = thisdoc.getElementById('ip'+x);
				mtopic[x] = thisdoc.getElementById('mtopic'+x);
				for (var i=0;i<=mitm[x];i++){
					mitm[x+'_'+i] = thisdoc.getElementById(x+'_'+i);		
					mlnk[x+'_'+i] = thisdoc.getElementById('mlink'+x+'_'+i);		
				}
				if (presetlink == 0){
					ttlink = navmenu[x+'.0'].split('|');
					if (ttlink[1].indexOf("/index\.") > -1){
						ttlink = /(\/.*\/)index\..*/.exec(ttlink[1]);
					}
					hoverhighlight(x,ttlink[1]);
				}else{
					hoverhighlight(x,presetlink);
				}
				x++;
			}
			flym[0] = thisdoc.getElementById('offdiv');
			flym[1000] = thisdoc.getElementById('offdivL');
			flym[1001] = thisdoc.getElementById('offdivT');
			flym[1002] = thisdoc.getElementById('offdivR');
			ready = true;
		}
		if (thisdoc.getElementById('a2v0')||thisdoc.getElementById('a2v4')){
			clinks = true;
		}
		
		glinkbimg = 'url('+imdir+'/a2_menu_on.gif)';

	}
}

// MAKE TOPLINK
function mktoplink(inger){
	toplink[0] = inger;
	tplink = /\w+:\/\/[^\/]+(\/.*)/.exec(inger);
	toplink[1] = tplink[1];
	if (toplink[1].indexOf("/index\.") > -1){
		tplink = /(\/?.*\/)index\..*/.exec(tplink[1]);
		toplink[2] = tplink[1];
	}else{
		toplink[2] = "";
	}
}

// HOVER & HIGHLIGHT ARRAY
function hoverhighlight(thisglink,thisgtitle){
	glinkstate[thisglink] = "none";
	var x = 0;
	if (toplink[x]){
		while(toplink[x]){
			if (thisgtitle == toplink[x]){
				glnk[thisglink].style.textDecoration = "underline";
				glinkstate[thisglink] = "underline";
				break;
			}
			x++;	
		}
	}else if (thisgtitle == thisglink){
		glnk[thisglink].style.textDecoration = "underline";
		glinkstate[thisglink] = "underline";
	}
}

// CHECKS MAST LINK AGAINST MENU CONTENT
function checkforoldmenu(mnum){
	if (oldmenu[mnum+'.0']){
		var mastlink = document.getElementById('glink'+mnum).getAttribute("href");
		var oldmenulink = oldmenu[mnum+'.0'].split('|');
		if (oldmenulink[1] == mastlink){
			var mm = 0;
			while (oldmenu[mnum+'.'+mm] || navmenu[mnum+'.'+mm]){
				navmenu[mnum+'.'+mm] = oldmenu[mnum+'.'+mm];
				mm++;
			}
		}
	}
}

