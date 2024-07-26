//Nos traemos el módulo que previamente hemos instalado
require("dotenv").config();

const moviesRouter = require("./src/api/routes/movie");

const cinemasRouter = require("./src/api/routes/cinema");

//importar la función
const { connectDB } = require("./src/config/db")

const express = require("express");

//lo ejecutamos y guardamos en la variable app
const app = express();

connectDB();
// Linea para que configurar que mi servidor sea capaz de recoger datos en formato json
app.use(express.json());

app.use("/api/v1/movies", moviesRouter);
app.use("/api/v1/cinemas", cinemasRouter);

app.use("/saludar", (req, res) => {
  return res.status(200).json("Hola pinche pero")
})

// utilizamos nuestro servidor para ponerlo a escuchar el método listen, le tenemos que pasar un puerto en el primer parámetro y un callback con la función a ejecutar cuando se ponga a escuchar.

app.listen(3000, () => {
  console.log("Servidor levantado: http://localhost:3000");
})