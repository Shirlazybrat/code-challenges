/* 

Repeat A String

Fullstack Academy - JavaScript JumpStart

- Description

Create a function "repeat" that accepts two arguments, the string to repeat and the a number that represtents how many times to repeat the string argument.  Return a string that concatenates all the times the string is repeated.

*NOTE: Do NOT use the [String.prototype.repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)*

**Examples**

- INPUT: `repeat("yo",4);`
- OUTPUT: `'yoyoyoyo'`

- INPUT: `repeat("yo",0);`
- OUTPUT: `''`

- INPUT: `repeat("bye",6);`
- OUTPUT: `'byebyebyebyebyebye'`

Write Code Below
*/

var repeat = function(word, times){
	
	console.log(word) * times;
	
}

repeat("yo",4);



































/* ****Test Cases**** */

// console.log(repeat('yo', 4));
// logs -> 'yoyoyoyo'

// console.log(repeat('yo', 0));
// logs -> '""', an empty string.

// console.log(repeat("bye", 6));
// logs -> "byebyebyebyebyebye"

