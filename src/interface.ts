type User = {
    name: string;
    age: number
}
type Role = {
    role: "admin" | "user";
}

// type interface
// interface : object type = array, object, function

interface IUser {
    name: string,
    age: number
}

type UserWithRole = User & Role;

const user1 : IUserWithRole = {
    name: "Nawaz",
    age: 40,
    role: "admin"
}

const user2 : IUser = {
    name: "Shohag",
    age: 39
}

interface IUserWithRole extends IUser {
    role: "admin" | "user";
}

// function
type Add = (num1: number, num2: number) => number;

interface IAdd {
    (num1: number, num2: number) : number
}

const add : IAdd = (num1, num2) => num1 + num2;

type Friends = string[];

interface IFriends {
    [index: number] : string
}

const friends: IFriends = ["A", "B", "C"];

