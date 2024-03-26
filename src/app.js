import express from "express";
const app = express();

app.use(express.json())
const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Aneís"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get("/", (req, res) => {
    res.status(200).send("Rota Home!");
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro Cadastrado com Sucesso!");
});

export default app;