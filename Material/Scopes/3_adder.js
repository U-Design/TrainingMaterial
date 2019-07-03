
function makeAdder(n) {
    let inc = n;
    return function add(sum) {
        sum = sum + inc;
        return sum;
    };
}

let adder2 = makeAdder(2);
let adder3 = makeAdder(3);

console.log(adder2(5)) // 7
console.log(adder2(5))
console.log(adder2(5))
adder3(5) // 8

