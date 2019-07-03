let user = {
	name: "John"
};

function change1(input) {

	input["empId"] = 4;
	input.role = "cashier";

}

function change2(input) {

	input = {
		"empId": 5
	};
	input.role = "cashier";

}

console.log("original user", user);

change1(user);

console.log("user after chnage1", user);

change2(user);

console.log("user after chnage2", user);
