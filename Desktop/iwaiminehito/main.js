'use strict';

// for (let i = 0; i <= 100; i = i ++) {
//   if (i % 3 === 0){
//     console.log('Fizz' + i);
//   }
// }

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) 
    console.log(`FizzBuzz ${i}`);
  else if (i % 3 === 0)
    console.log(`Fizz ${i}`);
  else if (i % 5 === 0)
    console.log (`Buzz ${i}`);  
}

// console.log(`hello ${i}`);