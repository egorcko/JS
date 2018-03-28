let str = 'урок-3-был слишком легким';
let arr = str.split('-');
let arr2 = str.split(' ');

//1 
let letter = str.substr(0,1);
letter = letter.toUpperCase();

console.log(letter+str.substr(1));

//2
let dash = str.substr(4,1);
dash = ' ';

console.log(letter+arr[0].substr(1)+dash+arr[1]+dash+arr[2]);

//3
let light = arr2[arr2.length-1];

console.log(light.substr(0,4)+'oo');

//4
let arr3 = [20, 33, 1, 'Человек', 2, 3];
let sum = 0;
let cube;

for (var i = 0; i < arr3.length; i++) {
	if (typeof(arr3[i])==='string') {
		i++;
		i--;
	} else {
			cube = Math.pow(arr3[i],3);
			sum += cube;
		}
}
console.log(Math.sqrt(sum).toFixed(3));


