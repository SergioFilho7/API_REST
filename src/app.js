import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.status(200).send("Rota Home!");
});

export default app;