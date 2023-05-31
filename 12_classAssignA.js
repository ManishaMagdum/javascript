class Vehicle{
    constructor(Name,fuelType,colour,price,Milage){
this.Name = Name;
this.fuelType = fuelType;
this.colour = colour;
this.price = price;
this.Milage = Milage;
    }
    showDetails(){
        console.log(`Details of vehicle are ${this.Name}, ${this.fuelType}, ${this.colour}, ${this.price},${this.Milage} `);
    }
}
const vehicle1  = new Vehicle("Toyota Inova Crysta", "Disel", "Grey", "24.16 Lakhs","18.4KM");
const vehicle2 = new Vehicle("Nissan Kicks", "Petrol", "Red", "8.91 Lakhs","8.4KM" );
const  vehicle3= new Vehicle("Maruti Suzuki Baleno", "Petrol", "Grey", "6.89 Lakhs","24.7KM" );
const vehicle4= new Vehicle("Tata Safari", "Deisel", "Black", "18.39 Lakhs","28.6KM");
const  vehicle5= new Vehicle("Kia Sonet", "Petrol", "White", "11.29 Lakhs","31.7KM");
const arrayOfVehicles = [vehicle1,vehicle2,vehicle3,vehicle4,vehicle5];
for (const element of arrayOfVehicles) {
    element.showDetails();
}
console.log(`============================================================`);

class College{
    constructor(CollegeName,City,Department,Telephone){
        this.CollegeName = CollegeName;
        this.City = City;
        this.Department = Department;
        this.Telephone = Telephone;
    }
}

const college1 = new College("SGM","Kolhapur","Engineering","123456788");
const college2 = new College("DYP","Pune","Pharmacy","456876456");
const college3 = new College("SGU","Ichalkaranji","Agriculture","4378999987");
const college4 = new College("ADShinde","Mumbai","Commerce","12357887");
function traverseObject(collegeDetails) {
    for (const key in collegeDetails) {
        if (Object.hasOwnProperty.call(collegeDetails, key)) {
            const element = collegeDetails[key];
            console.log(`${key},${element}`)
            
        }
    }
}
traverseObject(college1);
console.log(`==============================================`);
traverseObject(college2);
console.log(`==============================================`);
traverseObject(college3);
console.log(`==============================================`);
traverseObject(college4);