/**
 * ! Работа с DOM
 *
<div class="i-test">
    <div>
        <p></p>
        <input>
    </div>
    <div>
        <p></p>
        <input>
    </div>
    <div>
        <p></p>
        <input>
    </div>
    <button class="btn">Push</button>
</div>
 * 
 */

const $pole = document.querySelector(".test");

const f1 = () => {
    const $divTest = document.createElement("div");
    $divTest.classList.add("i-test");

    const $div1 = document.createElement("div");
    $div1.classList.add("input");
    $divTest.appendChild($div1);

    const $p1 = document.createElement("p");
    $div1.appendChild($p1);

    const $input1 = document.createElement("input");
    $div1.appendChild($input1);

    $pole.appendChild($divTest);
};

f1();
f1();
f1();

//**********Лущенко Олександр Web-DEV */
//**обработчики событий */
//#############################//
// обработчик события----------------
// const push = document.querySelector('.btn');
// push.onclick = () => {
//    console.log('Bduuuu!!!');
// }

//обработчик события-------------------
// document.querySelector('.btn').onclick = () => {
//    console.log('Bduuuu!!!');
// }

//обработчик события--------------------addEventListener-----------
// const push = document.querySelector('.btn');
// push.addEventListener('click', () => {
//     console.log('Bduuuu!!!');
// })

//обработчик события--------------------addEventListener-----------
// document.querySelector('.btn').addEventListener('click', () => {
//     console.log('Bduuuu!!!');
// })

//обработчик события--------------------addEventListener-----------
// const push = function() {
//     console.log('Bduuuu!!!');
// }
// document.querySelector('.btn').addEventListener('click', push);

//обработчик события--------------------addEventListener-----------
// function click () {
//     console.log('Bduuuu!!!');
// }
// document.querySelector('.btn').addEventListener('click', click);
//##################################//

//************Замыкания в JS  */
/*
//создаем счётчик
let a = 0;

function count() {
    a++;
    let b = 7;
    console.log(a);
}
count()
// console.log(b);
// a = 'error';
count()
count()

function light() {
    let c = 0;
    return function() {
        c++;
        console.log(c);
    }
}
const d = light(); // d - функция(замыкание области видимости функции
//на переменную внутри этой функции)
//c = 5; эта *с* не видна функции и не влияет на функцию
d();
d();
d();
-------------------------------------------------------------------*/

//*! 5 задач на собеседовании */
//* 1 задача
//написать функ. которая определит является ли сторока палиндромом.
//вернуть false/true

// const polindrom = str => {
//нижний регистр
// str = str.toLowerCase();
/*
  let str2 = str.split('');//позволяет разбить строку по укзанному сепаратору внутри кавычек
    str2 = str2.reverse();// ревер массива
    str2 = str2.join('');//обратный реверс массива
        if (str == str2) return true
            else return false
 */
//упрощённая запись
//     return str == str.split('').reverse().join('');
// }
// console.log(polindrom('abba'));


//*задача 2
//Необходимо реализовать метод меняющий порядокэлементов в массиве на обратный не используя стороних библиотек


let a = [1, 3, 5, 7, 90];
let a1 = [44, 64, 3, 22, 89, 1];

// ?решение1
// console.log(a.reverse());
//?решение2 
// const reverse1 = a => {
//     return a.reverse();
// }
// console.log(reverse1(a));
//?решение3
// const reverse2  = a => {
//     res = [];
//     a.forEach(element => {
//         res.unshift(element)
//     });
//     return res;
// }
// console.log(reverse2(a));
//?решение4
const reverse3 = a => {
    result = [];
    for (let i = a.length - 1; i >= 0; i--) {
        result.push(a[i]);
    }
    return result;
}
console.log(reverse3(a1));