const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.end(JSON.stringify({
        status: "Online",
        message: "Hola desde el backend en EC2",
        database: "Conexión exitosa a la base de datos" 
    }))
});

server.listen(3000, () => {
    console.log('Servidor backend escuchando en el puerto 3000');
});
