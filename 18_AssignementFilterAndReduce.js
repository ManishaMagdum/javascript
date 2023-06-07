class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("===============1)Get the list of wipro employee names=================");
const arrayTcsEmployees = array_employees.filter( (employee) => {
    return employee.emp_company == "Wipro";
    
} );
const arrayTcsEmployeeNames = arrayTcsEmployees.map( (employee) => {
    return employee.emp_name;
});
console.log( arrayTcsEmployeeNames);
console.log("===============2)Get the list of IT or HR department employee names=================");
const arraydept = array_employees.filter( (employee) => {
    return employee.emp_dept == "HR" || employee.emp_dept =="IT";
} );
const arrayDeptNames = arraydept.map( (employee) => {
    return employee.emp_name;
});
console.log(arrayDeptNames)
console.log("===============3)Get the list of employee whose Id is greater than 50 =================");
const arrayId = array_employees.filter( (employee) => {
    return employee.emp_id>50;
} );
const arrayIdNames = arrayId.map( (employee) => {
    return employee.emp_name;
});
console.log(arrayIdNames)
const result =[];
console.log("===============4)Get the list of employee whose name starts with A or V or M =================");
const arrayLetter = array_employees.filter( (employee) => {
   if ( employee.emp_name.startsWith("A")|| employee.emp_name.startsWith("V")|| employee.emp_name.startsWith("M")) {
     result.push(employee.emp_name);
    }
    
} );

console.log(result);
console.log("===============4)Find out average salary of all employees=================");
const emp_Salaries = array_employees.map( (employee) => {
    return employee.emp_salary;
});
const sumSalary =emp_Salaries.reduce( (runningTotal, value) => {
    let result= runningTotal+value;
   return result;
});
const avg =sumSalary /array_employees.length;
console.log(avg);
 console.log("===============)Find out average salary of IT department employees=================");
 
const arrayIt = array_employees.filter((employee)=>{
return employee.emp_dept == "IT";
});
let totalSalary= 0;
arrayIt.forEach((employee)=>{
totalSalary=totalSalary+employee.emp_salary;
});
const average = totalSalary/arrayIt.length;
console.log(average);





    