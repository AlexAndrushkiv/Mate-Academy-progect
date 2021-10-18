
/**
 * 
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

const $pole = document.querySelector('.test');

const f1 = ('click', () => {
   const $divTest = document.createElement('div');
   $divTest.classList.add('i-test');

   const $div1 = document.createElement('div');
   $div1.classList.add('input');
   $divTest.appendChild($div1);

   const $p1 = document.createElement('p');
   $div1.appendChild($p1);

   const $input1 = document.createElement('input');
   $div1.appendChild($input1);

   $pole.appendChild($divTest);

})

f1();
f1();
f1();

/*
const push = document.querySelector('.btn');
push.onclick = () => {
   console.log('Bduuuu!!!');
  
}
*/