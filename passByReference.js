let pet = {
  name: "fluffykins",
  hungryLevel: 10,
}; // Object datatype: Object, Array

// Maak ik nu een kopie?
let petEvilTwin = pet;

pet.name = "vlekkie";

function feedPet(pet, food) {
  if (food === "banana") {
    // side-effect
    pet.hungryLevel = 0;
  }
  return pet;
}

const notSoHungryPet = feedPet(pet, "banana");

console.log(notSoHungryPet);
console.log(pet);
console.log(petEvilTwin);
