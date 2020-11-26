var blinkIntervalIsSet = false;
var isVisible = false;
var blinkInterval;
intervalManager();// we call the intervalManager for the first time.
window.setTimeout(intervalManager, 5500);// we tell the window to call the intervalManager after 5 seconds.

/*
* The purpose of this function is to decide if
* we have to tell the window to set an interval 'reminder'
* to call every 500 ms the function 'toggleVisibility',
* or if the interval has to be cleared.
*/
function intervalManager(){
  if(blinkIntervalIsSet === false) {
    blinkInterval = window.setInterval(toggleVisibility, 500);
    blinkIntervalIsSet = true;
  } else {
    window.clearInterval(blinkInterval);
    blinkIntervalIsSet = false;
    // these two lines below are just to be sure that the html will be 'visible' at the end
    var myHtmlElement = document.getElementById("blink1");
    myHtmlElement.style.visibility = 'visible';
  }
};

/*
* The purpose of this function is to toggle the visibility,
* of the HTML element with ID "blink1".
*/
function toggleVisibility() {
  var myHtmlElement = document.getElementById("blink1");
  // The debugging message below, mixes helpful debugging text, and the variables and objects to be shown.
  console.log("isVisible: " + isVisible + ", myHtmlElement.style.visibility: " + myHtmlElement.style.visibility);
  console.log(myHtmlElement);// this shows the whole HTML object, because it is not mixed with text.

  if (isVisible === true) {
     myHtmlElement.style.visibility = 'visible';
     isVisible = false;
  } else {
    myHtmlElement.style.visibility = 'hidden';
    isVisible = true;
  }
};

/*
* The purpose of this function is only to know the size of the window,
* of the user visiting the website.
* This information can be used later to make decisions, for instance about the CSS style.
*/
function getWindowSize() {
  var windowSize = {
    height: window.innerHeight,
    width: window.innerWidth
  };
  console.log(windowSize);
};

getWindowSize();
