// 'use strict';
// /* eslint-disable */

// let isHoliday = false;
// let isVacation = false;
// // write code below this line
// isVacation = !isHoliday;

// // write code above this line
// const canStayHome = isHoliday || isVacation; // don't change this line
// console.log(canStayHome);

// let a = 50;
// let b = 40;

// a = !b;

// console.log(a, b);

// const x = 10 / '20';
// console.log(x);

// 'use strict';

// const a = 1;
// const b = 2;

// const addition = a + b;
// const subtraction = a - b;
// const division = a / b;
// const multiplication = a * b;

// console.log(a);
// console.log(b);
// console.log(division);

// 'use strict';

// // change code below
// const expression = 10 * (7 + 8 - 11) / 4;
// console.log(expression);
// 'use strict';

// const a = 'Hello';
// const b = 'world';
// // write your code below
// const resultString = `${a},${b}!`;
// console.log(resultString);

// 'use strict';

// // write code below
// const myString = 'Hello, world!\nIt\'s JavaScript!';

// console.log(myString);

// 'use strict';

// use symbol u+1F60E

// const escapedString = 'Hello, world! \u{1F60E}';
// console.log(escapedString);
// debugger;

// const a = 1;
// const b = 2;

// const addition = a + b;
// const subtraction = a - b;
// const division = a / b;
// const multiplication = a * b;

// console.log(a);
// console.log(b);
// console.log(multiplication);

// Функция сложения чисел
// function sum(a, b) {
// console.log(a, b)

// 	return a + b;
// }

// const result = sum(3, 5);
// console.log(result);

// функция проверки является ли число чётнім или нечетнім
//( Function Declaration (Объявление Функции):)

// function isEven(x) {
// 	return (x % 2) === 0;
// }
// console.log(isEven(120));

//Function Expression (Функциональное Выражение).

// const isEven = function (x) {
// 	return (x % 2) === 0;
// }
// console.log(isEven(120));

// 'use strict';

// function hello() {

// 	const x = 'Hello,world!';

// 	console.log(x);

// };
// hello();

// function hello() {
// 	console.log('Hello, world!');
// }
// hello();
// 'use strict';


// function getString(randomString) {

// 	return randomString = 'Hello';
// }
// console.log(getString());

// 'use strict';

// function getString() {
//   const randomString = 'Hello';

//   return randomString;

// }
// console.log(getString());

// 'use strict';

// /**
//  * returns string
//  */

// function getString() {
//   return 'string';
// };

// console.log(getString());

// 'use strict';

// /**
//  * returns string
//  */

// function getString() {
//   return 'string';
// };

// const getStringResult = getString();

// 'use strict';

// /**
//  * @returns string
//  */
// // write code below

// getString = () => {
//   const randomString = 'string';
//   return randomString;
// };

// console.log(getString);

// 'use strict';

// /**
//  * @returns string
//  */
// // write code below

// const getString = () => {
// 	const randomString = 'string';
// 	return getString;

// };
// const x = getString;
// console.log(x);

// 'use strict';

// /**
//  * @param {string} name
//  *
//  * @returns string
//  */

// write code below
// const greeter = (name, partOfTheDay) => `Hi, ${name} ${partOfTheDay}!`;

// console.log(greeter('Alex', 'day'));

// const greeter = (partOfTheDay, name) => `Good ${partOfTheDay}, ${name}!`;

// console.log(greeter('morning', 'Alex'));
// 'use strict';

/*
 * @param {string} name
 * @param {string} partOfTheDay
 *
 * @returns string
 */
 //NB...важно задать имена параметров в точном соответствии друг другу(partOfTheDay==morning)
 //name==Alex, а==I am) а уже при вызове эти параметры можно расставлять в любой последовательности.
// const greeter = (partOfTheDay, name, a ) => `Good ${partOfTheDay}, ${a} ${name}  !`;

// console.log(greeter('morning', 'Alex', 'I am'));

// 'use strict';

// /**
//  * @param {number} num
//  *
//  * @returns number
//  */
// const double = (sum) => {

// 	return sum * 2;
// };

// console.log(double(5));

// 'use strict';
//  в аргумент b переданно значение по умолчанию, и при візове
// функции оно подставляется автоматически
// /**
//  * @param {number} a
//  * @param {number} b
//  *
//  * @returns number
//  */
// const multiply = (a, b = 1) => {
// 	console.log(a, b);
//   	return a * b;
// };

// console.log(multiply(10));
// 'use strict';

// /**
//  * @param {string} name
//  *
//  * @returns string
//  */
// const greeter = (name) => `Hi, ${name}!`;

// console.log(greeter('Alex'));


// function canBuyBeer(age) {
// 		if (age >= 18) {
// 		console.log('You can buy beer');
// 	} else {
// 		console.log('You can not buy beer');
// 	} 
// };
	

// canBuyBeer(55);
// 'use strict';

// /**
//  *
//  * @param {number} a
//  * @param {number} b
//  *
//  * @returns string
//  */

