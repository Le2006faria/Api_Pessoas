"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bancoDeDados_1 = require("./bancoDeDados");
// Inicializa uma liosta de pessoas
(0, bancoDeDados_1.inicializarPessoas)();
// Cria o servidor express
const app = (0, express_1.default)();
// Define a porta que o servidor vai escutar as requisições
const port = 3001;
// Habilitando o uso do JSON no servidor express
app.use(express_1.default.json());
// Primeira rota, a rota principal do servidor
app.get(`/`, (req, res) => {
    console.log(`Recebi sua requisição`);
    res.send({ mensagem: "Estou devolvendo a resposta para a sua requisição" });
});
// Rota para consultar pessoas
app.get(`/pessoas`, (req, res) => {
    const listaDePessoas = (0, bancoDeDados_1.listarPessoas)();
    res.json(listaDePessoas);
});
// Servidor sendo executado
app.listen(port, () => {
    console.log(`Servidor Express ouvindo no endereço http://localhost:${port}/`);
});
//# sourceMappingURL=app.js.map