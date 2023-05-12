console.log("---------Assignment 1-------");
var dream = "Software Developer";
console.log("My dream is :",dream);
var hobby = "Travelling, Codding, Painting";
console.log("My hobbies are:",hobby);
var hobbylength = hobby.length;
console.log("Total Number of characters:",hobbylength);

console.log("-------Assignment 2------");
function stringHandsOn(){
    console.log("String Hands On");
}
var data = "  Hey you are doing good, keep it up    ";
console.log("Given string as it is:",data);
var datalength = data.length;
console.log("Total length of Charachters:",datalength);
var trimmedData = data.trim();
var lengthAfterTrim = trimmedData.length;
console.log("After Trim Lenght:",lengthAfterTrim);
console.log("Total Trimmed spaces:",datalength-lengthAfterTrim);

var charAtIndexZero = trimmedData.charAt(0);
var charAtIndexThirtyThree= trimmedData.charAt(33);

console.log("First And Last after removing Spaces Charachter:",charAtIndexZero,charAtIndexThirtyThree);
