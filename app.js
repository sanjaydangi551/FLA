document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const navMobile = document.querySelector(".navMobile");

    hamburgerIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        navMobile.classList.toggle("visible");

        // Disable scrolling when the menu is visible
        if (navMobile.classList.contains("visible")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    });

    document.addEventListener("click", function (event) {
        if (!navMobile.contains(event.target) && !hamburgerIcon.contains(event.target)) {
            navMobile.classList.remove("visible");
            document.body.style.overflow = "auto"; 
        }
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";
  
  setTimeout(showSlides, 3500); 
}