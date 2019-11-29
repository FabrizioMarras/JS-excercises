/*
A. Write a program using the console.log to print all numbers from 1 to 100 with 2 exceptions:

    1. numbers divisble by 3 -->> print "Fizz"
    2. numbers divisible by 5 --> print "Buzz"
*/

for (let index = 1; index <= 100; index++) {
  if (index % 3 === 0) {
    console.log("Fizz");
  } else if (index % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(index)
  }
}

/*
B. Modify the program to print "FizzBuzz" for numbers divible by 3 and 5, 
and still print "Fizz" for numbers divisible by 3 and "Buzz" for numbers divisible by 5.
*/

for (let index = 1; index <= 100; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log("FizzBuzz");
  } else if (index % 3 === 0) {
    console.log("Fizz");
  } else if (index % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(index)
  }
}
