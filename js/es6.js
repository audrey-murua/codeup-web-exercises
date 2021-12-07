/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array

// var name = 'audrey';
// var email = 'audrey@codeup.com';
// var languages = ['html', 'css', 'javascript'];


// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`

const name = 'audrey';
const email = 'audrey@codeup.com';
const languages = ['html', 'css', 'javascript'];

// name = 'codey';

// console.log(name);


// TODO: rewrite the object literal using object property shorthand
// users.push({
//   name: name,
//   email: email,
//   languages: languages
// });

users.push({
  name,
  email,
  languages
});

console.log(users)

// TODO: replace `var` with `let` in the following variable declarations
// var emails = [];
// var names = [];

let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//   return emails.push(user.email);
// });

users.forEach(user => emails.push(user.email));

console.log(emails);

// users.forEach(function(user) {
//   return names.push(user.name);
// });

users.forEach(user => names.push(user.name));

console.log(names);

// TODO: replace `var` with `let` in the following declaration
// var developers = [];

let developers = [];


users.forEach(function(user) {
// users.forEach((user) => {

  //other solution instead of the answer below
  // users.forEach(user = ({name, email, languages}) => {

  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition


  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;

  const {name, email, languages} = user;

  // console.log(name)
  // console.log(email)
  // console.log(languages)

  // TODO: rewrite the assignment below to use template strings


  // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));

  developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}.`);

  console.log(developers)

});

// TODO: Use `let` for the following variable
// var list = '<ul>';

let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop

// developers.forEach(function (developer) {

    for (let developer of developers) {

      // TODO: rewrite the assignment below to use template strings

      // list += '<li>' + developer + '</li>';

      list += `<li> ${developer} </li>`;

    }


list += '</ul>';

console.log(list)

// other way to check with html

document.getElementsByTagName("body")[0].innerHTML += list;