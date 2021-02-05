
// Cambia la cantidad de chats

addEventListener('load',inicio,false);

function inicio(){
    document.getElementById('chatsRange').addEventListener('change',cambioChats,false);
}

function cambioChats(){    
    document.getElementById('chats').innerHTML=document.getElementById('chatsRange').value;
}

// Aplica descuentos

let toggle = document.getElementById("toggle");
let text = document.getElementById("periodo");

var prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
