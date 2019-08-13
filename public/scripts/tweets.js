
// We need a way to render our tweets from user data, so we we'll build an 'article' object for each tweet, then append each one to the tweets section of our app
let renderTweets = (tweets) => {
  $("#tweets").append(tweets.map(tweet => createTweet(tweet)).reverse().join(''));
}

let createTweet = (tweet) => {
  return `
    <article class="tweet">
          <header>
            <span class="userName">
              <img src="${tweet.user.avatars}" /> ${tweet.user.name}
            </span>
            <span class="handle">
              ${tweet.user.handle}
            </span>
          </header>
          <p>
            ${tweet.content.text}
          </p>
          <hr>
          <footer>
            <span class="lastLogin">
              ${daysSinceCreated(tweet.created_at)} days ago
            </span>
            <div class='tweetImgGroup'>
                <div class="imgWrap">
                  <img src="./images/flag.png"></img>
                </div>
                <div class="imgWrap">
                  <img src="./images/retweet.png"></img>
                </div>
                <div class="imgWrap">
                  <img src="./images/heart.png"></img>
                </div>
              </div>
          </footer>
        </article>
  `
}

// we need a way to calculate the number the days since the user has last logged in/since creation
let daysSinceCreated = (created) => {
  let oneDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((Number(new Date()) - created)/oneDay));
}


// We need a way to grab users from our database, as well as render the web page once they're all loaded
$.get('/tweets', (res) => {
  renderTweets(res);
})

$('#newTweetForm').on("submit", (e) => {
  e.preventDefault();
  
  if($('.newTweetTextArea').val().length > 140) {
    $('.invalidTweetAlert').text('Your wisdom can not exceed 140 words. Please edit for the enlightenment of others');
    $('.invalidTweetAlert').slideToggle();
    // window.alert("Your wisdom can not exceed 140 words. Please edit for the enlightenment of others");
  } else if ($('.newTweetTextArea').val().length === 0) {
    $('.invalidTweetAlert').text(`Hey you, I'd like to hear what you got on your mind. Care to share?`);
    $('.invalidTweetAlert').slideToggle();
    // window.alert("Hey you, I'd like to hear what you got on your mind. Care to share?");
  } else {
    $.post('/tweets', {text : $('.newTweetTextArea').val()});
    location.reload()
  }
})

// after a warning is shown, we want to rehide our error. We'll do it once a key is pressed
$('.newTweetTextArea').on("keydown", (e) => {
    $('.invalidTweetAlert').css('display','none');
})