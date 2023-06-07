const arrayNumbers =[20,11,40,25,37,49,9,90,60,2,19]
console.log(`=================1)Get the numbers greater than 50==================`)
const array=arrayNumbers.filter((element)=>{
    return element>50;
});
console.log(array)
console.log(`=================2)Get the even numbers ==================`)
const arrayEven =arrayNumbers.filter((element)=>{
    return element%2==0;
});
console.log(arrayEven)
console.log(`=================3)Get the odd numbers ==================`)
const arrayOdd =arrayNumbers.filter((element)=>{
    return element%2!=0;
});
console.log(arrayOdd)
console.log(`=================4)Get the numbers which are multiple of 5 ==================`)
const arrayFive =arrayNumbers.filter((element)=>{
    return element%5==0;
});
console.log(arrayFive)
console.log(`=================5)Get the numbers which are in between 20 and 50==================`)
const arrayBetween =arrayNumbers.filter((element)=>{
    return element>20 && element<50;
});
console.log(arrayBetween)