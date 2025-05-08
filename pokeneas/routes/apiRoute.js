const express = require('express');
const router = express.Router();
const os = require('os');
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

router.get('/pokenea/display', (req, res) => {
    const pokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)];
    const containerID = os.hostname()
    res.render('pokeneaDisplay', {
        pokenea: pokenea,
        contenedor: containerID
    })
})

module.exports = router