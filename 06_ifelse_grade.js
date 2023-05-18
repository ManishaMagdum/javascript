function voteEligiblity(age){
    if (age == null) {
        console.log(`Your age is ${age} you are not eligible`)
    } else {if (age == undefined) {
        console.log(`Your age is ${age} you are not eligible`)
    } else {if (age<=0) {
        console.log(`Your age is ${age} you are not eligible`)
    } else {
        if (age>120) {
            console.log(`Your age is ${age} you are not eligible`)
        } else {if (age >= 18) {
            console.log(`Your age is ${age} you are eligible`)
        } else
        console.log(`Your age is ${age} you are not eligible`)
    
           
        
            
        }
    }
        
    }
        
    }
}
        

voteEligiblity(null);
console.log(`-------------------------------------------`);
voteEligiblity(21);
console.log(`-------------------------------------------`);
voteEligiblity(undefined);
console.log(`-------------------------------------------`);
voteEligiblity(0);
console.log(`-------------------------------------------`);
voteEligiblity(-24);
console.log(`-------------------------------------------`);
voteEligiblity(350);
console.log(`-------------------------------------------`);
voteEligiblity(8);
console.log(`-------------------------------------------`);
voteEligiblity(35);

