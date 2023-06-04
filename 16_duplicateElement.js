 console.log(`=======================Duplicate element removing==========================`)
 let arrayNum = [11, 3, 4, 11, 4, 7, 3]
 console.log(`Given array is :${arrayNum}`);

 let array =[];
for (let i = 0; i <arrayNum.length; i++) 
{
   
    for (let j = i+1;j <arrayNum.length;j++) {
      if(arrayNum[i]==arrayNum[j]){
        var result =arrayNum[j]
      arrayNum.splice(j,1)
      array.push(result)
           
        }
       
    }
     
}
console.log(`After removing duplicate element array  is :${arrayNum}`);
console.log(`Duplicate elements are:${array}`);
console.log(`=======================Make last letter of word uppercase==========================`)
function capitalizeFirstAndLastLetters(str) {
  var words = str.split(' ');
  var capitalizedWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    if (word.length > 1) {
      var firstLetter = word[0].toUpperCase();
      var lastLetter = word[word.length - 1].toUpperCase();
      var middlePart = word.slice(1, word.length - 1);

      var capitalizedWord = firstLetter + middlePart + lastLetter;
      capitalizedWords.push(capitalizedWord);
    } else {
      capitalizedWords.push(word.toUpperCase());
    }
  }

  return capitalizedWords.join(' ');
}

console.log(`Given String is:How are you mate`);
var output = capitalizeFirstAndLastLetters("How are you mate");
console.log(output);  // Output: "HellO WorlD"
