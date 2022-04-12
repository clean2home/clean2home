import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

// Import CSS
import "./styles/main.css";

// Carousel
new Glide(".glide", {
  type: "carousel",
  focusAt: "center",
  perView: 4,
  gap: 70,
  autoplay: 7000,
  keyboard: true,
  breakpoints: {
    1400: {
      perView: 3
    },
    1024: {
      perView: 2,
      gap: 70
    },
    600: {
      perView: 1
    }
  }
}).mount();
