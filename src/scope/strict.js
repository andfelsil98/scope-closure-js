//modo estricto nos permite hacer uso y control de ciertas variables para que el codigo cumpla con el mayor de los estandares
"use strict";// con este modo estricto sale un error si yo asigno una variable sin declararla
pi = 3.1416; //asignacion de una variable sin declararla. internamente lo que hace es asignar una variable llamada pi como undefined y luego si asigna a pi el valor correspondiente 

console.log(pi);

function myFunction(){
    "use strict"; //el modo estricto tambien se puede usar dentro de las funciones
    return pi = 3.1416;
}

console.log(myFunction());

