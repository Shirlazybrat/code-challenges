/*

Max Of Three

Fullstack Academy - JavaScript JumpStart


- Description

Create the function `maxOfThree` that evaluates three numbers and returns the largest number out of the three.

The function takes three number arguments and returns the highest number out of three.

**Examples*

- INPUT: `maxOfThree(5,4,10);`
- OUTPUT: `10`

- INPUT: `maxOfThree(7,7,4);`
- OUTPUT: `7`

Write Code Below
*/

var maxOfThree = function(num1, num2, num3){
	if(num1 >= num2 && num1 >= num3){
		return num1;
	}
	else if(num2 >= num1 && num2 >= num3){
		return num2;
	}
	else if(num3 >= num1 && num3 >= num2){
		return num3;
	}
	else{
		return "The max could not be determined."
	}
}

maxOfThree(23,16,23);































































/* *** Test Cases *** */

// console.log(maxOfThree(7,7,4))
// logs 7 to the console


// console.log(maxOfThree(5,4,10))
// logs 10 to the console
