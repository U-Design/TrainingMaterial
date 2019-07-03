var a = 2;
b = 1;

function foo(z) {
	b = 3;
	c = 4;
	var d = 6;
	e = 1;

	function bar() {
		var e = 0;
		d = 3 * d;
		return d;
	}

	bar()
	bar()
	var e;
}
foo(1);


