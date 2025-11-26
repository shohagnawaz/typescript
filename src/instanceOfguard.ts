// OOP: instance of type guard/ type narrowing

class Person {
    name: string;

    constructor (name: string) {
        this.name = name;
    }

    getSleep(numOfhours: number) {
        console.log(`${this.name} daily ${numOfhours} hours is sleep.`)
    }
}

class Student extends Person {
    constructor (name: string) {
        super(name)
    }

    doStudy(numOfhours: number) {
        console.log(`${this.name} daily ${numOfhours} hour do study.`)
    }
}

class Teacher extends Person {
    constructor (name: string) {
        super(name)
    }

    takeClass(numOfhours: number) {
        console.log(`${this.name} daily ${numOfhours} hours teaching.`)
    }
}

// function guard
const isStudent = (user: Person) => {
    return user instanceof Student; // user is student
};

const isTeacher = (user: Person) => {
    return user instanceof Teacher; // user is teacher
}

const getUserInfo = (user: Person) => {
    if (isStudent(user)) {
        user.doStudy(10)
    } 
    else if (isTeacher(user)) {
        user.takeClass(5)
    }
    else {
        user.getSleep(16)
    }
};

const student1 = new Student("Mr. Nawaz");
const teacher1 = new Teacher("Mr. Khairul");
const person1 = new Person("Mr. Person");

getUserInfo(person1);