// 365 -- получ атрибута
/*№1 Дан элемент:
<input id="elem" value="text">
Получите значение его атрибута value.*/
// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('value');
// console.log(value);
/*№2 Дан элемент:
<input id="elem" class="www zzz">
Получите значение его атрибута class.*/
// let elem = document.querySelector('#elem');
// let classValue = elem.getAttribute('class');
// console.log(classValue);

//366 -- установка атрибута
/*№1 Дан элемент:
<input id="elem">
Установите его атрибут value в значение 'text'.*/
// let elem = document.querySelector('#elem');
// elem.setAttribute('value', 'text');
/*№2 Дан элемент:
<input id="elem">
Установите ему атрибут class в значение 'valid'.*/
// let elem = document.querySelector('#elem');
// elem.setAttribute('class', 'valid');

//367 -- удаление атрибута
/*№1 Дан элемент:
<input id="elem" value="text">
Удалите у него атрибут value.*/
// let elem = document.querySelector('#elem');
// elem.removeAttribute('value');

//368 --проверка наличия атрибутов
/*№1 Дан элемент:
<input id="elem" value="text">
Проверьте наличие у него атрибута value.*/
// let elem = document.querySelector('#elem');
// console.log(elem.hasAttribute('value'));

//369 -- пользовательские атрибуты
/*№1 Дан следующий код:
<div id="elem" data-text="str">text</div>
Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.*/
// let elem = document.querySelector('#elem');
// elem.addEventListener("click", function () {
// elem.textContent += elem.dataset.text;
//  });
/*№2 Даны дивы, содержащие в атрибуте data-num свой порядковый номер:
<div data-num="1">text</div>
<div data-num="2">text</div>
<div data-num="3">text</div>
<div data-num="4">text</div>
<div data-num="5">text</div>
Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер.*/
// let divs = document.querySelectorAll('div');
// for (let elem of divs) {
// elem.addEventListener('click', function () {
//     for (let elem of divs) {
//     elem.textContent=elem.textContent+elem.dataset.num;
//     }
//     });
// }
/*№3 Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, записывая их в какой-нибудь пользовательский атрибут.
Пусть по клику на другую кнопку на экран выводится, сколько кликов было сделано по первой кнопке.*/
// let clickBtn = document.querySelector('#clickBtn');
// let showClicksBtn = document.querySelector('#showClicksBtn');
// let clickCount = 0;
// clickBtn.addEventListener('click', () => {
//   clickCount++;
//   clickBtn.setAttribute('elem.dataset.clicks', clickCount);
// });
// showClicksBtn.addEventListener('click', () => {
//   let clicks = clickBtn.getAttribute('elem.dataset.clicks');
//   alert(clicks);
// });
/*№4 Дан инпут:
<input id="elem" data-length="5">
В этом инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут.
Сделайте так, чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, выводилось сообщение об этом.*/
// let input = document.querySelector('#elem');
// input.addEventListener('blur', function() {
//   let enteredValue = this.value;
//   let requiredLength = parseInt(this.getAttribute('elem.dataset.length'));
//   if (enteredValue.length !== requiredLength) {
//     alert('Количество символов не совпадает с заданным');
//   }
// });
/*№5 Дан инпут:
<input id="elem" data-min="5" data-max="10">
В этом инпуте атрибуты data-min и data-max содержат диапазон.
Сделайте так, чтобы по потери фокуса, если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом.*/
// let input1 = document.querySelector('#elem');
// input1.addEventListener('blur', function() {
//     if (Number(input1.dataset.max)<input1.value.length< Number(input1.dataset.min)){
//         alert('Количество символов не совпадает с заданным')
//     }
// });

//370 -- имена атрибутов с дефисами
/*№1 Дан следующий код:
<div id="elem" data-product-price="1000" data-product-amount="5">
	товар яблоки
</div>
Сделайте так, чтобы по клику на див в конец его текста добавлялась стоимость покупки, равная цене, умноженной на количество.*/
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
//     elem.textContent = (elem.dataset.productPrice)*(elem.dataset.productAmount)
// });
// console.log(elem.textContent);

//371 -- обращение к атрибутам через методы
/*№1 Даны абзацы.
Переберите их циклом и каждому абзацу в атрибут data-num запишите порядковый номер этого абзаца.
Используйте метод setAttribute.*/
// let elem = document.querySelectorAll('#elem');
// let count = 0;
// for (let el of elem){
//     count+=1;
//     el.setAttribute('data-num',count);
//     el.textContent=el.textContent+el.dataset.num;
// };

//372
/*№1 Дан элемент:
<p id="elem" class="www ggg zzz"></p>
Узнайте количество его классов.*/
// let elem = document.querySelector('#elem');
// let length = elem.classList.length;
// console.log(length);

/*№2 Дан элемент:
<p id="elem" class="www ggg zzz"></p>
Переберите в цикле его классы.*/
// let elem = document.querySelector('#elem');
// let classNames = elem.classList;
// for (let className of classNames) {
// 	console.log(className);
// }

//373
/*№1 Дан элемент:
<p id="elem" class="www ggg zzz"></p>
Добавьте ему класс xxx.*/
// let elem = document.querySelector('#elem');
// elem.classList.add('kkk');

//374
/*№1 Дан элемент:
<p id="elem" class="www ggg zzz"></p>
Удалите у него класс www и класс zzz.*/
// let elem = document.querySelector('#elem');
// elem.classList.remove('www','zzz');

//375
/*№1 Дан элемент:
<p id="elem" class="www ggg zzz"></p>
Проверьте наличие у него класса ggg.*/
// let elem = document.querySelector('#elem');
// let contains = elem.classList.contains('ggg');
// console.log(contains);

