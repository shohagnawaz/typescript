// ? : ternary operator => decision making
// ?? : nullish coalescing operator => only use => null & undefine
// ?. : optional chaining


const married = (age: number) => {
    // if (age >=21) {
    //     console.log("You are able to marry")
    // } else {
    //     console.log("You are not able to marry")
    // }

    const result = age >= 21 ? "You are able to marry" : "You are not able to marry";
    console.log(result);
}

// married(21)

// const age = 21;
// const marry = age >= 21 ? "you are able to marry" : "you are not able to marry";
// console.log(marry)

const userTheme = undefined;

const selectedTheme = userTheme ?? "light theme";

console.log(selectedTheme);