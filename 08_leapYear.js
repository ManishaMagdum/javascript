function checkLeapYear(leapYear) {
  if (leapYear===undefined || leapYear===null || isNaN(leapYear)) {
    console.log(`${leapYear} is Not valid input`);
  } else {
    if (leapYear %4===0 && leapYear%100!=0) {
        console.log(`${leapYear} is Leap Year`);
    } else {
        console.log(`${leapYear} is not leap year`);
    }
    
  }
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("twenty twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);



