////// G9 Component Creator //////

var visitorPressedSubmit = false;
var url = window.document.location.toString();

////// NEVER-FAILS BACKUP Code //////
var question = 1; // default to question 1

////// Question Array Creation //////
g9ques      = new Array();
g9answ      = new Array();
pagetypeval = new Array();

pagetypeval[1] = 'Recommend';
g9ques[1] = '<a name="VFq1"></a><div><label for="Recommend">Would you recommend <b>this Sun site</b> to a friend or colleague?</label></div>';
g9answ[1] = '<div>\n\
<a name="VFRecommend"></a>\n\
<select name="Recommend">\n\
<option selected value="-1">Select Rating --&gt;</option>\n\
<option value="10">10 Extremely likely</option>\n\
<option value="9">9 </option>\n\
<option value="8">8 </option>\n\
<option value="7">7 </option>\n\
<option value="6">6 </option>\n\
<option value="5">5 Neutral</option>\n\
<option value="4">4 </option>\n\
<option value="3">3 </option>\n\
<option value="2">2 </option>\n\
<option value="1">1 </option>\n\
<option value="0">0 Not at all likely</option>\n\
</select>\n\
</div>\n\
';

// Called when submit is clicked
function pressedSubmit()
{
	visitorPressedSubmit = true;
	return true;
}

// Submit handler
function onSubmitHandler()
{
	document.survey.URL.value=self.location;
	window.open('','foo','screenX=0,screenY=0,resizable=yes,alwaysRaised=yes,scrollbars=yes,width=700,height=600');
	return true;
}

////// Other Code //////
////// Question's //////

pagetypeval[1] = 'Recommend';
g9ques[1] = '<a name="VFq1"></a><div><label for="Recommend">Would you recommend <b>this Sun site</b> to a friend or colleague?</label></div>';
g9answ[1] = '<div>\n\
<a name="VFRecommend"></a>\n\
<select name="Recommend">\n\
<option selected value="-1">Select Rating --&gt;</option>\n\
<option value="10">10 Extremely likely</option>\n\
<option value="9">9 </option>\n\
<option value="8">8 </option>\n\
<option value="7">7 </option>\n\
<option value="6">6 </option>\n\
<option value="5">5 Neutral</option>\n\
<option value="4">4 </option>\n\
<option value="3">3 </option>\n\
<option value="2">2 </option>\n\
<option value="1">1 </option>\n\
<option value="0">0 Not at all likely</option>\n\
</select>\n\
</div>\n\
';

pagetypeval[2] = 'userAcceptance';
g9ques[2] = '<a name="VFq1"></a><div><label for="UserAcceptance">This site met my need today.</label></div>';
g9answ[2] = '<div>\n\
<a name="VFuserAcceptance"></a>\n\
<select name="userAcceptance">\n\
<option selected value="-1">Select Rating --&gt;</option>\n\
<option value="6">6 strongly agree</option>\n\
<option value="5">5 </option>\n\
<option value="4">4 </option>\n\
<option value="3">3 </option>\n\
<option value="2">2 </option>\n\
<option value="1">1 strongly disagree</option>\n\
</select>\n\
</div>\n\
';


pagetypeval[3] = 'Purchase';
g9ques[3] = '<div><label for="Purchase">When buying online (at Sun or elsewhere), which online store feature is the most important?</label></div>';
g9answ[3] = '<div>\n\
\n\
<select name="Purchase">\n\
<option selected value="-1">Select Option --&gt;</option>\n\
<option value="1">A range of payment methods</option>\n\
<option value="2">Ease of use</option>\n\
<option value="3">Online pricing</option>\n\
<option value="4">Configuration options</option>\n\
<option value="5">Tracking capabilities</option>\n\
<option value="6">Delivery times</option>\n\
<option value="7">Transaction security</option>\n\
<option value="8">Privacy protection</option>\n\
</select>\n\
</div>\n\
';

