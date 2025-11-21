// typescript => primitive data type
// 1. nullable type
// 2. unknown type
// 3. never type

// example 

const getUser = (input: string | null) => {
    if(input) {
        console.log(`From DB: ${input}`)
    } else {
        console.log("From DB: All User")
    }
}

// getUser(null);

// unknown

const discountedCalculator = (input: unknown) => {
    if(typeof input === "number") {
        const discountedPrice = input * 0.1;
        console.log(discountedPrice)
    } else if (typeof input === "string") {
        const [discountedPrice] = input.split(" ");
        console.log(Number(discountedPrice) * 0.1);
    } else {
        console.log("Wrong Input")
    }
}

// discountedCalculator(100);
// discountedCalculator("100 TAKA");
// discountedCalculator(null)

// void

const throwError = (msg: string): never => {
    throw new Error(msg)
}
throwError("Error.......")