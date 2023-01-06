function restar(){
var a = parseFloat(document.getElementById("ahorros").value)||0.
b = parseFloat(document.getElementById("comida").value)||0.
c = parseFloat(document.getElementById("hoteleria").value)||0.
d = parseFloat(document.getElementById("transporte").value)||0. 
e = parseInt(document.getElementById("pasajeros").value)||1. 

document.getElementById("total").value =a - (b*e) - (c*e) - (d*e) ;
}   

