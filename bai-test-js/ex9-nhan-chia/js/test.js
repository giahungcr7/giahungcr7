

function Multiply(){
    var a = parseInt(document.getElementById('st1').value);
    var b = parseInt(document.getElementById('st2').value);
    var c = a*b;
    document.getElementById('demo').innerHTML = c;
}

function Divide(){
    var a = parseInt(document.getElementById('st1').value);
    var b = parseInt(document.getElementById('st2').value);
    var c = a/b;
    if(b==0){
        document.getElementById('demo').innerHTML = "Khong chia duoc cho 0";
    }else{
        document.getElementById('demo').innerHTML = c;
    }
}