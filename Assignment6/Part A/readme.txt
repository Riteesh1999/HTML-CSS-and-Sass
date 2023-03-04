
Explanation of the code:

1. On page 1, the user is presented with a login form that requires an email, user name, and password. 
   The form is validated using jQuery, including email validation to only allow Northeastern email addresses. 
   If any validation errors occur, an error message is displayed, and the form is not submitted. 
   If all validations pass, the user is redirected to page 2 with the username included in the URL.

2. On page 2, the user's username is displayed, and there are two input fields for the user to enter two numbers. 
   The four calculator operation buttons are also displayed, which are set to trigger the `calculate()` function when clicked. 
   The input fields are validated using jQuery, ensuring that they only contain valid numbers. If any validation errors occur, 
   an error message is displayed, and the calculation function is not executed. If the inputs are valid, the appropriate calculation 
   is performed using an arrow function, and the result is displayed in a non-editable field.

3. The code is written using jQuery and arrow functions, as requested. The `$.isNumeric()` function is used to validate 
   the number inputs, and the switch statement is used to determine the appropriate calculation to perform.
