interface UserInfo {
  name: string,
  age: number,
  hobby?: Array<any>,
  readonly cardId: number,
  sayHello(): void,
  gender: String
}


class User implements UserInfo {
  name: string
  age: number
  hobby?: any[]
  cardId: number
  gender: String

  constructor(name: string, age: number, cardId: number, gender: string) {
    this.name = name
    this.age = age
    this.cardId = cardId
    this.gender = gender
  }

  sayHello() {
    console.log(this.name, this.age, this.gender + 'hello')
  }

  get _name() {
    return this.name
  }

  set _name(name: string) {
    this.name = name
  }
}

const u1 = new User('zs', 18, 222, 'male')

u1._name='ss'
u1.sayHello()