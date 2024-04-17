#! /usr/bin/env node

import inquirer from "inquirer"
console.log("Welcome to number guessing game")

const answer = await inquirer.prompt([{
    name: "userGuessedNumber",
    type: "number",
    message: "Please Guess a right number between 1 to 6: "
}])

const randomNumber = Math.floor(Math.random() * 6 + 1)

if(answer.userGuessedNumber === randomNumber ){
    console.log("Congratulation! You have gueesed a right number ")
}
else(
    console.log("Better luck next time.")
)