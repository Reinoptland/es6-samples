const readline = require("readline-sync");

const feeling = readline.question("How do you feel about JS basics? ");
const options = [
  "Yes",
  "I don't know how to react...",
  "No, but are we ever truly ready?",
];
const choice = readline.keyInSelect(options);

const anythingToAdd = readline.question("Any thoughts you want to add?");

console.log(`
You feel: ${feeling}
Ready for React? ${options[choice]}
Additional thoughts: ${anythingToAdd}
`);
