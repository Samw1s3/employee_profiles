const inquirer = require('inquirer');
const fs = require('fs');
const generateTeamMembers = require("./src/page-template");

const Engineer = require('./src/lib/engineer');
const Manager = require('./src/lib/manager');
const Intern = require('./src/lib/intern');

//Array for new staff member data to go
const newStaffMemberData = [];


const promptUser = async () => {
    const answers = await inquirer
      .prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is this team members name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is their ID?" 
        },
        {
            type: 'input',
            name: 'email',
            message: "What is their email address?",
            default: () => {},
            validate: function (email) {
    
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    
                if (valid) {
                //   console.log("Great job");
                    return true;
                } else {
                    console.log(".  Please enter a valid email")
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "What is their role?", 
            choices: ["Manager", "Engineer", "Intern"],
        }, 
    ])
    
    console.log(answers);
    //If manager is selected in in roles then answer the following questions
    if (answers.role === "Manager") {
        const managerAnswers = await inquirer
            .prompt([
            {
                type: "input",
                name: "officeNumber",
                message: "What is your office number?",
            },        
            ])
            const newManager = new Manager (
                answers.id,
                answers.name,
                answers.email,
                managerAnswers.officeNumber
            );
            newStaffMemberData.push(newManager);
            //If Engineer is selected in in roles then answer the following questions
    }else if (answers.role === "Engineer") {
        const engineerAnswers = await inquirer
            .prompt([
                {
                    type: "input",
                    name: "github",
                    message: "What is your github username?",
                }
            ])
            const newEngineer = new Engineer (
                answers.id,
                answers.name,
                answers.email,
                engineerAnswers.github,
            );
            newStaffMemberData.push(newEngineer);
   
    //If Intern is selected in in roles then answer the following questions
    }else if (answers.role === "Intern") {
        const internAnswers = await inquirer
            .prompt([
                {
                    type: "input",
                    name: "school",
                    message: "What is uni did you attend?", 
                },
            ])

            const newIntern = new Intern(
                answers.id,
                answers.name,
                answers.email,
                internAnswers.school,
            );
            newStaffMemberData.push(newIntern);
    }

};

async function promptQuestions(){
    await promptUser()

    const addMemberAnswers = await inquirer 
        .prompt([
            {
                name: "addMember",
                type: "list",
                message: "What would you like to do next?",
                choices: ["Add another team member","create team page"], 
            }
        ])

        if(addMemberAnswers.addMember === 'Add another team member') {
            return promptQuestions()
        }
        return createTeam () ;
        
}

promptQuestions();

function createTeam () {
    console.log("new person", newStaffMemberData)
    fs.writeFileSync(
        "./dist/index.html",
        generateTeamMembers(newStaffMemberData),
        "utf-8"
    );
}  