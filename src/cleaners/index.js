const cleaners = [
  { name: "Pedro Pascal", description: "Lorem impsum noseque", image: "../assets/profile-ponytail.svg", worksCount: 185, rating: 5, price: "15,00€" },
  { name: "Mery Jane", description: "Lorem impsum 2222222Lorem dsfkfjsdk klsdjfkdsljflljfks slkdjfklsdjkfjsd lsdkjfskdjflksdfj sldkjfksdjflsdkj lskdfjlskdjf lsdkjfsdkljfksdjf lskdjflksdjfsdlk sldkjfksldjfksd sldkfjkdslfjksldf slkdjfklsdfj lksd impsum 2222222Lorem impsum 2222222Lorem impsum 2222222", image: "../assets/profile-guy-glasses.svg", worksCount: 519, rating: 5, price: "16,00€" },
  { name: "Maria Fernandez", description: "Lorem impsum aaaaaaaa sdf f sdfsdfs sdfsd sdfsdf sdfsdf  sdfsdfsdf sdfsdfsdfd aaaaaa", image: "../assets/profile_pic.svg", worksCount: 1589, rating: 4, price: "25,00€" },
  { name: "Juan antonio", description: "Este es juan antonio", image: "../assets/profile-ponytail.svg", worksCount: 23, rating: 2, price: "45,00€" }
];

const divContainerCards = document.querySelector(".container-cards");

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
    <button class="btn hire">Contratar</button>
  </div>
  </div>`;

  divContainerCards.innerHTML += cleanerCard;
});
