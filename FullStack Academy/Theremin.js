/*

Do You Play The Theremin?

- Fullstack Academy - JavaScript JumpStart

Description:

Create the function doYouPlayTheTheremin. If your name starts with the letter "S" or "s", you are playing the Theremin!



Examples

- INPUT: doYouPlayTheTheremin("Griffin")
- OUTPUT: "Griffin does not play the Theremin!";


- INPUT: doYouPlayTheTheremin("Scott");
- OUTPUT: "Scott plays the Theremin!";


Write Code Below!
*/
function doYouPlayTheTheremin(name) {
  
  
	if(name[0] =="S"){
		return(name + " does play the Theremin!");
	}
	else{
		return(name + " does not play the Theremin!")
	}
}
console.log(name.toUpperCase());
doYouPlayTheTheremin("sam");



















// **** Test Cases ****

// console.log(doYouPlayTheTheremin('Griffin'));
// console.log(doYouPlayTheTheremin('Scott'));