const { tsImportEqualsDeclaration } = require("@babel/types");
const Employee = require("../../src/lib/employee");


describe('Testing Employee Class', () => {
    describe('Employee class contains the attribute and methods needed', () => {
        const defaultId = 12;
        const defaultName = 'Noob';
        const defaultEmail = 'me@me.com';
        
        test('if we can instantiate an object from the class' , () => {
            const employee = new Employee (defaultId, defaultName, defaultEmail);
                       
            expect(employee).toBeInstanceOf(Employee);
            // expect(employee).toBeInstanceOf(Object);
        });

        test('should fail if 3 arguments are not passed', () => {
            
            expect(() => new Employee()).toThrow(Error);
            expect(() => new Employee(defaultId)).toThrow(Error);
            expect(() => new Employee(defaultId, defaultName )).toThrow(Error);

            expect(new Employee(defaultId, defaultName, defaultEmail )).toBeInstanceOf(Employee);
        }) 

        test('if employee has email' , () => {
            
            const employee = new Employee (defaultId, defaultName, defaultEmail);
            
            expect(defaultEmail).toBeTruthy();
                      
         
        });
        
        test('should have name' , () => {
            const employee = new Employee (defaultId, defaultName, defaultEmail);
            
            expect(employee.name).toBeTruthy();
        });
        
        test('should have id' , () => {
            const employee = new Employee (defaultId, defaultName, defaultEmail);
            
            expect(employee.id).toBeTruthy();
        });
        test('getName() should return name', () => {
            const employee = new Employee (defaultId, defaultName, defaultEmail);

            expect(employee.getName()).toBe("Noob");
        });
        test('getId() should return id', () => {
            const employee = new Employee (defaultId, defaultName, defaultEmail);

            expect(employee.getId()).toBe(12);
        });
        test('getEmail() should return email', () => {
            const employee = new Employee (defaultId, defaultName, defaultEmail);

            expect(employee.getEmail()).toBe("me@me.com");
        });
        
        test('Should have valid email' , () => {
            expect(true).toBe(false);
        });
    })
})