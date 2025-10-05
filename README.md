# Mueblería Hermanos Jota – Proyecto NEXUS

## Integrantes del equipo
- Arturo Toranzos
- Lucas Rotelli
- Matias Nicolas Villan
- Santiago Ribecca

## 📌 Descripción
Este proyecto corresponde a la **consigna final de los Sprints 3 y 4 (NEXUS)**.  
El objetivo es reconstruir el frontend de la tienda **Mueblería Hermanos Jota** con **React**, y desarrollar un backend con **Node.js + Express** que sirva como API para gestionar los productos.  

La aplicación es ahora un verdadero sistema **cliente-servidor**:
- El **frontend** (React) consume los datos desde el backend mediante peticiones HTTP.
- El **backend** (Express) expone endpoints que devuelven la información de los productos en formato JSON.

## 🏛️ Arquitectura del Proyecto
La estructura es monorepo, con dos carpetas principales:
- `/backend`  # Servidor Node.js + Express
- `/client`   # Aplicación React

### Backend
* Servidor Express.
* Datos de productos almacenados en un archivo local `.js`.
* **Endpoints**:
    * `GET /api/productos` → Devuelve la lista completa de productos.
    * `GET /api/productos/:id` → Devuelve un producto específico por su ID.
* Middleware global para loguear cada petición recibida.
* Middleware `express.json()` para procesar el cuerpo de las peticiones POST.
* Manejo de rutas modularizado con `express.Router`.
* Manejadores de error para rutas no encontradas (404) y errores de servidor (500).

### Frontend
* Single Page Application (SPA) construida con **React**.
* Componentes reutilizables.
* Consumo de la API propia (`/api/productos`) mediante `fetch`.
* Renderizado dinámico de la lista de productos.
* Vista de detalle de producto mediante renderizado condicional.
* Estado global para el carrito de compras (manejado con `Context API`).
* Formulario de contacto controlado con el hook `useState`.

## ⚙️ Instalación y Uso

### Backend
1.  Entrar al directorio `backend`:
    ```sh
    cd backend
    ```
2.  Instalar dependencias:
    ```sh
    npm install
    ```
3.  Iniciar servidor en modo desarrollo:
    ```sh
    npm run dev
    ```
El backend correrá en: `http://localhost:5000` (por defecto).

### Frontend
1.  Entrar al directorio `client`:
    ```sh
    cd client
    ```
2.  Instalar dependencias:
    ```sh
    npm install
    ```
3.  Iniciar aplicación de desarrollo:
    ```sh
    npm run dev
    ```
El frontend correrá en: `http://localhost:5173` (por defecto).

## 🌳 Estructura del Proyecto

root/    
│    
├── backend/    
│   ├── src/    
│   │   ├── config/    
│   │   ├── controllers/    
│   │   ├── data/    
│   │   ├── helpers/    
│   │   ├── middleware/    
│   │   └── routes/    
│   ├── uploads/    
│   ├── .env    
│   ├── index.js    
│   ├── package.json    
│
├── client/    
│   ├── public/    
│   ├── src/    
│   │   ├── components/    
│   │   ├── context/    
│   │   ├── layout/    
│   │   ├── pages/    
│   │   │   ├── carrito/    
│   │   │   ├── contacto/    
│   │   │   ├── home/    
│   │   │   ├── producto/    
│   │   │   └── productos/    
│   │   ├── App.jsx    
│   │   ├── main.jsx    
│   │   └── styles.css    
│   ├── .env    
│   ├── package.json    
│   └── vite.config.js    


## 🚀 Tecnologías Utilizadas
* **Frontend**: `React`, `Vite`, `CSS`.
* **Backend**: `Node.js`, `Express`.
* **Otros**: `JavaScript (ES6+)`, `Fetch API`.

## 📌 Consideraciones
* El proyecto es escalable y está preparado para integrarse a una base de datos real (como MongoDB o PostgreSQL) en futuras versiones.
* Actualmente utiliza un archivo de datos local para simular una base de datos y facilitar las pruebas.
