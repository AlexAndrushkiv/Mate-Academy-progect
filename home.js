
// let burger = () =>
//    console.log(' Я безымянная функция')
//       ();

/**************************************************** */ 
// let car = {
// 	maxSpeed : 250
// 	}
// console.log("скорость моей тачки была " + car.maxSpeed);

/************************************************************* */
// function speedChange(speed) {
// 	speed = car.maxSpeed = 280;
// }
// speedChange(car);
// console.log("скорость моей тачки стала " + car.maxSpeed);
/******************************************************************** */
//  (() => {
// 	console.log("я стрелочная функция");
// })();

/********************************************************** */
// (() => console.log("стрелочная функция"))();

// (function() {
// 	for (var i = 0; i < 10; i++) {
// 	console.log( i);
// 	}
// })
// ();

/************************************************************** */
// let drivers = ["Иван","Сергей","Егор"];

// for (let i = 0; i < drivers.length; i++) {
// 	console.log(drivers[i]);
// }
/************************************************************* */

// const drivers = ["Иван","Сергей","Егор","Степан","Тарас","Женя","Денис"]

// for (var i = drivers.length - 1; i >= 0; i--) {
// 	console.log(drivers[i]);
// }
/****************************************************** */

// for ( let driver of drivers ) {
// 	console.log(drivers)
// }
/********************************************************* */
// const cars = ['mazda', 'ford', 'porshe' ]
// for (let i = 0; i < cars.length; i++) {
// 	console.log(cars[i])
// }
/************************************************************** */
// спецификация ES6 - конкотенация строк в примере массива данных

/* const myCar = {
   make: 'BMW'
}
console.log(`Мой автомобиль: ${myCar.make}`) //обратные скобки,знак доллара и кавычки используются вместо плюсов  */

/************************************************************ */
// var i = 0;
// var n = 1;
// while (i < 5) {
//    i++;
//    if (i == 3) {
//       continue;
//    }
//    n += i;
// }
// console.log(`${n} ${i}`);

/*==============================================================*/ 

// const getLargestExpressionResult = (a, b) => {
//     const sum = a + b;
//     const razn = a - b;
//     const mul = a * b;
//     const del = a / b;

//     if (sum > razn && sum > mul && sum > del) {
//         return sum;
//     }

//     if (razn > sum && razn > mul && razn > del) {
//         return razn;
//     }

//     if (mul > sum && mul > razn && mul > del) {
//         return mul;
//     }

//     if (del > sum && del > razn && del > mul) {
//         return del;
//     }
// };

// getLargestExpressionResult(-5, -1);
/************************************************************* */

// const getLargestExpressionResult = (a, b) => {
//     const r1 = a + b;
//     const r2 = a - b;
//     const r3 = a * b;
//     const r4 = a / b;

//     if (r1 >= r2) {
//         const r5 = r1;
//     }

//     if (r3 >= r4) {
//         const r6 = r3;
//     }

//     if (r1 >= r3) {
//         return r1;
//     }

//     if (r1 <= r3) {
//         return r3;
//     }
// };

// getLargestExpressionResult(1, 1);
/************************************************************************** */

// const getLargestExpressionResult = (a, b) => {
//     const sum = a + b;
//     const razn = a - b;
//     const mul = a * b;
//     const del = a / b;

//     if (sum > razn && sum > mul && sum > del) {
//         return sum;
//     }

//     if (razn > sum && razn > mul && razn > del) {
//         return razn;
//     }

//     if (mul > sum && mul > razn && mul > del) {
//         return mul;
//     }

//     if (del >= sum && del > razn && del > mul) {
//         return del;
//     }

//     if (mul === del) {
//         return del;
//     }
// };
// getLargestExpressionResult(1, 1);

/************************************************************************* */

// function getTask(weekday) {
//     if (weekday === 'monday') {
//         return 'Write a new module for the program';
//     } else if (weekday === 'tuesday') {
//         return 'Test the module and find bugs';
//     } else
//         if (weekday === 'wednesday') {
//             return 'Write a new module for the program';
//         } else if (weekday === 'thursday') {
//             return 'Test the module and find bugs';
//         } else if (weekday === 'friday') {
//             return 'You need to meet the boss today';
//         } else
//             if (weekday === 'saturday') {
//                 return 'Spend the evening with your friends';
//             } else
//                 if (weekday === 'sunday') {
//                     return 'Go to the movies in the evening';
//                 } else {
//                     return 'Entered the wrong day of the week';
//                 }
// }
// console.log(getTask('tuesday'));
/********************************************************************************** */

