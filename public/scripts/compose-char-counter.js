$(document).ready(() => {
  $('.newTweetTextArea').on("keydown", e => {
    let count = $('.newTweetTextArea').val().length;
    $('.counter').text(count);
  })
})