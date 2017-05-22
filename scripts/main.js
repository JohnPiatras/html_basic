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
