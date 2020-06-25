/*-------------------Código para una tecla------------------------------------*/

/* 1.-asignar un evento a un elemento (evento de click)
   2.-asociar un event listener sobre el elemento */

// enlace ó selección del elemento
 /* var btnDO = document.getElementById('btnDO');
//  'click': el evento a escuchar
//  playSound: lo que va a ocurrir cuando se produzca el evento click
btnDO.addEventListener('click', playSound); */

/* pasos para reproducir el sonido de la tecla Do
1 tomar un elemento audio
2 obtener una referencia de dicho Elemento(existen varias)
3 dar la orden de reproducción */
 /* function playSound(){
  // enlace ó selección del elemento
 var audio = document.getElementById('audioDO');
 // funciona igual a la función stop que no existe en js
 // detiene la reproducción
 audio.pause();
 // hace que se reinicie el audio
 audio.currentTime =0;
// función para reproducir el audio
 audio.play();
} */

/*-------------------Código para varias teclas--------------------------------*/

/* la función .querySelector('nombre de la etiqueta, #id ó .clase' etc...)
   se obtendra las que conincidan de a cuerdo a como sean llamados */
/* la función querySelectorAll('') nos va a devolver TODOS los "elementos"
   de acuerdo de como sean llamados */

 // se llama por la etiqueta button
 /*var buttons = document.querySelectorAll('button');

 // forEach: llama a una función una vez por cada elemento en un array, en orden
 // button:  parámetro, le podemos dar cualquier nombre y representa cada elemento(button) de la lista
 buttons.forEach(function (button) {
   button.addEventListener('click',playSound);
 });*/

 /*function playSound(event){
  // con .target podemos saber a que botón se hace clic
  var button = event.target;
  // acceder al atributo data-note del html del botón sobre el que se ha hecho clic y capturar la nota
  var note = button.dataset.note;
   // concatenar audio más la nota que queremos reproducir
  var audio = document.getElementById('audio' +note);
   audio.pause();
   audio.currentTime =0;
   audio.play();
}*/

/*-------------------Código usando ES6--------------------------------*/

// variable button nunca es modificada por lo tanto se declara const
/*const buttons = document.querySelectorAll('button');

// uso de arrow function
buttons.forEach(  button =>
  button.addEventListener('click',playSound)
);

function playSound(event){
  const button = event.target;
  const note = button.dataset.note;

  // uso de template strings/literals
  const audio = document.getElementById(`audio${note}`);
  audio.pause();
  audio.currentTime =0;
  audio.play();
}*/

/*-------------------Código usando el teclado--------------------------------*/
// variable button nunca es modificada por lo tanto se declara const
const buttons = document.querySelectorAll('button');

// uso de arrow function
buttons.forEach(  button =>
  button.addEventListener('click',playSound)
);

function playSound(event){
  const button = event.target;
  const note = button.dataset.note;

  // uso de template strings/literals
  const audio = document.getElementById(`audio${note}`);
  audio.pause();
  audio.currentTime =0;
  audio.play();
}

document.addEventListener('keydown', event => {
  const keys = event.key;
  const button = document.querySelector(`button[data-key="${keys}"]`);
  button.click();
});


/*---- Atajos del teclado ----*/
/*ctrl+D para modificar ó renombrar */
