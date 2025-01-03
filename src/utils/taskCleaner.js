const { Task } = require("../models");

const cleanCompletedTasks = async () => {
  try {
    const deleted = await Task.destroy({ where: { completed: true } });
    console.log(`Limpieza automática: ${deleted} tareas completadas eliminadas.`);
  } catch (error) {
    console.error("Error durante la limpieza automática:", error);
  }
};

// Ejecutar cada 10 minutos
setInterval(cleanCompletedTasks, 10 * 60 * 1000);
