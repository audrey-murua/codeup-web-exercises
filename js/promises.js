



//Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

//solution

const userLastCommit = (user) => {
    return fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': "GITHUB_KEY"}})
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            for (let event of data) {
                if (event.type === "PushEvent") {
                    console.log(new Date(event.created_at));
                    break;
                }
            }
        });
}

userLastCommit("audrey-murua");


//solution didn't work

//     fetch('https://api.github.com/users/${username}/events', {headers: {'Authorization': GITHUB_KEY}}).then(data => {
//         // return data.json())
//
//
//         let commit = [];
//         for (let event of data) {
//             if (event.type === "PushEvent") {
//                 commit.push(event.created_at);
//             }
//         }
//
//     })
//
// }


//Solution didn't work

// function lastCommit (username) {
//
//     fetch('https://api.github.com/users/${username}/events', {headers: {'Authorization':GITHUB_KEY}}).then(data => data.json())
//         .then(commits => commits[0].author.login);


//Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

//solution

const wait = milliseconds => new Promise (resolve => {
    setTimeout(resolve, milliseconds);
});

wait(1000).then(() => console.log("Your promise resolved after 1 second!"));
wait(3000).then(() => console.log("Your promise resolved after 3 second!"));


//Bonus
//
// const wait = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`You'll see this after ${ms/1000} second(s).`);
//         }, ms);
//     })
// }
//
// wait(1000).then(message => console.log(message));
// wait(3000).then(message => console.log(message));
// wait(5000).then(message => console.log(message));