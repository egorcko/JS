let menuItem = document.getElementsByClassName('menu-item'),
	menu = document.getElementsByClassName('menu'),
	header = document.getElementById('title'),
	adv = document.getElementsByClassName('adv'),
	pr = document.getElementById('prompt');

// Замена мест пунктов и добавление пятого
let five = document.createElement('li'),
	three = document.createElement('li');
menu[0].replaceChild(menuItem[2], menuItem[1]);
five.classList.add('menu-item');
five.innerHTML = 'Пятый пункт';
three.classList.add('menu-item');
three.innerHTML = 'Третий пункт';

menu[0].appendChild(five);
menu[0].insertBefore(three, menuItem[2]);

// Изменение фона
document.body.style.background = "url('img/apple_true.jpg') no-repeat center center";

// Удаление рекламы
adv[0].remove();

// Замена текста заголовка
header.innerHTML = 'Мы продаем только подлинную технику Apple';

// Отношение
let question = prompt('Ваше отношение к технике Apple?', 'положительное');
pr.innerHTML = 'Отношение к технике Apple ' + question;
