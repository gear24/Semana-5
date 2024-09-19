function showContent(contentId) {
    // Ocultar todos los contenidos
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
      content.style.display = 'none';
    });
  
    // Mostrar el contenido correspondiente
    var selectedContent = document.getElementById('content' + contentId);
    selectedContent.style.display = 'block';
  }
  



  function filterProducts(selectorId) {
    var select = document.getElementById(selectorId);
    var selectedCategory = select.value;
    var cardsContainer = select.closest('.content').querySelector('.cards-containerC');
    var allProducts = cardsContainer.querySelectorAll('.small-cardC');
  
    allProducts.forEach(function(product) {
      if (selectedCategory === 'all') {
        product.style.display = 'block'; // Muestra todos los productos
      } else if (product.classList.contains(selectedCategory)) {
        product.style.display = 'block'; // Muestra el producto si pertenece a la categoría seleccionada
      } else {
        product.style.display = 'none'; // Oculta el producto si no pertenece
      }
    });
  }
  
  