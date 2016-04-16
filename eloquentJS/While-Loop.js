// **Use a "While-Loop" that increments the amount of characters in a string**

// Have your "While-Loops's" counter be a letter.  Add the same letter character until you have 5 letters on your final string.  Analyze the example case below:

// Example:

// Your loop should concatenate(add) an "L" to your string each pass

// "L"
// "LL"
// "LLL"
// "LLLL"
// "LLLLL"

var L = "L";
while(L.length <= 5){
	console.log(L);
	L += "L";
}


//**Create a While-Loop that increments by 3.**
//Have your loop increment up to 15.  In your code block within your loop `console.log` your counter variable.  The final result should output: 
// TIP: All the output text should be white, do not worry if you get green text, such as the number 18.

// 0
// 3
// 6
// 9
// 12
// 15

// START WHILE-LOOP HERE

var count = 0;
while(count <= 15){
	console.log(count);
	count += 3;
}