// array, object

// tuple

let bazarList: string[] = ["milk", "egg", "vegetable", "fish"];

// bazarList.push()

let mixArr : (string | number)[] = ["egg", 1, "milk", 2, "apple", 3];

// mixArr.push(true)

let coordinates: [number, number] = [20, 30];

let nawazNameRoll : [string, number] = ["shohag", 174]

console.log(nawazNameRoll)

// --------=====================-------------//

// reference type: object

// const user : {
//     firstName: "Shohag Nawaz Shohag"; // value => type: Literal types
//     middleName?: string; // optional type
//     lastName: string;
//     isMarried: boolean
// } = {
//     firstName: "",
//     middleName: "Shah",
//     lastName: "Nawaz",
//     isMarried: true
// }

// // user.firstName = "Shohag Nawaz"

// console.log(user)

const user : {
    readonly firstName: string // access modifier 
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean
} = {
    firstName: "Shohag Nawaz",
    middleName: "Shah",
    lastName: "Nawaz",
    isMarried: true
}

user.firstName = "Shohag Nawaz"

console.log(user)



