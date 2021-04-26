//Declaration dependencies

const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const generateHTML = require('./generateHTML.js')

//Intro question to select employee type; the selection from this list will determine what 
//questions the user answers

const introQuestion = [
    { 
        type: 'list',
        message: 'What type of employee are you adding?',
        name:'employeeType',
        choices: ['Manager', 'Engineer', 'Intern', 'Employee']

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

//Questions if the interoQuestion answer is 'Employee'

const employeeQuestions = [
    {
        type: 'input',
        message: "What is the employee's name?",
        name:'employeeName'
    },
    {
        type: 'input',
        message: "What is the employee's email?",
        name:'employeeEmail',
    },
    {
        type: 'input',
        message: "What is the employee's cubicle number?",
        name:'employeeCube',
    }  
];

//creating an empty array to push employees to that are entered via inquirer

const initialize = () => {
    let employeeArr = [];
    
   

//Prompt that will initiate the intro question and then determine what set of questions
//the user will complete. 

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
            } else if (answers.employeeType === 'Employee') {
                employeePrompt(employee);
            } else {
                internPrompt(employee);
            }
        })
    };

//Manager prompt questions and are then mergered with the answer to the introQuestion; information is 
// then pushed to the array. Additional logic to determine whether or not the user is finished entering 
//information or not. If no, introPrompt starts again; if yes, then questions finish. 

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
            } else {
                const stringHTML = generateHTML (employeeArr)
                fs.writeFile ('index.html', stringHTML, (err) => {
                    if (err) {
                        console.error(err);
                    } else {console.log ("File Created")}
                });
            }
            })
        })
    }

//Engineer prompt questions and are then mergered with the answer to the introQuestion; information is 
// then pushed to the array. Additional logic to determine whether or not the user is finished entering 
//information or not. If no, introPrompt starts again; if yes, then questions finish.

    const engineerPrompt = (employeeObj) => {
        inquirer.prompt (engineerQuestions)
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
            } else {
                const stringHTML = generateHTML (employeeArr)
                fs.writeFile ('index.html', stringHTML, (err) => {
                    if (err) {
                        console.error(err);
                    } else {console.log ("File Created")}
                });
            }
            })
        })
    }

//Intern prompt questions and are then mergered with the answer to the introQuestion; information is 
// then pushed to the array. Additional logic to determine whether or not the user is finished entering 
//information or not. If no, introPrompt starts again; if yes, then questions finish.    

    const internPrompt = (employeeObj) => {
        inquirer.prompt (internQuestions)
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
            } else {
                const stringHTML = generateHTML (employeeArr)
                fs.writeFile ('index.html', stringHTML, (err) => {
                    if (err) {
                        console.error(err);
                    } else {console.log ("File Created")}
                });
            }
            })
        })
    }

    const employeePrompt = (employeeObj) => {
        inquirer.prompt (employeeQuestions)
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
            } else {
                const stringHTML = generateHTML (employeeArr)
                fs.writeFile ('index.html', stringHTML, (err) => {
                    if (err) {
                        console.error(err);
                    } else {console.log ("File Created")}
                });
            }
            })
        })
    }

//Call introPrompt function

    introPrompt();
}

//Call initialize function

initialize();