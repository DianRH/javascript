function ResetTime(){ //limpia el cronometro
  clearInterval(cronometer);
}

function StartTime(){
  seconds = 0;//variable global
  s = document.getElementById("seconds");//obtener el id del html
  m = document.getElementById("minutes");//obtener el id del html

/*
  s.innerHTML = "70"; /*acceder al id de seconds lo que hay declarado en html
                      se va a borrar y será sustituido por 70*/
/*
  m.innerHTML = "10";
*/
  cronometer = setInterval(function(){ //cada segundo se va a ejecutar lo siguiente
    seconds++; //cada vez que se ejecute seconds va a ir aumentando

    secs = seconds; //se igual a seconds cuando comienze
    mins = 0;       //se iguala a 0

    while(secs>=60){ //mientras  90seg = 1min 30seg
      mins++; //pasa a minuto
      secs-=60; // se le quita a los segundos 60
    }

      if(mins<10)m.innerHTML = "0" + mins;// si los mins son<10 entonces agregará un 0
      else m.innerHTML = mins;            //si son >10 no agregar el 0

      if(secs<10)s.innerHTML = "0" + secs;// si los secs son<10 entonces agregará un 0
      else s.innerHTML = secs;            //si son >10 no agregar el 0

    /*s.innerHTML =secs; // para mostrar por pantalla
    m.innerHTML =mins; // para mostrar por pantalla*/

    Total_secs =secs; //actualización de la variable global
    Total_mins =mins; //actualización de la variable global
  },1000);
}
