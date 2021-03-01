class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  run() {
    console.log(`${this.name} is running`)
  }
}

class Sheep extends Animal {
  constructor(name: string) {
    super(name)
  }

  run() {
    console.log(`here is a sheep, named ${this.name}`)
    super.run()
  }
}

const sheep = new Sheep('doly')
sheep.run()