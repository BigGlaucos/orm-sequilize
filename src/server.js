// Importando o framework Express
const express = require("express");
const routes = require("./models/routes");
const app = express();

// Definindo a porta em que o servidor Express irá escutar
const PORT = 4000;
app.use(express.json());

app.use('/user', routes)

// Iniciando o servidor Express e ouvindo na porta especificada
app.listen(PORT, () => {
     console.log(`Servidor online 🟢🟢🟢 \nPORTA : ${PORT}`);
});
