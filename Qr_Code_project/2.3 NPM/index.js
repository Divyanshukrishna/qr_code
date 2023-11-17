// var generateName=require("superhero");
// var superHero=generateName();

// console.log(`My superHero name is ${superHero}.`);


// import superhero from "superhero";
//  const name=superhero.random();
//  console.log(`I am ${name}!`);

import inquirer from 'inquirer';
var qr = require('qr-image');


inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message:"Type your URL:",
      name:"URL"
    } 
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url=answers.URL;
    // console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });