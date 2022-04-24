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
            // set up environment

            // define source of truth

            // execute the code

            // compare the result
            
            expect(true).toBe(false);
        });
        
        test('should have name' , () => {
            expect(employee.name).toBeTruthy();
        });
        
        test('should have id' , () => {
            expect(true).toBe(false);
        });
        test('getName() should return name', () => {
            expect(true).toBe(false);
        });
        test('getId() should return id', () => {
            expect(true).toBe(false);
        });
        test('getEmail() should return email', () => {
            const employee = new Employee (defaultId, defaultName, defaultEmail);

            getEmail(employee){
                return employee.email;
            }

            expect(employee.email).toBe("me@me.com");
        });
        //negative path
        // test("Should break if i didn't pass in any arguments to the constructor", () => {
        //     expect(true).toBe(false);
        // })
        test('Should have valid email' , () => {
            expect(true).toBe(false);
        });
    })
})