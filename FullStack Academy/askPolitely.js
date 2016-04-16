/*

Ask Politely



- Fullstack Academy - JavaScript JumpStart

- Description

Create the function askPolitely that accepts a sentence 
as an argument. If the last character of the sentence is 
a question mark, then make sure the question ends with 
the word "please".

If the sentence is not a question, then return the 
inputted string without modification. If the sentence 
is a question, but already has a please, then also
return the input without modification.

**Examples**

askPolitely("May I borrow your pencil?");
// returns "May I borrow your pencil please?"

askPolitely("May I ask a question please?");
// returns "May I ask a question please?"

askPolitely("My name is Grace Hopper.");
// returns "My name is Grace Hopper."

Write Code Below
*/
var askPolitely = function(sentence){
	if(sentence.search("please") != -1){
		return sentence;
	}
	else if(sentence.search("please?") === -1){
		return sentence + " please?";
	}
	else if (sentence.search("?") === -1) {
		return sentence;
	}
}
askPolitely("My name is Grace Hopper.");
askPolitely("May I borrow your pencil?");





































/* TEST CASES */

// console.log(askPolitely("May I borrow your pencil?"));
// should return "May I borrow your pencil please?"

// console.log(askPolitely("May I ask a question please?"));
// should return "May I ask a question please?"

// console.log(askPolitely("My name is Grace Hopper."));
// should return "My name is Grace Hopper."
