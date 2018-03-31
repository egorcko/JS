let open = document.getElementById('open-btn'),
	leftName = document.getElementsByClassName('name'),
	leftBudget = document.getElementsByClassName('budget'),
	leftGoods = document.getElementsByClassName('goods'),
	leftItems = document.getElementsByClassName('items'),
	leftEmployers = document.getElementsByClassName('employers'),
	leftDiscount = document.getElementsByClassName('discount'),
	leftIsOpen = document.getElementsByClassName('isopen'),
	goodsItem = document.getElementsByClassName('goods-item'),
	button1 = document.getElementsByTagName('button')[1],
	button2 = document.getElementsByTagName('button')[2],
	button3 = document.getElementsByTagName('button')[3],
	chooseItem = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	countBudgetValue = document.querySelector('.count-budget-value'),
	hireEmployers = document.querySelectorAll('.hire-employers-item');

let arr = [open, leftName, leftBudget, leftGoods, leftItems, leftEmployers, leftDiscount, leftIsOpen, goodsItem, button1, button2, button3, chooseItem, timeValue, countBudgetValue, hireEmployers];

console.log(arr);