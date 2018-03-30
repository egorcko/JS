let money,
	name,
	time,
	price;

function start() {
	money = prompt('Ваш бюджет?', '');

	while(isNaN(money) || money === '' || money === null) {
		money = prompt('Ваш бюджет?', '');
	}
	name = prompt('Название Вашего магазина?', '').toUpperCase();
	time = 21;
}

start();

var mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	isOpen: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for (var i = 0; i <= 2; i++) {

			let a = prompt('Какой тип товаров будем продавать?', '');

			if ((typeof(a))==='string' && (typeof(a)) !== null && a !== '' && a.length <= 50) {
				mainList.shopGoods[i] = a;
			} else {
				alert('Введите тип товара');
				i--;
			}
		}
	},
	employment: function employment() {
		for (var j = 0; j <= 3; j++) {
			let b = prompt('Введите имя сотрудника', '');

			if ((typeof(b))==='string' && (typeof(b)) !== null && b !== '' && b.length <= 50) {
				mainList.employers[j+1] = b;
			} else {
				alert('Введите имя сотрудника');
				j--;
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Это невозможно');
		} else if (time > 8 && time < 20) {
				console.log('Время работать!');
				mainList.isOpen = true;
			} else if (time < 24) {
					console.log('Уже поздно');
				} else {
						console.log('В сутках только 24 часа');
					}
	},
	addDiscount: function addDiscount() {
		if (mainList.discount === true) {
			price = price * 0.8;
		}
	},
	addDayBudget: function addDayBudget() {
		var dayBudget = Math.round(money/30);
		alert('Ваш бюджет на один день составляет '+ dayBudget);
	},
	chooseShopItems: function chooseShopItems() {
		let items = prompt('Перечислите товары через запятую', '');

		while(!isNaN(items) || items === '' || items === null) {
			items = prompt('Перечислите товары через запятую', '');
		}
		mainList.shopItems = items.split(',');
		mainList.shopItems.push(prompt('Может, добавите еще товары?',''));
		mainList.shopItems.sort();

		document.write('У нас вы можете купить: <br>');
		mainList.shopItems.forEach(function (item,i,arr) {
			document.write((i+1) + ': ' + item + '<br>');
		});
	}
};

mainList.chooseGoods();
mainList.employment();
mainList.workTime(15);
mainList.chooseShopItems();


console.log('Наш магазин включает в себя:');
for(let key in mainList) {
	console.log(key + ': ' + mainList[key]);
}
