/*
Java scripts are very much c style and can be multi-line
like this one, or...
*/

//Single line like this.

//Comparison
/*
=== to test for equality,
-== to test if not equal
*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/odin-icon2.jpeg') {
      myImage.setAttribute ('src','images/odin-icon.gif');
    } else {
      myImage.setAttribute ('src','images/odin-icon2.jpeg');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'The Odin Project is awesome, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'The odin Project is awesome, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
