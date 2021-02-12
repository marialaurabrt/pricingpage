
// Cambia la cantidad de chats escuchando el input range

addEventListener('load',inicio,false);

function inicio(){
    document.getElementById('chatsRange').addEventListener('change',cambioChats,false);
}

function cambioChats(){    
    document.getElementById('chats').innerHTML = document.getElementById('chatsRange').value;
}

// Array precios posibles

var prices = [12, 24, 36, 44, 56, 68, 72, 84, 96, 110] 

// Función que cambia precios tomando como referencia el valor del input range

function cambiaPrices(){
    if (document.getElementById('chatsRange').value == 100){
        document.getElementById('price').innerHTML = prices[0].toFixed(2);
    } 
    if (document.getElementById('chatsRange').value == 200){
        document.getElementById('price').innerHTML = prices[1].toFixed(2);
    }
    if (document.getElementById('chatsRange').value == 300){
        document.getElementById('price').innerHTML = prices[2].toFixed(2);
    }
    if (document.getElementById('chatsRange').value == 400){
        document.getElementById('price').innerHTML = prices[3].toFixed(2);
    }
    if (document.getElementById('chatsRange').value == 500){
        document.getElementById('price').innerHTML = prices[4].toFixed(2);
    }
    if (document.getElementById('chatsRange').value == 600){
        document.getElementById('price').innerHTML = prices[5].toFixed(2);
    }
    if (document.getElementById('chatsRange').value == 700){
        document.getElementById('price').innerHTML = prices[6].toFixed(2);
    }
    if (document.getElementById('chatsRange').value == 800){
        document.getElementById('price').innerHTML = prices[7].toFixed(2);
    }
    if (document.getElementById('chatsRange').value == 900){
        document.getElementById('price').innerHTML = prices[8].toFixed(2);
    }
    if (document.getElementById('chatsRange').value == 1000){
        document.getElementById('price').innerHTML = prices[9].toFixed(2);
    }
}

// Aplica descuentos

function descuento(){
    // Onclick que se ejecuta en el checkbox y donde aparece el output 

    var toggle = document.getElementById("toggle");
    var text = document.getElementById("periodo");

    // Si el checkbox es true, muestra "Año", sino muestra "Mes"
    // Si es true, aplica descuento 25% OFF.

    if (toggle.checked == true){
        
        document.getElementById("periodo").innerHTML = 'año'
        
        if (document.getElementById('chatsRange').value == 100){
            document.getElementById('price').innerHTML = ((prices[0])*0.75).toFixed(2);
        } 
        if (document.getElementById('chatsRange').value == 200){
            document.getElementById('price').innerHTML = ((prices[1])*0.75).toFixed(2);
        }
        if (document.getElementById('chatsRange').value == 300){
            document.getElementById('price').innerHTML = ((prices[2])*0.75).toFixed(2);
        }
        if (document.getElementById('chatsRange').value == 400){
            document.getElementById('price').innerHTML = ((prices[3])*0.75).toFixed(2);
        }
        if (document.getElementById('chatsRange').value == 500){
            document.getElementById('price').innerHTML = ((prices[4])*0.75).toFixed(2);
        }
        if (document.getElementById('chatsRange').value == 600){
            document.getElementById('price').innerHTML = ((prices[5])*0.75).toFixed(2);
        }
        if (document.getElementById('chatsRange').value == 700){
            document.getElementById('price').innerHTML = ((prices[6])*0.75).toFixed(2);
        }
        if (document.getElementById('chatsRange').value == 800){
            document.getElementById('price').innerHTML = ((prices[7])*0.75).toFixed(2);
        }
        if (document.getElementById('chatsRange').value == 900){
            document.getElementById('price').innerHTML = ((prices[8])*0.75).toFixed(2);
        }
        if (document.getElementById('chatsRange').value == 1000){
            document.getElementById('price').innerHTML = ((prices[9])*0.75).toFixed(2);
        }

    } 
    if (toggle.checked == false){
        document.getElementById("periodo").innerHTML = 'mes'
    }
}
