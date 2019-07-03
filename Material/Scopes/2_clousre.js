var a = 2;
var b = 1;

function foo(z) {
	var d = 6;
	var e = 1;

	function bar() {
		var e = 0;
		d = 3 * d;
		b++;
		return d;
	}

	return bar;
}
var baz = foo(1);
var ret = baz();






