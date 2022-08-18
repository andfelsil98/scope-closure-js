//un closure permite acceder al ambito de una funcion exterior desde una funcion interior. en JS los closures se crean cada que una funcion es creada
//a diferencia de otros conceptos como funciones o variables. los closures no son siempre utilizados.
//tengo un closure cuando una funcion cualquiera accede a una variable fuera de su contexto y la recuerda.

//AMBITO LEXICO: la accesibilidad que vamos a tener de las variables anidadas dentro de funciones y como puedo llamarlas

const myGlobal = 0;

function myFunction(){
    const myNumber =1;
    console.log(myGlobal);

    function parent(){ //funcion interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(){
            console.log(inner,myNumber,myGlobal);
        }

        return child();
    }
    return parent();
}

myFunction();

