//Project Euler

/*Multiples of 3 and 5
Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 100 */

function multiples(){
	
	sum = 0;
	for(var i = 0; i < 100; i++){
		if(i % 3 === 0){
			console.log(i);
			sum += i;
		}
		
		else if( i%5 ===0){
			console.log(i);
			sum += i;
		}
		
	}	
		return sum;
}
multiples();