  function initializeMyAccount() {
      itemList = new Array ("loginForm", "orderHistory", "orderStatus", "addressBook", "myProfile", "discounts", "changePassword");
      for (i=0; i<itemList.length; i++) {
          var j = 1;
          while (document.getElementById(itemList[i] + j)) {
              document.getElementById(itemList[i] + j).style.display = "none";
              j++;
          }
      }
  }

function initializeMyAccountOpen() {
      itemList = new Array ("loginForm", "orderHistory", "orderStatus", "addressBook", "myProfile", "discounts", "changePassword");
      for (i=0; i<itemList.length; i++) {
          var j = 1;
		  displayMode = (document.getElementById && document.all) ? "block" : "table-row";
          while (document.getElementById(itemList[i] + j)) {
              document.getElementById(itemList[i] + j).style.display = displayMode;
              j++;
          }
      }
  }

function initializeMyAccountLoggedin() {
      itemList = new Array ("myAccountList");
      for (i=0; i<itemList.length; i++) {
          var j = 1;
		 displayMode = (document.getElementById && document.all) ? "block" : "table-row";
          while (document.getElementById(itemList[i] + j)) {
              document.getElementById(itemList[i] + j).style.display = displayMode;
              j++;
          }
      }
  }

  function expandCollapse(sectionName, url) {
      var displayMode = "none";
      if (document.getElementById(sectionName + "-img").src.indexOf("ic_show_plus.gif") > -1) {
           displayMode = (document.getElementById && document.all) ? "block" : "table-row";
           document.getElementById(sectionName + "-img").src = url+imdir+"/ic_hide_minus.gif";
      } else {
           //document.getElementById(sectionName + "-img").src = imdir+"/ic_show_plus.gif";
		   document.getElementById(sectionName + "-img").src = url+imdir+"/ic_show_plus.gif";
      }
      var i = 1;
      while (document.getElementById(sectionName + i)) {
          document.getElementById(sectionName + i).style.display = displayMode;
          i++;
      }
  }
	
function expandCollapseCartSummary(sectionName) {
      var displayMode = "none";
      if (document.getElementById(sectionName + "-img").src.indexOf("ic_show_plus.gif") > -1) {
           displayMode = (document.getElementById && document.all) ? "block" : "table-row";
           document.getElementById(sectionName + "-img").src = imdir+"/ic_hide_minus.gif";
		   document.getElementById("hideLabel").style.display = "inline";
		   document.getElementById("showLabel").style.display = "none";
      } else {
           document.getElementById(sectionName + "-img").src = imdir+"/ic_show_plus.gif";
		   document.getElementById("hideLabel").style.display = "none";
		   document.getElementById("showLabel").style.display = "inline";
      }
      var i = 1;
      while (document.getElementById(sectionName + i)) {
          document.getElementById(sectionName + i).style.display = displayMode;
          i++;
      }
  }
  	
function showHideErrors(sectionName) {
      var displayMode = "none";
      if (document.getElementById(sectionName + "-img").src.indexOf("ic_show_plus_large.gif") > -1) {
           displayMode = "block";
           document.getElementById(sectionName + "-img").src = imdir+"/ic_hide_minus_large.gif";
      } else {
           document.getElementById(sectionName + "-img").src = imdir+"/ic_show_plus_large.gif";
      }
     document.getElementById(sectionName).style.display = displayMode;
}

function initializeOrderParts() {
      itemList = new Array ("orderParts");
      for (i=0; i<itemList.length; i++) {
          var j = 1;
          while (document.getElementById(itemList[i] + j)) {
              document.getElementById(itemList[i] + j).style.display = "none";
              j++;
          }
      }
  }
	  
