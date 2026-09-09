// ============================================================
// API do Diario de Treinos
// Back-End I - CEEP Pedro Boaretto Neto
// ============================================================
// Este arquivo esta quase vazio DE PROPOSITO.
// Hoje voce vai escrever as rotas, uma de cada vez, conferindo
// no testes.http se cada uma responde o status certo.
// O que cada rota deve fazer esta no README.md.
// ============================================================

const express = require('express');
const app = express();

// Faz o Express entender JSON no corpo das requisicoes
app.use(express.json());

// ------------------------------------------------------------
// Os dados moram aqui, na memoria. Somem quando o servidor cai.
// (Na Aula 03 isso vira banco de dados.)
// ------------------------------------------------------------
const treinos = [];
let proximoId = 1;

// ------------------------------------------------------------
// Validacao
// Escreva a funcao validarTreino(corpo), que devolve a mensagem
// de erro quando algo esta errado, ou null quando esta tudo certo.
// ------------------------------------------------------------



// ------------------------------------------------------------
// GET /treinos - lista todos os treinos
// ------------------------------------------------------------



// ------------------------------------------------------------
// GET /treinos/:id - busca um treino pelo id (404 se nao existir)
// ------------------------------------------------------------



// ------------------------------------------------------------
// POST /treinos - cria um treino (400 se os dados forem invalidos)
// ------------------------------------------------------------



// ------------------------------------------------------------
// PUT /treinos/:id - substitui um treino
// ------------------------------------------------------------



// ------------------------------------------------------------
// DELETE /treinos/:id - remove um treino
// ------------------------------------------------------------



// ------------------------------------------------------------
const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
