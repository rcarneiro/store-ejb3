/* ###########################################################################

GLOBAL ASSETS RELEASE v3.1

MENUCONTENT.JS v4.0

BUILD DATE: 20070914

COPYRIGHT SUN MICROSYSTEMS INC. 2007

CONTACT webdesign -at- sun.com WITH ANY QUESTIONS

########################################################################### */

// translated text
var seeall = "See All";
var processingRequest = "Processing Request";

// set this to the location of your local im directories
var imdir = "/images";

// set this to the location of your local css directories
var cssdir = "/css";

// sub menu width
var mwidth = 150;

// set this to true for languages that read right to left such as hebrew or arabic
var rtl = false;

// menus are organized using a two number decimel delineated system (1.2)
// the first number indicates which main topic link the menu belongs to.
// the second number indicates the order the sub topic link appears in the menu.
//
// the values for each item are then organized by a | delineated system (Link Name|URL)
// item X.0 MUST alway be the exact name of the main topic link as hardcoded in
// the masthead and must include a link that is the also the same.
//
// if the first main topic link was Products and it's URL was /products/ then then you
// would start the products menu with... 
//
// navmenu['1.0'] = 'Products|/products/';
//
// if the main topic link is not a link to another page, but simply the title of your
// menu (i.e. Select A Topic) then you would set the [X.0] item to "|". this way the
// See All Item is not created at the bottom of the menu. like...
//
// navmenu['1.0'] = '|';


/*navmenu['1.5'] = 'Remanufactured Systems|http://www.sun.com/outlet/reman.jsp';
navmenu['1.6'] = 'IT Services|http://store.sun.com/CMTemplate/CEServlet?process=SunStore&cmdViewProduct_CP&catid=26827';
navmenu['1.7'] = 'System Options|http://shop.sun.com/is-bin/INTERSHOP.enfinity/WFS/Sun_NorthAmerica-Sun_Store_US-Site/en_US/-/USD/ViewOptions-Start';
navmenu['1.8'] = 'Network and Security Products|http://www.sun.com/products/networking/';
navmenu['1.9'] = 'Spare Parts|http://shop.sun.com/is-bin/INTERSHOP.enfinity/WFS/Sun_NorthAmerica-Sun_Store_US-Site/en_US/-/USD/ViewOptions-Start';
navmenu['1.10'] = 'Promotions & Programs|http://store.sun.com/CMTemplate/CEServlet?process=SunStore&cmdStartPromo_CP';
*/
// oldmenu is an array used when changes to the A2 masthead HTML is made. since pages can
// exist that do not have the most current masthead HTML, but still link to the latest js 
// we can use this old menu information to allow the menucode.js script to insert legacy
// menu content for legacy masthead links.
//
// oldmenu items should be numbered as they once were when they were navmenu items.
// the only thing that changes is the array name. if you are using site specific
// links and you know that all changes to the masthead have been made to all of your
// pages you do not need to keep legacy menus in the oldmenu array.

oldmenu['6.0'] = 'Research|http://research.sun.com/';
oldmenu['6.1'] = 'Projects|http://research.sun.com/projects/';
oldmenu['6.2'] = 'Events|http://research.sun.com/events/';
oldmenu['6.3'] = 'Lab Downloads|http://research.sun.com/download/';

// these arrays control the flyout menus for the A1 component. there are three
// arrays that control these menus.
//
// a1menuwrap -> defines html code that makes the menu box, this should NOT be altered
//
// a1hrefs -> this array uses a value (e.g. 'javamenu') to identify it's contents. this value
//            is also used by the a1menus array and can be any value you want it to be, it just
//            needs to be unique for each menu. the value of this variable is an array. it should
//            contain the text of the link that you wish the menu to be attached to (e.g. new Array('Java');)
//            although 'Java' is only one value, an array is used in case there are other languages
//            pointing to this one file. in that case you could use something like
//            "new Array('Communities','Comunidades');" so the menu will attach to either of those links.
//
// a1menus -> this array defines the menu width and menu content. in the a1menus['javamenu'] variable
//            the first value of it's array is 180, which sets the width of the menu, the second value
//            is the menus content. each line return of this value must end with \ in order for you to use
//            multiple lines to define this value.

a1hrefs['javamenu'] = new Array('Java');
a1menus['javamenu'] = new Array(180,'\
<ul class="bluearrows">\
<li><a href="http://www.sun.com/java/">Java at Sun</a></li>\
<li><a href="http://www.sun.com/software/opensource/java/">Free and Open Source Java</a></li>\
<li><a href="http://java.com/download/">Java for your computer</a></li>\
<li><a href="http://java.sun.com/javase/downloads/">Download the latest JDK</a></li>\
<li><a href="http://www.netbeans.org/downloads/index.html">Download NetBeans IDE</a></li>\
<li><a href="http://developers.sun.com/prodtech/javatools/">Java Developer Tools</a></li>\
<li><a href="http://java.sun.com/">Java Developer Resources</a></li>\
<li><a href="http://java.sun.com/javase/">Java Standard Edition</a></li>\
<li><a href="http://java.sun.com/javaee/">Java Enterprise Edition</a></li>\
<li><a href="http://java.sun.com/javame/">Java Micro Edition</a></li>\
<li><a href="http://java.sun.com/learning/training/">Java Training</a></li>\
<li><a href="http://developers.sun.com/services/">Java Support</a></li>\
</ul>\
');

