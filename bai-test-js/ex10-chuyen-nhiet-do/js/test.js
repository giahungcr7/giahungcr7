

// Hàm convert từ độ C sang độ F
var c1 = 60;
var f1 = (c1 * 9 / 5 + 32);

document.getElementById('c').innerHTML = c1 + " &deg;C là bằng " + f1 + " &deg;F"; 
// Hàm convert từ độ F sang độ C
var f2 = 45;
var c2 = ((f2 - 32) * 5 / 9);
document.getElementById('f').innerHTML = f2 + " &deg;F là bằng " + c2 + " &deg;C"; 