//376
/*№1 Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть.*/
// let elem = document.querySelector('#elem');
// elem.classList.toggle('www');

//377
/*№1 Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу.*/
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#click');
// button.addEventListener('click', function() {
// elem.style.width = '400px';
// elem.style.hight = '600px';
// elem.style.border = '3px solid #000'
// });

//378
/*№1 Дан див с текстом и кнопка. 
По клику на кнопку установите диву размер шрифта в 20px, а также верхнюю границу и фон.*/
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#click');
// button.addEventListener('click', function() {
// elem.style.fontSize = '20px';
// elem.style.border = 'border-top';
// elem.style.background = '#F08080';
// });

//379
/*№1
Дан список ul и кнопка. По клику на кнопку добавьте тегам li свойство float в значении left.*/
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#click');
// button.addEventListener('click', function() {
// elem.style.cssFloat = 'left';
// });

//380
/*№2 Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'. 
Пусть по нажатию на каждую кнопку заданное действие происходит с абзацем (становится красным, например).*/
// let elem = document.querySelector('p');
// let button = document.querySelector('#click')
// 	button.addEventListener('click', function() {
// 		elem.classList.add('crossedOut');
// 	});
// 	let button1 = document.querySelector('#click1')
// 	button1.addEventListener('click', function() {
// 		elem.classList.add('allocated'); 
// 	});
// 	let button2 = document.querySelector('#click2')
// 	button2.addEventListener('click', function() {
// 		elem.classList.add('colored'); 
// 		});

//381
/*№1 Модифицируйте предыдущую задачу так, чтобы повторное нажатие на кнопку отменяло действие этой кнопки.*/
// let elem = document.querySelector('p');
// let button = document.querySelector('#click')
// 	button.addEventListener('click', function() {
// 		elem.classList.toggle('crossedOut');
// 	});
// 	let button1 = document.querySelector('#click1')
// 	button1.addEventListener('click', function() {
// 		elem.classList.toggle('allocated'); 
// 	});
// 	let button2 = document.querySelector('#click2')
// 	button2.addEventListener('click', function() {
// 		elem.classList.toggle('colored'); 
// 		});

//383
// №1 Дан элемент #elem:
/* <ul id="elem">
        <li>text</li>
        <li>text</li>
        <li>text</li>
        <li>text</li>
        <li>text</li>
    </ul> */
// Найдите первого потомка этого элемента и сделайте его текст красного цвета.
// let el = document.querySelector('#elem');
// let t = el.firstElementChild.textContent;
// console.log(t);

// №2 Дан элемент #elem:
/* <ul id="elem">
        <li>text</li>
        <li>text</li>
        <li>text</li>
        <li>text</li>
        <li>text</li>
    </ul> */
// Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
// let el = document.querySelector('#elem');
// let t = el.lastElementChild.textContent;
// console.log(t);

// №3 Дан элемент #elem:
/* <ul id="elem">
        <li>text</li>
        <li>text</li>
        <li>text</li>
        <li>text</li>
        <li>text</li>
    </ul> */
// Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
// let el = document.querySelector('#elem');
// let elems = el.children;
// for (let elem of elems) {
// 	console.log(elem.textContent+"!");
// }

//384
// №1 Дан элемент #elem:
// <div>
// 	<ul>
// 		<li>text</li>
// 		<li>text</li>
// 		<li id="elem">text</li>
// 		<li>text</li>
// 		<li>text</li>
// 	</ul>
// </div>
// // Найдите его родителя и задайте ему красную границу.
// let el = document.querySelector('#elem');
// let parent = el.parentElement;
// console.log(parent);

// 385
/* №1 Дан элемент:
<header>
	<div>
		<p>
			<span id="elem"></span>
		</p>
	</div>
</header>
Найдите ближайшего родителя этого элемента, являющегося тегом div.*/
// let elem = document.querySelector('#elem');
// let parent = elem.closest('div');
// console.log(parent);

// №2 Дан элемент:
// <header>
// 	<div class="www">
// 		<p class="www">
// 			<span id="elem"></span>
// 		</p>
// 	</div>
// </header>
// Найдите ближайшего родителя этого элемента, являющегося элементом с классом www.
// let elem = document.querySelector('#elem');
// let parent = elem.closest('.www');
// console.log(parent);

//386
// №1 Дан элемент #elem:
// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li id="elem">text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите его соседа сверху и добавьте ему в конец текст '!'.
// let elem = document.querySelector('#elem');
// let text = elem.previousElementSibling.textContent + "!";
// console.log(text);

// №2 Дан элемент #elem:
// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li id="elem">text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите его соседа снизу и добавьте ему в конец текст '!'.
// let elem = document.querySelector('#elem');
// let text = elem.nextElementSibling.textContent + "!";
// console.log(text);

// №3 Дан элемент #elem:
// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li id="elem">text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.
// let elem = document.querySelector('#elem');
// let sosed = elem.nextElementSibling;
// let sosed2 = sosed.nextElementSibling.textContent+"!";
// console.log(sosed2);

// №4 Дан элемент #elem:
/* <ul>
	<li>text1</li>
	<li>text2</li>
	<li id="elem">text3</li>
	<li>text4</li>
	<li>text5</li>
</ul> */
// Поменяйте местами текст его соседа сверху и текст его соседа снизу.
// let text3 = document.querySelector('#elem');
// let text2 = text3.nextElementSibling.textContent
// text2
// let text4 = text3.previousElementSibling.textContent
// console.log(text2, text4);

//387
// №1 Дан элемент #elem:
// <div id="elem"></div>
// Получите этот элемент с помощью метода getElementById и установите ему какой-нибудь текст.
// let elem = document.getElementById('elem');
// elem = 'JavaScript';
// console.log (elem);

