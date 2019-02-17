
/*-------------------Código para una tecla------------------------------------*/
//1.-asignar un evento a un elemento (evento de click)
//2.-event listener
var btnDO = document.getElementById('btnDO');//enlace ó selección del elemento

btnDO.addEventListener('click', playSound); //ctrl+D para modificar renombrar

function playSound(){
  // existen varias formas de reproducir sonidos
  // tomar un elemento audio
  //obtener una referencia de dicho Elemento(existen varias)
  //dar la orden de reproducción
var audio = document.getElementById('audioDO');
audio.pause();       //detiene la reproducción
audio.currentTime =0; /*hace que se reinicie el audio es igual a la función stop
                        que no existe en js*/
audio.play(); // funcion para reproducir el audio

}
