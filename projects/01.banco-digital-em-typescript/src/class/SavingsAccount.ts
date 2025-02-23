import { BankAccount } from "./BankAccount";

export class SavingsAccount extends BankAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  // Deposita um rendimento de 0.5%, vai ser utilizando para rendimento de 0.5% ao mês
  applyInterest = (): string => {
    if (this.validateStatus()) {
      const interest = this.getBalance() * 0.005
      this.deposit(interest)
      return `Rendimento de R$${interest.toFixed(2)} aplicado com sucesso!`
    } else {
      return `Rendimento não aplicado.`
    }
  }
}