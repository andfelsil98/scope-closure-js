// variables

var a; //declarando la variable a
var b = "b"; // declaramos y asignamos
b = "bb"; //reasignando una variable
var a = "a"; // redeclarando una variable

//global scope. primera forma de declarar una variable global
var fruit = "Apple"; //Global

function bestFruit(){
    console.log(fruit);
}

bestFruit();

//global scope. segunda forma de declarar una variable global

function countries(){
    country = "Colombia"; //cuando asigno una variable sin declarla (sin poner var, let o const) esta automaticamente se entiende como una variable global. de esta forma country se puede llamar dentro de esta funcion pero tambien fuera de la funcion sin problema
    console.log(country);
}

countries();
console.log(country);
