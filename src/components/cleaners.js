import profilePonytail from "../assets/profile-ponytail.svg";
import profileGuyglasses from "../assets/profile-guy-glasses.svg";
import profilePic from "../assets/profile_pic.svg";

const cleaners = [
  { name: "Mery Jane", description: "Hola soy Mery, ¡encantada de conocerte! Llevo más de 10 años dedicándome al servicio doméstico, también puedo cocinar en las horas de trabajo. Tengo buena mano y buen gusto a la hora de ordenar y dedicación por completo.", image: `${profilePonytail}`, worksCount: 185, rating: 3, price: "12,00€" },
  { name: "Pedro Pascal", description: "Chico muy serio en su trabajo, con más de 8 años de experiencia laboral demostrada. Trato todo tipo de superficies con delicadezza y cuido hasta el más mínimo detalle. Tengo disponibilidad horaria total.", image: `${profileGuyglasses}`, worksCount: 519, rating: 5, price: "16,00€" },
  { name: "Maria Fernandez", description: "Me llamo María y llevo toda la vida trabajando como limpiadora. Estaré encantada de cuidar tu hogar como se merece.", image: `${profilePic}`, worksCount: 1589, rating: 4, price: "20,00€" },
  { name: "Natalia Amorós", description: "Limpiadora con más de 5 años de experiencia, disponibilidad total de horario, festivos incluídos. Soy rápida a la par que eficaz en mi trabajo. ¡No dudes en llamarme!", image: `${profilePonytail}`, worksCount: 105, rating: 5, price: "15,00€" }
];

console.log(profilePic);

const divContainerCards = document.querySelector(".container-cards");

function shortComment(element) { // Se le pasa un elemento directamente
  if (element.textContent.length > 230) element.textContent = `${element.textContent.substring(0, 227)}...`;
}

cleaners.forEach((cleaner) => {
  const cleanerCard = `<div class="cleaner-container">
  <div class="cleaner-image"> <!-- imagen -->
    <img src="${cleaner.image}"  class="services-profile">
  </div>
  <div class="cleaner-info"><!-- info -->
    <div class="container-name-rating">
      <h3 class="name-cleaner">${cleaner.name}</h3>
    <div class="rating-star">
      <img class="star-icon" src="../assets/star.svg" alt="">
      <p class="rating">${cleaner.rating}</p>
    </div>
    </div>
    <p class="cleaner-info-p"> ${cleaner.description}</p>
    <p class="works">${cleaner.worksCount} trabajos</p>
  </div>  
  <div class="cleaner-btn"><!-- precio/boton -->
    <p class="price">desde <strong>${cleaner.price}</strong></p>
    <a href="/under-construction.html" class="btn hire">Contratar</a>
  </div>
  </div>`;

  divContainerCards.innerHTML += cleanerCard;
});

const descriptionParagraph = document.querySelectorAll(".cleaner-info-p");
descriptionParagraph.forEach(e => shortComment(e));
