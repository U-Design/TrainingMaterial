function School() { }

School.prototype.name = "Vidyapeeth";
School.prototype.className = "Not Decided";

let newSchool = new School();
newSchool.className = "Maths";


console(newSchool.name);  // Vidyapeeth
console(newSchool.className); // Maths