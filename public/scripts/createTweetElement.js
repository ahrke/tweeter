// We need a way to render our tweets from user data, so we we'll build an 'article' object for each tweet, then append each one to the tweets section of our app
let renderTweets = (tweets) => {
  $("#tweets").append(tweets.map(tweet => createTweet(tweet)).join(''));
  // return tweets.map(tweet => createTweet).join('');
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

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


renderTweets(data);

// module.exports = {
//   renderTweets,
//   createTweet
// }
