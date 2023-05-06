

//servidor en express

//Definiciones

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//config

app.use(express.static('public'));

8 //htdocs public html

app.get('*',(req, res) => {
    res.send('404 | Pagina no encontrada');
})

//procesos

//Procesos - Respuestas para el desarrollador

app.listen(port, () =>{
    console.log('Servidor corriendo en el puerto',port)

})

