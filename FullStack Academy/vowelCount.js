/* 

Vowel Count

Fullstack Academy - JavaScript JumpStart

- Description:

Create the function "vowelCount(str)" that takes a str parameter and returns the number of vowels 
the string contains (ie. "Fullstack Academy" would return 5).  

**Do not count 'y' as a vowel for this challenge.**

**Example**

- INPUT: `vowelCount("Good Job");`
- Return Value: `3`

*** Write the vowelCount Function below *** */

var vowelCount = function(str){
	if(str.indexOf("a")) {
		console.log(str.indexOf("a"));
	}
	else if (str.indexOf("e")) {
		console.log(str.indexOf("e"));
	}
	else if(str.indexOf("i")) {
		console.log(str.indexOf("i"));
	}
	else if(str.indexOf("o")) {
		console.log(str.indexOf("o"));
	}
	else if(str.indexOf("u")) {
		console.log(str.indexOf("u"));
	}
	else{
		return "No Vowels found."
	}
	
}

vowelCount("Fullstack Academy");















































































/* Test Cases */ 

// console.log(vowelCount('Good Job'));
// logs => 3

// console.log(vowelCount(Yankees));
// logs => 3


