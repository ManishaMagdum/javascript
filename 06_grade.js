function gradeCalculation(marks){
    
    if (marks==undefined || isNaN(marks) || marks<0 || marks>100) { // undefined, null
        console.log(`Please provide valid marks: ${marks}`);
    } else { 
       if (marks>=90) {
            console.log(`Fantastic marks : ${marks}, Your grade is A+`);
       } else {if (marks>=75 && marks<90) {
        console.log(`Excellent marks : ${marks}, Your grade is A`);
       } else {if (marks>=50 && marks <75) {
        console.log(`Good marks : ${marks}, Your grade is A`);
       } else {if (marks>=35 && marks<50) {
        console.log(`Marks is : ${marks}, Your grade is C,Need improvement`);
       } else 
       console.log(`Valid marks : ${marks}`);
    
        
       }
        
       }
        
       }
        
       }
        
       }
    

    

// Handling invalid inputs
//gradeCalculation(undefined);
//gradeCalculation(null);
//gradeCalculation(NaN);

//gradeCalculation("Karthik");
//gradeCalculation(-10);
//gradeCalculation(120);

// Valid input
//gradeCalculation("20");
gradeCalculation(98);
console.log(`-------------------------------------------`);
gradeCalculation(91);
console.log(`-------------------------------------------`);
gradeCalculation(80);
console.log(`-------------------------------------------`);
gradeCalculation(90);
console.log(`-------------------------------------------`);
gradeCalculation(0);
console.log(`-------------------------------------------`);
gradeCalculation(150);
console.log(`-------------------------------------------`);
gradeCalculation(-7);
console.log(`-------------------------------------------`);
gradeCalculation(35);
console.log(`-------------------------------------------`);
gradeCalculation(29);
console.log(`-------------------------------------------`);
gradeCalculation(64);
console.log(`-------------------------------------------`);
gradeCalculation(49);
console.log(`-------------------------------------------`);
gradeCalculation("91");
console.log(`-------------------------------------------`);
gradeCalculation("Eighty");
console.log(`-------------------------------------------`);
gradeCalculation(undefined);
console.log(`-------------------------------------------`);
gradeCalculation(null);