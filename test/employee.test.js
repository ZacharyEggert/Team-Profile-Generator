const Employee = require('../src/employee.js');

describe("Employee", () => {

    describe("Initialization", () => {

        it("should create an object with name, id, email, role", () => {

            const emp = new Employee("Zachary", 10, "Eggert.Zachary@gmail.com")

            expect(emp.name).toEqual("Zachary");
            expect(emp.id).toEqual(10);
            expect(emp.email).toEqual("Eggert.Zachary@gmail.com");
            expect(emp.role).toEqual("Employee");
        });
        it("should throw an error if the email is not valid", () => {

            const f = () => {new Employee("Zachary", 10, "hello")}

            expect(f).toThrow("Invalid email format");
        });
        it("should throw an error if any field is empty", () => {

            const f = () => {new Employee("", 20, "Eggert.Zachary@gmail.com")}

            expect(f).toThrow("Please fill out all forms");
        });
    });

    describe("getName()...", () => {
        it("should return the name of the employee", () => {
            const emp = new Employee("Zachary", 10, "Eggert.Zachary@gmail.com")

            expect(emp.getName()).toEqual("Zachary")
        })
    });

    describe("getId()...", () => {
        it("should return the id of the employee", () => {
            const emp = new Employee("Zachary", 10, "Eggert.Zachary@gmail.com")

            expect(emp.getId()).toEqual(10)
        });
    });

    describe("getEmail()...", () => {
        it("should return the email of the employee", () => {
            const emp = new Employee("Zachary", 10, "Eggert.Zachary@gmail.com")

            expect(emp.getEmail()).toEqual("Eggert.Zachary@gmail.com");
        });
    });

    describe("getRole()...", () => {
        it("should return the role of the employee", () => {
            const emp = new Employee("Zachary", 10, "Eggert.Zachary@gmail.com")
            emp.role = "Engineer"

            expect(emp.getRole()).toEqual("Engineer");
        });
    });
});