pagetypeval[4] = 'Privacy';
g9ques[4] = '<div><label for="Privacy">Have you read Sun\'s privacy policy?</label></div>';
g9answ[4] = '<div>\n\
\n\
<select name="Privacy">\n\
<option selected value="-1">Select Option --&gt;</option>\n\
<option value="1">Yes</option>\n\
<option value="2">No</option>\n\
</select>\n\
</div>\n\
';

pagetypeval[5] = 'SearchSatisfaction';
g9ques[5] = '<div><label for="SearchSatisfaction">The Sun search tool generally meets my need</label></div>';
g9answ[5] = '<div>\n\
\n\
<select name="SearchSatisfaction">\n\
<option selected value="-1">Select Rating --&gt;</option>\n\
<option value="6">6 strongly agree</option>\n\
<option value="5">5 </option>\n\
<option value="4">4 </option>\n\
<option value="3">3 </option>\n\
<option value="2">2 </option>\n\
<option value="1">1 strongly disagree</option>\n\
</select>\n\
</div>\n\
';

pagetypeval[6] = 'satisfaction';
g9ques[6] = '<div><label for="satisfaction">How useful is the content in this Network Computing Event?</label></div>';
g9answ[6] = '<div>\n\
\n\
<input type="hidden" name="survey_type" value="nc05q3">\n\
<select name="satisfaction">\n\
<option selected value="-1">Select Rating --&gt;</option>\n\
<option value="6">6 Very useful</option>\n\
<option value="5">5 </option>\n\
<option value="4">4 </option>\n\
<option value="3">3 </option>\n\
<option value="2">2 </option>\n\
<option value="1">1 Not useful</option>\n\
</select>\n\
</div>\n\
';

pagetypeval[7] = 'Recommend';
g9ques[7] = '<a name="VFq1"></a><div><label for="Recommend">Would you recommend <b>this Network Computing Event</b> to a friend or colleague?</label></div>';
g9answ[7] = '<div>\n\
<a name="VFRecommend"></a>\n\
<select name="Recommend">\n\
<option selected value="-1">Select Rating --&gt;</option>\n\
<option value="10">10 Extremely likely</option>\n\
<option value="9">9 </option>\n\
<option value="8">8 </option>\n\
<option value="7">7 </option>\n\
<option value="6">6 </option>\n\
<option value="5">5 Neutral</option>\n\
<option value="4">4 </option>\n\
<option value="3">3 </option>\n\
<option value="2">2 </option>\n\
<option value="1">1 </option>\n\
<option value="0">0 Not at all likely</option>\n\
</select>\n\
</div>\n\
';

pagetypeval[8] = 'satisfaction';
g9ques[8] = '<div><label for="satisfaction">I found what I was looking for on this page.</label></div>';
g9answ[8] = '<div>\n\
\n\
<input type="hidden" name="survey_type" value="javadev">\n\
<select name="satisfaction">\n\
<option selected value="-1">Select Rating --&gt;</option>\n\
<option value="6">6 Strongly agree</option>\n\
<option value="5">5 </option>\n\
<option value="4">4 </option>\n\
<option value="3">3 </option>\n\
<option value="2">2 </option>\n\
<option value="1">1 Strongly disagree</option>\n\
</select>\n\
</div>\n\
';

pagetypeval[9] = 'satisfaction';
g9ques[9] = '<div><label for="satisfaction">How helpful have you found this article?</label></div>';
g9answ[9] = '<div>\n\
\n\
<input type="hidden" name="survey_type" value="rf">\n\
<select name="satisfaction">\n\
<option selected value="-1">Select Rating --&gt;</option>\n\
<option value="6">6 Very helpful</option>\n\
<option value="5">5 </option>\n\
<option value="4">4 </option>\n\
<option value="3">3 </option>\n\
<option value="2">2 </option>\n\
<option value="1">1 Not helpful</option>\n\
</select>\n\
</div>\n\
';

