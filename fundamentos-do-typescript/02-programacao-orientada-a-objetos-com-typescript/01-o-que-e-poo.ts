export {}

class User {
  name: string = 'Nath'
  age: number = 32

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  showName = () => {
    console.log(this.name)
  }
}

const user = new User('Thalisson', 22)
user.showName()

const otherUser = new User('Shaiane', 21)
otherUser.showName()