// test('should have office number' , () => {
        //     expect(true).toBe(false);
        // });

const Manager = require("../../src/lib/manager");


test("Can set office number via constructor", () => {
    const testValue = "12";
    const manager = new Manager(1,"Bob", "bob@bob.com", "12");

    expect(manager.officeNumber).toBe(testValue);
})

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const manager = new Manager(1,"Bob", "bob@bob.com", "12");

    expect(manager.getRole()).toBe(testValue);
})