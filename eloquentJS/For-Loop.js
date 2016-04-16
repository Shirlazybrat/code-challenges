// **Use a "For-Loop" that increments the amount of characters in a string**


// Have your "For-Loop's" counter be a letter.  Add the same letter character until you have 5 letters on your final string.  Analyze the example case below:

// Example:

// Your loop should concatenate(add) an "L" to your string each pass

// "L"
// "LL"
// "LLL"
// "LLLL"
// "LLLLL"

for(var i = "L"; i.length <= 5; i+="L"){
	console.log(i);
}


//**Create a For-Loop that increments by 3.**
//Have your loop increment up to 15.  In your code block within your loop `console.log` your counter variable.  The final result should output:

// 0
// 3
// 6
// 9
// 12
// 15

// START FOR-LOOP HERE

for(var i = 0; i <= 15; i+=3 ){
	console.log(i);
}