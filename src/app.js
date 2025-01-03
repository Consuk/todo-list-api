require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("¡Bienvenido a la API To-Do List!");
});


// Middleware para parsear JSON
app.use(express.json());

// Rutas principales
app.use("/api", require("./routes"));

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Ocurrió un error en el servidor." });
});

module.exports = app;
