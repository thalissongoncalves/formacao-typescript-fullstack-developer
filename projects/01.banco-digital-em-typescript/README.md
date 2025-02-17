# 💼 Banco Digital em TypeScript

Este projeto é um sistema bancário simples desenvolvido em **TypeScript**. Ele permite criar e gerenciar diferentes tipos de contas bancárias, possibilitando operações como depósito, saque, transferência e rendimento.

## ✨ Funcionalidades

- Criar diferentes tipos de contas bancárias:
  - **Conta Poupança (SavingsAccount)**: Aplica rendimento mensal ao saldo.
  - **Conta Empresarial (BusinessAccount)**: Permite solicitar empréstimos.
  - **Conta Premium (PremiumAccount)**: Concede bônus de 5% em depósitos.
- Realizar operações bancárias:
  - **Depósito**
  - **Saque**
  - **Transferência entre contas**
  - **Aplicação de rendimento na Conta Poupança**
  - **Solicitação de empréstimos na Conta Empresarial**
- Garantir que apenas contas ativas possam realizar operações.

## 📚 Tecnologias Utilizadas

- **TypeScript**
- **Node.js**

## 🔢 Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/banco-digital-ts.git
```

### 2. Acesse a pasta do projeto

```bash
cd banco-digital-ts
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm start
```

## 🛠️ Estrutura do Projeto

```
/
|-- src/
|   |-- class/
|   |   |-- BankAccount.ts  # Classe base para todas as contas
|   |   |-- SavingsAccount.ts  # Conta Poupança
|   |   |-- BusinessAccount.ts  # Conta Empresarial
|   |   |-- PremiumAccount.ts  # Conta Premium
|   |-- app.ts  # Arquivo principal para testes
|
|-- README.md  # Documentação do projeto
|-- package.json  # Configuração do projeto
|-- tsconfig.json  # Configuração do TypeScript
```

---

Desenvolvido por [**Thálisson Gonçalves**](https://github.com/thalissongoncalves). 🌟

