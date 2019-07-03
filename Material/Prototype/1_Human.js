function Human(firstName, lastName) { // Object Constructor

    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    }

}
let person1 = new Human("Sachin", "Tendulkar");


console.log(person1)

let person2 = new Human("Virat", "Kohli");

console.log(person2);


Human.prototype["bat brand"] = "Mrf";

console.log(person1["bat brand"]);
console.log(person2["bat brand"]);

person2["bat brand"] = "Mrf Master";
console.log(person2["bat brand"]);