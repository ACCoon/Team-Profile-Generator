// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];
const empPrompt = [
  {
    type: 'input',
    message: 'Enter employee name:',
    name: 'name'
  },
  {
    type: 'input',
    message: 'Enter employee ID:',
    name: 'id'
  },
  {
    type: 'input',
    message: 'Enter employee email:',
    name: 'email'
  }
];
const askPrompt = [
  {
    type: 'rawlist',
    message: 'Who do you want to add to the project?',
    name: 'next',
    choices: [
      'Engineer',
      'Intern',
      'Nobody else'
    ]
  }
];
const managerPrompt = empPrompt.concat({
  type: 'input',
  message: 'Enter your office number:',
  name: 'office'
}, askPrompt);
const engPrompt = empPrompt.concat({
  type: 'input',
  message: 'Enter their github:',
  name: 'github'
}, askPrompt);
const internPrompt = empPrompt.concat({
  type: 'input',
  message: 'Enter employee school:',
  name: 'school'
}, askPrompt);
let askAgain = 'Manager';
let nextPrompt = managerPrompt;

async function getTeamMembers(){
// Prompt user for first team member data. First team member is project manager.
while (askAgain !== 'Nobody else'){
  if (askAgain === 'Engineer'){
    nextPrompt = engPrompt;
  }
  else if (askAgain === 'Intern'){
    nextPrompt = internPrompt;
  }

  // Call Inquirer to prompt user for input based on selected questions.
  // Default question set is Manager.
  let data = await inquirer.prompt(nextPrompt);
  let teamMember;

  switch(askAgain) {
    case 'Manager':
      teamMember = new Manager(data.name, data.id, data.email, data.office);
      break;
    case 'Engineer':
      teamMember = new Engineer(data.name, data.id, data.email, data.github);
      break;
    case 'Intern':
      teamMember = new Intern(data.name, data.id, data.email, data.school);
      break;
  }

    team.push(teamMember);
    askAgain = data.next;
    console.log(team);
  }
}

getTeamMembers();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
