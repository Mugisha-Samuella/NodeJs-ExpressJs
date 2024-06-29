const { readFile, writeFile } = require("fs");

readFile("./contents/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  }
  const first = result;
  readFile("./contents/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
    }
    const second = result;
    writeFile(
      "./contents/result-async.txt",
      `The result is : ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      }
    );
  });
});
