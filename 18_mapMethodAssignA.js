//const array = [2, 3, 5,  6,  7,  9 ];
// const arrayTransformed = [4, 9, 25, 36, 49, 81 ];
//const arrayTransformed= [];
//array.forEach( (element)=> {
    //arrayTransformed.push(element*element);
//});
//console.log(arrayTransformed);
//console.log("======== using map()  ========");
//const arrayTrans = array.map( (element) => {
    //return element*element;
//} );
//console.log(arrayTrans);

console.log(`=================1)Add 10 in each number=====================`);
const arrayNumbers =[20,11,40,25,23,11,9,31,60,2,19]
array =[];
arrayNumbers.forEach((element)=>{
    array.push(element+10);
})
console.log(array)
console.log(`=================2)Square each element=====================`);
array =[];
arrayNumbers.forEach((element)=>{
    array.push(element*element);
})
console.log(array)
console.log(`=================3)Add index value in element=====================`);
array =[];
arrayNumbers.forEach((element,index)=>{
    array.push(element+index);
})
console.log(array)