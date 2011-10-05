// JavaScript Document

var old_popup = 'popup_one';	//	For Storing the OLD_POPUP	id
var old_head ='head_one';		//	For Storing the OLD_HEADING	id
var old_sub ='s_one';			//	For Storing the OLD_SUB	id (for right side image)

var minX = 0;					//	For Storing	Minimum X position	in Old_popup
var maxX = 0;					//	For Storing	Maximum X position	in Old_popup

var minY = 0;					//	For Storing	Minimum Y position	in Old_popup
var maxY = 0;					//	For Storing	Maximum Y position	in Old_popup

function popup(p){				//	when mouse over on HEAD	showing the POPUP
	document.getElementById(old_popup).style.display = 'none';
//	document.getElementById('if').style.display = 'none';
	var popup = document.getElementById('popup_'+p);
	popup.style.display='block';
	old_popup = ('popup_'+p);
	old_head = ('head_'+p);
	old_sub = ('s_'+p);
	
	var head = document.getElementById('head_'+p);
	var sub_h = document.getElementById('s_'+p);
	var height = head.offsetHeight;
	
	var headxy = getXY(head);	//	Getting X and Y position of the HEAD
	
//		document.getElementById('if').style.display = 'block';
//		document.getElementById('if').style.left = headxy[0]+"px";
//		document.getElementById('if').style.top =  headxy[1]+height+5+"px";
	popup.style.left = headxy[0]+"px";
	popup.style.top = headxy[1]+height+5+"px";

	var xy = getXY(popup);		//	Getting X and Y position of the POPUP
		
	minX = xy[0];
	maxX = xy[0]+popup.offsetWidth
	
	minY = xy[1];
	maxY = xy[1]+popup.offsetHeight;
	timer();
}

var secs						//	For Storing the Seconds
var timerID = null;				//	For Storing timer id 
var timerRunning = false;		//	initialy timer running will be in NULL
var delay = 1000;				//	For Storing Delay (SPEED)

function timer(){				//	For TIMER function
	secs = 0;
	stopTheClock();
	startTheTimer();
}
function stopTheClock()			//	For Stop the Timer function
{
    if(timerRunning) {
        clearTimeout(timerID)
	    timerRunning = false;
	}
}
function startTheTimer()		//	For Start the Timer function
{		
//	self.status = secs
    secs = secs + 1
    timerRunning = true			//	Changing timer running is TRUE
    timerID = self.setTimeout("startTheTimer()", delay)		//	For starting timer and speed of the timer

	if ((mousex > minX && mousex < maxX) && (mousey > minY && mousey < maxY)){	// For finding mouse pointer is inside od the POPUP
	}
	else {										// For finding mouse pointer is outside od the POPUP
		if (secs >= 2){							// For after 5 Seconds popup will hide
			document.getElementById(old_popup).style.display = 'none';
//				document.getElementById('if').style.display = 'none';
			document.getElementById(old_head).className = 'normal_l';
//			document.getElementById(old_sub).className = 'normal_r';		
			minX = 0;							//	Resetting the minimum X of the POPUP
			stopTheClock();						//	For Stop the Timer
		}
	}
}
/*   Get XY position of the Div    its named as "node"		Starts 	*/
function getXY(node) {
	var x = node.offsetLeft;	//	Finding X position of the Div
	var y = node.offsetTop;		//	Finding Y position of the Div
	var node = node.offsetParent;		//	Changing node to Parent	
 
	while (node) {		//	Finding	Parent nodes X and Calculating Dix X position
		x += node.offsetLeft;
		y += node.offsetTop;
		node = node.offsetParent;
	}
	return [x, y];		//	Storing X and Y position in to Array
}
/*   Get XY position of the Div    its named as "node"		Ends 	*/



/*	Getting Mouse Move Position	on the Document For Both "IE" and "FIRE FOR"		Starts	*/
var mousex;
var mousey;
function init()
{
  document.onmousemove = update; // update(event) implied on NS, update(null) implied on IE
  update();
}

function getMouseXY(e) // works on IE6,FF,Moz,Opera7
{ 
  if (!e) e = window.event; // works on IE, but not NS (we rely on NS passing us the event)

  if (e)
  { 
    if (e.pageX || e.pageY)
    { // this doesn't work on IE6!! (works on FF,Moz,Opera7)
      mousex = e.pageX;
      mousey = e.pageY;
      algor = '[e.pageX]';
      if (e.clientX || e.clientY) algor += ' [e.clientX] '
    }
    else if (e.clientX || e.clientY)
    { // works on IE6,FF,Moz,Opera7
      mousex = e.clientX + document.body.scrollLeft;
      mousey = e.clientY + document.body.scrollTop;
      algor = '[e.clientX]';
      if (e.pageX || e.pageY) algor += ' [e.pageX] '
    }  
  }
}

function update(e)			//	For Updating the Mouse Move Position which is in the screen
{
	getMouseXY(e); // NS is passing (event), while IE is passing (null)

	
	if (minX !=0){
		if ((mousex > minX && mousex < maxX) && (mousey > minY && mousey < maxY)){
			document.getElementById(old_popup).style.display ='block';
			timer();
		}
	}
}
/*	Getting Mouse Move Position	on the Document For Both "IE" and "FIRE FOR"		Ends	*/
