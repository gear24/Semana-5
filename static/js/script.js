const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

let currentIndex = 0;

function updateCarousel() {
  const translateX = -currentIndex * 100;
  carouselContainer.style.transform = `translateX(${translateX}%)`;
}

function showNextImage() {
  if (currentIndex < carouselItems.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = carouselItems.length - 1;
  }
  updateCarousel();
});

nextButton.addEventListener('click', showNextImage);

// Auto-slide every 3 seconds
setInterval(showNextImage, 3000);




//Tarjetas cambiantes
function updateClass() {
  const dynamicSections = document.querySelectorAll('.dynamic-section'); 

  dynamicSections.forEach(section => {
    // Solo modifica elementos que tienen la clase 'small'
    if (section.classList.contains('small')) {
      if (window.innerWidth <= 600) {
        // Pantallas pequeñas (600px o menos)
        section.classList.remove('small');
        section.classList.add('medium');
      } else {
        // Pantallas grandes (más de 600px)
        section.classList.remove('medium');
        section.classList.add('small');
      }
    }
  });
}

// Llama a la función al cargar la página
window.addEventListener('load', updateClass);

// Llama a la función cada vez que la ventana cambia de tamaño
window.addEventListener('resize', updateClass);





let isAnimating = false; // Bandera para evitar múltiples clics rápidos

// Función para manejar el clic en el botón del menú
document.getElementById("toggleMenu").addEventListener("click", function(event) {
  if (isAnimating) return; // Si la animación está en curso, no permitimos otro clic

  isAnimating = true; // Comenzamos la animación
  const originalIcons = document.querySelector(".original-icons");
  const newIcons = document.querySelector(".new-icons");

  if (newIcons.style.display === "none" || newIcons.style.display === "") {
    // Mostrar nuevas opciones y ocultar las originales
    originalIcons.classList.add("slide-in");
    setTimeout(() => {
      originalIcons.style.display = "none";
      newIcons.style.display = "flex";
      newIcons.classList.remove("slide-in");
      newIcons.classList.add("slide-out");
      isAnimating = false; // Terminamos la animación

      if (document.documentElement.clientWidth >= 1024){
      document.getElementById("toggleMenu").style.marginLeft = "30%"
      }else{
        document.getElementById("toggleMenu").style.marginLeft = "0%"
      }
      
    }, 500); // Tiempo de la animación
  } else {
    // Volver a mostrar las opciones originales y ocultar las nuevas
    newIcons.classList.remove("slide-out");
    newIcons.classList.add("slide-in");
    document.querySelector("#toggleMenu").classList.add("slide-in");
    setTimeout(() => {
      newIcons.style.display = "none";
      originalIcons.style.display = "flex";
      originalIcons.classList.remove("slide-in");
      isAnimating = false; // Terminamos la animación

      document.getElementById("toggleMenu").style.marginLeft = "0%"

    }, 500); // Tiempo de la animación
  }
});

// Función para manejar clics fuera del menú
document.addEventListener("click", function(event) {
  const menu = document.querySelector("#navbar");
  const toggleMenu = document.getElementById("toggleMenu");
  const originalIcons = document.querySelector(".original-icons");
  const newIcons = document.querySelector(".new-icons");

  if (newIcons.style.display === "flex" && !menu.contains(event.target) && !toggleMenu.contains(event.target)) {
    // Si el menú está visible y el clic no está dentro del menú ni en el toggle, cerrar el menú
    if (isAnimating) return; // Si la animación está en curso, no permitimos otro clic
    isAnimating = true; // Comenzamos la animación
    newIcons.classList.remove("slide-out");
    newIcons.classList.add("slide-in");
    setTimeout(() => {
      newIcons.style.display = "none";
      originalIcons.style.display = "flex";
      originalIcons.classList.remove("slide-in");
      isAnimating = false; // Terminamos la animación
    }, 500); // Tiempo de la animación
  }
});
