// OOP => Class => Object

// class Shohag {
//     name: string;
//     age: number;
//     dob: string

//     constructor(name: string, age: number, dob: string) {
//         this.name = name
//         this.age = age
//         this.dob = dob
//     }

//     makeNaw() {
//         console.log(`Hi, This is ${this.name}. My age is ${this.age}`)
//     }
// }

// const man = new Shohag("Nawaz", 40, "13-30-1986");
// console.log(man)
// const nawaz = new Shohag("Shohag Nawaz", 40, "13-10-2025")
// nawaz.makeNaw();
// man.makeNaw();

class Man{
    constructor(public name: string, public age: number, public dob: string) {
        
    }

    makeMan() {
        console.log(`Hi, This is ${this.name}. My age is ${this.age}`)
    }
}
const shohag = new Man("Shohag Nawaz", 40, "13-10-1986");
shohag.makeMan();

