function ncalc(expr) {
	if (typeof expr !== 'string') {
		console.error(`Argument error: ${expr} is not a string`);
		return;
	}
	if (expr.length === 0) {
		console.error('Argument error: empty expression');
		return;
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
		return;
	}
	expr = expr.replace(/[(,)]/g, ' ');
	console.log(expr);
	for (let i = 1; i < expr.length; i++) {
		if (isOperation(expr[i])) {
			expr = expr.slice(0, i-1) + ' ' + expr[i] + ' ' + expr.slice(i+1 - expr.length);
		}
	}
	console.log(expr);
	expr = expr.replace(/ +/g, ' ').trim().split(' ').reverse();
	console.log(expr);
	let stack = [];
	let flag = false;

	for (let i = 0; i < expr.length; i++) {
		if (isNaN(expr[i]) == false && isFinite(expr[i])) {
			stack.push(parseFloat(expr[i]));
		} else if (!(isOperation(expr[i]))) {
			console.error(`Met not a number (${expr[i]})`);
			flag = true;
			break;
		}

		if (isOperation(expr[i])) {
			switch (expr[i]) {
				case '+':
					op1 = stack.pop();
					op2 = stack.pop();
					if (isNaN(op2)) {
						console.error('Malo arg');
						flag = true;
						break;
					}
					stack.push(op1 + op2);
					break;
				case '-':
					op1 = stack.pop();
					op2 = stack.pop();
					if (isNaN(op2)) {
						console.error('Malo arg');
						flag = true;
						break;
					}
					stack.push(op1 - op2);
					break;
				case '*':
					op1 = stack.pop();
					op2 = stack.pop();
					if (isNaN(op2)) {
						console.error('Malo arg');
						flag = true;
						break;
					}
					stack.push(op1 * op2);
					break;
				case '/':
					op1 = stack.pop();
					op2 = stack.pop();
					if (isNaN(op2)) {
						console.error('Malo arg');
						flag = true;
						break;
					}
					stack.push(op1 / op2);
					break;
			}
		}	
		if (flag)
			break;
	}

	if (flag) {
		console.error('Something wrong');
		return;
	}
	
	if (stack.length != 1) {
		console.error('Too much arg');
		return;
	}
	return stack.pop();

	function isOperation(c) {
		return ['+', '-', '*', '/'].includes(c);
	}

}