/*
	Method adds new table row to ExpressOrder table.
	Parameters:
		tableId - the ExpressOrder table Id
		newRows - the number of new rows to add
		rowCount - the final number of row count
*/
function addRowToTable(tableId, newRows, rowCount)
{
	var tbl = document.getElementById(tableId).tBodies[0];	// get tbody of table
	var lastRow = tbl.rows.length;							// get number of rows currently in tbody
	var limit = lastRow + newRows;							// max
	
	for(index = lastRow + 1; lastRow < limit; index ++)
	{
		var row = tbl.insertRow(lastRow);
		
		// index cell
		var indexCell = row.insertCell(0);
		indexCell.innerHTML = index+".";
		
		// part number cell
		var partNumCell = row.insertCell(1);
		var e1 = document.createElement('input');
		e1.type = 'text';
		e1.name = 'ProductIdentifier_' + index;
		e1.id = 'ProductIdentifier_' + index;
		e1.size = 40;
		e1.maxLength = 40;
		partNumCell.appendChild(e1);
		
		// quantity cell
		var qtyCell = row.insertCell(2);
		var e2 = document.createElement('input');
		e2.type = 'text';
		e2.name = 'ProductQuantity_' + index;
		e2.id = 'ProductQuantity_' + index;
		e2.size = 7;
		e2.maxLength = 7;
		qtyCell.appendChild(e2);
		
		// clear link cell
		var clearCell = row.insertCell(3);
		clearCell.className = "small";
		clearCell.innerHTML = "<a href=\"#\" onClick=\"document.getElementById('ProductIdentifier_"+index+"').value='';document.getElementById('ProductQuantity_"+index+"').value=''; return false;\">Clear</a>";
		
		lastRow++;
	}
	
	document.getElementById(rowCount).value=lastRow;
}

/*
	Checkout process JavaScript functions.
*/

function showCartDetails(cartId) {
	var viewAllStatus = "true";
	cartDetails = document.getElementById('cart-details' + cartId);
	viewIcon = document.getElementById('icView' + cartId);
	viewLink = document.getElementById('view-link' + cartId);
	viewIcon.src = (cartDetails.style.display == "none") ? imdir+"/ic_hide_minus.gif" : imdir+"/ic_show_plus.gif";
	viewLink.innerHTML = (cartDetails.style.display == "none") ? "Hide Details" : "View Details";
	cartDetails.style.display = (cartDetails.style.display == "none") ? "block" : "none";
	viewAllLink = document.getElementById("viewAll-link");
	var i = 1;
	while (document.getElementById('cart-details' + i)) {
		if (document.getElementById('cart-details' + i).style.display == "none") {
			viewAllStatus = "false";
		}
		i++;
	}
	viewAllLink.innerHTML = (viewAllStatus == "false") ? "View All Details" : "Hide All Details";
	viewAllIcon = document.getElementById('icViewAll');
	viewAllIcon.src = (viewAllLink.innerHTML == "Hide All Details") ? imdir+"/ic_hide_minus.gif" : imdir+"/ic_show_plus.gif";
}

function showAllCartDetails() {
	var cartId = 1;
	viewAllLink = document.getElementById("viewAll-link");
	viewAllLink.innerHTML = (viewAllLink.innerHTML == "View All Details") ? "Hide All Details" : "View All Details";
	viewAllIcon = document.getElementById('icViewAll');
	viewAllIcon.src = (viewAllLink.innerHTML == "Hide All Details") ? imdir+"/ic_hide_minus.gif" : imdir+"/ic_show_plus.gif";
	while (document.getElementById('cart-details' + cartId)) {
		cartDetails = document.getElementById('cart-details' + cartId);
		viewIcon = document.getElementById('icView' + cartId);
		viewLink = document.getElementById('view-link' + cartId);
		viewIcon.src = (viewAllLink.innerHTML == "Hide All Details") ? imdir+"/ic_hide_minus.gif" : imdir+"/ic_show_plus.gif";
		viewLink.innerHTML = (viewAllLink.innerHTML == "Hide All Details") ? "Hide Details" : "View Details";
		cartDetails.style.display = (viewAllLink.innerHTML == "Hide All Details") ? "block" : "none";
		cartId++;
	}
}

// method is used to expand collapse "add new" address
function expandCollapseAddress(btnstatus, sectionName) {
	document.getElementById(sectionName).style.display = btnstatus ? "block" : "none";
}

