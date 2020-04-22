console.log("We can do anything we want to do if we stick to it long enough -Hellen Keller ");

// Practice: Represent your Pet
// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

let myPet = {
    name: "Sherpa",
    species: "dog",
    nicknames: ["big Floofer", "doggo", "polar bear", "Wooyoo", "best boi", "goodest boi", "thicc boi", "stinkers", "pumpkin", "D'aww", "shweetness"],
    age: 2,
    sit: function () {
        console.log(`Sherpa sits, good ${this.species}`);
    },
    bark() {
        console.log("Woof");
    },
    shake() {
        console.log("Sherpa lifts front paw");
    }
}
console.log(myPet.sit());
console.log(myPet.bark());
console.log(myPet.shake());

// Practice: Pet Sounds
// Now that you have an object that represents your pet, 
// it's time to add some behavior. Pick three behaviors 
// that your pet has and add three kys to your pet object. 
// Each key's value should be a function that logs to the 
// console or displays a window alert. Your choice.

// For example, if your pet is a dog, you could add a bark property,
//  and the function would window.alert("WOOF!").
// Once you have define the properties, invoke each behavior. For example:

// for (let i = 0; i < myPet.nicknames.length; i++) {
//     console.log(myPet.nicknames[i]);

// }

// myPet.bark = function () {console.log("SherpaBark")};
