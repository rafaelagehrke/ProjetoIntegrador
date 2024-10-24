const express = require('express');

const server = express(); 

server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.listen(3001, ()=> {console.log('servidor rolando')});

server.get('/calcula-ticket', (req, res) => {
  const total = req.body.total;
  res.send(`${total} é o total.`);
});

server.get('/debita-ticket', (req, res) => {
  let saldo = req.body.saldo;
  let total = req.body.total;
  saldo = parseInt(saldo);
  total = parseInt(total);
  let saldoNovo = saldo - total;
  res.send(`O aluno ficou com R$${saldoNovo} de saldo.`);
});

server.get('/verifica-login', (req, res) => {
  const loginFelipe = req.body.loginFelipe;
  const senhaFelipe = req.body.senhaFelipe;
  let loginInserido = "felipe";
  let senhaInserida = "12345";
  if (loginFelipe == loginInserido && senhaFelipe == senhaInserida){
    res.send(`Bem vindo, ${loginFelipe}.`);
  }
  else {
    res.send(`Login inválido.`);
  }
});