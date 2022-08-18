
//Function scope

function saludo(){
    //las variables DECLARADAS dentro de esta funcion solo seran accesibles en esta funcion
    let userName = "Ana";
    console.log(userName);

    if (userName === "Ana"){
        console.log(`Hello ${userName}!`);
    };
};

saludo();
console.log(userName); //este console.log no es posible ya que esta variable no tiene referencia no es una variable global  solo es una variable de la funcion saludo() por lo tanto saldra un error.
