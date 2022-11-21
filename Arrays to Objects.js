// Arrays to Objects 1
//Fruits in a database
const fruits = [
    'orange', 'orange', 'apple', 'orange', 'apple', 'pear'
];

// need results {orange: 3, apple: 2, pear: 1}
const fruitCounts = {};
for (const fruit of fruits) {
    if (fruitCounts[fruit]){
        fruitCounts[fruit]++
    } else fruitCounts[fruit] = 1;
}
console.log(fruitCounts)

// Arrays to Objects 2
// Creating a simple "map"
const users = [
    {username: 'aaron', fullName: 'Aaron Jack', description: 'Software developer'},
    {username: 'jan', fullName: 'Jan Frey', description: 'Shopify developer'},
    {username: 'igor', fullName: 'Igor Kalashnikov', description: 'Massage therapist'}
]
// {username: full user Object}
const usersMap = {};
for (const user of users) {
    console.log(user.username);
    usersMap[user.username] = user;
}
console.log(usersMap.aaron);

// Array to Object 3
// Creating a complex "map"
const tweets = [
    {day: 'Monday', text: 'Im tired'},
    {day: 'Monday', text: 'Need coffee'},
    {day: 'Tuesday', text: 'Feeling better'},
    {day: 'Friday', text: 'Ready to party'},
    {day: 'Friday', text: 'Lost my phone ...'}
]

// {Monday: [text1, text2], Tuesday: [text3]}
const tweetsByDay = {};
for (let tweet of tweets) {
    console.log(tweet.day)
    console.log(tweet.text)
    if (tweetsByDay[tweet.day]){
        tweetsByDay[tweet.day].push(tweet.text)
    } else {
        tweetsByDay[tweet.day] = [tweet.text]
    }
}
console.log(tweetsByDay)








