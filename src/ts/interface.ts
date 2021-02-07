interface UserInfo {
  name: string,
  age: number,
  hobby?: Array<any>,
  readonly cardId: number
}

function getUser(user: UserInfo) {
  return `${user.name} is ${user.age} years old, and cardId is ${user.cardId}`
}

const user: UserInfo = {
  name: 'zs',
  age: 30,
  cardId: 350128
}
// user.cardId = 444444 // Cannot assign to 'cardId' because it is a read-only property.
console.log(getUser(user))