//388
// №1 Дан список:
// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Получите все теги li по имени тега и сделайте их текст красного цвета.
// let elems = document.getElementsByTagName('li');
// for (let elem of elems) {
// 	elem.classList.add('colored')
// }

//389
// №1 Даны элементы:
// <p class="www">elem 1</p>
// <p class="www">elem 2</p>
// <p class="www">elem 3</p>
// Получите эти элементы по имени класса и сделайте их текст красного цвета.
// let elems = document.getElementsByClassName('www');
// for (let elem of elems) {
// 	elem.classList.add('colored')
// }

// 390
// №1 Дан элемент #parent:
// <div id="parent">
// 	<p class="www">text</p>
// 	<p class="www">text</p>
// 	<p class="www">text</p>
// 	<p class="ggg">text</p>
// 	<p class="ggg">text</p>
// 	<p class="ggg">text</p>
// </div>
// let parent = document.querySelector('#parent');
// Найдите внутри родителя элементы с классом www и запишите их в переменную elems1.
// Затем найдите внутри родителя элементы с классом ggg и запишите их в переменную elems2.
// let parent = document.querySelector('#parent');
// let elems1 = parent.querySelectorAll('.www');
// let elems2 = parent.querySelectorAll('.ggg');
// console.log(elems1, elems2)

//391
// №1 Напишите код, который покажет разницу между lastChild и lastElementChild.  
// let elem = document.querySelector('#elem');
// console.log(elem.lastChild);  //комментарий
// console.log(elem.lastElementChild);  //тег span

// №2 Напишите код, который покажет разницу между nextSibling и nextElementSibling.
// let elem1 = document.querySelector('#elem1');
// console.log(elem1.nextSibling);
// console.log(elem1.nextElementSibling);

// №3 Напишите код, который покажет разницу между previousSibling и previousElementSibling.
// let elem1 = document.querySelector('#elem1');
// console.log(elem1.previousSibling);
// console.log(elem1.previousElementSibling);

//392
// №1 Дан див:
// <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
// Переберите циклом все узлы этого дива и выведите их в консоль.
// let elem = document.querySelector("#elem");
// for (let node of elem.childNodes) {
// 	console.log(node);
// }

//393
// №1 Дан див:
// <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
// Переберите циклом все узлы этого дива и выведите в консоль их названия.
// let elem = document.querySelector("#elem");
// for (let node of elem.childNodes) {
//     console.log(node.nodeName);
//   }

//394
// №1 Дан див:
// <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
// Переберите циклом все узлы этого дива и выведите в консоль только узлы-элементы и текстовые узлы.
// let elem = document.querySelector("#elem");
// for (let node of elem.childNodes) {
//     if (node.nodeType === 1) {
//       console.log(node);
//     } else if (node.nodeType === 3) {
//       console.log(node);
//     }
//     }

// 395
// №1 Дан див:
// <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
// Переберите циклом все узлы этого дива и выведите в консоль тексты всех узлов.
// let elem = document.querySelector("#elem");
// for (let node of elem.childNodes) {
// 	console.log(node.textContent);
// }
// №2 Дан див:
// <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
// Переберите циклом все узлы этого дива и выведите в консоль тексты всех комментариев и текстовых узлов.
// let elem = document.querySelector("#elem");
// for (let node of elem.childNodes) {
// 	console.log(node.nodeValue);
//     console.log(node.data);
// }
// №3 Дан див:
// <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
// Переберите циклом все узлы этого дива и выведите в консоль тексты текстовых узлов и элементов.
// let div = document.querySelector("#elem");
// for (let node of div.childNodes) {
//   if (node.nodeType === Node.TEXT_NODE) {
//     console.log(node.textContent);
//   } else if (node.nodeType === Node.ELEMENT_NODE) {
//     console.log(node.innerText);
//   }
// }
// №4 Дан див:
// <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
// Переберите циклом все узлы этого дива и каждому узлу в конец запишите его тип.
// let div = document.querySelector("#elem");
// for (let node of div.childNodes) {
//     console.log(node,node.nodeType);
// }

//396
// №1 Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.
// let textArea = document.querySelector('#elem');
// let p = document.querySelector('p');
// textArea.addEventListener('blur', function() {
//     p.innerHTML = textArea.value;
// });

//397
// №1 Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#click');
// elem.disabled = false;
// console.log(elem.disabled); 
// button.addEventListener('click', function (){
//     elem.disabled = true;
//     console.log(elem.disabled); 
// } );
// №2 Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.
// let elem = document.querySelector('#elem');
// let button1 = document.querySelector('#click1');
// let button2 = document.querySelector('#click2');
// elem.disabled = false;
// button1.addEventListener('click', function (){
//     elem.disabled = true;
//     console.log(elem.disabled); 
//     });
// button2.addEventListener('click', function (){
//     elem.disabled = false;
//     console.log(elem.disabled);
// });
// №3 Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#click');
// button.addEventListener('click', function (){
//     if (elem.disabled) {
//         console.log("Инпут заблокирован");
//       } else {
//         console.log("Инпут разблокирован");
//       }
//     });

//398
// №1 Дан чекбокс и две кнопки.
// По нажатию на первую кнопку установите чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное.
// let checkbox  = document.querySelector('#elem');
// let button1 = document.querySelector('#click1');
// let button2 = document.querySelector('#click2');
// button1.addEventListener('click', function (){
//     checkbox.checked = true;
// });
// button2.addEventListener('click', function(){
//     checkbox.checked = false; 
// });
// №2 Дан чекбокс, кнопка и абзац.
// По нажатию на кнопку, если чекбокс отмечен, выведите в абзац слово 'привет', а если чекбокс не отмечен, то слово 'пока'.
// let checkbox  = document.querySelector('#elem');
// let button = document.querySelector('#click');
// let p = document.querySelector('p');
// button.addEventListener('click', function (){
//    if(checkbox.checked){
//     p.textContent ='привет';
//    } else{
//     p.textContent ='пока';
//    }
// });

