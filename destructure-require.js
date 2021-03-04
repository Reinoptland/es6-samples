// const readline = require("readline-sync");
// const { question, keyInSelect } = readline;
const someModule = {
  question: function () {
    console.log("What is love?");
  },
};

const { question, keyInSelect } = require("readline-sync");
const { question: whatIsLove } = someModule;

whatIsLove();

const feeling = question("How do you feel about JS basics? ");
console.log("Are you ready for React");
const options = [
  "Yes",
  "I don't know how to react...",
  "No, but are we ever truly ready?",
];
const choice = keyInSelect(options);

const anythingToAdd = question("Any thoughts you want to add?");

console.log(`
You feel: ${feeling}
Ready for React? ${options[choice]}
Additional thoughts: ${anythingToAdd}
`);
