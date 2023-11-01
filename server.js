const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Habilitar CORS
app.use(cors());

// Ruta para servir archivos estáticos desde la carpeta 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Ruta de ejemplo para una solicitud GET
app.get('/ejemplo', (req, res) => {
  res.send('Esta es una respuesta de ejemplo.');
});

// Puerto en el que el servidor Express escuchará las solicitudes
const PORT = process.env.PORT || 6103;

app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT} = http://localhost:${PORT}`);
});