// const weekday = 'friday';

// switch (true) {
//     case weekday === 'monday':
//         console.log('Write a new module for the program');
//         break;

//     case weekday === 'tuesday':
//         console.log('Test the module and find bugs');
//         break; 
        
//     case weekday === 'wednesday':
//         console.log('Write a new module for the program');
//         break; 
        
//     case weekday === 'thursday':
//         console.log('Test the module and find bugs');
//         break; 
        
//     case weekday === 'friday':
//         console.log('You need to meet the boss today');
//         break; 
        
//     case weekday === 'saturday':
//         console.log('Spend the evening with your friends');
//         break;

//     case weekday === 'sunday':
//         console.log('Go to the movies in the evening');
//         break;

//     default:
//         console.log('Entered the wrong day of the week');

// }
/************************************************************** */

// switch (true) {
//     case weekday === 'monday':
//         return'Write a new module for the program';

//     case weekday === 'tuesday':
//         return'Test the module and find bugs'; 

//     case weekday === 'wednesday':
//         return'Write a new module for the program'; 

//     case weekday === 'thursday':
//         return'Test the module and find bugs';


//     case weekday === 'friday':
//         return'You need to meet the boss today';


//     case weekday === 'saturday':
//         return'Spend the evening with your friends';

//     case weekday === 'sunday':
//         return'Go to the movies in the evening';

//     default:
//         return'Entered the wrong day of the week';

// }

// OK!!!
// function getPaymentSystem(a) {
//    switch (true) {
//       case a === 4:
//          return 'VISA';

//       case a === 34 || a === 37:
//          return 'American Express';

//       case a === 51 || 
//               a === 52 || 
//               a === 53 || 
//               a === 54 || 
//               a === 55:
//          return 'MasterCard';

//       case a === 63 || a === 67:
//          return 'Maestro';

//       case a === 1234:
//          return 'unknown payment system';
        
//       default:
//          return'unknown payment system too';
//    }
// }

// console.log(getPaymentSystem(4));

// function getDirection(hor, ver) {
//    switch (true) {
//       case hor === 2 && ver === 1:
//          return 'back';

//       case hor === 0 && ver === 1:
//          return 'forward';

//       case hor === -1 && ver === 0:
//          return 'left';

//       case hor === 1 && ver === 1:
//          return 'right';

//       case hor === 3 && ver === 1:
//          return 'stop';

//       case hor === 0 && ver === 0:
//          return 'no instruction';
//    }
// };

// console.log(getDirection(3, 1));

// function getDirection(direction) {
//    switch (direction) {
//       case 'back':
//          return 'hor=0 ver=-1';

//       case 'forward':
//          return 'hor=0 ver=1';

//       case 'left':
//          return 'hor=-1 ver=0';

//       case 'right':
//          return 'hor=1 ver=0';

//       default:
//          return 'hor=0 ver=0';
//    }
// }
// console.log(getDirection('go home'));

//улучшенный вариант функции выше
// function getDirection(direction) {
//    switch (direction) {
//       case 'back':
//          return format (0, -1);

//       case 'forward':
//          return format (0, 1);

//       case 'left':
//          return format (-1, 0);

//       case 'right':
//          return format (1, 0);

//       default:
//          return format (0, 0);
//    }
// }
// console.log(getDirection('left'));

// function format(x, y) {
//    return `hor=${x} ver=${y}`;
// }

// 'use strict';

// function printNumbers(N) {
//    for (/* start value */let i = 0; /* stop condition */i <= 10; i = i + 1) {
//       console.log(i);
//    }
// }

// console.log(i);

// 'use strict';

// function printNumbers(N) {
//    for (/* start value */let i = 0; /* stop condition */i <= N; i++) {
//       console.log(i);
//    }
// }

// printNumbers(1);

// debugger;

// const piople = 3;

