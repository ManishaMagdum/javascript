var arrayNumbers =[20,31,40,25,23,11,29,9,60,2,11];
const lengthOfArray =arrayNumbers.length;
console.log(`1)Length of array is:${lengthOfArray}`);
console.log(`------------------------------------------`);
const firstIndexValue = arrayNumbers[0];
const lastIndexValue = arrayNumbers[10];
console.log(`2)First Value of array is : ${firstIndexValue}`);
console.log(`Last Value of array is : ${lastIndexValue}`);
console.log(`------------------------------------------`);
const thirdLastIndexValue = arrayNumbers[arrayNumbers.length-3];
console.log(`3)Third Last Value of array is :${thirdLastIndexValue}`);
console.log(`------------------------------------------`);
console.log(`4)Even Elements are:`)
for (let index = 0; index < lengthOfArray; index++) {
    if (arrayNumbers[index] % 2 == 0) {
     console.log(`${arrayNumbers[index]}`);
    }
  }
console.log(`------------------------------------------`);
console.log(`5)Odd Elements are:`)
for (let index = 0; index < lengthOfArray; index++) {
    if (arrayNumbers[index] % 2 ==! 0) {
        console.log(`${arrayNumbers[index]}`);   
    }
  }
  console.log(`------------------------------------------`);
  console.log(`6)Sum of Even Elements are:`) ;
  var even = 0;
  for (let index = 0; index < lengthOfArray; index++) {
    if (index%2==0) {
      even += arrayNumbers[index];
      console.log(even); 
    } 
  }

  
  console.log(`------------------------------------------`);
  console.log(`7)Sum of Odd Elements are:`);
  var odd = 0;
  for (let index = 0; index < lengthOfArray; index++) {
    if (index%2!=0) {
      odd += arrayNumbers[index];
      console.log(odd); 
    } 
  }



console.log(`------------------------------------------`);
console.log(`8)Sum of all elements `);
let sum = 0;
for (let index = 0; index <lengthOfArray; index++) {
    sum += arrayNumbers[index];
}
console.log(`The sum of all elements in array is :${sum}`) ;

console.log(`------------------------------------------`);

console.log(`9)Multiple of 5`);
for (let index = 0; index < lengthOfArray; index++) {
if (arrayNumbers[index]%5==0) {
  console.log(`${arrayNumbers[index]}`);
}
}
console.log(`------------------------------------------`);
console.log(`10)115 is available in Array`);
let result = arrayNumbers.includes(115);
console.log(`115 is available in given array:${result}`);
console.log(`------------------------------------------`);
console.log(`11)23 is available in Array`);
let data = arrayNumbers.includes(23);
console.log(`23 is available in given array:${data}`);
console.log(`------------------------------------------`);
console.log(`12)Insert 55 and 66 before index 3`)
var arrayNumbers =[20,31,40,25,23,11,29,9,60,2,11];
console.log(`${arrayNumbers}`);
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);
console.log(`------------------------------------------`);
console.log(`13)Delete 3 elements starting from index 4`);
arrayNumbers.splice(4,3);
console.log(`After deleting the new array is: ${arrayNumbers}`);





