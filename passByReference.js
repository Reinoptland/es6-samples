let pet = {
  name: "fluffykins",
  hungryLevel: 10,
}; // Object datatype: Object, Array

// Dit maakt een reference
// let petEvilTwin = pet;

// Zo maak je een kopie
// let petEvilTwin = {
//   name: pet.name,
//   hungryLevel: pet.hungryLevel,
// };

// Zo maak je een kopie -> spread operator
let petEvilTwin = { ...pet };

// meest intuitief
pet.name = "vlekkie";

function feedPet(pet, food) {
  if (food === "banana") {
    // side-effect
    // pet.hungryLevel = 0;

    // const petCopy = {
    //   name: pet.name,
    //   hungryLevel: 0,
    // };

    const petCopy = { ...pet, hungryLevel: 0 };

    return petCopy;
  }
}

const notSoHungryPet = feedPet(pet, "banana");

console.log(notSoHungryPet);
console.log(pet);
console.log(petEvilTwin);
