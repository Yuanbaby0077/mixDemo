class Person {
  constructor(public name: string, public age: number) {
    this.name = name
    this.age = age
  }

  get _name(): string {
    console.log(this.name)
    return this.name
  }
}

const p = new Person('ss', 23)
p._name

