const { Sequelize } = require("sequelize");

// Configuración de Sequelize
const sequelize = new Sequelize({
  dialect: "sqlite", 
  storage: "./database.sqlite", // Ruta al archivo de la base de datos
  logging: false, //  logs de SQL desactivados
});

// Importar modelos
const User = require("./User")(sequelize); 
const Task = require("./Task")(sequelize); 

// Definir relaciones entre los modelos
User.hasMany(Task, { foreignKey: "userId" });
Task.belongsTo(User, { foreignKey: "userId" });

// Sincronizar la base de datos
sequelize
  .sync({ force: true }) // Cambiar a `false` en producción
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.error("Error al sincronizar la base de datos:", error));

// Exportar sequelize y modelos
module.exports = { sequelize, User, Task };
