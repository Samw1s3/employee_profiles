const Intern = require("../../src/lib/intern");


test("Can set school via constructor", () => {
    const testValue = "UWA";
    const intern = new Intern(1,"Bob", "bob@bob.com", "UWA");

    expect(intern.school).toBe(testValue);
})

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const intern = new Intern(1,"Bob", "bob@bob.com", "GitHubUser");

    expect(intern.getRole()).toBe(testValue);
})