const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Hello World desde mi app desplegada con mini-paas\n");
});

// 0.0.0.0 es necesario dentro de un contenedor: con localhost no sería
// accesible desde fuera.
server.listen(port, "0.0.0.0", () => {
  console.log(`escuchando en el puerto ${port}`);
});
