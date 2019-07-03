/*
 * this would give a syntax error
 * user.likes bird = true
 */


let user = {};

// set
user["likes bird"] = true;

// get
console.log(user["likes bird"]); // true

console.log(user);

// delete
delete user["likes bird"];


let key = "likes car";

// same as user["likes birds"] = true;
user[key] = true;

console.log(user);