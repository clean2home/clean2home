import { getFirestore, getDocs, collection } from "firebase/firestore/lite";
import { app } from "./firebase/config";

const db = getFirestore(app);

const divContainerCards = document.querySelector(".container-cards");

const cleaners = [];
const snap = await getDocs(collection(db, "cleaners"));
snap.forEach((doc) => {
  cleaners.push(doc.data());
});

function shortComment(element) { // Se le pasa un elemento directamente
  if (element.textContent.length > 190) element.textContent = `${element.textContent.substring(0, 190)}...`;
}

cleaners.forEach(cleaner => {
  const cleanerCard = `<div class="cleaner-container">
  <div class="cleaner-image"> <!-- imagen -->
    <img src="${cleaner.image}"  class="services-profile">
  </div>
  <div class="cleaner-info"><!-- info -->
    <div class="container-name-rating">
    <div class="container-name-city>
      <h3 class="name-cleaner"><strong>${cleaner.name}</strong> ${cleaner.verified}
      <h4 class="city-cleaner"><small>📍${cleaner.city}</small></h4></div>
      </h3>
    <div class="rating-star">
      <p class="rating"><strong><i class="fa-solid fa-star"></i>  ${cleaner.rating}</strong></p>
    </div>
    </div >
    <p class="cleaner-info-p">${cleaner.description}</p>
    <p class="works">${cleaner.works} trabajos</p>
  </div >
  <div class="cleaner-btn"><!-- precio/boton -->
    <p class="price"><strong> ${cleaner.price}</strong><small>€/hora</small></p>
    <a href="/under-construction.html" class="btn hire">Contratar</a>
  </div>
  </div >
  `;
  divContainerCards.innerHTML += cleanerCard;
});

const descriptionParagraph = document.querySelectorAll(".cleaner-info-p");
descriptionParagraph.forEach(e => shortComment(e));
