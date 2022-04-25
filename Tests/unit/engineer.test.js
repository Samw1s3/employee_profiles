const Engineer = require("../../src/lib/engineer");


test("Can set Github account via constructor", () => {
    const testValue = "GitHubUser";
    const engineer = new Engineer(1,"Bob", "bob@bob.com", "GitHubUser");

    expect(engineer.github).toBe(testValue);
})

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const engineer = new Engineer(1,"Bob", "bob@bob.com", "GitHubUser");

    expect(engineer.getRole()).toBe(testValue);
})

