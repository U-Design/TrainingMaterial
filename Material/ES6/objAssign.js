let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);
// now user = { name: "John", canView: true, canEdit: true }




let user = { name: "John" };
// overwrite name, add isAdmin
Object.assign(user, { name: "Pete", isAdmin: true });
// now user = { name: "Pete", isAdmin: true }




// It copies all properties of user into the empty object and returns it. 
let user = {
    name: "John",
    age: 30
};

let clone = Object.assign({}, user);
