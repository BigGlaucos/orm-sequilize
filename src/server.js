// Importando o framework Express
const express = require("express");
const app = express();

// Definindo a porta em que o servidor Express irá escutar
const PORT = 4000;

// Iniciando o servidor Express e ouvindo na porta especificada
app.listen(PORT, () => {
     console.log(`Servidor online 🟢🟢🟢 \nPORTA: ${PORT}`);
});
