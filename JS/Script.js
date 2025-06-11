document.addEventListener("DOMContentLoaded", function() {
  /*-----------------------DARKMODE-----------------------------*/
  
  const darkModeToggle = document.getElementById('Darkmode');
  
  
  if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
  }
  
 
  darkModeToggle.addEventListener('click', function(e) {
      e.preventDefault();
      document.body.classList.toggle('dark-mode');
      
    
      if (document.body.classList.contains('dark-mode')) {
          localStorage.setItem('darkMode', 'enabled');
      } else {
          localStorage.setItem('darkMode', 'disabled');
      }
  });
  
  /*--------------------------PORTFOLIO----------------------------------*/
  const img_iz = document.querySelector(".section__imagen__left");
  const img_ce = document.querySelector(".section__imagen__center");
  const img_de = document.querySelector(".section__imagen__right");
  const link_ce = document.querySelector(".section__imagen__a__center");
  
  const contenido = [
    {
      imagen: "../Assets/color_flipper.png",
      enlace: "../Proyects/color-flipper/"
      
    },
    {
      imagen: "../Assets/php.png",
      enlace: "../Proyects/php/php/login.html"
    },
    {
      imagen: "../Assets/proyecto3.png",
      enlace: "../Proyects/Proyecto-3/HTML/Proyecto-3.html"
    },
    {
      imagen: "../../Assets/proyecto2.png",
      enlace: "../Proyects/Proyecto-2/HTML/Proyecto-2.html"
    },
    {
      imagen: "../../Assets/proyecto4.png",
      enlace: "../Proyects/Proyecto-4/HTML/index.html"
    },
  ];
  
  let currentIndex = 0;
  
  function actualizarCarrusel() {
    const indexIzq = (currentIndex - 1 + contenido.length) % contenido.length;
    const indexDer = (currentIndex + 1) % contenido.length;
    
    img_iz.src = contenido[indexIzq].imagen;
    img_ce.src = contenido[currentIndex].imagen;
    img_de.src = contenido[indexDer].imagen;
    
    link_ce.href = contenido[currentIndex].enlace;
  }
  
  img_de.addEventListener("click", function(e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % contenido.length;
    actualizarCarrusel();
  });
  
  img_iz.addEventListener("click", function(e) {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + contenido.length) % contenido.length;
    actualizarCarrusel();
  });
  
  link_ce.addEventListener("click", function(e) {
    console.log("Redirigiendo a:", contenido[currentIndex].enlace);
  });
  
  actualizarCarrusel();

});