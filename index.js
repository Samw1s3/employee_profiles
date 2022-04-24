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
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "What is the team manager's office number?", 
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'What type of team member would you like to add?',
            choices: ['engineer', 'intern', 'manager'],
        },
        // if (employeeType === 'engineer'){
        //     [
                
        //     ]
        // }
    ])
    
}