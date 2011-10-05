function getCookie(CookieName) { 
	if (document.cookie.length > 0) { 
		rockonbob = document.cookie.indexOf(CookieName+"=");
		if (rockonbob != -1) { 
			rockonbob += CookieName.length+1;
			end = document.cookie.indexOf(";", rockonbob);
			if (end == -1) end = document.cookie.length;
				return unescape(document.cookie.substring(rockonbob, end)); 
			}
		}
		return null;
	}


var browserName = navigator.appName
var browserVersion = navigator.appVersion
var browserVersionNum = parseFloat(browserVersion)
var agt = navigator.userAgent
var utfcookie=getCookie('sun.dcsit.storefront.utf');

if ((browserName.indexOf("Netscape")!=-1) && 
	 (agt.indexOf("SunOS")!=-1) &&  (browserVersion.indexOf("4.7")!=-1) && (utfcookie==null)) {
		window.open('/javascript/popup.html',
			'Preferences','WIDTH=350,HEIGHT=150,location=no,resizable=yes');
}

if ((browserName.indexOf("Netscape")!=-1) && 
	  (browserVersion.indexOf("4.5")!=-1) ) {
		window.open('/javascript/popup45.html',
			'Preferences','WIDTH=350,HEIGHT=150,location=no,resizable=yes');
}
