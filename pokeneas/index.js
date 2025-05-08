const express = require('express');
const os = require('os');
const pokenea = require('./data/pokeneas');
const pokeneaRoutes = require('./routes/apiRoute');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', pokeneaRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
})