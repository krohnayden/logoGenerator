const inquirer = require('inquirer')
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');

console.log("Generate your custom logo below!")

function writeToFile(fileName, userInput) {
    let svg = "";
    svg = '<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">';
    svg += "<g>";
    svg += `${userInput.shapes}`

    let userShape;
    if (userInput.shapes === "Circle") {
        userShape = new Circle();
        svg += `<circle cx="150" cy="125" r="75" fill="${userInput.logoColor}"/>`
        svg += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${userInput.textColor}">${userInput.text}</text>`;
    } 
    else if (userInput.shapes === "Triangle") {
        userShape = new Triangle();
        svg += `<polygon points="125, 30 50, 200 200, 200" fill="${userInput.logoColor}"/>`
        svg += `<text x="125" y="150" text-anchor="middle" font-size="40" fill="${userInput.textColor}">${userInput.text}</text>`;
    }
    else {
        userShape = new Square();
        svg += `<rect x="85" y="55" width="125" height="125" fill="${userInput.logoColor}"/>`
        svg += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${userInput.textColor}">${userInput.text}</text>`;
    }
    
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
                message: 'Please enter the hex code or color name for your text.'
            },
            {
                type: 'input',
                name: 'logoColor',
                message: 'Please enter the hex code or color name for your background.'
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