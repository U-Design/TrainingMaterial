function mutilply(a, b) {
    return a * b;
}
function square(n) {
    return mutilply(n, n)
}
function printSquare(n) {
    let squared = square(n);
    console.log(squared);
}
printSquare(4);

