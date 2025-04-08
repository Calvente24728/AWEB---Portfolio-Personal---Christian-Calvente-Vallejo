document.addEventListener("DOMContentLoaded",function(){
    /* Declaramos las variables que vamos a utilizar*/
    const boton = document.getElementById("boton");
    const letra = document.getElementById("col");
    const body = document.getElementById("body");
    /*Creamos un array con todos los colores que vamos a utilizar*/
    const color = ["#FF0000","#3DCCC7","#008000","#A52A2A","#00FFFF","#DEB887","#6495ED","#B8860B","#FF00FF","#FFD700","#4B0082","#F0E68C","#E6E6FA","#FF00FF","#000080","#808000","#CD853F","#BC8F8F","#708090","#008080"];
    /* Creamos la variable donde se guardara el valor de random para poner el siguiente color*/
    let i = 0;
    /* Pondremos el estilo de como queremos que se vea la pagina cuando ponemos el formato hexadecimal*/
    body.style.background = "#3DCCC7"
    letra.innerHTML = "#3DCCC7";
    boton.style.background = "#3DCCC7";
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