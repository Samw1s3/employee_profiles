const inquirer = require("inquirer");

const inquirer = require(inquirer);

class Employee {
    constructor(name, id, email, officeNumber) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber
    }
  
    printInfo() {
      console.log(`${name}, id:${id} works in office ${this.officeNumber}. Their email address is ${email}`);
    }
  }
  module.exports = Employee;