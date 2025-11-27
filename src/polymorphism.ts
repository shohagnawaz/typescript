// polymorphism

class Person {
    getSleep () {
        console.log(`I am a programmer. Daily I am working for 4 hours.`)
    }
}

class Student extends Person {
    getSleep () {
        console.log(`I am a student. Daily I study for 8 hours`)
    }
}

class NextLevelDeveloper extends Person {
    getSleep() {
        console.log(`I am next level developer. I working for 10 hours`)
    }
}

const getWorkingHours = (param: Person) => {
    param.getSleep();
}

const person =  new Person();
const student = new Student();
const nextLevel = new NextLevelDeveloper();
// getWorkingHours(nextLevel)

// -----------=================-----------

class Shape {
    getArea(): number {
        return 0
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super()
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    // area height * width
    height: number;
    width: number;

    constructor (height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    }

    getArea(): number {
        return this.height * this.width;
    }
}

const getResult = (param: Shape) => {
    console.log(param.getArea());
}

const shape = new Shape();
const circle = new Circle(10);
const rectangle = new Rectangle(7, 7);

getResult(rectangle);

