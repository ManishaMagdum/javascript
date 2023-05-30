console.log(`=======================Step 1.Create New Object bankSbi=======================`)
let sbiBank = {
    bankName: "SBI",
    location: "Kolhapur",
    accountNo: 123456,
    ifsc: 1234,
    interestRate: 8.9 ,
}
console.table(sbiBank);
console.log(`=======================Step 2.Create New Object bankLocation=======================`)
let bankLocation ={
    street :"Gadhinglaj",
    city:"Kolhapur",
    pin:"416502",
}
console.table(bankLocation);
console.log(`=======================Step 3.Clone bankSbi and bankLocation in new object=======================`)
let newObject={

}
Object.assign(newObject,sbiBank,bankLocation);
console.table(newObject);
console.log(`=======================Step 4.Create New Object rateOfInterest=======================`)
let rateOfInterest={
homeLoanInterest:"10%",
personalLoanInterest:"12.4%",
dueInterest:"11%",
}
console.table(rateOfInterest);
console.log(`=======================Step 5.Merge Step 1 ,Step 2, and step 4 in new object sbiDetails=======================`)
let sbiDetails ={

}
Object.assign(sbiDetails,sbiBank,bankLocation,rateOfInterest)
console.table(sbiDetails);
console.log(`=======================Step 6.Traverse the merged object in Step 5=======================`)
for (const key in sbiDetails) { // key = "height"
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key}, ${value}`);
    }
}