//399
// №2 Дан чекбокс и кнопка. Сделайте так, чтобы каждый клик по кнопке приводил к смене состояния чекбокса.
// let checkbox  = document.querySelector('#elem');
// let button = document.querySelector('#click');
// let p = document.querySelector('p');
// button.addEventListener('click', function (){
//     checkbox.checked = !checkbox.checked;
// });

//400
// №1 Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки.
// let radios = document.querySelectorAll('input[type="radio"]');
// let button = document.querySelector('#click');
// let p = document.querySelector('p');
// button.addEventListener('click', function() {
// 	for (let radio of radios) {
// 		if (radio.checked) {
//             p.textContent =radio.value;
// 		}
// 	}
// });

//401
// №1 Дан инпут и абзац. По изменению инпута выведите его текст в абзац.
// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// elem.addEventListener('change', function() {
    // p.textContent =this.value;
// });
// №2 Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.
// let checkbox  = document.querySelector('#elem');
// checkbox.addEventListener('change', function(){
//     alert(this.value)
// });
// №4 Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет.
// Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный.
// let el =document.querySelector("#elem");
// el.addEventListener('change', function() {
//   if(el.value.length==5){
//     console.log('количество символов = 5')
//   }else if(el.value.length<5){
//     el.classList.add('colored_border');
//   }else{
//   el.classList.add('colored_border2'); 
//   }
// });

//402
// №1 Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти,
// выведите на экран сообщение об этом.
// let elem =document.querySelector('#elem');
// elem.addEventListener('input', function() {
//     if (elem.value.length==5){
//         alert ('длина текста достигла пяти')
//     }
// });
// №2 Дан инпут. Пусть в него разрешено ввести 5 символов.
// Дан также абзац. По мере ввода символов в инпут пишите, сколько еще символов можно ввести.
// Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста.
// let elem =document.querySelector('#elem');
// elem.addEventListener('input', function() {
// if (elem.value.length<5){
// alert ('ещё можно ввести символов:'+(5-elem.value.length));
// }
// else if (elem.value.length>5) {
//     alert ('превышена длина на символов:'+(elem.value.length-5));
// }
// });

//403
// №1 Даны два инпута.
// Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту,
// а после ввода двух символов в этот инпут - фокус из него убирался.
// let elem1 =document.querySelector('#elem1');
// let elem2 =document.querySelector('#elem2');
// elem1.addEventListener('input', function() {
// if(elem1.value.length==2){
//         elem2.focus();
//       }
//     });
//     elem2.addEventListener('input', function() {
//       if (elem2.value.length == 2){
//        elem2.blur();
//       }
//     });

// 405
// №1 Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.
// let select = document.querySelector('#select');
// let button = document.querySelector('#click');
// let p = document.querySelector("p");
// button.addEventListener('click', function(){
// 	p.textContent=select.value;
// });
// №2 Сделайте выпадающий список годов от 2020 до 2030.
// При выборе какого-нибудь пункта списка выведите сообщение о том, високосный этот год или нет.
// let select = document.querySelector('#select');
// select.addEventListener('change', function(){
//     if (select.value % 4 != 0){
//         console.log('не високосный год')
//     }
//     else {
//         console.log('високосный год')
//     }
// });

//406
// №1 Сделайте выпадающий список с названиями дней недели.
// В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7.
// По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.
// select.addEventListener('change', function(){
//     if(select.value>5){
// 	console.log("выходной день");
//     }else{
//         console.log("будний день")
//      }
// });

//407
// №1 Сделайте выпадающий список с названиями месяцев.
// Сделайте так, чтобы JavaScript по умолчанию выбирал в этом списке текущий месяц.
// let select = document.querySelector('#select');
// let button = document.querySelector('#click');
// button.addEventListener('click', function() {
// 	select.value = '1';
// });

//408
// №1 Дан инпут и селект. В инпут вводится какое-то число.
// По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.
// let select = document.querySelector('#select');
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function() {
//     select.value= Number(elem.value);
//     });
// №2 Сделайте выпадающий список с названиями дней недели. 
// Сделайте так, чтобы по JavaScript по умолчанию выбирал в этом списке текущий день.
// let select = document.querySelector('#select');
// let button = document.querySelector('#click');
// button.addEventListener('click', function() {
//     select.value = '1';
// });

//410
// №1 Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.
// let select = document.querySelector('#select');
// for (let option of select) {
// 	console.log(option.textContent+=(select.value));
// }

// 411
// №1 Переберите пункты списка циклом и для выбранного пункта в конец текста добавьте восклицательный знак,
// а для невыбранных пунктов - вопросительный.
// let select = document.querySelector('#select');
// select.addEventListener('change', function() {
// for (let option of select) {
//     option.text = option.text.slice(0, -1)
//     if(option.selected){
//         option.textContent+='!';
//     }else{
//         option.textContent+='?';
//     }
//     }
// })

//412
// №1 Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка.
// let select = document.querySelector('#select');
// let button = document.querySelector('#click');
// button.addEventListener('click', function() {
//    let option = select[select.length-1];
// option.selected = true;
// });

//413
// №1 Дан селект и кнопка. По нажатию на кнопку выведите на экран текст отмеченного пункта списка.
// let select = document.querySelector('#select');
// let button = document.querySelector('#click');
// button.addEventListener('click', function() {
//     console.log(select[select.selectedIndex]);
// });

// №2 Дан селект и кнопка. По нажатию на кнопку добавьте в конец текста выбранного пункта восклицательный знак.
// let select = document.querySelector('#select');
// let button = document.querySelector('#click');
// button.addEventListener('click', function() {
//     console.log((select[select.selectedIndex])+'!');
// });

// 415
// №1 Сделайте так, чтобы при движении мышки по странице, отображались координаты курсора, подобно тому, как это сделано в следующем образце:
// let elem = document.getElementById('elem');
// document.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.clientX + ' : ' + event.clientY;
// });

// let elem = document.getElementById('elem');
// document.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.pageX + ' : ' + event.pageY;
// });

//416
// №1 В следующем коде к двум событиям привязан один и тот же обработчик:
// <button id="elem">text</button>
//let elem = document.querySelector('#elem');
// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);
// function func() {
// 	}
// Допишите код функции func так, чтобы при клике на элемент этот элемент красился в зеленый цвет, а при двойном клике - в красный.
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);
//     function func(event) {
//         console.log(event.type);
//         if (event.type === "click") {
//         ////   elem.classList.add('colored_green');
//           elem.style.backgroundColor = "green";
//         } if (event.type === "dblclick") {
//             //// elem.classList.add('colored_red');
//             elem.style.backgroundColor = "red";
//         }
//       }

