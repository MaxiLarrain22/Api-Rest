// Esto es un ENTRY POINT
require('dotenv').config();

const express = require('express');
const app = express();
const path = require("path");
const layouts = require("express-ejs-layouts");
// Configuración del servidor de archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Configuración del motor de plantillas EJS y directorio de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));


app.use(layouts);
app.set('layout','layouts/layout')

// Importación de rutas
const mainRouter = require('./src/routes/main.router');
const productosRouter = require('./src/routes/productos.router');

// Uso de las rutas importadas
app.use(mainRouter);
app.use(productosRouter);

// Puerto del servidor
const PORT = process.env.PORT || 3001;

// Iniciar el servidor
app.listen(PORT, () => console.log(`Servidor en línea en http://localhost:${PORT}`));
