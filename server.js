const { Conteiner } = require("./class_conteiner.js");
const express = require("express");
const app = express();


const new_conteiner = new Conteiner("./src/courses.txt");
new_conteiner.readFile();
let courses = new_conteiner.getAll();

const server = app.listen(process.env.PORT, () => {
    console.log(`Http server listening in port ${server.address().port}`)
})
server.on("error", error => console.log(`Server Error ${error}`))


app.get('/', (req, res) => {
  res.send("Need to change route to : \n -/courses o /courseRandom")
})


app.get('/courses', (req, res) => {
  res.send(courses)
})


app.get('/courseRandom', (req, res) => {
  let random_course = courses[Math.floor(Math.random()*courses.length)];
  res.send(random_course)
})
