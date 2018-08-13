var fibonacci = function() {
	var memo = {};

	function fib(n) {
		var value;

		if (n in memo) {
			value = memo[n];
		} else {
			if (n===0 || n===1)
				value = n;
			else
				value = fib(n-1) + fib(n-2);

			memo[n] = value;
		}
		return value;
	}

	return fib;
} ();

console.log(fibonacci(7));
