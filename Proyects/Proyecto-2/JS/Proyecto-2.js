document.addEventListener("DOMContentLoaded", function(){

    const boton = document.getElementById("botn");
    const caja = document.getElementById("caja");

    boton.addEventListener("click",function(){
       if(caja.style.display=="none"){
            boton.innerHTML="Ocultar caja";
            caja.style.display="block";
       }else{
            boton.innerHTML="Mostrar caja";
            caja.style.display="none";
       }
    })

});