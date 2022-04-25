const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?"
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the team member's employee ID?" 
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email address?",
            default: () => {},
            validate: function (email) {
    
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    
                if (valid) {
                  console.log("Great job");
                    return true;
                } else {
                    console.log(".  Please enter a valid email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "What is the team manager's office number?", 
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'What would you like to do next?',
            choices: ['add engineer', 'add intern', 'add manager', 'finish building team'],
        },
        // if (employeeType === 'engineer'){
        //     [
                
        //     ]
        // }
    ])
    
}