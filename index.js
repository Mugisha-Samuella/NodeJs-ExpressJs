const express = require("express"); //Import express module
const app = express();//Create and instance of express app
const Joi = require("joi"); //Install Joi

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
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })

    const result = schema.validate(req.body, schema);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course = {
        id: courses.length + 1, //Auto-incremented ID
        name: req.body.name
    }
    courses.push(course)// Add the new course to the list of courses
    res.send(course) //sends the newly created course as response

})

/*To call endpoints using postman 
1. Install Postman 
2. New Request (POST)
3. Enter the URL "http://127.0.0.1:3000/api/courses"
4. Click body > raw change from text to json
5. create a new object and pass name
*/

//Set the port the server is going to listen to
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Server is listening on port ${port}!`))
