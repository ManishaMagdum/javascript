function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`Month is: January as day number is ${monthNumber}`);
      break;
    case 2:
      console.log(`Month is: February as day number is ${monthNumber}`);
      break;
    case 3:
      console.log(`Month is: March as day number is ${monthNumber}`);
      break;
    case 4:
      console.log(`Month is: April as day number is ${monthNumber}`);
      break;
    case 5:
      console.log(`Month is: May as day number is ${monthNumber}`);
      break;
    case 6:
      console.log(`Month is: June as day number is ${monthNumber}`);
      break;
    case 7:
      console.log(`Month is: July as day number is ${monthNumber}`);
      break;
    case 8:
      console.log(`Month is: August as day number is ${monthNumber}`);
      break;
    case 9:
      console.log(`Month is: September as day number is ${monthNumber}`);
      break;
    case 10:
      console.log(`Month is: Octomber as day number is ${monthNumber}`);
      break;
    case 11:
      console.log(`Month is: November as day number is ${monthNumber}`);
      break;
    case 12:
      console.log(`Month is: December as day number is ${monthNumber}`);
      break;
    default:
        console.log(`Invalid Input : ${monthNumber}`);
      break;
  }
}
console.log(`-----------------------------------------------`);
monthOfYear(0);
console.log(`-----------------------------------------------`);
monthOfYear(2);
console.log(`-----------------------------------------------`);
monthOfYear(5);
console.log(`-----------------------------------------------`);
monthOfYear(12);
console.log(`-----------------------------------------------`);
monthOfYear(15);
console.log(`-----------------------------------------------`);
monthOfYear(100);
console.log(`-----------------------------------------------`);
monthOfYear(null);
console.log(`-----------------------------------------------`);
monthOfYear(undefined);