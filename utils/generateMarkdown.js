// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license.replace(' ','_')}-blue.svg)`;
  } return ""
}

//function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `* [License](#license)`;
  } return ""
}

// md file have syntax for links

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
  This project is licensed under the ${license} license.`;
  } return ""
}

// function to generate markdown for README
 function generateMarkdown(data) {
  return `# ${data.title}
 ## Description:
  ${data.description}


 ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  ${renderLicenseLink(data.license)}
  
 ## Installation
  ${data.installation}

 ## Usage
  ${data.usage}

 ##  Contributing
  ${data.contribution}

 ## Tests
  ${data.tests}

 ${renderLicenseSection(data.license)}
 
 ${renderLicenseBadge(data.license)}

 ## Questions
  If you have any questions, please contact me at ${data.email}. 
  You can also find me on GitHub at [${data.github}](http://www.github.com/${data.github}).


`;
}

export default generateMarkdown;
