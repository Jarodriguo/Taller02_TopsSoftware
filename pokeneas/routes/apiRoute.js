const express = require('express');
const router = express.Router();
const os = require('os'); // Módulo que se usa para obtener el ID del contenedor
const pokeneas = require('../data/pokeneas.js')

router.get('/pokenea', (req, res) => {
    const pokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)];
    res.json({
        id: pokenea.id,
        nombre: pokenea.nombre,
        altura: pokenea.altura,
        poder: pokenea.poder,
        contenedor: os.hostname()
    });
});

module.exports = router