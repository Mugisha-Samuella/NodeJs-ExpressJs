//Import express and using it in the app
const express = require("express");
const app = express();



//Create a Courses object
const courses = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "Javascript" },
];

//Outputs Hello World on the Browser
app.get("/", (req, res) => {
  res.send("Hello World");
});

//Outputs the courses object on the Browser
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

/*Gets a single id; checks if the id on the courses object matches with the params.id
changes the params.id string to an int to compare*/
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  //If the course doesn't exist, sends a 404 error and outputs "Course not found"
  if (!course) res.status(404).send("Course not found");
  res.send(course);
});

//using query
app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.query);
});

//assigning port to an environment variable
const port = process.env.PORT || 3000;

//Outputs on the console the port the server is listening on
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
