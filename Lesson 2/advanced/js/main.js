// 1 
let x = 5;
document.write('1: '+x++);

//2
let str = typeof([ ] + false - null + true);
document.write('<br>2: '+str);

//3
let y = 1;
let a = y = 2;
document.write('<br>3: '+a);

//4
let sum = [ ] + 1 + 2;
document.write('<br>4: '+sum);

//5
document.write('<br>5: '+("1"[0]));

//6
document.write('<br>6: '+(2 && 1 && null && 0 && undefined));

//7
document.write('<br>7: ');

//8
document.write('<br>8: '+( null || 2 && 3 || 4 ));

//9
document.write('<br>9: ');

//10
document.write('<br>10: '+( +"Infinity" ));

//11
document.write('<br>11: '+("ёжик" > "яблоко"));

//12
document.write('<br>12: '+(0 || "" || 2 || undefined || true || falsе));