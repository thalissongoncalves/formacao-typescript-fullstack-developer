import { BankAccount } from "./BankAccount";

export class BusinessAccount extends BankAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  // Empréstimos que valida se a conta está ativa e é adicionado ao saldo
  getLoan = (value: number):string => {
    if (this.validateStatus()) {
      this.deposit(value)
      return `Empréstimo feito com sucesso, seu saldo é: R$${this.getBalance()}`
    } else {
      throw new Error("Conta inválida.")
    }
  }
}