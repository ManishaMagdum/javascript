console.log(`========Arrow function with no arguments and no return value========`);
let display = ()=> {
    console.log("Good Morning ,Today is Monday");
}  
display();
console.log(`========Arrow function with arguments and no return value=========`);
let multiply =(n1,n2,n3=1)=>{
let Result= n1*n2*n3
console.log(`Multiplication is:${Result}`)

}
multiply(5,5,2);
multiply(10,4,1);
console.log(`========Arrow function with arguments and return value=========`);
let add =(value1,value2,value3,value4,value5)=>{
let result = value1 +value2 +value3 +value4 +value5
return result;
}
let result = add(100,100,200,349,756);
console.log(`Addition is:${result}`);
let data =add("I am ","learning ","ES6 ","features ","in depth ");
console.log(`Addition is:${data}`);

