// inheritance 

class Student {
    name: string;
    age: number;
    address: string

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address
    }

    getSleep(numberOfHours: number) {
        console.log(`${this.name} is sleeping to ${numberOfHours} hours`)
    }
}

const student = new Student("Abul", 18, "Dhaka")
student.getSleep(10);