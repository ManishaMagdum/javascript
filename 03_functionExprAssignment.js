console.log(`1.Function Expression to get a Sqaure`);
var multiplication = function (one, two) {
    var result = one*two;
    return `Square of given number is: ${result}`;

}
var result = multiplication(5,5);
var square = multiplication(6,6);
var num =multiplication(25,25);
var data =multiplication(100,100);
console.log(result);
console.log(square);
console.log(num);
console.log(data);

console.log(`2.Check Type of variable`);
var type = typeof multiplication;
console.log(`Type of variable is ${type}`);

console.log(`3.Area of rectangle`);
var multiplication = function (one, two) {
    var area = one*two;
    return `Area of given rectangle is: ${area}`;
}
var plot = multiplication(499,917);
console.log(plot);

console.log(`4.Function Expression two args and should swap the passed values`)
 var a = "Anushka";
 var b = "Virat";
 console.log(`Before swap: ${a},${b}`);
 var temp = "Anushka";
 a = b;
 b = temp;
 console.log(`After Swap: ${a},${b}`);
var c = 1000;
var d = 2000;
console.log(`Before swap: ${c},${d}`);
var temp = 1000;
c = d;
d = temp;
console.log(`After swap : ${c},${d}`);

console.log(`5.Perform below steps for string "JS the most popular language of intenet"`);
var given = "JS the most popular language of internet";
var result = given.length;
console.log(`Total number of characters: ${result}`);
var char = given.charAt(6);
console.log(`Character at index 6 is :${char}`);
var a= given.charAt(11);
console.log(`Character at index 11 is :${a}`);
var last = given.charAt(given.length-1);
console.log(`Last character using length property: ${last}`);
var first = given.charAt(0);
console.log(`First Character of strig: ${first}`);
var resultSplit = given.split(" ");
console.log(resultSplit);
console.log("Total number of words: ",resultSplit.length);

var multiplication = function (one, two) {
    var js = one*two;
    return `Square of total number of word  is: ${js}`;
}
var totalNumberWords = multiplication(7,7);
console.log(totalNumberWords);