//418
// №1 Сделайте инпут, который будет по вводу выводить значения введенных клавиш и их коды.
// let elem = document.querySelector('input');
// elem.addEventListener('keypress', function(event) {
// 	console.log(event.key);
// 	console.log(event.code);
// });
// №5 Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. Сделайте так, чтобы в этот момент введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.
// let elem = document.querySelector('input');
// let p =document.querySelector('p');
// elem.addEventListener('keypress', function(event) {
// 	if(event.code =="Enter"){
//         p.textContent=elem.value
//         elem.value=""
//     }
// })

//419
// №1 Дан элемент.
// Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Shift.
// let element = document.getElementById('myElement');
// element.addEventListener('click', function(event) {
//     if (event.shiftKey) {
//         element.style.backgroundColor = "red";
//     }
// });
// №2 Пусть у вас есть список ul с тегами li:
// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Сделайте так, чтобы по клику на любую li, в конец ее текста добавлялось число 1, если нажата клавиша Ctrl, 
// и число 2, если нажата клавиша Shift.
// let items = document.querySelectorAll('li');
// items.forEach(item => {
//   item.addEventListener('click', addNumber);
// });
// function addNumber(event) {
//   if (event.ctrlKey) {
//     this.textContent += ' 1';
//   }
//   if (event.shiftKey) {
//     this.textContent += ' 2';
//   }
// }

//420
// №1 Даны ссылки.
// Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило.
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// elem1.addEventListener('click', function(event) {
//     event.preventDefault();
// 	console.log('Вы не можете перейти по этой ссылке!');
//     let href = elem1.getAttribute('href');
//     this.textContent += href;
//   });
// elem2.addEventListener('click', function(event) {
// 	event.preventDefault();
// 	console.log('Вы не можете перейти по этой ссылке!');
//     let href = elem2.getAttribute('href');
//     this.textContent += href;
// });
// elem3.addEventListener('click', function(event) {
// 	event.preventDefault();
// 	console.log('Вы не можете перейти по этой ссылке!');
//     let href = elem3.getAttribute('href');
//     this.textContent += href;
// });
// №2 Даны два инпута, абзац и ссылка.
// Пусть в инпуты вводятся числа. Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.
// let elem = document.querySelector('#elem');
// let el1 = document.querySelector('#el1');
// let el2 = document.querySelector('#el2');
// let p = document.querySelector('p');
// elem.addEventListener('click', function(event) {
//     event.preventDefault();
//         p.textContent += (parseFloat(el1.value)+parseFloat(el2.value));
//   });

//421 -- не всплывающие события 
//focus
// blur 
// load
// unload
// scroll
// mouseenter
// mouseleave

//422
// №1 Даны следующие элементы:
// <div>
// 	<ul>
// 		<li>1</li>
// 		<li>2</li>
// 		<li>3</li>
// 	</ul>
// </div>
// div, ul, li {
// 	padding: 20px;
// }
// div {
// 	border: 1px solid red;
// }
// ul {
// 	border: 1px solid orange;
// }
// li {
// 	border: 1px solid green;
// }
// Навешайте на див обработчик клика. В этом обработчике определите, в каком из тегов сработало событие.
// let div = document.querySelector('div');
// div.addEventListener('click', function(event) {
// 	if (event.target.matches('div')) {
// 		console.log('клик именно по диву');
// 	}
// 	if (event.target.matches('ul')) {
// 		console.log('клик именно по списку');
// 	}
//     if (event.target.matches('li')) {
// 		console.log('клик именно по элементу');
// 	}
// });
// №2 Модифицируйте предыдущую задачу.
// Сделайте так, чтобы при клике на li, ей в конец добавлялся восклицательный знак, а при клике на ul в консоль выводилась информация об этом.
// let div = document.querySelector('div');
// let ul = document.querySelector('ul');
// let items  = div.querySelectorAll('li');
// div.addEventListener('click', function(event) {
// 	if (event.target.tagName === 'UL') {
//         console.log('клик именно по списку');
//     }
// 	if (event.target.tagName === 'LI') {
//     event.target.textContent = event.target.textContent + '!';
// 		console.log('клик именно по элементу');
// 	}
// })

