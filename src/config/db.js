// nos traemos el módulo mongoose
const mongoose = require("mongoose");

// creamos una función asíncrona llamada como queramos, en este caso connectDB
const connectDB = async () => {
  // creamos un try catch por si falla algo
  try {
    //usamos await porque el proceso de conectarse será asíncrono y utilizamos el método connect de mongoose al cual le aportamos la url de la BBDD que la cogemos desde el .env
    await mongoose.connect(process.env.DB_URL);
    console.log("Conectado con éxito a la BBDD");
  } catch (error) {
    console.log("Error en la conexion a la BBDD");
  }
}
// exportamos la función para poder usarla en el index.js
module.exports = { connectDB }
