console.log(`Male Marriage Eligiblity`);
var MaleMarriageEligiblity = function(gender,age,boyName){
    var result = (gender== "Male"  && age >= 21)  ? `Hey ${boyName} you are eligible for marriage`: `Hey ${boyName} You are not eligible for marraige` ;
   console.log(`${result}`);
}
MaleMarriageEligiblity("Male",25,"Bill Gates");
MaleMarriageEligiblity("Male",17,"Stev Jobs");
console.log(`-------------------------------------`);
console.log(`Female Marriage Eligiblity`);
var FemaleMarriageEligiblity = function(gender,age,girlName){
    var result = (gender== "Female"  && age >= 18) ? `Hey ${girlName} you are eligible for marriage`: `Hey ${girlName} You are not eligible for marraige` ;
    console.log(`${result}`);
}
FemaleMarriageEligiblity("Female",16,"Jenifer");
FemaleMarriageEligiblity("Female",27,"Malinda Gates");