//435-437
// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
// function parent() {
// 	console.log(this.value); // выведет 'text'
// 	let self = this; // запишем this в любую переменную, например, в self
// 	function child() {
// 		console.log(self.value); // выведет 'text'
// 	}
// 	child();
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
// function parent() {
// 	child(this); // передаем параметром this
// 	function child(param) {
// 		console.log(param.value); // выводим value инпута
// 	}
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
// function parent() {
// 	console.log(this.value); // выведет 'text'
// 	let child = () => {
// 		console.log(this.value); // выведет 'text'
// 	}
// 	child();
// }

// 438
// №1 Дана функция:
// function func() {
// 	console.log(this.value);
// }
// Даны три инпута:
// <input id="elem1" value="text1">
// <input id="elem2" value="text2">
// <input id="elem3" value="text3">
// С помощью метода call и функции func выведите на экран value каждого из инпутов.
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// function func() {
//     console.log(this.value);
// }
// func.call(elem1);
// func.call(elem2);
// func.call(elem3);

// 439
// №1 Пусть дан следующий код:
// <input id="elem" value="hello">
// let elem = document.querySelector('#elem');
// function func(surname, name) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// func(); // тут должно вывести 'hello, John Smit'
// Добавьте в последнюю строчку метод call так, чтобы на экран вывелось 'hello, John Smit'.
// Слово 'hello' должно взяться из value инпута, а 'John' и 'Smit' должны быть параметрами функциями.
// let elem = document.querySelector('#elem');
// function func(surname, name) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// func.call(elem, 'Jhon', 'Smit');

// 440
// №1 Пусть дан следующий код:
// <input id="elem" value="hello">
// let elem = document.querySelector('#elem');
// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }
// func(); // тут должно вывести 'hello, John Smit'
// Добавьте в последнюю строчку метод apply так, чтобы на экран вывелось 'hello, John Smit'.
// Слово 'hello' должно взяться из value инпута, а 'John' и 'Smit' должны быть параметрами функциями.
// let elem = document.querySelector('#elem');
// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }
// func.apply(elem, ['Jhon', 'Smit']);

//441
// №1 Пусть дан следующий код:
// <input id="elem" value="привет">
// let elem = document.getElementById('elem');
// function func(name, surname) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// // тут напишите конструкцию с bind()
// func('John', 'Smit'); // тут должно вывести 'hello, John Smit'
// func('Eric', 'Luis'); // тут должно вывести 'hello, Eric Luis'
// Напишите в указанном месте конструкцию с методом bind так, чтобы this внутри функции func всегда указывал на инпут из переменной elem.
// let elem = document.getElementById('elem');
// function func(name, surname) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// let newFunc = func.bind(elem);
// newFunc('John', 'Smit');
// newFunc('Eric', 'Luis');

// let elem = document.getElementById('elem');
// function func(name, surname) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// func = func.bind(elem);
// func('John', 'Smit');
// func('Eric', 'Luis');

//442
// №1 Запустите таймер, который каждые 3 секунды будет что-нибудь выводить в консоль.
// setInterval(timer, 3000);
// function timer() {
// 	console.log('!');
// }

// setInterval(function() {
// 	console.log('!');
// }, 3000);

//443
// №1 Пусть дана переменная, в которой изначально хранится число 100. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль.
// let i = 100;
// setInterval(function() {
// 	i--;
// 	console.log(i);
// }, 1000);

// let i = 100;
// setInterval(function() {
// 	console.log(--i);
// }, 1000);

// let i = 100;
// setInterval(() => console.log(--i), 1000);

//444
// №1 Пусть дана переменная, в которой изначально хранится число 10.
// Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль.
// Как только значение переменной достигнет нуля - остановите таймер.
// let i = 10;
// let timerId = setInterval(function() {
// 	console.log(--i);
// 	if (i <= 0) {
// 		clearInterval(timerId);
// 	}
// }, 1000);

//445
// №1 Сделайте кнопку, по нажатию на которую в консоль будет выводится обратный отсчет, начиная с 100.
// let start = document.querySelector('#start');
// start.addEventListener('click', function() {
// 	let i = 100;
// 		setInterval(function() {
// 		console.log(--i);
// 	}, 1000);
// });

//446
// №1 Возьмите ваше решение предыдущей задачи. Проверьте, что многократное нажатие на кнопку приводит к ускорению отсчета. 
// Исправьте эту проблему.
// let start = document.querySelector('#start');
// start.addEventListener('click', function func() {
// 	let i = 100;
// 	setInterval(function() {
// 		console.log(--i);
// 	}, 1000);
// 	this.removeEventListener('click', func);
// });

