// Initializing a function with a function expression
const x = function () { }
Object.getPrototypeOf(x); // ƒ () { [native code] }




// Initializing a class with a class expression
const y = class { }
Object.getPrototypeOf(y); // ƒ () { [native code] }



const constructorFromFunction = new x();

console.log(constructorFromFunction);
/*  x {}
    constructor: ƒ ()
*/


const constructorFromClass = new y();

console.log(constructorFromClass);

/*  y {}
    constructor: class
*/