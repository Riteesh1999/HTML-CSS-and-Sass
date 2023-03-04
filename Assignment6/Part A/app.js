$(document).ready(function() {

	// Page 1 form validation and submission
	$('#loginForm').submit(function(event) {
		event.preventDefault();
		$('#error').empty();
		var email = $('#email').val();
		var username = $('#username').val();
		var password = $('#password').val();
		var emailRegex = /@northeastern\.edu$/;
		if (!emailRegex.test(email)) {
			$('#error').text('Please enter a Northeastern email address.');
			return;
		}
		if (password.length < 8) {
			$('#error').text('Password must be at least 8 characters long.');
			return;
		}
		if (!/^[a-zA-Z0-9_]+$/.test(username)) {
			$('#error').text('User name can only contain letters, numbers, and underscores.');
			return;
		}
		// all validations passed, redirect to page 2
		window.location.href = 'page2.html?username=' + username;
	});

	// Page 2 form validation and calculation using arrow function
	$('#calculatorForm').submit(function(event) {
		event.preventDefault();
	});
	$('#add').click(() => {
		calculate('add');
	});
	$('#subtract').click(() => {
		calculate('subtract');
	});
	$('#multiply').click(() => {
		calculate('multiply');
	});
	$('#divide').click(() => {
		calculate('divide');
});

function calculate(operation) {
	$('#result').empty();
	$('#error').empty();
	var num1 = $('#num1').val();
	var num2 = $('#num2').val();
	if (!$.isNumeric(num1)) {
		$('#error').text('Number 1 must be a valid number.');
		return;
	}
	if (!$.isNumeric(num2)) {
		$('#error').text('Number 2 must be a valid number.');
		return;
	}
	var result;
	switch (operation) {
		case 'add':
			result = +num1 + +num2;
			break;
		case 'subtract':
			result = num1 - num2;
			break;
		case 'multiply':
			result = num1 * num2;
			break;
		case 'divide':
			if (num2 == 0) {
				$('#error').text('Cannot divide by zero.');
				return;
			}
			result = num1 / num2;
			break;
		default:
			return;
	}
	$('#result').text(result);
}

// Page 2 username display
var params = new URLSearchParams(window.location.search);
var username = params.get('username');
if (username) {
	$('#username').text(username);
}
});
