console.log("---------Assignment 1-------");
var dream = "Software Developer";
console.log("My dream is :",dream);
var hobby = "Travelling, Codding, Painting";
console.log("My hobbies are:",hobby);
var hobbylength = hobby.length;
console.log("Total Number of characters:",hobbylength);

console.log("-------Assignment 2------");
console.log("No.1");
function stringHandsOn(){
    console.log("String Hands On");
}
var data = "  Hey you are doing good, keep it up    ";
console.log("Given string as it is:",data);
var datalength = data.length;
console.log("No.2");
console.log("Total length of Charachters:",datalength);

var trimmedData = data.trim();
var lengthAfterTrim = trimmedData.length;
console.log("No.3");
console.log("After Trim Lenght:",lengthAfterTrim);
console.log("No.4");
console.log("Total Trimmed spaces:",datalength-lengthAfterTrim);

var charAtIndexZero = trimmedData.charAt(0);
var charAtIndexThirtyThree= trimmedData.charAt(33);
console.log("No.5");

console.log("First And Last after removing Spaces Charachter:",charAtIndexZero,charAtIndexThirtyThree);
console.log(`No.6`)
var resultTrimmedData = trimmedData.split(" ");
console.log(resultTrimmedData);
var lenghtResultTrimmedData = resultTrimmedData.length;
console.log(`Total Number of Words are ${lenghtResultTrimmedData}`);

console.log(`No.7`);

var index = data.lastIndexOf("good");
console.log(`Index of ${index} is`);

console.log(`No.8`);
var subStringResult = trimmedData.substring(22);
console.log(`Substring starting from index 22,using substring method ${subStringResult}`);

var sliceResult = trimmedData.slice(22);
console.log(`Substring starting from index 22,using slice method ${sliceResult}`);

console.log(`No.9`);
var endsResult = trimmedData.endsWith("up");
console.log(`Is string ends with "up" word ${endsResult}`);

console.log(`No. 10`);
var startResult = trimmedData.startsWith("Hey");
console.log(`Is string starts with "Hey" ${startResult}`);