// method display edit address window	  
function showAddressDHTML(windowName, popupheader, popupheight) {
	document.getElementById("popupaddressheader").innerHTML = popupheader;
	if (document.getElementById && document.all) {
		if (document.getElementById(windowName + "iframe")) {
			document.getElementById(windowName + "iframe").className = "k4";
		}
	}

	var browserHeight = document.body.clientHeight;
	
	var divMoreWin = document.getElementById(windowName);
	var divMoreFrame = document.getElementById(windowName + "iframe");
	
	topPos = 10 + parseInt(getScrollY());
	bottomPadding = browserHeight - parseInt(topPos + popupheight);
	
	divMoreWin.style.paddingTop = topPos + "px";
	divMoreWin.style.paddingBottom = bottomPadding  + "px";
	
	if (document.getElementById && document.all) {
		if (document.getElementById(windowName + "iframe")) {
			divMoreFrame.style.paddingTop = topPos + "px";
			divMoreFrame.style.paddingBottom = bottomPadding  + "px";
		}
	}
	document.getElementById(windowName).className = "k4 k4v0";
}

 function showDHTML(windowName, popupheight) {
 		if (document.getElementById(windowName))
			document.getElementById(windowName).className = "k4 k4v0";
		/*if (document.getElementById(windowName + "iframe")) {
			document.getElementById(windowName + "iframe").className = "k4";
		}*/
		
		var browserHeight = document.body.clientHeight;

		var divMoreWin = document.getElementById(windowName);
		// var divMoreFrame = document.getElementById(windowName + "iframe");
		topPos = 197 + parseInt(getScrollY());
		bottomPadding = browserHeight - parseInt(topPos + popupheight);
		divMoreWin.style.paddingTop = topPos + "px";
		divMoreWin.style.paddingBottom = bottomPadding  + "px";
		/*if (document.getElementById(windowName + "iframe")) {
			divMoreFrame.style.paddingTop = topPos + "px";
			divMoreFrame.style.paddingBottom = bottomPadding  + "px";
		}*/
	}

function getScrollY() {
	  var scrOfX = 0, scrOfY = 0;
	  if( typeof( window.pageYOffset ) == 'number' ) {
	    //Netscape compliant
	    scrOfY = window.pageYOffset;
	    scrOfX = window.pageXOffset;
	  } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
	    //DOM compliant
	    scrOfY = document.body.scrollTop;
	    scrOfX = document.body.scrollLeft;
	  } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) 			
		{
	    //IE6 standards compliant mode
	    scrOfY = document.documentElement.scrollTop;
	    scrOfX = document.documentElement.scrollLeft;
	  }
	  return [ scrOfY ];
	}


// method hide edit address window
function hideDHTML(windowName) {
	document.getElementById(windowName).className = "k4 k4v0 k4hidden";
	if (document.getElementById(windowName + "iframe"))
	{
		document.getElementById(windowName + "iframe").className = "k4 k4v0 k4hidden";
	}
}

// method expand collapse payment options
function expandCollapsePayment(btnstatus, sectionName) {
	itemList = new Array ("newcard", "bankaccount", "payorder", "pcard");
	for (i=0; i<itemList.length; i++) {
	    var j = 1;
	    while (document.getElementById(itemList[i] + j)) {
	        document.getElementById(itemList[i] + j).style.display = "none";
	        j++;
	    }
	}
	displayMode = (document.getElementById && document.all) ? "block" : "table-row";
	var i = 1;
	while (document.getElementById(sectionName + i)) {
	    document.getElementById(sectionName + i).style.display = displayMode;
	    i++;
	}
}

// method populate address form to be updated
function populateAddressForm(address,htmlformname) {
	with(document.PopinAddressForm) {
		elements[htmlformname+"_FirstName"].value = address["FirstName"];
		elements[htmlformname+"_LastName"].value = address["LastName"];
		elements[htmlformname+"_Title"].value = address["Title"];
		elements[htmlformname+"_Company"].value = address["CompanyName"];
		elements[htmlformname+"_Street"].value = address["Street"];
		elements[htmlformname+"_Street2"].value = address["Street2"];
		elements[htmlformname+"_StreetTranscription"].value = address["StreetTranscription"];
		elements[htmlformname+"_City"].value = address["City"];
		elements[htmlformname+"_State"].value = address["State"];
		elements[htmlformname+"_PostalCode"].value = address["PostalCode"];
		elements[htmlformname+"_PhoneHome"].value = address["PhoneHome"];
		elements[htmlformname+"_Email"].value = address["EMail"];
		elements[htmlformname+"_Fax"].value = address["Fax"];
		elements[htmlformname+"_FirstNameTranscription"].value = address["FirstNameTranscription"];
		elements[htmlformname+"_LastNameTranscription"].value = address["LastNameTranscription"];
		elements[htmlformname+"_PhoneBusiness"].value = address["PhoneBusiness"];	
		document.forms[htmlformname].elements["AddressID"].value = address["AddressID"];		
		
		htmlformname = "PopinAddressForm";
		
		if(address["AddressType"]=="Service")
		{
			document.forms[htmlformname].elements[document.forms[htmlformname].elements.length-1].name="updateServiceAddress";
			document.forms[htmlformname].elements["DefaultButton"].value="updateServiceAddress";
		}
		else if(address["AddressType"]=="Billing")
		{
			document.forms[htmlformname].elements[document.forms[htmlformname].elements.length-1].name="updateBillingAddress";
			document.forms[htmlformname].elements["DefaultButton"].value="updateBillingAddress";
		}
		else
		{
			document.forms[htmlformname].elements[document.forms[htmlformname].elements.length-1].name="updateShippingAddress";
			document.forms[htmlformname].elements["DefaultButton"].value="updateShippingAddress";
		}
	}
}	
	
