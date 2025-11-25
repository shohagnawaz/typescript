// keyof : type operator

type RichPeopleVehicle = {
    car: string; // key: value
    bike: string;
    cng: string
};

type MyVehicle = "car" | "bike" | "cng";

type MyVehicle2 = keyof RichPeopleVehicle;

const myVehicle : MyVehicle2 = "cng"

const user = {
    id: 170,
    name: "Shohag",
    address: {
        city: "Narail"
    }
}

const myId = user.id;
// console.log(myId)
const myId2 = user["id"];
console.log(myId2)