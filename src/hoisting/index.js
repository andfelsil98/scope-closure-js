//el hoisting en este caso lo que hace cuando se llama una variable sin antes ser declarada es declararla y ponerle como valor undefined
//console.log(nameOfDog);
//var nameOfDog = "Bigotes";
//console.log(nameOfDog);


//para este caso: la variable elmo se eleva y se declara e inicializa con el valor de undefined, posteriormente se eleva la funcion y luego se llama la funcion.
//si llego a no declarar la variable en algun lado me saldria error
nameOfDog();

function nameOfDog(){
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = "bigotes";

//internamente el proceso:
// var elmo; eleva la var elmo y la asigna como undefined
//function nameOfDog(){
//    console.log(`El mejor perrito es ${elmo}`);
//}  //eleva la funcion
//nameOfDog(); Finalmente hace el llamado de la funcion