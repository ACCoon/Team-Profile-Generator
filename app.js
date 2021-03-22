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

async function getTeamMembers() {
  const outputPath = './output/team.html';
  // Prompt user for first team member data. First team member is project manager.
  while (askAgain !== 'Nobody else') {
    if (askAgain === 'Engineer') {
      nextPrompt = engPrompt;
    }
    else if (askAgain === 'Intern') {
      nextPrompt = internPrompt;
    }

    // Call Inquirer to prompt user for input based on selected questions.
    // Default question set is Manager.
    let data = await inquirer.prompt(nextPrompt);
    let teamMember;

    switch (askAgain) {
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
  }

  let teamHTML = render(team);

  // Attempt to write HTML file. If output directory doesn't exist, create it.
  try {
    fs.writeFileSync(outputPath, teamHTML);
  }

  catch (err) {
    if (err.code === 'ENOENT') {
      fs.mkdirSync('./output');
      fs.writeFileSync(outputPath, teamHTML);
    }
  };
}

getTeamMembers();