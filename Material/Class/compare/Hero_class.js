class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    // Adding a static method to the constructor
    static type() {
        console.log('Class way')
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}

const hero1 = new Hero('Superman', 1);
console.log(hero1);