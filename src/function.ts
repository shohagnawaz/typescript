// function
// arrow function, normal function

// normal function
function addNormal(num1: number, num2: number) : number 
{
    return num1 + num2;
}

// add(2, 5)
 
// console.log(add(2, 3))

// arrow function

const addArrow = (num1: number, num2: number): 
number => num1 + num2;

console.log(addArrow(10, 20))

// object => function => method

const user = {
    name: "nawaz",
    balance: 0,
    addBalance(n : number) : number {
        const totalBalance = this.balance + n;
        return totalBalance;
    }
}

const res = user.addBalance(19000);
console.log(res)