pagetypeval[10] = 'satisfaction';
g9ques[10] = '<div><label for="satisfaction">I like the design of the Sun Connection Portal</label></div>';
g9answ[10] = '<div>\n\
\n\
<input type="hidden" name="survey_type" value="scp">\n\
<select name="satisfaction">\n\
<option selected value="-1">Select Rating --&gt;</option>\n\
<option value="6">6 strongly agree</option>\n\
<option value="5">5 </option>\n\
<option value="4">4 </option>\n\
<option value="3">3 </option>\n\
<option value="2">2 </option>\n\
<option value="1">1 strongly disagree</option>\n\
</select>\n\
</div>\n\
';

pagetypeval[11] = 'Recommend';
g9ques[11] = '<a name="VFq1"></a><div><label for="Recommend"><b>??? ??????????????? ?????????????? ??????????</label></div>';
g9answ[11] = '<div>\n\
<a name="VFRecommend"></a>\n\
<select name="KRRecommend">\n\
<option selected value="-1">???????? ??? --&gt;</option>\n\
<option value="10">10 ?????? ???? ????</option>\n\
<option value="9">9 </option>\n\
<option value="8">8 </option>\n\
<option value="7">7 </option>\n\
<option value="6">6 </option>\n\
<option value="5">5 ???????????? </option>\n\
<option value="4">4 </option>\n\
<option value="3">3 </option>\n\
<option value="2">2 </option>\n\
<option value="1">1 </option>\n\
<option value="0">0 ? ???? ???? ???? ?????? </option>\n\
</select>\n\
</div>\n\
';

pagetypeval[12] = 'userAcceptance';
g9ques[12] = '<div><label for="UserAcceptance">????????? ? ??????? ?????????.</label></div>';
g9answ[12] = '<div>\n\
<select name="KRuserAcceptance">\n\
<option selected value="-1">???????? ??? --&gt;</option>\n\
<option value="6">6 ?????? ???? ????</option>\n\
<option value="5">5 </option>\n\
<option value="4">4 </option>\n\
<option value="3">3 </option>\n\
<option value="2">2 </option>\n\
<option value="1">1 ? ???? ???? ???? ??????</option>\n\
</select>\n\
</div>\n\
';

// French Recommend
pagetypeval[13] = 'Recommend';
g9ques[13] = '<a name="VFq1"></a><div><label for="Recommend">Recommanderiez-vous <b>ce site Sun</b> ?  un de vos amis ou coll??gues?</label></div>';
g9answ[13] = '<div>\n\
<a name="VFRecommend"></a>\n\
<select name="FRRecommend">\n\
<option selected value="-1">S??lectionnez la r??ponse --&gt;</option>\n\
<option value="10">10 Tr??s fortement</option>\n\
<option value="9">9 </option>\n\
<option value="8">8 </option>\n\
<option value="7">7 </option>\n\
<option value="6">6 </option>\n\
<option value="5">5 Sans opinion</option>\n\
<option value="4">4 </option>\n\
<option value="3">3 </option>\n\
<option value="2">2 </option>\n\
<option value="1">1 </option>\n\
<option value="0">0 Pas du tout</option>\n\
</select>\n\
</div>\n\
';

//French User Acceptance
pagetypeval[14] = 'userAcceptance';
g9ques[14] = '<a name="VFq1"></a><div><label for="UserAcceptance">Ce site m\'a ??t?? utile.</label></div>';
g9answ[14] = '<div>\n\
<a name="VFuserAcceptance"></a>\n\
<select name="FRuserAcceptance">\n\
<option selected value="-1">S??lectionnez la r??ponse --&gt;</option>\n\
<option value="6">6 Tr??s utile</option>\n\
<option value="5">5 </option>\n\
<option value="4">4 </option>\n\
<option value="3">3 </option>\n\
<option value="2">2 </option>\n\
<option value="1">1 Compl??tement inutile</option>\n\
</select>\n\
</div>\n\
';

