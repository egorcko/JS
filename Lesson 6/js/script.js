let open = document.getElementById('open-btn'),
	leftName = document.getElementsByClassName('name-value')[0],
	leftBudget = document.getElementsByClassName('budget-value')[0],
	leftGoods = document.getElementsByClassName('goods-value')[0],
	leftItems = document.getElementsByClassName('items-value')[0],
	leftEmployers = document.getElementsByClassName('employers-value')[0],
	leftDiscount = document.getElementsByClassName('discount-value')[0],
	leftIsOpen = document.getElementsByClassName('isopen-value')[0],

	goodsItem = document.getElementsByClassName('goods-item'),
	goods_btn = document.getElementsByTagName('button')[1],
	count_budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],
	chooseItem = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	countBudgetValue = document.querySelector('.count-budget-value'),
	hireEmployers = document.querySelectorAll('.hire-employers-item'),
	discount_value = document.getElementsByClassName('discount-value')[0];
	checkbox_ios = document.getElementsByClassName('switch')[0];


let money,
	price;

open.addEventListener('click', () => {
	money = prompt('Ваш бюджет?', '');

	while(isNaN(money) || money === '' || money === null) {
		money = prompt('Ваш бюджет?', '');
	}
	leftBudget.textContent = money;

	leftName.textContent = prompt('Название Вашего магазина?', '').toUpperCase();

});

goods_btn.addEventListener('click', () => {
	for (var i = 0; i < goodsItem.length; i++) {

		let a = goodsItem[i].value;

		if ((typeof(a))==='string' && (typeof(a)) !== null && a.length <= 50) {
			mainList.shopGoods[i] = a;
			leftGoods.textContent = mainList.shopGoods;
		} else {
			i--;
		}
	}
});

chooseItem.addEventListener('change', () => {
	let items = chooseItem.value;

	if(isNaN(items) && items != '') {
		mainList.shopItems = items.split(',');
		mainList.shopItems.sort();

		leftItems.textContent = mainList.shopItems;
	}
});

timeValue.addEventListener('input', () => {
	let time = timeValue.value;

	if (time < 0) {
			console.log('Это невозможно');
			mainList.isOpen = false;
		} else if (time > 8 && time < 20) {
				console.log('Время работать!');
				mainList.isOpen = true;
			} else if (time < 24) {
					console.log('Уже поздно');
					mainList.isOpen = false;
				} else {
						console.log('В сутках только 24 часа');
						mainList.isOpen = false;
					}
	if (mainList.isOpen == true) {
		leftIsOpen.style.backgroundColor = 'green'
	} else {
		leftIsOpen.style.backgroundColor = 'red'
	};
});

count_budget_btn.addEventListener('click', () => {
	countBudgetValue.value = money/30;
});

employers_btn.addEventListener('click', () => {
	for (var j = 0; j < hireEmployers.length; j++) {
		let name = hireEmployers[j].value;
		mainList.employers[j] = name;

		leftEmployers.textContent += mainList.employers[j] + ', ';
	}
});
checkbox_ios.addEventListener('change', () => {
	if (checkbox_ios.checked) {
		mainList.discount = true;
	} else if (!checkbox_ios.checked) {
		mainList.discount = false;
	}
});

const mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	isOpen: false,
	discount: false,
	shopItems: [],
	addDiscount: function addDiscount() {
		if (mainList.discount === true) {
			price = price * 0.8;
		}
	}
};



// console.log('Наш магазин включает в себя:');
// for(let key in mainList) {
// 	console.log(key + ': ' + mainList[key]);
// }
