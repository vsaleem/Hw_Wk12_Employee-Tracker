const connection = require('./db/db');
const inquirer = require('inquirer');
const cTable = require('console.table');

function userPrompt(){
    inquirer.prompt({
        name: 'choice',
        type: 'list',
        message: 'Welcome......... to your dashboard.',
        choices: [
            'View Employees',
            'View Roles',
            'View Department',
            'Add Employee',
            'Add Role',
            'Add Department',
            'Update Employee Role',
            'Exit'
        ]
    })
    // CREATE SWITCH FUNCTION TO VIEW EACH CHOICE AND EXIT
    .then(function(answer) {
        switch (answer.choice) {
            case "View Employees":
                viewEmployees();
                break;

            case "View Roles":
                viewRoles();
                break;

            case "View Department":
                viewDepartment();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "Add Role":
                addRole();
                break;

            case "Add Department":
                addDepartment();
                break;

            case "Update Employee Role":
                updateRole();
                break;

            default:
                console.log("Great! See you later.")
                connection.end();
        };
    });
};
// CREATE FUNCTIONS TO PULL INFO FROM TABLES IN DB

function viewEmployees(){
    let query = SELECT employees.first_name, employees.last_name, employee_role.title, employee_role.salary, department_name FROM connection.query(query, function (error, response){
        if (error) throw error;
        console.table(res);
        console.log('Request completed.');
        go();
    });      
};

module.exports = {
    go: go()
}