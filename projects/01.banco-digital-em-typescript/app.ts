import { BusinessAccount } from "./src/class/BusinessAccount";
import { PremiumAccount } from "./src/class/PremiumAccount";
import { SavingsAccount } from "./src/class/SavingsAccount";

// Instâncias
const businessAccount = new BusinessAccount("Thalisson", 100)
const premiumAccount = new PremiumAccount("Shaiane", 200)
const savingsAccount = new SavingsAccount("Claudilene", 300)

// Depósitos
businessAccount.deposit(50)
premiumAccount.deposit(100)
savingsAccount.deposit(150)

// Saques
businessAccount.withdraw(25)
premiumAccount.withdraw(50)
savingsAccount.withdraw(75)

// Transferências
businessAccount.transfer(5, premiumAccount)
premiumAccount.transfer(5, savingsAccount)
savingsAccount.transfer(5, businessAccount)