//447
// №1 Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки.
// По нажатию на первую кнопку запустите таймер, который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. 
// Как только значение переменной достигнет нуля - остановите таймер.
// По нажатию на вторую кнопку остановите таймер.
// Также остановите таймер, если вторая кнопка не была нажата, но значение переменной достигло нуля.
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function func () {
//     let i = 100;
// 	timerId = setInterval(function() {
//     		console.log(--i);
//         if (i <= 0) {
//             clearInterval(timerId);
//         }
// 	}, 1000);
//     	this.removeEventListener('click', func);
//     });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
//     });
//№6 Приведенный мною в теоретической части код не учитывает то, что на кнопку старт можно сделать несколько нажатий. 
// Для исправления этой проблемы можно по нажатию на кнопку старт отвязывать событие от этой кнопки, а по нажатию на кнопку стоп - привязывать обратно.
// Исправьте проблему.
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function func () {
//     let i = 100;
// 	timerId = setInterval(() => {
//     		console.log(--i);
//         if (i <= 0) {
//             clearInterval(timerId);
//         }
// 	}, 1000);
//     });
// stop.addEventListener('click', function () {
// 	clearInterval(timerId);
//     });

//448
// №2 Пусть в инпуте в атрибуте value изначально записано число 10.
// Запустите таймер, который каждую секунду будет уменьшать это число на единицу.
// let elem = document.querySelector('#elem');
// setInterval(function() {
// 	elem.value = Number(elem.value) - 1;
// }, 1000);
// №3 Модифицируйте предыдущую задачу так, чтобы,
// как только содержимое инпута станет равно нулю, таймер прекратил свою работу.
// let elem = document.querySelector('#elem');
//     let timerId = setInterval(function() {
// 	elem.value = Number(elem.value) - 1;
//   if(elem.value<=0){
//     clearInterval(timerId)
//   } 
// }, 1000);

//449
// №1 Пусть дан такой код:
// <input type="button" id="elem" value="1">
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
// 	setInterval(function() {
// 		this.value = Number(elem.value) + 1;
// 	}, 1000);
// });
// Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду увеличивалось на 1.
// Однако, по нажатию на кнопку вообще ничего не происходит.
// Исправьте ошибку автора кода. Напишите текст, в котором вы дадите объяснение автору кода, почему возникла его ошибка.
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
//     let self = this;
// 	setInterval(function() {
// 		self.value = Number(elem.value) + 1;
// 	}, 1000);
// });

//450
// №1 Дана кнопка. Дан абзац, текстом которого является число.
// По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.
// let buttonstart = document.querySelector('#start');
// let p= document.querySelector('#num');
// let num=10;
// buttonstart.addEventListener('click', () => {
//     setInterval(()=> {
//         num++;
//         p.textContent=num;
//        }, 1000);
//     });
// №2 Дана кнопка. Дан абзац, текстом которого является число, например, 10.
// По нажатию на кнопку запустите таймер, который каждую секунду будет уменьшать текст абзаца на 1.
// Как только значение абзаца станет равно нулю - остановите таймер.
// let buttonstart = document.querySelector('#start');
// let p= document.querySelector('#num');
// let num=10;
// buttonstart.addEventListener('click', () => {
//     let timerId =setInterval(()=> {
//         num--;
//         if(num<=0){
//             clearInterval(timerId);
//         }
//         p.textContent=num;
//        }, 1000);
//     });
// №3 Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.
// let elem = document.querySelector('#elem');
// setInterval(function() {
//     let num = parseFloat(elem.value);
// elem.value=Math.pow(num, 2);
// }, 1000);
// №4 Дан инпут.
// В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа.
// Когда отсчет дойдет до нуля - он должен закончится.
// let elem = document.querySelector('#elem');
// let p= document.querySelector('#num');
// elem.addEventListener('blur', () => {
//     let count = parseFloat(elem.value);
//     let timerId =setInterval(()=> {
//       p.textContent = count;
//       count--;
//            if (count < 0) {
//           clearInterval(timerId);
//         }
//       }, 1000);
//     })
// №5 Дан инпут, кнопка и абзац. В инпут вводится какое-то число.
// По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.
// let elem = document.querySelector('#elem');
// let p= document.querySelector('#num');
// let buttonstart = document.querySelector('#start');
// buttonstart.addEventListener('click', () => {
//     let count = parseFloat(elem.value);
//         let timerId =setInterval(()=> {
//           p.textContent = count;
//           count--;
//                if (count < 0) {
//               clearInterval(timerId);
//             }
//           }, 1000);
//         })
// №6 Дан абзац и две кнопки.
// Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, а по нажатию на вторую таймер останавливался.
// let p = document.querySelector('#num');
// let buttonstart = document.querySelector('#start');
// let buttonstop = document.querySelector('#stop');
// let count = 1;
// let timerId;
// buttonstart.addEventListener('click', () => {
//             timerId =setInterval(()=> {
//             p.textContent = count++;
//               }, 1000);
//             })
// buttonstop.addEventListener('click', () => {
//                 clearInterval(timerId);
//     })
// №7 Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.
// let p = document.querySelector('p');
// p.style.color="red";
// setInterval(()=>{
//  if(p.style.color == "red"){
//     setInterval(()=>{
//         p.style.color="green"
//     }, 1000);
// }else{
//     setInterval(()=>{
//             p.style.color="red"
//         }, 1000);
//     }
//     }, 1000);
//№8 Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы.
// Реализуйте такие же часики, как показано ниже в образце:
// function CurrentTime() {
//     let getNowDate = new Date();
//     let hours = getNowDate.getHours();
//     let minutes = getNowDate.getMinutes();
//     let seconds =getNowDate.getSeconds();
//     console.clear();
//     console.log( hours + ':' + minutes + ':' + seconds);
//   }
//     setInterval(CurrentTime, 1000);

//451
// №1 Дан абзац. Напишите код, который выведет сообщение в этот абзац через 10 секунд после загрузки страницы.
// let p = document.querySelector('p');
// setTimeout(function() {
// 		p.textContent="10 секунд прошло"
// 	}, 10000);

//452
// №1 Выведите в консоль число 0.
// Через секунду выведите число 1, через две секунды выведите число 2, через 3 секунды выведите число 3.
// И так далее до бесконечности.
// let i = -1;
// function timer() {
// 	setTimeout(function() {
// 		console.log(++i);
// 			timer();
// 	}, 1000);
// }
// timer();

//453
// №1 Дан ol: <ol id="elem"></ol> Вставьте ему в конец li с текстом 'item'.
// let olElem = document.querySelector('#elem');
// let li = document.createElement('p');
// li.textContent = 'item';
// elem.appendChild(li);
// №2 Дан ol и кнопка:
// <ol id="elem"></ol>
// <button id="button">click me</button>
// Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'item'.
// let olElem = document.querySelector('#elem');
// let button = document.querySelector('button')
// button.addEventListener('click', () => {
// let li = document.createElement('li');
// li.textContent = 'item';
// elem.appendChild(li);
// })

//454
// №1 Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li.
// Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак.
// let ol = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//   let li = document.createElement('li');
//   ol.appendChild(li);
// li.addEventListener('click', function() {
//     li.textContent += '!';
//   });
// });

//455
// №1 Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li.
// Сделайте так, чтобы текстом каждой li был ее порядковый номер.
// let parentUL = document.querySelector('ul');
// for (let i = 1; i <= 10; i++) {
// 	let li = document.createElement('li');
// 	li.textContent = i;
// 	parentUL.appendChild(li);
// }

//456
// №1 Дан див. Запустите цикл, который добавит в наш див 5 инпутов.
// Пусть дан также абзац. Сделайте так, чтобы каждый из новых инпутов по потери фокуса записывал свой текст в абзац.
// let div = document.querySelector('div');
// let p = document.querySelector('p');
// for (let i = 1; i <= 5; i++) {
// 	let input = document.createElement('input');
// 	input.addEventListener('blur', function() {
// 		p.textContent=input.value;
// 	});
// 	div.appendChild(input);
// }

//457
// №1 Дан следующий код:
// <ul>
// 	<li>1</li>
// 	<li>2</li>
// 	<li>3</li>
// </ul>
// Сделайте так, чтобы любая li удалялась по клику на нее.
// let elems = document.querySelectorAll('li');
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		elem.remove();
// 	});
// }
// №2 Дан следующий код:
// <ul id="parent">
// 	<li>1</li>
// 	<li>2</li>
// 	<li>3</li>
// </ul>
// <input type="submit" id="button">
// Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent.
// let parent = document.querySelector('#parent');
// let button = document.querySelector('#button');
// let lastChild = parent.lastElementChild;
// 	button.addEventListener('click', function() {
// 		parent.removeChild(lastChild);
// 	});

//458
// №1 Дан ul:
// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Вставьте ему в начало элемент с текстом 'start', а в конец - элемент с текстом 'finish'.
// let elem = document.querySelector('#elem');
// let li1 = document.createElement('li');
// let li2 = document.createElement('li');
// li1.textContent = 'finish';
// li2.textContent = 'start';
// elem.append(li1);
// elem.prepend(li2);

//459
// №1 Дан элемент #elem:
// <ul id="parent">
// 	<li>text</li>
// 	<li>text</li>
// 	<li id="elem">text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Вставьте перед этим элементом элемент с текстом 'new'.
// let parent = document.querySelector('#parent');
// let elem = document.querySelector('#elem');
// let li = document.createElement('li');
// li.textContent = 'new';
// parent.insertBefore(li, elem);
// №2 Модифицируйте предыдущую задачу так, чтобы клик на вставленный элемент приводил к тому, что в конец его текста будет добавляться '!'.
// let parent = document.querySelector('#parent');
// let elem = document.querySelector('#elem');
// let li = document.createElement('li');
// li.textContent = 'new';
// parent.insertBefore(li, elem);
// li.addEventListener('click', function(){
//     li.textContent+='!'
// })

//460
// №1 Дан элемент:
// <div id="elem" style="border: 1px solid red;">
// 	<p>text</p>
// 	<p>text</p>
// 	<p>text</p>
// </div>
// Вставьте перед ним абзац с текстом '!!!'.
// let p = document.createElement('p');
// p.textContent = '!!!';
// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('beforeBegin', p);
// №2 Дан элемент:
// <div id="elem" style="border: 1px solid red;">
// 	<p>text</p>
// 	<p>text</p>
// 	<p>text</p>
// </div>
// Вставьте после него абзац с текстом '!!!'.
// let p = document.createElement('p');
// p.textContent = '!!!';
// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('afterEnd', p);
// №3 Дан элемент:
// <div id="elem" style="border: 1px solid red;">
	//<p>text</p>
	//<p>text</p>
	//<p>text</p>
//</div>
// Вставьте ему в начало абзац с текстом '!!!'.
// let p = document.createElement('p');
// p.textContent = '!!!';
// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('afterBegin', p);
// №4 Дан элемент:
// <div id="elem" style="border: 1px solid red;">
// 	<p>text</p>
// 	<p>text</p>
// 	<p>text</p>
// </div>
// Вставьте ему в конец абзац с текстом '!!!'.
// let p = document.createElement('p');
// p.textContent = '!!!';
// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('beforeEnd', p);

//461
// №1 Дан элемент:
// <div id="elem" style="border: 1px solid red;">
// 	<p>text</p>
// 	<p>text</p>
// 	<p>text</p>
// </div>
// Дан элемент. Вставьте перед ним следующий тег:
// <div class="www"><p>text</p><p>text</p><input></div>
// let elem= document.querySelector('#elem');
// elem.insertAdjacentHTML('beforeBegin', '<div class="www"><p>text</p><p>text</p><input></div>');

//462
// №1 Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
// let input = document.querySelector('input');
// let button = document.querySelector('#button');
// let clone = input.cloneNode(true);
// button.addEventListener('click', ()=>{
// input.append(clone);
// });

//463
// №1 Дан элемент:
// <div id="elem" class="www"></div>
// Проверьте, является ли этот элемент элементом с классом www.
// let elem = document.querySelector('#elem');
// console.log(elem.matches('div.www'));
// №2 Дан элемент. Проверьте, является ли этот элемент абзацем.
// let elem = document.querySelector('#elem');
// console.log(elem.matches('p'));
// №3 Даны две переменные elem1 и elem2, содержащие два элемента:
// <div id="elem1">
// 	<p id="elem2"></p>
// </div>
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// Проверьте, является ли элемент из elem2 потомком элемента из elem1.
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let contains = elem1.contains(elem2);
// console.log(contains);
