const Engineer = require("../src/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an Employee object with role Engineer and a github username property", () => {
            const man = new Engineer("Brian", 86, "BrianD@2U.com", "BrianDuimstra");

            expect(man.name).toEqual("Brian");
            expect(man.id).toEqual(86);
            expect(man.email).toEqual("BrianD@2U.com");
            expect(man.role).toEqual("Engineer");
            expect(man.github).toEqual("BrianDuimstra")
        });
    });

    describe("getGithub()...", () => {
        it("should return github username of engineer", () => {
            const man = new Engineer("Brian", 86, "BrianD@2U.com", "BrianDuimstra");

            expect(man.getGithub()).toEqual("BrianDuimstra")
        })
    })
});