console.log(`1.To Find greatest number`);
var greaterNumber = function(num1,num2){
var result = num1>= num2 ? `${num1} is greater` :`${num2} is greater`;
console.log(result);
}
greaterNumber(10,-10);  
greaterNumber(800,899);
 console.log(`--------------------------------------`);


console.log(`2.To Find Even Odd number`);
var EvenOrOddNum = function(num){
    var result = num%2==0 ? true:false;
    return result;
}
var result = EvenOrOddNum(29);
var res = (result == true ) ? `29 is Even number`: `29 is odd number`;
console.log(`${res}`);
EvenOrOddNum(44);
var result = EvenOrOddNum(44);
var a = (result == true ) ? `44 is Even number`: `44 is odd number`;
console.log(`${a}`);
EvenOrOddNum(0);
var result = EvenOrOddNum(0);
var a = (result == true ) ? `0 is Even number`: `0 is odd number`;
console.log(`${a}`);
EvenOrOddNum(101);
var result = EvenOrOddNum(101);
var a = (result == true ) ? `101 is Even number`: `101 is odd number`;
console.log(`${a}`);

console.log(`--------------------------------------`);
console.log(`3.To find Even or Odd Word length`);
var wordLength = function(string){
    var abc = string.length;
    var result = abc%2==0 ? "EVEN" : "ODD" ;
    return result;
}

var a = wordLength("JavaScript");
console.log(`Javascript has ${a}`);
var b =  wordLength("developer");
console.log(`Developer has ${b}`);
var c = wordLength("Google");
console.log(`Google has ${c}`);

