function gameNumber(){
    
    var x = Math.floor((Math.random() * 10) + 1);
    songaunhien = document.getElementById("demo").innerHTML = x;
        console.log("b:",songaunhien);
    var numberNhap = parseInt(prompt("Moi ban nhap mot so: ", "1"));
    console.log("c:",numberNhap);
    if(numberNhap==songaunhien){
        alert("Good Work");
    }else{
        alert("Not matched");
    }
}