const express = require("express");
const { Task } = require("../models");
const authenticate = require("../middleware/authenticate");

const router = express.Router();

// Crear una tarea
router.post("/", authenticate, async (req, res) => {
    const { title, description } = req.body;
    try {
      const task = await Task.create({ 
        title, 
        description, 
        userId: req.userId 
      });
      res.status(201).json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

// Obtener todas las tareas del usuario autenticado
router.get("/", authenticate, async (req, res) => {
    try {
      const tasks = await Task.findAll({ where: { userId: req.userId } });
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Marcar una tarea como completada
router.patch("/:id", authenticate, async (req, res) => {
    const { id } = req.params;
    try {
      const task = await Task.findOne({ where: { id, userId: req.userId } });
      if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
      
      task.completed = true;
      await task.save();
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

 
module.exports = router;
