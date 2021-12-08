const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let languageArray = users.filter(language => language.languages.length === 3);

console.log(languageArray)

//  Use .map to create an array of strings where each element is a user's email address

let emailArray = users.map(email => email.email )

console.log(emailArray)

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let total = users.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.yearsOfExperience

    },0)

let averageYears = total/users.length

console.log(averageYears);



//     Use .reduce to get the longest email from the list of users.

let longest = users.reduce((longEmail, allEmails) => {
    if (longEmail.email.length > allEmails.email.length) {
        return longEmail;
    } else {
        return allEmails;
    }

}).email

console.log(longest)

//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

//Solution 1 using ternary

// let instructorString = users.reduce(function(prevVal,currVal,idx){
//     return idx == 0 ? currVal.name : prevVal + ', ' + currVal.name;
// }, '')

//Solution 2

let instructorString = users.reduce((prev, curr) => [prev, curr.name], []).join(', ');
console.log(instructorString);