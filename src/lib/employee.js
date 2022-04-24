
class Employee {
    constructor(id, name, email) {

      if( !id || !email || !name){
        throw new Error('Cannot instantiate without id name or email');
      }
      this.id = id;
      this.name = name;
      this.email = email;
      
  }
  
  getEmail (){
    return this.email;
  };

  getId (){
    return this.id;
  };

  getName (){
    return this.name;
  }

  getRole() {
    return 'Employee';
  }

    // printInfo() {
    //   console.log(`${name}, id:${id}, their email address is ${email}`);
    // }
  }
  module.exports = Employee;