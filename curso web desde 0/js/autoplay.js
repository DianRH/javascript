//variables globales
var Total_secs;
var Total_mins;
var cronometer;

var board = new Array(4);//4 casillas

function autoplay(){

  for (i = 0; i <4; i++) board[i] = new Array(4); //matriz para el tablero

  ResetTime();//función de resetear el cronometro
  StartTime();//función de empezar tiempo del cronometro
}

autoplay();