pagetypeval[15] = 'network';
g9ques[15] = '<div><label for="network">Why will you use the Sun Grid Utility today? If not, why not?</label></div>';
g9answ[15] = '<div>\n\
\n\
<input type="hidden" name="survey_type" value="network">\n\
<select name="network">\n\
<option selected value="">Select Rating --&gt;</option>\n\
<option value="1">+ Has the right functionality</option>\n\
<option value="2">+ It is powerful</option>\n\
<option value="3">+ I can use it immediately</option>\n\
<option value="4">+ It is secure</option>\n\
<option value="5">+ Easy to arrange payment</option>\n\
<option value="-1">- Lacks functionality I need </option>\n\
<option value="-2">- Not enough power</option>\n\
<option value="-3">- It is too hard to set up</option>\n\
<option value="-4">- It is not secure enough</option>\n\
<option value="-5">- Lacks payment options</option>\n\
<option value="0">+/- Other</option>\n\
<option value="jl">I\'m just looking</option>\n\
</select>\n\
</div>\n\
';

pagetypeval[16] = 'trainingsat';
g9ques[16] = '<div><label for="training">This <strong>training</strong> site met my need today</label></div>';
g9answ[16] = '<div>\n\
\n\
<input type="hidden" name="survey_type" value="trainingsat">\n\
<select name="trainingsat">\n\
<option selected value="-1">Select Rating --&gt;</option>\n\
<option value="6">6 strongly agree</option>\n\
<option value="5">5 </option>\n\
<option value="4">4 </option>\n\
<option value="3">3 </option>\n\
<option value="2">2 </option>\n\
<option value="1">1 strongly disagree</option>\n\
</select>\n\
</div>\n\
';

pagetypeval[17] = 'find';
g9ques[17] = '<div><label for="find">Did you find what you were looking for today?</label></div>';
g9answ[17] = '<div>\n\
\n\
<input type="hidden" name="survey_type" value="find">\n\
<select name="find">\n\
<option selected value="-1">Select Answer --&gt;</option>\n\
<option value="1">Yes</option>\n\
<option value="0">No</option>\n\
</select>\n\
</div>\n\
';

pagetypeval[18] = 'participant';
g9ques[18] = '<div><label for="participant">Would you like to participate in research about Sun\'s web site?</label></div>';
g9answ[18] = '<div>\n\
\n\
<input type="hidden" name="participant" value="participant">\n\
<select name="participant">\n\
<option value="yes">Yes</option>\n\
</select>\n\
</div>\n\
';

pagetypeval[19] = 'leotrace';
g9ques[19] = '<div><label for="leotrace">Would you like to participate in an evaluation to help Sun improve search?</label></div>';
g9answ[19] = '<div>\n\
\n\
<input type="hidden" name="leotrace" value="leotrace">\n\
<select name="leotrace">\n\
<option value="yes">Yes</option>\n\
</select>\n\
</div>\n\
';

pagetypeval[20] = 'javacom';
g9ques[20] = '<a name="VFq1"></a><div labelfor="Recommend">What are you trying to do on\n\
<b>java.com</b> today?</div>';
g9answ[20] = '<td align="right" class="answ">\n\
<div>\n\
\n\
<input type="hidden" name="survey_type" value="javacom">\n\
<a name="VFRecommend"></a>\n\
<select name="intent">\n\
<option selected value="-1">Select --&gt;</option>\n\
<option value="1">Download Java</option>\n\
<option value="2">Update Java</option>\n\
<option value="3">Verify my installation</option>\n\
<option value="4">Get general information</option>\n\
<option value="5">I don\'t know</option>\n\
<option value="6">Other</option>\n\
</select>\n\
</div>\n\
</td>\n\
';
//1 = Net Promoter Recommend
//2 = Net Promoter Meets my Need / User Acceptance
//3 = Purchasing
//4 = Privacy
// Unique Generation:
//5 = Search Satisfaction
// New Generation:
//6 = Network Computing Event (Useful)
//7 = Network Computing Event (Recommend)
//8 = I found what I was looking for (Java Dev)
//9 = Reader Features
//10 = Sun Connection Portal
//11 = Recommend Korean
//12 = User Acceptance Korean
//13 = Recommend French
//14 = User Acceptance French
//15 = SunGrid network survey


