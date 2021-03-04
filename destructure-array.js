const todos = [
  "learn JavaScript",
  "learn React",
  "find colleagues",
  "get paid",
];

const [JS, puppy, collagues] = todos;

console.log("First we", JS);
console.log("Then we", puppy);
console.log("Finally", collagues);

// ...rest operator
const [firstItem, ...bucketList] = todos;

console.log(firstItem);
console.log(bucketList);

// const [count, setCount] = useState(0)
