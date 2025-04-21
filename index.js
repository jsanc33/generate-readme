//packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
// const {writeFile} = require('fs');
import generateMarkdown from './utils/generateMarkdown.js';


//array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

//function to write README file
function writeToFile(fileName, data) {}

//function to initialize app
function init() {
    // Use inquirer to prompt user for input
    
    inquirer.prompt(questions).then((answers) => {
        // Generate markdown content using answers
        const markdownContent = generateMarkdown(answers);
        // Write markdown content to README.md file
        // writeFile('README.md', markdownContent, (err) => {
        //     if (err) throw err;
        //     console.log('README.md file has been generated!');
        // });

        console.log(markdownContent);

        fs.writeFile('./GENERATEDREADME.md', markdownContent, (err) => {
            if (err) throw err;
            console.log('README.md file has been generated!');
        });
    });
}

// Function call to initialize app
init();
