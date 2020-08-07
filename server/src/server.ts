import express from "express";

import cors from 'cors';

const app = express();

app.use(cors);

app.get('/users', (req, resp) => {
  console.log("Acessou aqui")
})

app.listen(3333);
