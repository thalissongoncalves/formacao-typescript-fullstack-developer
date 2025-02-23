import { BankAccount } from "./BankAccount";

export class PremiumAccount extends BankAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  // Tem um bônus de 5% em todos os depósitos
  premiumDeposit = (value: number): string => {
    const bonus = value * 0.05
    this.deposit(value + bonus)
    return `Depósito Premium de R$${value} feito com sucesso! Bônus de R$${bonus.toFixed(2)} aplicado. Saldo atual: R$${this.getBalance()}`
  }
}