console.log("We can do anything we want to do if we stick to it long enough -Hellen Keller ");

// Practice: Represent your Pet
// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value
// #1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1
// let myPet = {
//     name: "Sherpa",
//     species: "dog",
//     nicknames: ["big Floofer", "doggo", "polar bear", "Wooyoo", "best boi", "goodest boi", "thicc boi", "stinkers", "pumpkin", "D'aww", "shweetness"],
//     age: 2,
//     }
// }

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

// myPet.bark = function () {console.log("SherpaBark")};
// #2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2#2
// let myPet = {
//     name: "Sherpa",
//     species: "dog",
//     nicknames: ["big Floofer", "doggo", "polar bear", "Wooyoo", "best boi", "goodest boi", "thicc boi", "stinkers", "pumpkin", "D'aww", "shweetness"],
//     age: 2,
//     sit: function () {
//         console.log(`Sherpa sits, good ${this.species}`);
//     },
//     bark() {
//         console.log("Woof");
//     },
//     shake() {
//         console.log("Sherpa lifts front paw");
//     }
// }
// console.log(myPet.sit());
// console.log(myPet.bark());
// console.log(myPet.shake());

// Practice: My Pet "This"
// Give your pet a new key named favoriteToys whose value is an empty array.
// Now define another new key named play whose value is a function
//  with a single parameter named toy.
// The function should determine if your pet liked the toy,
//  and if s/he does, then it should be added to the favoriteToys
//   array using the this keyword (see example above).
// Here's an example. If your pet is a cat, then he likely only likes furry toys, 
// so you could put an if..then condition in the play() method that checks if the word 
// "fuzzy" is in the argument value. If it is, it gets added to the array.

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
    },
    favoriteToys: [],
    play: function (toy) {
        if(toy.includes("squeeky")) {
        this.favoriteToys.push(toy) 
        }
    }
}

myPet.play("squeeky ball");

// myPet.play("squeeky ball");
// myPet.play("squeeky squirrel");
// myPet.play("chew toy");
// // play("string rope");
// // play("squeeky chicken");

let SherpaToys = ["squeeky ball","squeeky squirrel", "chew toy", "string rope", "squeeky chicken"];

SherpaToys.forEach((element) => {
    myPet.play(element)
})