// display "saving ..." message box
	function showSavingMsg() {
		document.getElementById ("saveaddressmsg").style.display = "none";
		document.getElementById ("savingMsg").style.display = "block";
	}	
	
  function showPrintPage(pagename, popupheight, popupwidth) {
		var documentHeight = document.documentElement.clientHeight;
		var documentWidth = document.body.clientWidth;
		leftpos= parseInt((documentWidth - popupwidth)/2);			
		toppos= parseInt((documentHeight - popupheight)/2);
		
		newWindow = window.open(pagename , "printerfriendlywindow", "scrollbars=yes, resizable=yes, height=600,width=800,top=" + toppos +  ", left=" + leftpos + "\"");
		newWindow.focus();
	}
	
	 function highlightRow(btnStatus, rowId) {
	 	document.getElementById(rowId).style.background = btnStatus ? "#eee" : "none";
		if (document.getElementById("product-" + rowId)) {
			document.getElementById("product-" + rowId).style.background = btnStatus ? "#eee" : "none";
		}	
	 }	
	 
	 

// HardWare StandAlone Get It Page Javascript//

function trimAll(sString) 
{
if (sString.length > 0)
{

	while (sString.substring(0,1) == ' ')
	{
		sString = sString.substring(1, sString.length);
	}
	while (sString.substring(sString.length-1, sString.length) == ' ')
	{
	sString = sString.substring(0,sString.length-1);
	}
}	
return sString;
}

function CurrencyFormatted(amount)
{
	var i = parseFloat(amount);
	if(isNaN(i)) { i = 0.00; }
	var minus = '';
	if(i < 0) { minus = '-'; }
	i = Math.abs(i);
	i = parseInt((i + .005) * 100);
	i = i / 100;
	s = new String(i);
	if(s.indexOf('.') < 0) { s += '.00'; }
	if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
	s = minus + s;
	return s;
}


function CommaFormatted(amount)
{
	var delimiter = ","; // replace comma if desired
	var a = amount.split('.',2)
	var d = a[1];
	var i = parseInt(a[0]);
	if(isNaN(i)) { return ''; }
	var minus = '';
	if(i < 0) { minus = '-'; }
	i = Math.abs(i);
	var n = new String(i);
	var a = [];
	while(n.length > 3)
	{
		var nn = n.substr(n.length-3);
		a.unshift(nn);
		n = n.substr(0,n.length-3);
	}
	if(n.length > 0) { a.unshift(n); }
	n = a.join(delimiter);
	if(d.length < 1) { amount = n; }
	else { amount = n + '.' + d; }
	amount = minus + amount;
	return amount;
}


function SaveQty(QtyID)
{
var CurrentQty = document.getElementById(QtyID).value;
if(isNaN(CurrentQty))
   {
	document.getElementById(QtyID).value = oldQty;
	oldQty =1; 
	subtotpriceQty = 0;
   }
   
else if (trimAll(CurrentQty) == '')  { document.getElementById(QtyID).value =''; oldQty =1; subtotpriceQty = 0;}   
    
else
 	{
	 oldQty = CurrentQty;
	 subtotpriceQty = CurrentQty;
	}
	
}


function removeComma(num) {
    var temp1 = num;
	var templen = num.length;
    for (i=1;i < templen;i++) {  
// pick limit high enough to find all possiblecommas
    temp1 = temp1.replace(",","");
    }
    return temp1;
}


