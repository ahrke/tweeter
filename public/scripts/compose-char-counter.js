// Re: New Tweet Form. We need a way to count the amount of characters user has input, from there we need to render the value to an element (.counter)
// We also need to change the color of .counter when the user has exceed 140 characters

$('.newTweetTextArea').on("keydown", () => {
  let count = $('.newTweetTextArea').val().length;
  (count > 140) 
    ? $('.counter').css('color', 'red')
    : $('.counter').css('color', '#fcf9ea')
  $('.counter').text(count);
})
