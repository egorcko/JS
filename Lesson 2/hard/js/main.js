var date = new Date();
var day = date.getDay()

var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (var i = 0; i < week.length; i++) {
	if (i == day-1) {
		document.write('<i>'+week[day-1]+'</i><br>');
		} else if (i == 5 || i == 6){
			document.write('<b>'+week[i]+'</b><br>');
			} else {
				document.write(week[i]+'<br>');
				}
}

document.write('<hr>');

var arr = ['354228', '23462', '0421442', '72234', '335537', '2342', '73329'];

for (var i = 0; i < arr.length; i++) {
	var str = arr[i];
	document.write(str+'<br>');
	var arr2 = str.split('');
	if (arr2[0] == 3 || arr2[0] == 7) {
		console.log(str);
	}
}

	