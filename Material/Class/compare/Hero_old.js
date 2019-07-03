function Hero(name, level) {
    this.name = name;
    this.level = level;
}

// Adding a static method to the constructor
Hero.type = function () {
    console.log('func way')
};

// Adding a method to the constructor
Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
}

const hero1 = new Hero('Shaktimaan', 1);
console.log(hero1);