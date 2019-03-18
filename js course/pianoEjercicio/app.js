
/*-------------------Código para una tecla------------------------------------*/
//1.-asignar un evento a un elemento (evento de click)
//2.-event listener
// var btnDO = document.getElementById('btnDO');//enlace ó selección del elemento

// btnDO.addEventListener('click', playSound); //ctrl+D para modificar renombrar

// function playSound(){
  // existen varias formas de reproducir sonidos
  // tomar un elemento audio
  //obtener una referencia de dicho Elemento(existen varias)
  //dar la orden de reproducción
// var audio = document.getElementById('audioDO');
// audio.pause();       //detiene la reproducción
/* audio.currentTime =0; /*hace que se reinicie el audio es igual a la función
                      stop que no existe en js*/
// audio.play(); // función para reproducir el audio
//}

/*-------------------Código para varias teclas--------------------------------*/

/*la función .querySelector('nombre del elemento, id o clase')
obtendremos un "elemento" cuya "etiqueta" sea la que definimos*/
/*la función querySelectorAll('') nos va a devolver todos los "elementos"
con la "etiqueta" que definimos */

// var buttons = document.querySelectorAll('button');
//
// /* iteracion(repeticion de cada boton porque es un conjunto de elementos)
//  con el parametro button que representara a cada uno de los elementos
//  se va a recorren cada uno de ellos*/
// buttons.forEach(function (button) {
//   button.addEventListener('click',playSound);
// });
//
// function playSound(event){
//   var button = event.target; //con.target podemos saber a que botón se hace clic
//   var note = button.dataset.note; //acceder al atributo data-note del boton sobre el que se ha hecho clic
//
//   var audio = document.getElementById('audio' +note); //concatenar audio mas la nota que queremos reproducir
//   audio.pause();
//   audio.currentTime =0;
//   audio.play();
// }


/*-------------------Código usando ES6--------------------------------*/

 //variable button nunca es modificada por lo tanto se declara const
const buttons = document.querySelectorAll('button');

//arrow function
buttons.forEach(  button =>
  button.addEventListener('click',playSound)
);

function playSound(event){
  const button = event.target;
  const note = button.dataset.note;

  //uso de template strings/literals
  const audio = document.getElementById(`audio${note}`);
  audio.pause();
  audio.currentTime =0;
  audio.play();
}

/*-------------------Código usando el teclado--------------------------------*/
