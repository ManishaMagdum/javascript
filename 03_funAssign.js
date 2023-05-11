console.log("Function Display without argument")
function firstFunction() {
    console.log("First Function without argument and no return type");

}
firstFunction();
function secondFunction() {
    console.log("Second Function without argument and no return type");

}
secondFunction();

console.log("------Function personDetails------");
var firstName = "Manisha";
var lastName = "Magdum";
var collegeName = "SGM College";
function personalDetails(firstName,c) {
    console.log("First Name:",firstName);
    console.log("Last Name:",lastName);
   console.log("College Name:",collegeName);
}
personalDetails(firstName,lastName,collegeName);

console.log("-------Swap Values------");
var a = "virat";
var b = "Anushka";
var A = 1000;
var B = 2000;
function swapValuesDude(a,b){
    console.log("Before Swap:","a:",a,"b:",b);
var temp = a;
a = b;
b = temp;
console.log("After Swap:","a:",a,"b:",b);
}
swapValuesDude(a,b);
swapValuesDude(A,B);

console.log("---------Add Function-------");
var a = 10.23;
var b = 600;
var c = 40;
var A = "Hello";
var B = "Good";
var C = "Morning";

function addThreeValues(a,b,c){
    console.log(a,b,c);
    var d = a+b+c;
    console.log("d:",d);
}
addThreeValues(a,b,c);
addThreeValues(A,B,C);
