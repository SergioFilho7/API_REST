// import http from "http";

import app from "./src/app.js";


const PORT = 3000;

// const rotas = {
//     "/": "Bem vindo a Rota Inical!",
//     "/livros": "Bem vindo a Rota Livros!",
//     "/autores": "Bem vindo a Rota Autores!"

// }

// Create a local server to receive data from
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "content.type": "text/plan" });
//     res.end(rotas[req.url]);
// });

app.listen(PORT, () => {
    console.log("Servidor escutando!");
});