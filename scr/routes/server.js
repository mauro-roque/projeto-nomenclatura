/*Fluxo da aplicação: [CLIENTE / FRONTEND / POSTMAN] -> ROUTER -> CONTROLLER -> SERVICE -> REPOSITORY (MySQL)*/
const express = require('express');
const app = express();
app.use(express.json());

/**IMPORTAÇÕES DE TODAS AS ROTAS DO PROJETO: */
//1. Rotas de select
const indexSelectFrom = require('./routers_selects');
app.use("/", indexSelectFrom);

//2. Rotas de delete
const indexDelete = require('./routers_delete');
app.use("/", indexDelete);

//3. Rotas de update
const indexUpdate = require('./routers_update');
app.use("/", indexUpdate);

//4. Rotas de insert
const indexCreateRouters = require("./routers_create");
app.use("/", indexCreateRouters);

app.get("/", async(req, res) => {
    res.send("API - ON")
})

app.listen(process.env.PORT, () => {
    console.log("Serv On");
});
