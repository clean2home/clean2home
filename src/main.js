import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

new Glide(".glide", {
  type: "carousel",
  focusAt: "center",
  perView: 3,
}).mount();

/* window.addEventListener("load", () => {
  // slide incial
  let slide = 1;

  // total slides
  const slides = document.querySelectorAll(".slider ul li");
  const total = slides.length;

  showSlide(1);

  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  next.addEventListener("click", (evt) => {
    evt.preventDefault();
    slide++;
    if (slide > total) {
      slide = 1;
    }
    showSlide(slide);
  });

  prev.addEventListener("click", (evt) => {
    evt.preventDefault();
    slide--;
    if (slide < 1) {
      slide = total;
    }
    showSlide(slide);
  });

  function showSlide(n) {
    n--; // decrement 1
    for (let i = 0; i < slides.length; i++) {
      (i === n) ? slides[n].style.display = "block" : slides[i].style.display = "none";
    }
  }
}); */
