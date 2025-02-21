import { BankAccount } from "./BankAccount";

export class PremiumAccount extends BankAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  // Tem um bônus de 5% em todos os depósitos
  premiumDeposit = (value: number):string => {
    this.deposit((value * 0.05) + value)
    return `Depósito Premium feito com sucesso, seu saldo é: R$${this.getBalance()}`
  }
}