////// Logic for choosing which question //////
// Purchasing, Privacy, NetPromoter, Search
//var store       = url.indexOf("store.sun.com");
var searchurl   = url.indexOf("onesearch.sun.com"); 
var sun         = url.indexOf(".sun.com");

// NC Event
var ncevent     = url.indexOf("www.sun.com/nc/");
var nceventtest = url.indexOf("www.sun.com/peek/");
// JavaDev Survey
//var devdotsun   = url.indexOf("developer.sun.com");
var javadotsun  = url.indexOf("java.sun.com");
//var devsdotsun  = url.indexOf("developers.sun.com");
//var dds         = url.indexOf("sonntag2.sfbay");
//var jds         = url.indexOf("jscstage.sfbay");
//var jdss        = url.indexOf("jscpreview.sfbay");
//dscstage.sfbay

// Reader Features
var rf          = url.indexOf("/2005");
// SCP
var scpa        = url.indexOf("sunconnection.sun.com");
var scpb        = url.indexOf("scp-240-8");
var scpc        = url.indexOf("scp-qa-portal");

// Korean Test
var krtest      = url.indexOf("/sunsurveys/krtest.html");

// French NP
var frenchnp       = url.indexOf("fr.sun.com");
var frenchnptest = url.indexOf("www.sun.com/sunsurveys/fr/");

//SDN Channel
var sdnchannel       = url.indexOf("developers.sun.com/channel/");

//SunGrid survey
var networka	= url.indexOf("network.com");
var networkb	= url.indexOf("sun.com/service/sungrid");

//training satifaction survey
//Any of the sites listed below should use the training survey so check for them all 

var trainingsat = url.indexOf("training");
trainingsat += url.indexOf("suned.sun.com/APPS/US/SESWEB");
trainingsat += url.indexOf("courses/US");
trainingsat += url.indexOf("suned.sun.com/APPS/CA/SESWEB");
trainingsat += url.indexOf("courses/CA");
trainingsat += url.indexOf("suned.sun.com/APPS/AU/SESWEB");
trainingsat += url.indexOf("courses/AU");
trainingsat += url.indexOf("suned.sun.com/APPS/GB/SESWEB");
trainingsat += url.indexOf("courses/GB");
trainingsat += url.indexOf("suned.sun.com/APPS/NZ/SESWEB");
trainingsat += url.indexOf("courses/NZ");

var leotrace = url.indexOf("searchPageBodyLink.html");

var javacom = url.indexOf("java.com/en");

