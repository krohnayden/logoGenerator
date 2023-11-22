const inquirer = require('inquirer')
const fs = require('fs');
console.log("Generate your custom logo below!")

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter up to three characters.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter the hex code for your text color.'
        },
        {
            type: 'input',
            name: 'backgroundColor',
            message: 'Please enter the hex code for your background color.'
        },
        {
            type: 'list',
            name : 'shapes',
            message: 'Please enter the shape of for your logo.',
            choices: ['Circle', 'Triangle', 'Square']
        }
    ])