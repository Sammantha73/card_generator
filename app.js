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
  '<span class="card-value-suit top">' + iconos[randomiconos] + '</span>' + 
  '<span class="card-suit">' +numeros[randomnumeros] + '</span>' + 
  '<span class="card-value-suit bot">'+ iconos[randomiconos] + '</span>';
  document.body.appendChild(card);
   } 
