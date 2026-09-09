# API do Diário de Treinos

Projeto de **Programação Back-End I** — CEEP Pedro Boaretto Neto
Técnico em Desenvolvimento de Sistemas

Este é o projeto que você vai construir do início ao fim do trimestre. **É sempre o mesmo repositório**: a cada aula ele ganha uma capacidade nova.

## Como rodar

```
npm install
npm start
```

O servidor sobe em `http://localhost:3000`.

## O que a API faz

Guarda os treinos de uma pessoa. Cada treino tem um `nome` e uma `duracao` em minutos:

```json
{ "id": 1, "nome": "Peito e triceps", "duracao": 60 }
```

## As rotas (a especificação)

Esta tabela é **o que você tem que construir**. Enquanto uma rota não existir, a requisição correspondente no `testes.http` vai falhar.

| Método | Rota | O que faz | Resposta |
|---|---|---|---|
| GET | `/treinos` | lista todos | `200` + array |
| GET | `/treinos/:id` | busca um | `200` + treino, ou `404` |
| POST | `/treinos` | cria | `201` + treino criado, ou `400` |
| PUT | `/treinos/:id` | substitui | `200` + treino, ou `404` / `400` |
| DELETE | `/treinos/:id` | remove | `204` sem corpo, ou `404` |

### Regras de validação

- `nome` — obrigatório, texto, não pode ser vazio
- `duracao` — obrigatória, número maior que zero

Quando algo estiver errado, responda `400` com um JSON assim:

```json
{ "erro": "O campo nome e obrigatorio e deve ser um texto." }
```

Quando o `id` não existir, responda `404` no mesmo formato.

## Como testar

Abra o `testes.http` no VS Code (extensão **REST Client**) e clique em *Send Request* em cada bloco. **Você terminou quando todas as requisições responderem o status da tabela acima.**

## O semáforo

Toda vez que você der `git push`, o GitHub roda os testes oficiais no seu código e marca um ✅ ou um ❌ do lado do commit. Você não precisa entender como isso funciona ainda — só olhar a cor.

Se der ❌, clique nele pra ver qual requisição falhou.

## Entrega de cada aula

No fim de toda aula:

```
echo "02" > AULA
git add .
git commit -m "aula02 - marco zero da api"
git push
```

O número dentro do arquivo `AULA` diz até onde você chegou — é ele que define quais testes vão rodar. **Sem push não há entrega.**
