class Animal {
  name: String
  constructor(name) {
    this.name = name
  }

  run() {
    console.log(`${this.name} is running`)
  }
}

class Sheep extends Animal {
  constructor(name) {
    super(name)
  }

  run() {
    console.log(`here is a sheep, named ${this.name}`)
    super.run()
  }
}

const sheep = new Sheep('doly')
sheep.run()