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
for (const employee of arrayEmployee) {
    if (employee.company == "TCS") {
    console.log(`${employee.name},${employee.company}`);
}
}
console.log(`===========2)Finance Department employee===========`)
for (const employee of arrayEmployee) {
    if (employee.dept == "Finance") {
       console.log(`${employee.name},${employee.dept}`) ;
    }
}
console.log(`===========3)Employee name starts with R===========`)
for (const employee of arrayEmployee) {
    if (employee.name.startsWith("R")) {
    console.log(`${employee.id},${employee.name},${employee.dept},${employee.salary},${employee.company}`);
}
}
console.log(`===========4)Employee name whose salary is more than 750000===========`)
for (const employee of arrayEmployee) {
    if (employee.salary>75000) {
    console.log(`${employee.name},${employee.salary},${employee.company}`);
}
}
console.log(`===========5)Employee name whose salary is more than equal to 50000 and who is from IT feild===========`)
for (const employee of arrayEmployee) {
    if (employee.salary>=50000 && employee.dept == "IT") {
        console.log(`${employee.id},${employee.name},${employee.dept},${employee.salary},${employee.company}`);
    }
}
console.log(`===========6)Infy employees===========`)
for (const employee of arrayEmployee) {
    if (employee.company == "Infy") {
    console.log(`${employee.name},${employee.company}`);
}
}