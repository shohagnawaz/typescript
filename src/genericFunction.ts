const createArrayWithString = (value: string) => [value];

const createWithNumber = (value: number) => [value];

const createArrayWithUserObject = (value: {id: number, name: string}) => {
    return [value]
};

const arrString =  createArrayWithString("Apple");
const arrNumber = createWithNumber(174);
const arrObject = createArrayWithUserObject({id: 174, name: "nawaz"})

console.log(arrString); 
console.log(arrNumber);
console.log(arrObject);