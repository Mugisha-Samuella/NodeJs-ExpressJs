const express = require("express"); //Import express module
const app = express();//Create and instance of express app


app.use(express.json())//middleware to parse JSON bodies in incoming requests


//mock database
const courses = [
    {id: 1, name: "HTML"},
    {id: 2, name: "CSS"},
    {id: 3, name: "Javascript"}
]

//Route handler for the root URL
app.get('/', (req, res)=>{
   res.send("Hello World");
})


//GET the list of courses
app.get('/api/courses', (req, res)=>{
    res.send(courses)
})


//CREATE  a new course
app.post('/api/courses', (req, res)=>{
    const course = {
        id: courses.length + 1, //Auto-incremented ID
        name: req.body.name
    }
    courses.push(course)// Add the new course to the list of courses
    res.send(course) //sends the newly created course as response

})

//Set the port the server is going to listen to
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Server is listening on port ${port}!`))