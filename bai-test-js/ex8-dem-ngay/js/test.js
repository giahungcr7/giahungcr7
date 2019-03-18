
var year = new Date();

var noel = new Date(year.getFullYear(),12,24);
var lech = noel.getTime() - year.getTime();

var c = Math.round(lech / 1000 / 60 / 60/ 24);
console.log(c);
// alert(count);
document.getElementById("demo").innerHTML = c;