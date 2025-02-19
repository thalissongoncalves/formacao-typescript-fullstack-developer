export class BankAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  // Adiciona saldo à conta
  deposit = (value: number): string => {
    this.balance += value
    return `Depósito feito com sucesso!`
  }

  // Retira saldo se houver fundos suficientes
  withdraw = (value: number): string => {
    if (value <= this.balance) {
      this.balance -= value
    } else {
      return `Seu saldo é insuficiente: R$${this.balance}.`
    }
    return `Saque feito com sucesso!`
  }

  // Transfere dinheiro para outra conta
  transfer = (value: number, targetAccount: BankAccount) => {
    targetAccount.balance += value
  }

  // Retorna o saldo
  getBalance = () => {
    return this.balance
  }

  // Verifica se a conta está ativa
  validateStatus = () => {
    if (!this.status) {
      throw new Error("Conta inválida");
    }
    
    return true
  }
}