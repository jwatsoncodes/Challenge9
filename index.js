
// packages used for this challenge
const inquirer = require('inquirer');
const fs = require('fs');


//list of questions to be included in the README file
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which License are you using?',
    choices: ['MIT', 'GPL', 'Apache', 'BSD', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'input',
    name: 'username',
    message: 'Please enter your GITHUB username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address:',
  },
];

// Function to generate the README file - also includes the Lincense button link
const generateREADME = (answers) => {
  return `
  ${answers.title} ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

  

## Description
  ${answers.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
Product license ${answers.license}.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
Please contact me with any questions: [${answers.username}](https://github.com/${answers.username}) OR via email at ${answers.email}.
`;
};

// Function to write README 
const writeFile = (data) => {
  fs.writeFile('README.md', data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log('Your README has been successfully created!');
    }
  });
};

// Function to initialize app and prompt the user with questions
const init = () => {
  
  inquirer.prompt(questions).then((answers) => {
   //README content
    const readmeContent = generateREADME(answers);

    // Write README file
    writeFile(readmeContent);
  });
};

// calls function to initiate function
init();
