function fruits(){
    //las variables definidas dentro de un bloque solo pueden ser utilizadas dentro de este bloque 
    //que es un bloque: todo aquello que se encuentre dento de llaves
    if(true){
        var fruit1 = "Apple"; //function scope. Hay que tener mucho cuidado con este tipo de variable var ya que tiene el scope de function por tanto si llamo por fuera de las llaves si se podra usar contrario a let y a const que estos ultimos solo se podran usar dentro de este bloque if
        let fruit2 = "Kiwi"; //block scope
        const fruit3 = "Banana"; //block scope
    }
    console.log(fruit1);// se puede ver
    console.log(fruit2);//error
    console.log(fruit3);//error

}

fruits();
