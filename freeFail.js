
'use strict';


//Интерполяция строк (урок 5)
// const myName = 'Alex';
// let myAge = 37;

// myAge = myAge + 1;

// let message = myName + ' is ' + myAge;
// let message2 =  `${myName} is ${myAge}` ;

// // console.log(message);
// console.log(message2);

// let isAlive = true;
// let isMarriad = false;

// let isdead = !isAlive;
// console.log(isdead);





// function getDrinks(numberOfGuests) {
//   // write code here
//   let guests = 0;

//   for (let i = 1; i <= numberOfGuests; i++) {
//     guests = guests + i;
// console.log(guests)

//   }
//   return guests;
// };
// getDrinks(8);

// function calculateProfit(amount, percent, period) {
//   // write code here
//   let a = amount;//100 гривен
//   let b = percent; // под 5%
//   let c = period; // на 12 ть месяцев

//     let x = (a / 100 * b ) + a;//105 первый год
//     let d = (x / 100 * b)  + x; //110.25 второй год
//     let j = (d / 100 * b)  + d; // 115.5третий год
//     let sum = j - a;//чистая прибыль без вклада

// console.log(x)
// console.log(d)
// console.log(j)
// console.log(sum)

//     return sum;
// }
// calculateProfit(100, 5, 12)

// 'use strict';

// function getDrinksWithStep(numberOfGuests, step) {
//   // write code here
//   let count = 0;

//   for (let i = 1; i <= numberOfGuests; i += step) {
//     count += i ;
//     console.log(count);
//   }

//   return count;

 // }
// getDrinksWithStep(10, 3);

/**
 * ! function not completed
 * @param {} amount 
 * @param {} percent 
 * @param {} period 
 * @returns 
 
function calculateProfit(amount, percent, period) {
  // write code here
  let income = 0;
  let sum = amount;

  for (let i = 1; i <= period; i++) {
    sum += i * sum * (percent / 100);
    income = sum - amount;
  
  }
  console.log(income);
  return income;

}
calculateProfit(1000, 5, 7);
*/
