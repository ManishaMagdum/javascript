class Employee{
    constructor (id, name, dept,salary,company){
            this.id = id;
            this.name = name;
            this.dept = dept;
            this.salary = salary;
            this.company = company;

    }
}
const anil = new Employee(22,"Anil","IT",50000,"TCS")
const radha = new Employee(33,"Radha","HR",74000,"Wipro");
const rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const monika = new Employee(77,"Monika","IT",40000,"TCS");
const viny = new Employee(88,"Vinayak","IT",75000,"TCS");
const mahi = new Employee(99,"Mahesh","HR",85000,"Infy");
const arrayEmployee =[anil,radha,rishi,sonali,monika,viny,mahi];
console.log(`===========1)TCS employees===========`)
arrayEmployee.forEach((employee) => {
    if (employee.company === "TCS") {
        console.log(`${employee.name},${employee.company}`)
    }
}); 
console.log(`===========2)Salary greater than or euqal to 50000===========`)
arrayEmployee.forEach((employee) => {
    if (employee.salary >= 50000) {
        console.log(`${employee.id},${employee.name},${employee.dept},${employee.salary},${employee.company}`)
    }
}); 
console.log(`===========3)Sum of all employees salary===========`)
let sumSalaryOfInfy = 0;
arrayEmployee.forEach( (employee)=> {

        sumSalaryOfInfy = sumSalaryOfInfy + employee.salary;
    
});
console.log(sumSalaryOfInfy);
console.log(`===========4)To find average salary===========`)
let sumSalary = 0;
arrayEmployee.forEach( (employee) => {
    sumSalary = sumSalary + employee.salary;
});
let averageSalary = sumSalary / arrayEmployee.length;
console.log(`Average Salary is : ${averageSalary}`);
console.log(`===========5)IT or HR employee whose salary is greater than 75000===========`)
arrayEmployee.forEach( (employee) => {
  if (((employee.dept == "HR") || (employee.dept =="IT")) && (employee.salary >= 75000)) {
    console.log(employee)
  }
});



    