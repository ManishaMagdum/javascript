console.log(`1)========Shallow Clone and Adding elements==========`);
const arrayNums =[20,3,4,56,90,400,49];
console.log(`Original array :${arrayNums}`)
const clonedArray= arrayNums;
console.log(`After Clonnig array is:${clonedArray}`)
clonedArray.push(55,66);
console.log(`After Adding 56 and 66 in array :${clonedArray}`);
console.log(`2)========Deep Clone and Adding elements==========`);
const array =[...arrayNums];
console.log(`After Clonning array is:${array}`); 
arrayNums.push(10,25);
console.log(`After adding elements:${arrayNums}`);
console.log(`3)========Merge Two arrays using spred operator==========`);
const arrayEven =[2,30,14,8];
const merge = [...arrayEven,arrayNums];
console.log(`Concated array is:${merge}`);
console.log(`4)=========Creat object employee_info=========`);
const employee_info ={
    emp_id : 27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR",
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli,431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles :["+91 8600 3456 88", "1800-4567 32","+91-9096 5678 77"]
}
console.log(`Address of employee is:`)
console.log( employee_info.address.locality);
console.log(`${employee_info.address.city},${employee_info.address.state},${employee_info.address.country}`);

console.log(`Mobile numbers are:${employee_info.mobiles}`);
console.log(`5)========Deep Clone =======`);
const deepClone = JSON.parse(JSON.stringify(employee_info));
console.log(deepClone);
console.log(`6)========Update the Clone object =======`);
console.log(`Original Value is:${employee_info.salary.july_month}`)
employee_info.salary.july_month = "80,0000INR"
console.log(`After Updation value is:${employee_info.salary.july_month}`);
console.log(`Original Value is:${employee_info.address.country}`);
employee_info.address.country ="United Kigdom";
console.log(`After Updation Value is:${employee_info.address.country}`);
