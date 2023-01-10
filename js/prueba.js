function restar(){
    var a = parseFloat(document.getElementById("ahorros").value);
    var b = parseFloat(document.getElementById("comida").value);
    var c = parseFloat(document.getElementById("hoteleria").value);
    var d = parseFloat(document.getElementById("transporte").value); 
    var e = parseInt(document.getElementById("pasajeros").value); 
    var total = 0;
    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(e)) {
      total = a - (b*e) - (c*e) - (d*e);
      document.getElementById("total").value = total;
    } else{
      alert("Ingresa solo valores numericos");
    }
    if (total > 0){
        alert("Felicidades! Puedes viajar sin preocupaciones")
    }
    else if (total === 0) {
      alert("Cuidado, quedarias con 0 dolares");
    }
    else if (total < 0)
    alert("Cuidado! Quedarias con menos dinero de lo deseado");
    
        
        var tipo_cambio = 350; 
        var total_pesos = total * tipo_cambio;
        document.getElementById("total-pesos").value = total_pesos;
    
    
  }

 

