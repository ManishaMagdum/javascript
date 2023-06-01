function Fibonacci(n) {
    let num1 = 0, num2 = 1, result;
    console.log(`Fiboncci series is:${num1}`);
    console.log(`${num2}`);
    for (let i = 2; i < n; i++) {
      result = num1 + num2;
      console.log(result);
      num1 = num2;
      num2 = result;
    }
  }
  
 Fibonacci(10); 