let professor ={
    Name : "Manisha Magdum" ,
    TeachingSubject : "Maths",
    Gender : "Female",
    CollegeName:"SGM",
    Department:"E&Tc",
    isMarried: true,
    degrees:{
        engineering :"CSC",
        MBA:"Information And Technology",
        PHD :"Adv Computing",
    },
  certificates:["Hacker Rank Participation","Certificate in IFE course","Certificate in Adv Programming","ORACLE Certificate"],
  allDegree:function(){
    let data=` engineering:${this.degrees.engineering},MBA:${this.degrees.MBA},PHD:${this.degrees.PHD}`;
    return data;
  
  }

};
  console.log(professor);
  console.log(`=====================Add function with return value=======================`);
 const data = professor.allDegree();
  console.log(`Teacher degrees are total teacher degrees:${data}`);
  console.log(`=====================Adding new property=======================`);
  professor.experience="14 years"
  console.log(`Total experince is:${professor.experience}`);
  console.log(`=====================Modify existing property=======================`);
  console.log(`Before Modification`);
  console.log(professor);
  professor.TeachingSubject = "English";
  console.log(`After Modification`);
  console.log(professor);
  console.log(`=====================Add Array=======================`);
 console.log(`After modification`);
  console.log(`${professor.certificates}`);