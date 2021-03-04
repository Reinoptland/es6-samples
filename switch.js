const dayOfTheWeek = 4;

let output = "";

if (dayOfTheWeek === 1) {
  output = "Monday";
} else if (dayOfTheWeek === 2) {
  output = "Tuesday";
} else if (dayOfTheWeek === 3) {
  output = "Wednesday";
} else if (dayOfTheWeek === 4) {
  output = "Thursday";
} else if (dayOfTheWeek === 5) {
  output = "Friday";
} else if (dayOfTheWeek === 6) {
  output = "Saturday";
} else if (dayOfTheWeek === 7) {
  output = "Sunday";
} else {
  output = "What calander are you using???";
}

console.log(`Today is: ${output}`);
