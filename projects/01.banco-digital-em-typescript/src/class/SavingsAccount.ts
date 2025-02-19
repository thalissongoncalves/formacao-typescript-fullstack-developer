import { BankAccount } from "./BankAccount";

export class SavingsAccount extends BankAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  // Deposita um rendimento de 0.5%, vai ser utilizando para rendimento de 0.5% ao mês
  applyInterest = () => {
    this.deposit(this.getBalance() * 0.005)
  }
}