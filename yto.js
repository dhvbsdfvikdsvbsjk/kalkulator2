let iput = document.querySelector('.iput');
let button = document.querySelector('button');
let odin = document.querySelector('.kalik');
let dva = document.querySelector('.ee');
let tri = document.querySelector('.rr');



button.onclick = function () {
    var e = iput.value;
    if(Math.sign(e) === 1){
        odin.innerHTML =  Math.pow(e, 2); 
    dva.innerHTML =  6 * Math.pow(e, 2);   
    tri.innerHTML =  Math.pow(e, 3);
    }else if(Math.sign(e) === -1){
        alert("Число меньше нуля");
    }else{
        alert("Неверно");
    }}
    /*
    if(e <= 0 & e == "")
    {
        alert("ne");
    }
    else {
        
        
    }
    /*
}
/*
button.oneclick = function hjv () {
    button.reset();
    odin.innerHTML = "ad";
    dva.innerHTML = "ds";
    tri.innerHTML = "rd";
}
*/
document.getElementById("lui").onclick = function(e) {
    document.getElementById("textInput").value = "";
    /*
    document.getElementById(odin).value = ""; 
    document.getElementById(dva).value = ""; 
    document.getElementById(tri).value = "";  
    
    */
   odin.innerHTML = " ";
   dva.innerHTML = " ";
   tri.innerHTML = " ";
}
