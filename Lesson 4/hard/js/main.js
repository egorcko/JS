let quantity;

quantity = prompt('Количество массивов:', '3');

	while(isNaN(quantity) || quantity === '' || quantity === null) {
		quantity = prompt('Количество массивов:', '3');
	}

let matrix = [];
var sum = 0;

for (var i = 0; i < quantity; i++) {
	matrix[i] = [];
	for (var j = 0; j < 5; j++) {
		matrix[i][j] = Math.floor(Math.random()*10);
		sum = sum + matrix[i][j];
	}
	document.write('Сумма элементов массива ' + (i+1) + ': ' + sum + '<br>');
	sum = 0;
}

console.log(matrix);