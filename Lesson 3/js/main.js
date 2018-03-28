let money,
	name,
	time,
	price

function start() {
	money = prompt('Ваш бюджет?');

	while(isNaN(money) || money == '' || money == null) {
		money = prompt('Ваш бюджет?');
	}
	name = prompt('Название Вашего магазина?').toUpperCase();
	time = 21;
}

start();

var mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	isOpen: true,
	discount: false
}

// найм сотрудника
function employment() {
	for (var j = 0; j <= 3; j++) {
		let a = prompt('Введите имя сотрудника');

		if ((typeof(a))==='string' && (typeof(a)) !== null && a != '' && a.length <= 50) {
			mainList.employers[j+1] = a;
		} else {
			alert('Введите данные сотрудника');
			j--;
		}
	}
}
// employment();

//скидка
function addDiscount() {
	if (mainList.discount == true) {
		price = price * 0.8;
	}
}

var shopGoods = mainList.shopGoods;

// добавление типов товара
function chooseGoods() {
	for (i = 0; i <= 2; i++) {

		let b = prompt('Какой тип товаров будем продавать?');

		if ((typeof(b))==='string' && (typeof(b)) !== null && b != '' && b.length <= 50) {
			shopGoods[i] = b;
		} else {
			alert('Введите тип товара');
			i--;
		}
	}
}

chooseGoods();

// время работы магазина
function workTime(time) {
	if (time < 0) {
		console.log('Это невозможно');
	} else if (time > 8 && time < 20) {
			console.log('Время работать!');
		} else if (time < 24) {
				console.log('Уже поздно');
			} else {
					console.log('В сутках только 24 часа');
				}
}

workTime(18);

function addDayBudget() {
	var dayBudget = Math.round(money/30);
	alert('Ваш бюджет на один день составляет '+ dayBudget);
}

addDayBudget();
console.log(mainList);






