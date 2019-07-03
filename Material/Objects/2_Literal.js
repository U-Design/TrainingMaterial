let user = {     // an object
	name: "John",  // by key "name" store value "John"
	age: 30        // by key "age" store value 30
};


// get fields of the object:
console.log(user.name); // John
console.log(user.age); // 30



user.isAdmin = true;
delete user.age;

