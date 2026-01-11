# Biblioteca Número Narcisista (Node.js)

Esta biblioteca em **Node.js** verifica se um número é **narcisista** (também conhecido como _Armstrong number_).

---

## O que é um Número Narcisista?

Um número narcisista é aquele em que a **soma de cada dígito elevado à quantidade de dígitos do número** é igual ao próprio número.

Exemplos:

- `7` → é narcisista
- `153` → é narcisista  
  `(1³ + 5³ + 3³ = 153)`
- `122` → não é narcisista

---

## Como usar a biblioteca?

### Requisitos

- Node.js **v10 ou superior**
- Ambiente JavaScript com suporte a **BigInt**

---

### Instalação

```shell
npm i numero-narcisista
```

```js
const { numeroNarcisista } = require("numero-narcisista");
```

- numeroNarcisista(value):
  Essa função irá retorna **true** se o número for narcisista.

---
