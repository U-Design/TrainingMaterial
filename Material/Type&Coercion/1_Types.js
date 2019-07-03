/*
 * If you want to find out the type of a JavaScript entity you can use the typeof operator.
 * Let’s try with a string:
 */


typeof "alex";
// "string"

typeof 9;
// "number"

typeof false;
// "boolean"

typeof undefined;
// "undefined"

typeof null;
// "object"

/*
 * which gives us a suprising result! null looks like an object but in reality
 * it is an historic bug in  JavaScript, lying there since the language was born.
 */