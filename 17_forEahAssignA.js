const arrayNumbers =[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`==================1)To find elements and thier index==================`)
arrayNumbers.forEach((element , index)=>{
console.log (`Element is:${element},index is :${index}`)
})

array = [];
arrayNumbers.forEach((element) => { 
    if (element>0) {
        array.push(element)
        
    }

});
console.log(`==================2)To find Positive elements==================`)
console.log(`Positive Elements are :${array}`)
console.log(`==================3)To find Negative elements==================`)
array = [];
arrayNumbers.forEach((element)=>{
    if (element<0) {
        array.push(element)
    }
});
console.log(`Negative Elements are :${array}`)
console.log(`==================4)To find even elements==================`)
array = [];
arrayNumbers.forEach((element)=>{
    if (element%2==0) {
        array.push(element)
    }
});
console.log(`Even numbers are:${array}`)
console.log(`==================5)To find sum of numbers==================`)
let result =0;
arrayNumbers.forEach((element)=>{
    result = result+element;
});
console.log(`Sum of numbers are :${result}`);
console.log(`==================6)To find even index  numbers==================`)
array = [];
arrayNumbers.forEach((element,index)=>{
    if (index%2==0) {
        array.push(element)
    }
});
console.log(`Even indexed Numbers are :${array}`);