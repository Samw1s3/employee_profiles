const Employee = require('../../src/lib/employee');


class Manager extends Employee {
    constructor (id, name, email, officeNumber) {
        super(id, name, email)
        this.officeNumber = officeNumber
    }

    getRole(){
    return 'Manager'
    }

    getofficeNumber(){
     return this.officeNumber
    }
}

module.exports = Manager;