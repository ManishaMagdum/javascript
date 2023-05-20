var string = "I am very good IT Developer";
    var count = 0;
    for (let index = 0; index < string.length; index++) {
     var word = string[index].toLowerCase();
    
      if (word == 'a' ||word =='e' || word == 'i' || word == 'o' || word == 'u') {
            count++
            console.log(word);
        }
        
    } 
   
   console.log(`------------------------------------`)
    console.log(`1.To find total number of vowels`);
    console.log(`Count Total no. of Vowels are: ${count}`);

  
    console.log(`------------------------------------`)
 
    
     
    function sumOfCubes(num) {
        var sumn = 0;
      
        for (let index = 1; index <= num; index++) {
          sumn += index ** 3;
        }
        console.log(`Sum of cubes of 1-5 number is:${sumn}`);
      }
      console.log(`2.Sum of cubes of given number`)
      sumOfCubes(5);
      console.log(`------------------------------------`);

      function oddPositionedChars(string) {
        var result = "";
        var stringLength = string.length - 1;
        for (let index = 0; index <= stringLength; index++) {
          var char = string.charAt(index);
          
          if (index % 2 != 0 && char != " ") {
            result = result.concat(char);
          }
        }
        console.log(result);
      }
      console.log(`3.To find odd Position char from given string`);
      oddPositionedChars("Hard work always pays back");
      oddPositionedChars("Soon I will be Angular IT champ");
      