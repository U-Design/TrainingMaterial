/* Weak Comparison */

1 == 1;         // true
"1" == 1;         // true
1 == "1";        // true
0 == false;      // true
0 == null;       // false


var object1 = { "key": "value" }, object2 = { "key": "value" }; // Ref

object1 == object2; //false
0 == undefined;  // false
null == undefined;  // true




/* strict comparison */

3 === 3;   // true
3 === "3"; // false

var object_1 = { "key": "value" }, object_2 = { "key": "value" }; // Ref

object_1 === object_2; //false