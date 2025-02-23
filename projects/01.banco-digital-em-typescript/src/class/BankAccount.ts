export abstract class BankAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  // Adiciona saldo à conta
  deposit = (value: number): boolean => {
    this.balance += value
    return true
  }

  // Retira saldo se houver fundos suficientes
  withdraw = (value: number): string => {
    if (value <= this.balance) {
      this.balance -= value
      return `Saque de R$${value} feito com sucesso! Seu novo saldo é: R$${this.balance}`
    } else {
      return `Seu saldo é insuficiente: R$${this.balance}.`
    }
  }

  // Transfere dinheiro para outra conta
  transfer = (value: number, targetAccount: BankAccount): string => {
    if (value > this.balance) {
      return `Seu saldo é insuficiente para a transferência. Saldo atual: R$${this.balance}`
    }

    targetAccount.deposit(value)
    this.balance -= value
    return `Transferência de R$${value} para a conta ${targetAccount} realizada com sucesso!`
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