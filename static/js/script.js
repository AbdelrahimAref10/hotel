var winH = $(window).height(),
    navH = $('.navbar').innerHeight();
$('.slider').height(winH - (navH));
$('.slider-2').height('300px');

$("html").niceScroll({
    cursorcolor:"#dca73a",
});

/*** Magnifib popup for photo section  ***/
$(function(){
    $('.work').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
        enabled:true
      }
      // other options
    });
});