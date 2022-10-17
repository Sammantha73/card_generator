window.onload = function() {
  creaCartas();
};


function creaCartas() {
  var numeros = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  var vnumeros = numeros.length;
  randomnumeros= Math.floor(Math.random()* vnumeros);
  
  var spades, clubs ,hearts, diamonds;
    spades = "&spades;"; 
    clubs = "&clubs;";
    hearts = "&hearts;";
    diamonds = "&diams;";

  var iconos = [spades,clubs, hearts, diamonds ];
   randomiconos= Math.floor(Math.random()* iconos.length);
 
  var card = document.createElement("div");
 card.classList.add("card", iconos[randomiconos]);
  card.innerHTML = 
  '<span class="simbolo top">' + iconos[randomiconos] + '</span>' + 
  '<span class="number_center">' +numeros[randomnumeros] + '</span>' + 
  '<span class="simbolo bot">'+ iconos[randomiconos] + '</span>';
  document.body.appendChild(card);
   } 

var mybtn = document.createElement("button");
mybtn.setAttribute("id","button1");
mybtn.innerHTML ="crea carta";
document.body.appendChild(mybtn)

document.getElementById("button1").addEventListener("click", creaCartas);   

