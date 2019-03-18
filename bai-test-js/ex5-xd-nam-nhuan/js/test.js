

var year = new Date();

var y = year.getFullYear();

document.getElementById('p').innerHTML = y;

if((y%4===0 && y%100!==0 && y%400!==0)||(y%400===0 && y%100 ===0)){
    document.getElementById('s').innerHTML = "nhuận";
}else{
    document.getElementById('s').innerHTML = "không nhuận";
}