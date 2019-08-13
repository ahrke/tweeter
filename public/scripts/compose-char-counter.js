$(document).ready(() => {
  $('.newTweetTextArea').on("keydown", e => {
    let count = $('.newTweetTextArea').val().length;
    (count > 140) 
      ? $('.counter').css('color', 'red')
      : $('.counter').css('color', '#fcf9ea')
    $('.counter').text(count);
  })
})