// function getDrinks(numberOfGuests) {
//    // write code here
//    for (let i = 0; i <= piople; i++) {
//       const count = 1 + 2 + 3 + i;
//       console.log(count);
//    }
// };
// getDrinks(3);

// debugger;

// function getDrinks(numberOfGuests) {
//    let guests = 0;
//    for (let i = 0; i <= numberOfGuests; i++) {
//       guests = guests + i;
//       // console.log(guests);
//    }

//    return guests;
// };
//  console.log(getDrinks(3));


// function getDrinks(numberOfGuests) {
//    let guests = 0;
//    for (let i = 0; i <= numberOfGuests; i++) {
//       guests = guests + i;
//       // console.log(guests);
//    }

//    return guests;
// };
//  console.log(getDrinks(3));

// 'use strict';

/**

// function getDrinksWithStep(numberOfGuests, step) {

//    let guests = 1;

//    for (let i = 0; i <= step; i++) {
//       if (i % 2 === 0) {
//          continue;
//       }
//       guests = guests + i;
//    }

//    return guests;
// }
// console.log(getDrinksWithStep(10, 3));

// document.querySelector('button').onclick = myClick;

// function myClick() {
//    // console.log('Bduuuu!!!');
//    console.trace();
// }

// const m1 = document.querySelector('button');
//  m1.onclick = () => {
//    // console.log('Bduuuu!!!');
//    console.log(message);
// }
// // console.dir('button')


/******************************************************* */

// const str = "Мама мыла раму";

// for (let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i));
// }


// var charLength = 0; //You have a global and local variable, omit this one
// var count = function(text) {
//    var charLength = text.length;
//    var wordCount = 0;
//    for (var i = 0; i < text.length; i++) { // declare i with var, start at 0
//      if (text.charAt(i) == " ") {
//        wordCount++;
//      }
//    }
//    return { 'charLength': charLength, 'wordCount': wordCount };
//  };
 
//  var text = "Hello there fine sir.";
//  console.log(count(text)); // add a way to see the results

// // /************************************************************/ 
// const str = "Мама мыла раму";

// for (let i = 0; i < str.length; i++) {
//     console.log(str.charAt(7));
// }

// var str="Мама мыла раму";

// str = str.split(" ").join("");

// console.log(str.length);

// const firstRow = 'мама мыла раму';
// const secondRow = 'собака друг человека';

// function getRow(firstRow, secondRow) {
//    for (let i = 0; i < firstRow.length; i++) {
//     console.log(firstRow.charAt(i));
//    }
//    for (let i = 0; i < secondRow.length; i++) {
//     console.log(secondRow.charAt(i));
//    }
// }
// const result = getRow(firstRow, secondRow);
// console.log(result); // мама мыла раму
/*============================$$$$$$=============================== */

// let count = 0; // инициализируем переменную, которая будет выступать в роли счетчика
// let count_2 = 0;
// const firstRow = 'мама мыла раму'; //фраза проверки колличества букв /а/
// const secondRow = 'собака друг человека'; //фраза проверки колличества букв /а/

// let charCount = function( char, firstRow, secondRow ) {
//     for (let i = 0; i < firstRow.length; i++) {
//       firstRow.charAt( i ) == char ? count++ : false; //проверяем содержится переданный символ по данному индексу, если да то инкрементируем переменную
//     }
//     for (let j = 0; j < secondRow.length; j++) {
//       secondRow.charAt( j ) == char ? count_2++ : false; //проверяем содержится переданный символ по данному индексу, если да то инкрементируем переменную
//     }

//     if (count >= count_2) {
//        console.log(`В фразе мама мыла раму ${count} буквы А`);
//     } else {
//        console.log(`В фразе собака друг человека ${count_2} буквы А`);
//     }
// }

// charCount( "а", firstRow , secondRow); // результат 

/*=======================================$$$$$$============================================================= */

// /**************************************************************** */
// let b = function () {

// }

// const x = 2; 
// const y = 3;

// function plus1(x) {
// const y = 20;

//    return x + 1;

// }
// console.log(plus1(y));

// let x = true;
// let b = false;
// if (x != x) {
// console.log(typeof(b))
   
// }


/* Запустить консоль лог 10 раз*/

// let result = '';
//    for (let i = 0; i < 10; i++) {
//       result += i + "  ";
// }
// console.log(result); 
