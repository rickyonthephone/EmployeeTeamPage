//Declaration dependencies

const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

//Intro question to select employee type; the selection from this list will determine what 
//questions the user answers
const introQuestion = [
    { 
        type: 'list',
        message: 'What type of employee are you adding?',
        name:'employeeType',
        choices: ['Manager', 'Engineer', 'Intern']

    }
];

//Questions if the interoQuestion answer is 'Intern'
const internQuestions = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name:'employeeName'
    },
    {
        type: 'input',
        message: "What is the intern's email?",
        name:'employeeEmail',
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name:'employeeSchool',
    }
]

//Questions if introQuestion answer is 'manager'
const managerQuestions = [
    {
        type: 'input',
        message: "What is the manager's name?",
        name:'employeeName'
    },
    {
        type: 'input',
        message: "What is the manager's email?",
        name:'employeeEmail',
    },
    {
        type: 'input',
        message: "What is the manager's office number?",
        name:'employeeOffice',
    }
]

//Questions if introQuestion is 'engineer'
const engineerQuestions = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name:'employeeName'
    },
    {
        type: 'input',
        message: "What is the engineer's email?",
        name:'employeeEmail',
    },
    {
        type: 'input',
        message: "What is the engineer's github username?",
        name:'employeeGithub',
    }  
];

const initialize = () => {
    let employeeArr = [];
    
   


    const introPrompt = () => {
        let employee = {};
        inquirer.prompt (introQuestion)
        .then ((answers) => {
            console.log(answers);
            employee = answers
            if(answers.employeeType === 'Manager') {
                managerPrompt(employee);
            } else if(answers.employeeType === 'Engineer') {
                engineerPrompt(employee);    
            } else {
                internPrompt(employee);
            }
        })
    }

    const managerPrompt = (employeeObj) => {
        inquirer.prompt (managerQuestions)
        .then((answers) => {
            // console.log(answers);
            let updatedEmployee = {
                ...employeeObj,
                ...answers
            }
            employeeArr.push(updatedEmployee);
        })
        .then (() => {
            inquirer.prompt([{
                type:'list',
                message:'Are you finished adding employees?',
                name: 'finished',
                choices:['yes', 'no']
            }])
            .then (answers => {
            if (answers.finished === 'no') {
                introPrompt();
            } else {console.log(employeeArr)}
            })
        })
    }

    const engineerPrompt = (employeeObj) => {
        inquirer.prompt (engineerQuestions)
        .then((answers) => {
            let updatedEmployee = {
                ...employeeObj,
                ...answers
            }
            employeeArr.push(updatedEmployee);
        })
        .then (() => {
            inquirer.prompt([{
                type:'list',
                message:'Are you finished adding employees?',
                name: 'finished',
                choices:['yes', 'no']
            }])
            .then (answers => {
            if (answers.finished === 'no') {
                introPrompt();
            } else {console.log(employeeArr)}
            })
        })
    }

    const internPrompt = (employeeObj) => {
        inquirer.prompt (internQuestions)
        .then((answers) => {
            let updatedEmployee = {
                ...employeeObj,
                ...answers
            }
            employeeArr.push(updatedEmployee);
        })
        .then (() => {
            inquirer.prompt([{
                type:'list',
                message:'Are you finished adding employees?',
                name: 'finished',
                choices:['yes', 'no']
            }])
            .then (answers => {
            if (answers.finished === 'no') {
                introPrompt();
            } else {console.log(employeeArr)}
            })
        })
    }

    introPrompt();
}

initialize();