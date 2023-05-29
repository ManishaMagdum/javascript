let sbiBank = {
  bankName: "SBI",
  location: "Kolhapur",
  accountNo: 123456,
  ifsc: 1234,
  interestRate: 8.9 ,
  showDetails: function () {
    console.log(
      `All details are:bankName :${this.bankName},location: ${this.location},accountNo: ${this.accountNo},ifsc: ${this.ifsc},interestRate:${this.interestRate}`
    );
  },
};
const details = sbiBank.showDetails();
//console.log(details);
let axisBank = {
  bankName: "Axis",
  location: "Pune",
  accountNo: 789012,
  ifsc: 1234,
  interestRate: 9,
  axisDetails: function () {
    console.log(
      `All details are:bankName ${this.bankName},location ${this.location},accountNo ${this.accountNo},ifsc ${this.ifsc},interestRate ${this.interestRate}`
    );
  },
};
const result = axisBank.axisDetails();
//console.log(result);

let hdfcBank = {
  bankName: "HDFC",
  location: "Mumbai",
  accountNo: 11223344,
  ifsc: 0876,
  interestRate: 7,
  hdfcDetails: function () {
    console.log(
      `All details are:bankName ${this.bankName},location ${this.location},accountNo ${this.accountNo},ifsc ${this.ifsc},interestRate ${this.interestRate}`
    );
  },
};
const data = hdfcBank.hdfcDetails();
//console.log(data);

let yesBank = {
  bankName: "Yes",
  location: "Delhi",
  accountNo: 44556677,
  ifsc: 1876,
  interestRate: 8,
  yesDetails: function () {
    console.log(
      `All details are:bankName ${this.bankName},location ${this.location},accountNo ${this.accountNo},ifsc ${this.ifsc},interestRate ${this.interestRate}`
    );
  },
};
const value = yesBank.yesDetails()
//console.log(`${value}`);
