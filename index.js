const express = require("express");
const app = express();
const courses = [
    {id: 1, name: "HTML"},
    {id: 2, name: "CSS"},
    {id: 3, name: "Javascript"}
]

app.get('/', (req, res)=>{
   res.send("Hello World");
})

app.get('/api/courses', (req, res)=>{
    res.send(courses)
})

app.get('/api/courses/:id', (req, res)=>{
   const course = courses.find(c => c.id === parseInt(req.params.id));
   if (!course) res.status(404).send("Course not found")
    res.send(course)
})

app.get('/api/posts/:year/:month', (req, res)=>{
    res.send(req.query)
})


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Server is listening on port ${port}!`))