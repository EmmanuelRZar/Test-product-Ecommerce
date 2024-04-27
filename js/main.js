window.addEventListener("load", () => {
    document.querySelector(".menu-btn").addEventListener("click", () =>{
        document.querySelector(".nav-menu").classList.toggle("show");
    })
})

function cambiarImagen() {
    var imagen = document.getElementById("imagenMenu");
    if (imagen.src.match("images/icon-menu.svg")) {
      imagen.src = "images/icon-close.svg";
    } else {
      imagen.src = "images/icon-menu.svg";
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    var btncart = document.getElementById("btncart");
    var cartPopup = document.getElementById("cartPopup");
  
    btncart.addEventListener("click", function() {
      toggleCart();
    });
  
    function toggleCart() {
      if (cartPopup.style.display === "block") {
        cartPopup.style.display = "none";
      } else {
        cartPopup.style.display = "block";
      }
    }
  });
  
document.addEventListener("DOMContentLoaded", function() {
  var minusBtn = document.querySelector(".minus-btn");
  var plusBtn = document.querySelector(".plus-btn");
  var amountDisplay = document.querySelector(".amount p");

  minusBtn.addEventListener("click", function() {
    var currentAmount = parseInt(amountDisplay.textContent);
    if (currentAmount > 0) {
      amountDisplay.textContent = currentAmount - 1;
    }
  });

  plusBtn.addEventListener("click", function() {
    var currentAmount = parseInt(amountDisplay.textContent);
    amountDisplay.textContent = currentAmount + 1;
  });
});