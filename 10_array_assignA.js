const arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon",];
console.log(`Given array is : ${arrayFruits}`)
console.log(`---------First And Last Elements-----------`);
const firstIndexValue = arrayFruits[0];
console.log(`First index value: ${firstIndexValue}`);
const lastIndexValue = arrayFruits[4];
console.log(`Last index value: ${lastIndexValue}`);
console.log(`---------Add element Papaya-----------`);
arrayFruits.unshift("Papaya");
console.log(arrayFruits);
console.log(`---------Remove Mango from Array-----------`);
arrayFruits.splice(4,1);
console.log(arrayFruits);
console.log(`---------Add Element Pinapple at last position-----------`);
arrayFruits.push("Pineapple");
console.log(arrayFruits);
console.log(`---------Insert An element Dragon Fruit before water melon-----------`);
arrayFruits.splice(4, 0, "Dragon Fruit")
console.log(arrayFruits);
console.log(`---------Replace Orange with Kiwi-----------`);
arrayFruits.splice(2,1,"Kiwi")
console.log(arrayFruits);
console.log(`---------Log the elements starting from index 1-4-----------`);
const inedxValue= arrayFruits.splice(1,4);
console.log(`Slice elements index 1 to 4 values are: ${inedxValue}`);
console.log(`---------Using length property only select 3 elements-----------`);
const lengthOfGivenArr=arrayFruits.splice(arrayFruits.length-6);
console.log(`Three elemnets using length property:${lengthOfGivenArr}`);



