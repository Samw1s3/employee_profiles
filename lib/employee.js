const inquirer = require("inquirer");

const inquirer = require(inquirer);

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
          }
  
    printInfo() {
      console.log(`${name}, id:${id}, their email address is ${email}`);
    }
  }
  module.exports = Employee;