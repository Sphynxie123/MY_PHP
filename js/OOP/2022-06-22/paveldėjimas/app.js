class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  // perrašoma class Animal
  class Rabbit extends Animal {   
        constructor(name) {
          // super - leidžia naudoti parents(Animal) savybes. Parents konstruktoriaus iskvietimas - super
          super(name);
            this.created = Date.now();
        }
    }
  
let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined

console.log(rabbit);