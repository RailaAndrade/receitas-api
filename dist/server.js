"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var uuidv4 = require('uuid').v4;
var app = express_1.default();
app.use(express_1.default.json());
/*
    nome
    login
    senha
    criado_em
    alterado em

*/
var usuarios = [];
app.post("/account", function (request, response) {
    var _a = request.body, nome = _a.nome, login = _a.login;
    var loginAlreadyExists = usuarios.some(function (usuario) { return usuario.login === login; });
    if (loginAlreadyExists) {
        return response.status(400).json({
            error: "usuario  ja existe "
        });
    }
    var id = uuidv4();
    usuarios.push({
        id: id,
        nome: nome,
        login: login,
        receitas: []
    });
    return response.status(201).send();
});
app.get("/recipes/:login", function (request, response) {
    var login = request.headers.login;
    var usuario = usuarios.find(function (usuario) { return usuario.login === login; });
    if (!usuario) {
        return response.status(400).json({ error: 'customer not found' });
    }
    return response.json(usuario.receitas);
});
app.listen(3333);