a1hrefs['solarismenu'] = new Array('Solaris');
a1menus['solarismenu'] = new Array(280,'\
<ul class="bluearrows">\
<li><a href="http://www.sun.com/software/solaris/">Solaris</a><p>The most advanced Operating System on the planet.</p></li>\
<li><a href="http://developers.sun.com/sunstudio/">Sun Studio</a><p>Optimizing compilers and tools for C/C++/Fortran for application development.</p></li>\
<li><a href="http://developers.sun.com/prodtech/solaris/">Solaris Developer Resources</a><p>Find what you need at the Solaris developers center.</p></li>\
<li><a href="http://developers.sun.com/services/">Solaris Developer Services</a><p>Get dedicated Solaris support and more with Sun Developer Services. </p></li>\
<li><a href="http://www.sun.com/third-party/srsc/index.jsp">Solaris ISV Applications</a><p>ISV applications shipping on Solaris 10.</p></li>\
<li><a href="http://www.sun.com/bigadmin/home/index.html">Solaris System Administrator Resources</a><p>Get all the Solaris information you need. </p></li>\
<li><a href="http://www.opensolaris.org/">OpenSolaris</a><p>The OpenSolaris project is an open source community and a place for collaboration and conversation around OpenSolaris technology.</p></li>\
</ul>\
');

a1hrefs['communitiesmenu'] = new Array('Communities');
a1menus['communitiesmenu'] = new Array(400,'\
<table style="background:transparent;"><tr><td style="width:50%;vertical-align:top;padding-right:10px;">\
<ul class="bluearrows">\
<li><a href="http://www.sun.com/communities/">Communities at Sun</a><p>Networks connect more than computers. Find out more about Sun communities.</p></li>\
<li><a href="http://developers.sun.com/">Developers</a><p>Join the Sun Developer Network, a worldwide community of over 2 million developers, and get your BackStage Pass to technical information,  developer tools, discounted books and training, and more.</p></li>\
<li><a href="http://www.sun.com/bigadmin/home/index.html">System Administrators</a><p>Find online articles and participate in community forums on the BigAdmin portal.</p></li>\
<li><a href="http://www.sun.com/aboutsun/investor/">Investors</a><p>Access Sun earnings announcements, annual reports, and company information.</p></li>\
<li><a href="http://www.sun.com/partners/">Partners</a><p>Sun\'s partner network delivers innovation and value to customers around the world.</p></li>\
</ul>\
</td><td style="width:50%;vertical-align:top;">\
<ul class="bluearrows">\
<li><a href="http://www.sun.com/products-n-solutions/edu/">Education</a><p>Find out about Sun programs, software, and systems for students and educators.</p></li>\
<li><a href="http://www.sun.com/aboutsun/media/index.jsp">Press</a><p>See the latest news from Sun, and hear what the industry is saying.</p></li>\
<li><a href="http://research.sun.com/">Research</a><p>What\'s happening in Sun Labs?</p></li>\
<li><a href="http://www.sun.com/customers/index.xml">Customers</a><p>Success stories about business problems solved by collaboration with Sun.</p></li>\
<li><a href="http://java.sun.com/">Java Technology</a><p>Find out what\'s happening with the Java programming language &mdash; in mobile devices, smart cards, and data centers.</p></li>\
<li><a href="http://blogs.sun.com/">Sun Blogs</a><p>Join the conversation &mdash; meet the people at Sun who are passionate about their jobs.</p></li>\
</ul>\
</td></tr></table>\
');

a1hrefs['aboutmenu'] = new Array('About Sun');
a1menus['aboutmenu'] = new Array(400,'\
<table style="background:transparent;"><tr><td style="width:50%;vertical-align:top;padding-right:10px;">\
<ul class="bluearrows">\
<li><a href="http://www.sun.com/aboutsun/company/index.jsp">Our Company</a><p>Since our inception in 1982, the vision of "The Network is the Computer" has evolved into the Participation Age. We see everyone and everything participating on the network.</p></li>\
<li><a href="http://www.sun.com/aboutsun/media/index.jsp">Sun News Center</a><p>Get the latest news and information about Sun.</p></li>\
<li><a href="http://www.sun.com/aboutsun/investor/index.jsp">Investor Relations</a><p>Find information and resources for Sun\'s investor community.</p></li>\
<li><a href="http://www.sun.com/aboutsun/executives/">Executive Perspectives</a><p>Get the latest inside thinking from Sun\'s executive leadership team.</p></li>\
<li><a href="http://www.sun.com/company/cgov/index.jsp">Corporate Governance</a><p>Sun has always been dedicated to the highest standards of business integrity, and over the past two decades we\'ve continually taken steps to reinforce that commitment.</p></li>\
</ul>\
</td><td style="width:50%;vertical-align:top;">\
<ul class="bluearrows">\
<li><a href="http://www.sun.com/aboutsun/csr/">Corporate Responsibility</a><p>The economic, environmental and social sustainability of the communities where we operate is among our top priorities.</p></li>\
<li><a href="http://www.sun.com/aboutsun/environment/">Eco Responsibility</a><p>Sun is committed to designing eco-responsible products and sharing information and technology so that we can all move forward to a more sustainable model.</p></li>\
<li><a href="http://www.sun.com/aboutsun/sunfederal/">Sun Microsystems Federal, Inc.</a><p>Sun Microsystems Federal Inc., a wholly owned subsidiary of Sun Microsystems, Inc., manages strategic opportunities that bring Sun\'s solutions to the U.S. Federal government.</p></li>\
<li><a href="http://www.sun.com/corp_emp/">Employment at Sun</a><p>Find jobs in countries around the globe.</p></li>\
<li><a href="http://www.sun.com/secure/contact/">Contact Sun</a><p>Find a way to get in touch.</p></li>\
</ul>\
</td></tr></table>\
');

