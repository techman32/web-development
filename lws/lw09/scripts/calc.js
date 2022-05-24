function calc(expr) {
	if (typeof expr !== 'string') {
		console.error(`Argument error: ${expr} is not a string`);
		return NaN;
	}
	if (expr.length === 0) {
		console.error('Argument error: empty expression');
		return NaN;
	}

	let count = 0;
	for (let i = 0; i < expr.length; i++) {
		if (expr[i] == '(')
			count++;	
		if (expr[i] == ')')
			count--;	
	}
	if (count != 0) {
		console.error(`Argument error: '(' or ')'`);
		return NaN;
	}
	expr = expr.replace(/[(,)]/g, ' ');
	console.log(expr);
	expr = expr.replace(/ +/g, ' ').trim().split(' ').reverse();
	console.log(expr);

	let stack = [];

	expr.forEach(element => {
			
			if (isNaN(element) == false && isFinite(element)) {
				stack.push(parseFloat(element));
			} else if (!(isOperation(element))) {
				console.error(`Met not a number (${element})`);
			}

			if (isOperation(element)) {
				switch (element) {
					case '+':
						op1 = stack.pop();
						op2 = stack.pop();
						stack.push(op1 + op2);
						break;
					case '-':
						op1 = stack.pop();
						op2 = stack.pop();
						stack.push(op1 - op2);
						break;
					case '*':
						op1 = stack.pop();
						op2 = stack.pop();
						stack.push(op1 * op2);
						break;
					case '/':
						op1 = stack.pop();
						op2 = stack.pop();
						stack.push(op1 / op2);
						break;
				}
			}
			console.log(stack);	
		}
	);
	if (stack.length != 1) {
		console.error('Something wrong');
		return;
	}
	return stack.pop();

	function isOperation(c) {
		return ['+', '-', '*', '/'].includes(c);
	}

}