//var findtest	= url.indexOf("find");
// Logic
/*if (store >= 0)
{
	// This is the Sun Store. \\
     
	// Now choose questions 1&2 (30%) or 3&4 (70%)
	var num = Math.round(Math.random() * 9);
	if (num <=2)
	{
		// Questions 1 and 2
	        var num = Math.round(Math.random());
		if (num == 0)
		{
			// Question 1
			question = 1;
		}
		else if (num == 1)
		{
			// Question 2
			question = 2;
		}
	}
	else
	{
		// questions 3&4
                var num = Math.round(Math.random());
		if (num == 0)
		{
			// Question 3
			question = 3;
		}
		else if (num == 1)
		{
			// Question 4
			question = 4;
		}
	}		
}
else*/
if (leotrace >= 0) {
	question = 18;
} else if (searchurl >=0)
{
	// Now choose questions 1 (30%) or 5 (70%)
	var num = Math.round(Math.random() * 9);
	if (num <=2)
	{
		// Question 1
		question = 1;			
	}
	else
	{	
		// Question 5
		question = 5;	
	}
}
else if (ncevent >=0)
{
	// Now choose questions 7 (30%) or 6 (70%)
	var num = Math.round(Math.random() * 9);
	if (num <=2)
	{
		// Question 1
		question = 7;			
	}
	else
	{	
		// Question 5
		question = 6;	
	}
}
else if (javacom >=0){
	question = 20;
}
else if (nceventtest >=0)
{
	// Now choose questions 7 (30%) or 6 (70%)
	var num = Math.round(Math.random() * 9);
	if (num <=2)
	{
		// Question 1
		question = 7;			
	}
	else
	{	
		// Question 5
		question = 6;	
	}
}
/*
else if (devdotsun >=0)
{
	var num = Math.round(Math.random() * 9);
	if (num <=2)
	{
		question = 1;
	}
	else
	{
		question = 8;
	}
	
}
else if (devsdotsun >=0)
{
	var num = Math.round(Math.random() * 9);
	if (num <=2)
	{
		question = 1;
	}
	else
	{
		question = 8;
	}
}*/	
else if (javadotsun >=0)
{
	var num = Math.round(Math.random() * 9);
	if (num <=2)
	{
		question = 1;
	}
	else
	{
		question = 8;
	}
}/*
else if (jds >=0)
{
	var num = Math.round(Math.random() * 9);
	if (num <=2)
	{
		question = 1;
	}
	else
	{
		question = 8;
	}
}
else if (dds >=0)
{
	var num = Math.round(Math.random() * 9);
	if (num <=2)
	{
		question = 1;
	}
	else
	{
		question = 8;
	}
}
else if (jdss >=0)
{
	var num = Math.round(Math.random() * 9);
	if (num <=2)
	{
		question = 1;
	}
	else
	{
		question = 8;
	}
}*/
else if (rf >=0)
{
	question = 9;
}
else if (scpa >=0)
{
	question = 10;
}
else if (scpb >=0)
{
	question = 10;
}
else if (scpc >=0)
{
	question = 10;
}
else if (krtest >=0)
{
        var num = Math.round(Math.random());
	if (num == 0)
	{
		// Question 1
		question = 11;
	}
	else if (num == 1)
	{
		// Question 2
		question = 12;
	}
}
else if (frenchnp >=0)
{
	// This is fr.sun.com \\
	// So choose between 1 and 2
        var num = Math.round(Math.random());
	if (num == 0)
	{
		// Question 1
		question = 13;
	}
	else if (num == 1)
	{
		// Question 2
		question = 14;
	}
}
else if (frenchnptest >=0)
{
	// This is fr.sun.com \\
	// So choose between 1 and 2
        var num = Math.round(Math.random());
	if (num == 0)
	{
		// Question 1
		question = 13;
	}
	else if (num == 1)
	{
		// Question 2
		question = 14;
	}
}
else if (sdnchannel >=0)
{
	// This sdn channel, choose cust sat question
	question = 2;
}
else if (networka >=0)// This is network.com
{
	question = 15;
}
else if (networkb >=0)// This is sun.com/service/sungrid
{
	question = 15;
}

else if (trainingsat > -11)
{
	//50% of the time this should point to the training survey
	//40% of the time to the sun loyalty survey
	// and 10% of the time to the customer sat survey
	var num = Math.round(Math.random() * 100);
	if (num <= 40)
	{
		// Question 1 - loyalty
		question = 1;
	}
	else if (num > 40 && num <= 50 )
	{
		// Question 2 - cust sat
		question = 2;
	}
	else{
		//Q16 - training specific
		question = 16;
	}
}
//else if (findtest != -1)
//{
//	question = 17;
//}
else if (sun >=0)
{
	// This is Sun.com \\
	// So choose between 1, 2 and 3
        var num = Math.floor(Math.random() * 4);
	if (num == 0) {
		// Question 1
		question = 1;
	} else if (num == 1) {
		// Question 2
		question = 2;
	} else if(num == 2) {
		/// Find question
		question = 17;
	} else if(num == 3) {
		/// Participant question
		question = 18;
	}
}
function printg9h()
{
	var g9hiddenvars = '<a name="VFURL"></a>\n\
	<input type="hidden" name="URL" value="">\n\
	<a name="VFPagetype"></a>\n\
	<input type="hidden" name="Pagetype" value=' +pagetypeval[question] + '>\n\
	';
	return g9hiddenvars;
}

function printg9()
{
	document.write('<td width="100%" class="ques">'+g9ques[question]+'</td><td align="right" class="answ">'+g9answ[question]+printg9h()+'</td>');
}

