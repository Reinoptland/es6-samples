const dayOfWeekNumber = 4;

let output = "";

switch (dayOfWeekNumber) {
  case 1:
    output = "Monday";
    break;
  case 2:
    output = "Tuesday";
    break;
  case 3:
    output = "Wednesday";
    break;
  case 4:
    output = "Thursday";
    break;
  case 5:
    output = "Friday";
    break;
  case 6:
    output = "Saturday";
    break;
  case 7:
    output = "Sunday";
    break;

  default:
    output = "What calander are you using???";
}

function getDayOfWeek(dayOfWeekNumber) {
  switch (dayOfWeekNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";

    default:
      return "What calander are you using???";
  }
}
// if (dayNumber === 1) {
//   output = "Monday";
// } else if (dayNumber === 2) {
//   output = "Tuesday";
// } else if (dayNumber === 3) {
//   output = "Wednesday";
// } else if (dayNumber === 4) {
//   output = "Thursday";
// } else if (dayNumber === 5) {
//   output = "Friday";
// } else if (dayNumber === 6) {
//   output = "Saturday";
// } else if (dayNumber === 7) {
//   output = "Sunday";
// } else {
//   output = "What calander are you using???";
// }

// console.log(`Today is: ${output}`);
console.log("AS A FUNCTION:", getDayOfWeek(4));
