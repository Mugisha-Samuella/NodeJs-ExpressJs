const { readFileSync, writeFileSync, read, write } = require("fs");

const first = readFileSync("./contents/first.txt", "utf8");
const second = readFileSync("./contents/second.txt", "utf8");

writeFileSync(
  "./contents/result.txt",
  `Here is the result: ${first}, ${second}`,
  {flag : 'a'}
);

console.log(first, second);
