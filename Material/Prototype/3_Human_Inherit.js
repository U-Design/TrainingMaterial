function Human() {
    this.kingdom = "Animal";
    this.legs = "2";
    this.hands = "2";
    this.brain = "works";
    this.job = "Do not know yet";
    this.name = "Anonymous";
}

function SoftwareEngineer(name) {
    this.company = "Nokia"
    this.job = "Depend on Google Search, Stackoverflow and code sometimes"
    this.name = name;
}

SoftwareEngineer.prototype = new Human(); // extends Human

let foo = new SoftwareEngineer("foo");

console.log(foo.kingdom);


/* Using Object.create */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create


function Journalist(name) {
    this.company = "Rep TV"
    this.job = "Shout too much on tv Debates"
    this.name = name;
}

Journalist.prototype = Object.create(Human);

let arb = new Journalist('arb');
console.log(arb);