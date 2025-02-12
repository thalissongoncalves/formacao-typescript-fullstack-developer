import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"
export {}

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Thalisson', 25)
peopleAccount.deposit()

const companyAccount: CompanyAccount = new CompanyAccount('Shaiane', 15)
console.log(companyAccount.deposit())