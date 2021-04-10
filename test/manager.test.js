const Manager = require("../src/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an Employee object with role Manager", () => {
            const man = new Manager("Brian", 86, "BrianD@2U.com", 203);

            expect(man.name).toEqual("Brian");
            expect(man.id).toEqual(86);
            expect(man.email).toEqual("BrianD@2U.com");
            expect(man.role).toEqual("Manager");
        });
    });
});