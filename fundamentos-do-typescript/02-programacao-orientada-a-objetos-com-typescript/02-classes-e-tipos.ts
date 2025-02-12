class Account {
  name: string
  accountNumber: number

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  deposit = () => {
    console.log("Você depositou")
  }

  withdraw = () => {
    console.log("Você sacou")
  }
}

const account: Account = new Account('Thalisson', 10)
console.log(account)

const newAccount: Account = new Account('Shaiane', 100)
newAccount.deposit()