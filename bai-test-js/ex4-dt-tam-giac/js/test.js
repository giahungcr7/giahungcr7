

var a = 5;
var b = 6;
var c= 7;

var p = (a+b+c)/2;
var dt = p*(p-a)*(p-b)*(p-c);
var s = Math.sqrt(dt);

document.getElementById('s').innerHTML = s;