let time = 15;
let i = 0;

let mainList = {
	budget: +prompt('Ваш бюджет?'),
	name: prompt('Название Вашего магазина?'),
	shopGoods: [],
	employers: {},
	isOpen: true
}

let budget = mainList.budget;
let shopGoods = mainList.shopGoods;

for (i = 0; i <= 2; i++) {

	let a = prompt('Какой тип товаров будем продавать?');

	if ((typeof(a))==='string' && (typeof(a)) !== null && a != '' && a.length <= 50) {
		shopGoods[i] = a;
	} else {
		alert('Введите тип товара');
		i--;
	}
}

// Пример с циклом while

/* while (i <= 2) {
	let a = prompt('Какой тип товаров будем продавать?');

	if ((typeof(a))==='string' && (typeof(a)) !== null && a != '' && a.length <= 50) {
		shopGoods[i] = a;
		i++
	} else {
		alert('Введите тип товара');
	}
} */

// Пример с циклом do while

/* do {
	let a = prompt('Какой тип товаров будем продавать?');

	if ((typeof(a))==='string' && (typeof(a)) !== null && a != '' && a.length <= 50) {
		shopGoods[i] = a;
		i++
	} else {
		alert('Введите тип товара');
	}
} while (i <= 2); */

if (time < 0) {
	console.log('Это невозможно');
} else if (time > 8 && time < 20) {
		console.log('Время работать!');
	} else if (time < 24) {
			console.log('Уже поздно');
		} else {
				console.log('В сутках только 24 часа');
			}

let dayBudget = Math.round(budget/30);
alert('Ваш бюджет на один день составляет '+ dayBudget);

console.log(mainList);









