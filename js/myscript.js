/* SCROLL BUTTON
––––––––––––––––––––––––––––––––––––––––––––––––––*/
$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

console.log("test");

//'use strict';
// define variables
var items = [];

function populateItems() {
  items = document.querySelectorAll(".timeline li");
}

// check if an element is in viewport
// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  console.log('came here 3.5');
  console.log(items.length);

  for (var i = 0; i < items.length; i++) {
    console.log('came here 4 ' + i);

    if (isElementInViewport(items[i])) {
      console.log('came here 5 ' +i);

      items[i].classList.add("in-view");
    }
  }
}

// listen for events
window.addEventListener("load", populateItems);
console.log('came here 0');
window.addEventListener("load", callbackFunc);
console.log('came here 1');
window.addEventListener("resize", callbackFunc);
console.log('came here 2');
window.addEventListener("scroll", callbackFunc);
console.log('came here 3');
