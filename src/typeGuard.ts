// type guard
// type guard dui prokar: 1. in 2. typeof

// typeof guard
type Alphanumeric = number | string;

const add = (num1: Alphanumeric, num2: Alphanumeric) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2
    } else {
        return num1.toString() + num2.toString()
    }
}

const result = add(2, 2);
console.log(result)
const result2 = add("2", "2");
console.log(result2)

// in guard
type NormalUser = {
    name: string
};
type Admin = {
    name: string,
    role: "Admin"
};

const getUserInfo = (user: NormalUser | Admin) => {
    if ("role" in user) {
        console.log(`This ${user.name} and his role: ${user.role}`)
    } else {
        console.log(`${user.name}`)
    }
}
getUserInfo({ name: "Normal"})