
// render a button when user scrolls all the way down. The button will send them back to top of the page
$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
    $('#beamMeUpScotty').fadeIn('slow');
  } else {
    $('#beamMeUpScotty').fadeOut('slow');
  }
});

$('#beamMeUpScotty').click(() => {
  window.scrollTo(0,0);
});