/*

Last Digit

Fullstack Academy - JavaScript JumpStart


- Description

Create the function `lastDigit` that accepts two non-negative integer values and returns `true` if they have the same last digit, such as 27 and 57.

The function accepts two non-negative integer arguments and returns `true` or `false` if they ahve the same last digit.

** Examples**

- INPUT: `lastDigit(22,32);`
- OUTPUT: `true`

- INPUT: `lastDigit(77, 999);`
- OUTPUT: `false`

- INPUT: `lastDigit(33,3);`
- OUTPUT: `true`
*/


var lastDigit = function(num1, num2) {
	num1 = num1.toString();
	num2 = num2.toString();
	
		if(num1.lastIndexOf() === num2.lastIndexOf()){
			return true;
		}
		else {
			return false;
		}
}

lastDigit(23,54);










































































/* TEST CASES 
    uncomment the console.log statements when you want to test your function
*/

// console.log(lastDigit(22,32));
// This should return `true`

// console.log(lastDigit(77, 999));
// This should return 'false'

// console.log(lastDigit(33,3));
// This should return `true`
