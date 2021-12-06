const cont = require('./class_conteiner.js')
const express = require("express");
const app = express();

const PORT = 8080

let new_conteiner = new cont.Conteiner("./src/courses.txt");
new_conteiner.readFile();
let courses = new_conteiner.getAll();

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))


app.get('/', (req, res) => {
  res.send("Debe cambiar de ruta a : \n -/prodcutos o /productosRandom")
})


app.get('/courses', (req, res) => {
  res.send(courses)
})


app.get('/courseRandom', (req, res) => {
  let random_course = courses[Math.floor(Math.random()*courses.length)];
  res.send(random_course)
})

