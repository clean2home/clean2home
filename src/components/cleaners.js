import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "./firebase/config";

const divContainerCards = document.querySelector(".container-cards");
function deleteAccents(string) {
  const accents = { á: "a", é: "e", í: "i", ó: "o", ú: "u", Á: "A", É: "E", Í: "I", Ó: "O", Ú: "U" };
  return string.toLowerCase().split("").map(word => accents[word] || word).join("").toString();
}

const getCleaners = async () => {
  const cleaners = [];
  const collRef = collection(db, "cleaners");
  const querySnapshot = await getDocs(collRef);
  querySnapshot.forEach((doc) => {
    cleaners.push({
      id: doc.id,
      ...doc.data()
    });
  });

  return cleaners;
};

const printCleaners = async () => {
  const cleaners = await getCleaners();

  const shortComment = (element) => { // Se le pasa un elemento directamente
    if (element.textContent.length > 190) element.textContent = `${element.textContent.substring(0, 190)}...`;
  };

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
};

printCleaners();

const queryString = decodeURI(window.location.search);
const urlParams = new URLSearchParams(queryString);

const cityFilter = deleteAccents(urlParams.get("cityFilter"));

console.log(cityFilter);

const q = query(collection(db, "cleaners"), where("citySearch", "==", cityFilter));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  divContainerCards.innerHTML = `<div class="cleaner-container">
  <div class="cleaner-image"> <!-- imagen -->
    <img src="${doc.data().image}"  class="services-profile">
  </div>
  <div class="cleaner-info"><!-- info -->
    <div class="container-name-rating">
    <div class="container-name-city>
      <h3 class="name-cleaner"><strong>${doc.data().name}</strong> ${doc.data().verified}
      <h4 class="city-cleaner"><small>📍${doc.data().city}</small></h4></div >
      </h3 >
  <div class="rating-star">
    <p class="rating"><strong><i class="fa-solid fa-star"></i>  ${doc.data().rating}</strong></p>
  </div>
    </div >
    <p class="cleaner-info-p">${doc.data().description}</p>
    <p class="works">${doc.data().works} trabajos</p>
  </div >
  <div class="cleaner-btn"><!-- precio/boton -->
    <p class="price">desde <strong>${cleaner.price}</strong></p>
    <a href="/cleaners-profile.html?id=${cleaner.id}" class="btn hire">Contratar</a>
  </div>
  </div > `;
});

const descriptionParagraph = document.querySelectorAll(".cleaner-info-p");
descriptionParagraph.forEach(e => shortComment(e));

