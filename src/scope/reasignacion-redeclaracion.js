//declarar y luego asignar
var firstName; //declarando. el valor por defecto es undefined
firstName = "Andres";
console.log(firstName);

//declarar y asignar luego reasignar
var lastName = "Felipe";
lastName = "Oscar"; //si se declara y asigna y luego se reasgina saldra normalmente la nueva reasignacion en este caso oscar
console.log(lastName);

//declarar y asignar luego redeclarar y reasignar
var secondName = "david";
var secondName = "Ana"; //si reasignamos y redeclaramos tambien tomara la segunda reasignacion en este caso ana
console.log(secondName);

//declarar con let 

let fruit = "Apple"; //declarar y asignar 
fruit = "Kiwi"; // con let puedo reasignar
//let fruit = "banana"; //con let no se puede redeclarar solo reasignar
console.log(fruit);

//declarar con const

const animal = "Dog"; //se declara y se asigna
animal = "cat"; //con const no se puede reasignar ni redeclarar
console.log(animal); 


const vehicles = []; //cuando modifico el contenido de una lista y esta declarada como const si se puede es decir tanto eliminar como agegar elementos.
vehicles.push("carro");
console.log(vehicles);

vehicles.pop("carro");
console.log(vehicles);