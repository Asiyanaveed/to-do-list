#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let answer = await inquirer.prompt([
        {
            name: 'firstQuestion',
            type: 'input',
            message: 'what would you like to add in your To do list?'
        },
        {
            name: 'secondQuestion',
            type: 'confirm',
            message: 'what would you like to add more in your To do list?',
            defult: 'true'
        }
    ]);
    todos.push(answer.firstQuestion);
    console.log(todos);
    condition = answer.secondQuestion;
}
