

var date_1 = new Date();

var d = date_1.getDay();

var day_name = '';
 
// Lấy tên thứ của ngày hiện tại
switch (d) {
case 0:
    day_name = " Sunday";
    break;
case 1:
    day_name = " Monday";
    break;
case 2:
    day_name = " Tuesday";
    break;
case 3:
    day_name = " Wednesday";
    break;
case 4:
    day_name = " Thursday";
    break;
case 5:
    day_name = " Friday";
    break;
case 6:
    day_name = " Saturday";
}
document.getElementById('day').innerHTML = day_name;

var time = setInterval(myTimer,1000);
function myTimer(){
    var date_2 = new Date();
    var h = date_2.toLocaleTimeString();
    document.getElementById('hours').innerHTML = h;
}
