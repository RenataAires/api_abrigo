# 🏠 API Abrigo

Este projeto foi desenvolvido a partir do desafio sobre enchentes no Brasil. Infelizmente, eventos como esses vitimam milhares de pessoas que precisam sair às pressas de suas casas e não sabem onde encontrar um lugar seguro para ficar.

A **API Abrigo** atua como uma ponte entre pessoas desabrigadas e os gestores dos abrigos, facilitando a localização de vagas disponíveis em tempo real.

---

## 🎯 Problema Escolhido

**Cenário 1 — Falta de informação sobre abrigos**

Durante uma enchente, pessoas como a Ana saem às pressas e não sabem se há abrigos próximos, se ainda têm vagas ou como chegar até eles. Essa falta de informação atualizada gera deslocamentos desnecessários, cansaço e insegurança em um momento já crítico.

**Quem é impactado:**
- Vítimas de enchente que precisam de um lugar seguro
- Gestores de abrigos que precisam organizar e divulgar informações

**Por que é relevante:**
A falta de comunicação em situações de emergência pode colocar vidas em risco. Uma solução simples e acessível pode fazer a diferença entre uma família encontrar abrigo ou passar a noite na rua.

---

## 💡 Solução Proposta

O sistema possui dois perfis de acesso:

- **Administrador** — gerencia os abrigos, atualiza ocupação e status
- **Usuário** — consulta abrigos disponíveis próximos à sua localização

O diferencial está na **informação atualizada**: o gestor dá baixa em entradas e saídas, e o usuário sempre vê a disponibilidade real de cada abrigo — sem precisar se deslocar até um local lotado.

---

## ⚙️ Estrutura do Sistema

### Back-end
Desenvolvido com **Node.js** e **Express**, seguindo uma arquitetura modular com separação de responsabilidades entre rotas e controllers.

Tecnologias utilizadas:
- Node.js
- Express
- JWT (autenticação)
- Bcrypt (criptografia de senhas)
- Helmet e CORS (segurança)

### Banco de Dados
**SQLite** com `better-sqlite3`. As tabelas são criadas automaticamente pelo `migrations.js` e populadas com dados iniciais pelo `seed.js`.

Tabelas:
- `administrador` — gestores dos abrigos
- `usuario` — pessoas desabrigadas
- `abrigo` — informações e disponibilidade dos abrigos
- `admin_abrigo` — relacionamento entre admins e abrigos

---

## 🚀 Como Rodar o Projeto

**1. Clone o repositório**
```bash
git clone
cd api_abrigo
```

---

**2. Instale as dependências**
```bash
npm install
```
---

**3. Configure o arquivo de ambiente**

Copie o `.env.example` e crie o seu `.env`:
```bash
cp .env.example .env
```

Preencha os valores:

```
JWT_SECRET=sua_chave_secreta_aqui
PORT=3000
NODE_ENV=development
```
---

**4. Rode o servidor**
```bash
npm run dev
```

O servidor irá:
- Criar o banco de dados automaticamente
- Criar as tabelas
- Popular com dados iniciais (seed)

---

**5. Dados iniciais para teste**

Um admin e um abrigo são criados automaticamente pelo seed:

| Campo | Valor |
|-------|-------|
| CPF | 000.000.000-00 |
| Senha | admin123 |

Use esses dados para fazer login em `POST /api/auth` e obter o token JWT.

---

## 📋 Rotas da API

### Auth
| Método | Rota | Descrição | Autenticação |
|--------|------|-----------|--------------|
| POST | /api/auth | Login do administrador | ❌ |

---

### Abrigos
| Método | Rota | Descrição | Autenticação |
|--------|------|-----------|--------------|
| GET | /api/abrigo | Listar abrigos disponíveis | ❌ |
| POST | /api/abrigo | Cadastrar abrigo | ✅ |
| PATCH | /api/abrigo/:id | Atualizar abrigo | ✅ |
| DELETE | /api/abrigo/:id | Deletar abrigo | ✅ |

---

### Admin
| Método | Rota | Descrição | Autenticação |
|--------|------|-----------|--------------|
| GET | /api/admin | Listar admins | ❌ |
| POST | /api/admin | Cadastrar admin | ✅ |
| PATCH | /api/admin/:id | Atualizar admin | ✅ |
| DELETE | /api/admin/:id | Deletar admin | ✅ |

---

### Usuário
| Método | Rota | Descrição | Autenticação |
|--------|------|-----------|--------------|
| GET | /api/usuario | Listar usuários | ❌ |
| POST | /api/usuario | Cadastrar usuário | ✅ |
| PATCH | /api/usuario/:id | Atualizar usuário | ✅ |
| DELETE | /api/usuario/:id | Deletar usuário | ✅ |

---

## 📚 Sobre o Projeto

Este projeto foi desenvolvido como **Desafio Final** do curso de Backend da **[Vai na Web](https://vainaweb.com.br)** — Empower 5.0.
