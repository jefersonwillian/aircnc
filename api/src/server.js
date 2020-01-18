const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");
const port = 3333;
const app = express();

// Conexao com o banco de dados mongodb
mongoose.connect(
  "mongodb+srv://jeff:jeff@cluster0-q87at.mongodb.net/aircnc?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// GET, POST, PUTT, DELETE
// req.query = Acessar query params(para filtro)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (criação e edição)

app.use(cors());
// Para express aceitar o formato de JSON
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(port, () => console.log(`Example app listening on port port!`));
