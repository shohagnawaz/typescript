// dynamically generalize

// const friends : string[] = ["A", "B", "C"];
                // or
const friends : Array<string> = ["A", "B", "C"];

// const rollNumber: number[] = [4, 6, 8];
                // or
const rollNumber: Array<number> = [4, 6, 8];

// const isEligibleList: boolean[] = [true, false, true];
                // or
const isEligibleList: Array<boolean> = [true, false, true];

// Generic value

type GenericArray<T> = Array<T>;

const alphabets : GenericArray<String> = ["A", "B", "C"];

const idNumber : GenericArray<number> = [10, 20, 30];

const isTrueOrFalse : GenericArray<boolean> = [true, false, true];

// Array of object
const userList : GenericArray<{name: string, age: number}> = [
    {
        name: "nawaz",
        age: 40
    },
    {
        name: "shohag",
        age: 40
    }
]