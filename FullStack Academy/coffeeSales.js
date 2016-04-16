/* Fullstack Academy - JavaScript JumpStart

Challenge - Coffee Sales Tax Part 2


Description: Calculate the sales tax of a $5.00 cup of coffee with NY Sales Tax

*/

var coffeeTotal = 5.00;

function totalWithNYSalesTax(){
  
  // calculate the sales tax
  // add the sales tax to the coffeeTotal variable
  // return the final value
  
  var coffeeSalesTax = coffeeTotal * 0.089;
  var coffeeTotalAndTax = coffeeTotal + coffeeSalesTax;
  
  return coffeeTotalAndTax;
}

totalWithNYSalesTax();



// Challenge - Coffee Sales Tax Part 2 - totalWithNJSalesTax
// Write Code Below
function totalWithNJSalesTax() {

var saleTax = coffeeTotal * 0.07;
var totalWithNJSalesTax = saleTax + coffeeTotal;

return totalWithNJSalesTax;
}

totalWithNJSalesTax();


