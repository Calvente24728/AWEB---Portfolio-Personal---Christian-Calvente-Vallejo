document.addEventListener("DOMContentLoaded",function(){
    /* Declaramos las variables que vamos a utilizar*/
    const boton = document.getElementById("boton");
    const letra = document.getElementById("col");
    const body = document.getElementById("body");
    /*Creamos un array con todos los colores que vamos a utilizar*/
    const color = ["Red","Cyan","Green","Brown","Aqua","Burlywood","Cornflowerblue","Darkgoldenrod","Fuchsia","Gold","Indigo","Khaki","Lavender","Magenta","Navy","Olive","Peru","Rosybrown","Slategray","Teal"];
    /* Creamos la variable donde se guardara el valor de random para poner el siguiente color le pondremos el valor de 1 para que no repita color*/
    let i = 1;
    /*Creamos la funcion para cambiar el color*/
    boton.addEventListener("click", function() {
        body.style.background = color[i];
        letra.innerHTML = color[i];
        boton.style.background = color[i];
        let random = Math.floor(Math.random()*color.length);/*Ponemos que nos de un numero aleatorio*/
        letra.style.color = color[random];/*Le aplicamos solo a este el aleatorio que es el que decide el proximo color*/
        i = random;/*Guardamos el valor de random para que cambie al color que salio anteriormente*/
    });
});