function UpdateQtyPrice(QtyID,PriceID)
{
var CurrentPrice = document.getElementById(PriceID).innerHTML;
var CurrentQty = document.getElementById(QtyID).value;

CurrentQty = parseInt(CurrentQty)
if(isNaN(CurrentQty) || (CurrentQty<0))
   {
	
		var curPrice = CurrentPrice.substring(1);
		curPrice = removeComma(curPrice);
		curPrice = parseFloat(curPrice)
		
			  var singlePrice = curPrice / oldQty;
		  if (trimAll(document.getElementById(QtyID).value).length == 0 || CurrentQty == 0)  
		  	{			
			  cmsubtotprice = cmsubtotprice - (subtotpriceQty * singlePrice);
			  var singlePrice = CurrencyFormatted(singlePrice)
			  var strsinglePrice = "$ " + CommaFormatted(singlePrice);
			  document.getElementById(QtyID).value = '';
			  document.getElementById(PriceID).innerHTML = strsinglePrice;
			  oldQty = 1;		
			  subtotpriceQty = 0;
			}
		else
		{	
			document.getElementById(QtyID).value = oldQty;
		}	
			
   } 

else
 	{	
		var curPrice = CurrentPrice.substring(1);
		curPrice = removeComma(curPrice);		
		curPrice = parseFloat(curPrice)	
 		var singlePrice = curPrice / oldQty;
		if(isNaN(curPrice) || curPrice == '')
		  {	
			document.getElementById(QtyID).value = CurrentQty;
		  }
		else
		{
		 
		  		  
		  if (trimAll(document.getElementById(QtyID).value).length == 0 || CurrentQty == 0)  
		  	{
			  cmsubtotprice = cmsubtotprice - (subtotpriceQty * singlePrice);
			  
			  var singlePrice = CurrencyFormatted(singlePrice)
			  var strsinglePrice = "$ " + CommaFormatted(singlePrice);
			  document.getElementById(QtyID).value = '';
			  document.getElementById(PriceID).innerHTML = strsinglePrice;
			   oldQty = 1;			
			   subtotpriceQty = 0;
			}	
		  else
		  {	
		  	   cmsubtotprice = cmsubtotprice - (subtotpriceQty * singlePrice);			  
			   cmsubtotprice = cmsubtotprice + (singlePrice * CurrentQty);
			   
			  var TotalPrice = singlePrice * CurrentQty;
			  var TotalPrice = CurrencyFormatted(TotalPrice)
			  var strTotalPrice = "$ " + CommaFormatted(TotalPrice);
			  document.getElementById(QtyID).value = CurrentQty;
			  document.getElementById(PriceID).innerHTML = strTotalPrice;		
		  }	 
		     
		 }
		   

	}   
}






 function highlightSelectedQty(obj) {
	if ((obj.value != "")&&(obj.value != "0")) {
		(obj.parentNode).className = "cmOptions cmSelected";
	} else {
		(obj.parentNode).className = "cmOptions";
	}
}



// called once after site is built up
function GetRelatedInit() {
	// store prices
	CTOstorePrices();

	for(var ocUUID in CTOocInformationList) {
		var oc = CTOocInformationList[ocUUID];
        var scenario = oc["Scenario"];
		var components = oc["Components"];
		var defaultSelectionPrice = 0;
		for(var i=0;i<components.length;i++) {
			var compUUID = components[i];
			var comp = CTOcompInformationList[compUUID];
			// make default selections

			if (!CTOisSelected(compUUID)) {
				if (comp["Price"] != -1) {
					price = comp["Price"] - oc["NonePrice"] - defaultSelectionPrice;
					//var currency = CTOdetermineCurrency(proxyProductRef);
					var currency = '$';
					var prefix = (price > 0)?"Add":"Subtract";
					CTOdisplayProductPrice("cmCpu2Price_"+compUUID, currency, Math.abs(price), prefix);
				}
				else{
					CTOdisplayProductPrice("cmCpu2Price_"+compUUID, "", -1, "");			
				}
			}			
			else if (proxyProductDummyName != "") {
				// set new proxy product if necessary
				if ((oc["Name"] == proxyProductDummyName)) {
					CTOsetNewProxyProduct(compUUID, comp["ProductRef"], null, null, null);
				}
			}
          
            // extension 3.8: preselect qty
            var selectQty = comp["SelectedQuantity"];
            if (selectQty != -1 && scenario != "na") {
                CTOselectQuantity(compUUID, ocUUID, selectQty, scenario);
            }                                    
		}
	}
}



// End HardWare StandAlone Get It Page Javascript//	 
