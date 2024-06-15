const express = require("express");
const app = express();

app.use(express.json())

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

app.post('/api/courses', (req, res)=>{
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)

})


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Server is listening on port ${port}!`))