a1hrefs['howtobuymenu'] = new Array('How to Buy');
a1menus['howtobuymenu'] = new Array(280,'\
<ul class="bluearrows">\
<li><a href="http://www.sun.com/sales/index.jsp">How to Buy</a><p>Find out about buying at Sun in the U.S. and worldwide.</p></li>\
<li><a href="http://www.sun.com/sales/business/">Doing Business with Sun</a><p>eBusiness@Sun is a secure and simple way to manage your global relationship with Sun.</p></li>\
</ul>\
');

a1hrefs['accountmenu'] = new Array('My Account');
a1menus['accountmenu'] = new Array(280,'\
<ul class="bluearrows">\
<li><a href="https://portal.sun.com/portal/dt">My Sun Connection</a><p>Your personal portal to Sun products, services, and support.</p></li>\
<li><a href="https://reg.sun.com/register?goto='+encodeURIComponent(document.location)+'">Register Now</a><p>Get a login to access Sun resources.</p></li>\
</ul>\
');

a1hrefs['cartmenu'] = new Array('Cart');
a1menus['cartmenu'] = new Array(160,'\
<ul class="bluearrows">\
<li><a href="http://shop.sun.com/cart">My Cart</a></li>\
<li><a href="http://shop.sun.com/saved_items">Saved Items</a></li>\
<li><a href="http://shop.sun.com/quotes">Quotes</a></li>\
<li><a href="http://shop.sun.com/orders">Orders</a></li>\
</ul>\
');

// ############################################################################
// BEGIN "SHARE THIS PAGE" STUFF
// To turn off share page functionality for all pages linking to this file, comment out this entire section
// To turn it off for an individual page, use <meta name="share-this-page" content="no"> in the <head> (case insensitive)

function getSafelyEncodedString(s) {
	// xss paranoia
	s = encodeURIComponent(s);
	s = s.replace(/"/,"&quot;");
	s = s.replace(/</,"&lt;");
	s = s.replace(/>/,"&gt;");
	return s;
}

var share_url = getSafelyEncodedString(location.href);
var share_title = getSafelyEncodedString(document.title);

var shareThisPage = '\
<div class="sharepagew1">\
<table summary="layout" cellpadding="0" cellspacing="0"><tr>\
<td id="share-technorati"><a href="http://www.technorati.com/search/'+share_url+'" class="sharelink technorati" title="See who links to this page on Technorati"></a></td>\
<td id="share-delicious"><a href="http://del.icio.us/post?v=4;url='+share_url+';title='+share_title+'" class="sharelink delicious" title="Bookmark this page in del.icio.us"></a></td>\
<td id="share-digg"><a href="http://digg.com/submit?phase=2&amp;url='+share_url+'&amp;title='+share_title+'" class="sharelink digg" title="Submit this page to Digg"></a></td>\
<td id="share-slashdot"><a href="http://slashdot.org/bookmark.pl?title='+share_title+'&amp;url='+share_url+'" class="sharelink slashdot" title="Submit this page to Slashdot"></a></td>\
';

var links = document.getElementsByTagName('link');
var feed_url = null;
var feed_title = null;
var numFeeds = 0;
for (var a=0; a<links.length; a++) {
	if (''+links[a].rel.toLowerCase() == 'alternate') {
		numFeeds++;
		if (!feed_url) {
			feed_url = links[a].href;
			feed_title = links[a].title;
		}
	}
}
if (numFeeds > 1) {
	shareThisPage += '<td id="share-multiple-feeds"><a href="#" title="Show available feeds"></a></td>';
} else if (numFeeds == 1) {
	shareThisPage += '<td id="share-feed"><a href="'+feed_url+'" class="sharelink feed" title="'+feed_title+'"></a></td>';
} else {
	shareThisPage += '<td id="share-blank"> </td>';
}

shareThisPage += '</tr></table></div>';

// END "SHARE THIS PAGE" STUFF
// ############################################################################


