const Intern = require('../src/intern')

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an Employee object with role Intern and a school username property", () => {
            const man = new Intern("Brian", 86, "BrianD@2U.com", "University of Washington");

            expect(man.name).toEqual("Brian");
            expect(man.id).toEqual(86);
            expect(man.email).toEqual("BrianD@2U.com");
            expect(man.role).toEqual("Intern");
            expect(man.school).toEqual("University of Washington")
        });
    });

    describe("getSchool()...", () => {
        it("should return school username of Intern", () => {
            const man = new Intern("Brian", 86, "BrianD@2U.com", "University of Washington");

            expect(man.getSchool()).toEqual("University of Washington")
        })
    })
});