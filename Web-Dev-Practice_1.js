var email = "Aaron@freemote.com ";
var password = "helloworld";
var tweets = [
    {content: 'im hungry', timestamp: Date.now() - 10000}, 
    {content: 'just got to mcdonalds', timestamp: Date.now() - 5000},
    {content: 'finished eating', timestamp: Date.now()}
];
function encrypt(pw) {
    return pw.split('').map(char => char.charCodeAt(0) + 10).join('')
}

const tweetsMap = {};
for (const tweet of tweets) {
    console.log(tweet)
    console.log(tweet.timestamp)
    console.log(tweet.content)
    if (tweetsMap[tweet.timestamp]){
        tweetsMap[tweet.timestamp].push(tweet.content)
    } else {
        tweetsMap[tweet.timestamp] = tweet.content
    }
    
}
console.log(tweetsMap)


let formattedEmail = email.toLowerCase().trim();
console.log(formattedEmail)

var requestObject = {
    // email: formattedEmail,
    email: email.toLowerCase().replace(" ", ""),
    password: encrypt(password),
    tweets: tweetsMap
}

// console.log(tweets.content);
console.log(JSON.stringify(requestObject));