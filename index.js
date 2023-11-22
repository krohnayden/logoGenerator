const inquirer = require('inquirer')
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');

console.log("Generate your custom logo below!")

function writeToFile(fileName, userInput) {
    let svg = "";
    svg = '<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">';
    svg += "<g>";
    svg += `${userInput.shape}`

    let userShape;
    if (userInput.shape === "Triangle") {
        userShape = new Triangle();
        svg += `<polygon points="250, 60 100, 400 400, 400" fill="${userInput.backgroundColor}"/>`
    }
    else if (userInput.shape === "Circle") {
        userShape = new Circle();
        svg += `<circle cx="50" cy="50" r="75" fill="${userInput.backgroundColor}"/>`
    }
    else {
        userShape = new Square();
        svg += `<square width="100" height="100" fill="${userInput.backgroundColor}"/>`
    }
    
    svg += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${userInput.textColor}">${userInput.text}</text>`;
    svg += "</g>";
    svg += "</svg>";

    fs.writeFile(fileName, svg, (err) => {
        err ? console.log(err) : console.log("Logo Generated!")
    })
}
function userPrompts() {
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
                name: 'shapes',
                message: 'Please enter the shape of for your logo.',
                choices: ['Circle', 'Triangle', 'Square']
            }
        ])
        .then((userInput) => {
            if (userInput.text.length > 3) {
                console.log("Please enter less than 3 characters.")
            } else {
                writeToFile("logo.svg", userInput);
            }
        })
}

userPrompts();