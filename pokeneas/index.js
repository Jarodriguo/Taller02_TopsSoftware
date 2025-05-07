const express = require('express');
const os = require('os'); // Módulo que se usa para obtener el ID del contenedor
const pokeneas = require('./data/pokeneas');
const app = express(); // Instanciamos express
const PORT = process.env.PORT || 3000; // Se define el puerto en el que correrá la APP

// Creación de rutas
// Primera ruta: JSON
app.get('/api/pokenea', (req, res) => {
    const pokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)];
    res.json({
        id: pokenea.id,
        nombre: pokenea.nombre,
        altura: pokenea.altura,
        poder: pokenea.poder,
        contenedor: os.hostname()
    });
});

// Segunda ruta: Imagen + frase
app.get('/pokenea', (req,res) => {
    const pokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)];
    res.send(`
        <h1>${pokenea.nombre}</h1>
        <img src="${pokenea.imagen}" width="300" />
        <p>${pokenea.frase}</p>
        <p>Contenedor: ${os.hostname()}</p>
    `);
})

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
})