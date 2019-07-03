const user = {
    name: "John"
};

user.age = 25; // (*)

alert(user.age); // 25


const user = {
    name: "John"
};
// Error (can't reassign user)
user = {
    name: "Pete"
};