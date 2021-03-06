let cleanRoom = function () {
    return new Promise(function (resolve, reject) {
        resolve("I cleaned the room");
    })
}
let removeGarbage = function (msg) {
    return new Promise(function (resolve, reject) {
        resolve(`${msg}, I threw away my trash`);
    })
}
let winIceCream = function (msg) {
    return new Promise(function (resolve, reject) {
        resolve(`${msg}, so I got to eat the ice-cream`);
    })
}


cleanRoom()
    .then(function (result) {
        return removeGarbage(result);  // returns a promise
    })
    .then(function (result) {
        return winIceCream(result); // returns a promise again
    })
    .then(function (result) {
        console.log(`${result}, so no I can sleep.`);
    })