const cafeOpen = true;
const age = 16;
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

console.log(output);
