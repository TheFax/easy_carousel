//Questo script si occupa di rendere visibile un DIV alla volta di quelli contrassegnati con
//class="carousel1...6"

cimage = 0;

function changeCarouselImage() {
  var allElements = document.querySelectorAll('[class]');
  var counter=0;
  
  //If you want... we can count the number of DIVs to rotate in real-time...
  /*
  Array.prototype.forEach.call( allElements, function( el, i ) {
    //"el" is your element
    if (el.className.startsWith("carousel") ) {
      counter++;
    }
  });
  */
  
  //Or you can set a fixed number of DIVs.
  counter=6;  //Number of DIVs to rotate...
  
  if ( cimage >= counter ) {
    cimage=1;
  } else {
    cimage++;
  }

  Array.prototype.forEach.call( allElements, function( el, i ) {
    //"el" is your element
    if (el.className.startsWith("carousel") ) {
      if (el.className.endsWith(cimage)) {
        //Make it visible
        el.style.display = "block";
      } else {
        //Make it invisible
        el.style.display = "none";
      }
    }
  });
}

setInterval(changeCarouselImage, 500);
