const cafeOpen = false;
const age = 33;
const hasMoney = true;

let output = "";
if (age < 18) {
  output = "You are too young!";
} else if (!cafeOpen) {
  output = "Wait until te cafe is open";
} else if (!hasMoney) {
  output = "I guess you can have water!";
} else {
  output = "Drink responsibly!";
}

function canWeHaveDrinks(cafeOpen, age, hasMoney) {
  switch (true) {
    case age < 18: // true of false
      return "You are too young!";
    case !cafeOpen:
      return "Wait until te cafe is open";
    case !hasMoney: // !hasMany -> true
      return "I guess you can have water!";

    default:
      return "Drink responsibly!";
  }
}

console.log(canWeHaveDrinks(true, 33, false));

if (age > 18 && hasMoney && cafeOpen) {
  console.log("Drink responsibly");
} else {
  console.log("NOPE!"); // :( ..?? Why??
}
