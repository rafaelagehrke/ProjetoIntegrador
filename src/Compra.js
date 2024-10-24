import './App.css';
import express from "express";

function Compra() {

  const express = require('express');

  const server = express(); 

  server.use(express.json());
  server.use(express.urlencoded({extended: true}));

  server.listen(3001, ()=> {console.log('servidor rolando')});

  server.get('/calcula-ticket', (req, res) => {
    const total = req.body.total;
    res.send(`${total} é o total.`);
  });

  return (
    <div className="align-items-left">
        <p>Compra</p> 
    </div>
  );
}

export default Compra;