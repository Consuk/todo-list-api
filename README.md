# API To-Do List

API diseñada para gestionar una lista de tareas pendientes (To-Do List). Permite registrar usuarios, iniciar sesión y realizar operaciones CRUD sobre tareas asociadas a cada usuario. Incluye autenticación con JWT y un proceso automático para eliminar tareas completadas cada 10 minutos.

---

## **Requisitos**
- [Node.js](https://nodejs.org/) (versión 16 o superior).
- [npm](https://www.npmjs.com/) (administrador de paquetes de Node.js).

---

## **Instalación**
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Consuk/todo-list-api.git
   cd todo-list-api
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
    ```
3. **Configurar variables de entorno:**
    archivo .env
   ```bash
   port= 3000
   JWT_SECRET = constanza
   ```

4. **Iniciar servidor:**
    ```bash
    node src/server.js
    ```

# Endpoints de la API

## **Autenticación**

### **Registrar un usuario**

**POST** `/api/auth/register`  
**Body (JSON):**
```json
{
  "email": "user@example.com",
  "password": "123456"
}
respuesta: 
{
  "message": "Usuario registrado exitosamente",
  "user": {
    "id": 1,
    "email": "user@example.com"
  }
}
```



### **Iniciar Sesión**

**POST** `/api/auth/login`  
**Body (JSON):**
```json
{
  "email": "user@example.com",
  "password": "123456"
}
respuesta: 
{
  "token": "JWT_TOKEN" // puede ser mas largo
}
```
### **Tareas - crear**

**POST** `/api/tasks`  
**Headers: Authorization: Bearer JWT_TOKEN
**Body (JSON):**
```json
{
  "title": "Mi primera tarea",
  "description": "Descripción de la tarea"
}

respuesta: 
{
  "id": 1,
  "title": "Mi primera tarea",
  "description": "Descripción de la tarea",
  "completed": false,
  "userId": 1,
  "createdAt": "2025-01-02T12:00:00.000Z",
  "updatedAt": "2025-01-02T12:00:00.000Z"
}
```
### **Tareas - listar**

**POST** `/api/tasks`  
**Headers: Authorization: Bearer JWT_TOKEN
respuesta: 
```
  {
    "id": 1,
    "title": "Mi primera tarea",
    "description": "Descripción de la tarea",
    "completed": false,
    "userId": 1,
    "createdAt": "2025-01-02T12:00:00.000Z",
    "updatedAt": "2025-01-02T12:00:00.000Z"
  }

```

### **Tareas - Completada**

**POST** `/api/tasks`  
**Headers: Authorization: Bearer JWT_TOKEN
**Body (JSON):**
```json
{
  "id": 1,
  "title": "Mi primera tarea",
  "description": "Descripción de la tarea",
  "completed": true,
  "userId": 1,
  "createdAt": "2025-01-02T12:00:00.000Z",
  "updatedAt": "2025-01-02T12:10:00.000Z"
}
```
respuesta: 
```
{
  "id": 1,
  "title": "Mi primera tarea",
  "description": "Descripción de la tarea",
  "completed": true,
  "userId": 1,
  "createdAt": "2025-01-02T12:00:00.000Z",
  "updatedAt": "2025-01-02T12:10:00.000Z"
}

```
### Simulador de limpieza
El sistema incluye un proceso en segundo plano que elimina automáticamente todas las tareas completadas cada 10 minutos.
Este proceso está configurado en el archivo src/utils/taskCleaner.js y se ejecuta automáticamente cuando el servidor está en funcionamiento.

### Posibles mejoras
Implementar controllers para una mejor arquitectura, por el tipo de proyecto aún no es necesarios.
Los logs pueden ser mas especificos si es necesario. Ejemplo:
User: cons@gmail.com
pass: constanza

en login el usuario pone algun dato mal como: cons2@gmail.com
que el log imprima: 
```"Error en el usuario" ```