// function getNumbersEquality(a, b) {
//   let result;
//   if (a === b) {
//     return 'a and b are equal';
//   }
//   if (a < b) {
//     return 'a < b';
//    }
//   if (a > b) {
//     return 'a > b'
//   }
//  	return(result); 
// }
// getNumbersEquality(2, 5);

// 'use strict'; не точный вариант

// /**
//  * @param {number} amount
//  *
//  * @returns string
//  */
// function getTipsRating(amount) {
//   // write your code here
//   if (amount === 0) {
//     console.log('terrible');
//   }

//   if (amount <= 10) {
//     console.log('poor');
//   }

//   if (amount <= 20) {
//     console.log('good');
//   }

//   if (amount <= 50) {
//     console.log('great');
//   }

//   if (amount >= 50) {
//     console.log('excellent');
//  }	
// }
// getTipsRating(20);
// getTipsRating(1);
// getTipsRating(10);
// getTipsRating(20);
// getTipsRating(50);

//ХОРОШИЙ пример с урока!!!
// 'use strict';

// /**
//  * @param {number} amount
//  *
//  * @returns string
//  */
//  getTipsRating(12);

// function getTipsRating(amount) {
//   // write your code here
//   if (amount > 50) {
//     return 'excellent';
//   }

//   if (amount > 20) {
//     return 'great';
//   }

//   if (amount > 10) {
//     return 'good';
//   }

//   if (amount > 0) {
//     return 'poor';
//   }

//   return 'terrible';
// }

// 'use strict';

// /**
//  * @param {number} amount
//  *
//  * @returns string
//  */
// function getTipsRating(amount) {
//   // write your code here
//   if (amount > 50) {
//     return 'excellent';
//   }

//   if (amount > 20) {
//     return 'good';
//   }

//   if (amount > 10) {
//     return 'poor';
//   }

//   if (amount > 0) {
//     return 'poor';
//   }

//   return 'terrible';
// }

/*
Условие 
// calculateTaxes(1000) === 20;

// taxes = 1000 * 0.02 = 20;

// calculateTaxes(10000) === 290;

// taxes = 1000 * 0.02 + 9000 * 0.03 = 20 + 270 = 290;

// calculateTaxes(12000) === 390;

// taxes = 1000 * 0.02 + 9000 * 0.03 + 2000 * 0.05 = 20 + 270 + 100 = 390;
*/
/*
Решение 1
*/

'use strict';

/**
 * @param {number} income
 *
 * @returns number
 * */

// write code below
// 	calculateTaxes(999);
	

// function calculateTaxes(income) {

// 	if (income > 100000) {
		
// 		return;
// 	}

// 	if (income <= 1000) {
// 		let taxes =	1000 * 0.02;

// 		return console.log(taxes);

// 	} else if (income > 1000 && income <= 10000) {
// 		let taxes =	1000 * 0.02 + 9000 * 0.03;

// 		return console.log(taxes);

// 	} else if (income > 10000 && income <= 100000) {
// 		let taxes = 1000 * 0.02 + 9000 * 0.03 + 2000 * 0.05;

// 	 	return console.log(taxes);
		
// 	} 
// }

//Вам нужно сумму, переданную в функцию, умножать,
//то есть income, а не константу, как у вас
	
// function calculateTaxes(income) {

// 	if (income > 100000) {
		
// 		return;
// 	}

// 	if (income <= 1000) {
// 		let taxes = income * 0.02;
// 		console.log(taxes);

// 		return; 

// 	} else if (income > 1000 && income <= 10000) {
// 		let taxes = 1000 * 0.02 + (income - 1000) * 0.03;
// 		console.log(taxes);

// 		return; 

// 	} else if (income > 10000 && income <= 100000) {
// 		let taxes = 1000 * 0.02 + 9000 * 0.03 + (income - 10000) * 0.05;

// 		console.log(taxes);

// 	 	return;
// 	} 
// }
// calculateTaxes(20000);

/*
Продвинутая формула с изменяемыми параметрами

function calculateTaxes(income) {
	const rate1 = 0.02;
	const step1 = 1000;

	const rate2 = 0.03;
	const step2 = 10000;

	const rate3 = 0.05;
	
	if (income > 100000) {
		
		return;
	}

	if (income <= step1) {
		let taxes = income * rate1;
		console.log(taxes);

		return; 
	} 

	 if (income <= step2) {
		let taxes = step1 * rate1 + (income - step1) * rate2;
		console.log(taxes);

		return; 
	} 

	if (income > step2) {
		let taxes = step1 * rate1 
			 + (step2 - step1) * rate2
			 + (income - step2) * rate3;

		console.log(taxes);

	 	return;
	} 
}
calculateTaxes();
*/

// function getLargestExpressionResult(a, b) {
//   if (a === b) {
//   	console.log(a + b);
//     return ;
//   }

//   if (a < b) {
//   	console.log(a * b);

//     return ;
//   }

//   if (a > b) {
//   	console.log(a / b);

//     return ;
//   }

//   if (a = b) {
//   	console.log(a - b);

//     return ;
//   }
// }
// getLargestExpressionResult(2, (-2));