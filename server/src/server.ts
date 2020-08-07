import express from "express";

const app = express();

app.get('/users', (req, resp) => {
  console.log("Acessou aqui")
})

app.listen(3333);
