const express = require("express");
const path = require("path");

const port = 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "./static")));


const produtoDoDia = {
  nome: "Barra Olimpica",
  descricao: "A Barra Olímpica é um tipo de barra diferente das outras por conta das suas medidas e peso. Então, ela é utilizada em competições e em treinos como o LPO- Levantamento de Peso Olímpico",
  foto: "barra.jpg"
}

const dados = require("./dados/produtos.json");

const dadosUnidades = require("./dados/localUnidades.json");

app.get("/", (req, res) => {
  res.render("layout/template", {conteudo: "index", produto: produtoDoDia, localUnidades: dadosUnidades});
});

app.get("/produto", (req, res) => {
  res.render("layout/templateProdutos", { conteudo: "produto", produtos: dados });
});

app.get("/produto1", (req, res) => {
  res.sendFile(path.join(__dirname, "./static/html/produtos/produto1.html"));
});

app.get("/produto2", (req, res) => {
  res.sendFile(path.join(__dirname, "./static/html/produtos/produto2.html"));
});

app.get("/produto3", (req, res) => {
  res.sendFile(path.join(__dirname, "./static/html/produtos/produto3.html"));
});

app.get("/produto4", (req, res) => {
  res.sendFile(path.join(__dirname, "./static/html/produtos/produto4.html"));
});



app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
}); 
