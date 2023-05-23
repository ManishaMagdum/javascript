function countCharA(string){
   var count=0;

   for (let index = 0; index < string.length; index++) {

    const word = string[index];
    if (word == 'a' || word== "A") {
        count++;
       
    }
    
   }
   console.log(`The total number of A and a in given string is:${count}`);
}
console.log(`Given string is:I AM learing JavaScript,The Language of internet`)
countCharA("I AM learing JavaScript,The Language of internet");
console.log(`-----------------------------------------------------`)
console.log(`Given string is:My favourite movie is LAggAn`)
countCharA("My favourite movie is LAggAn");
