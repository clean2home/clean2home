let passedURL = window.location.search; // '?id=4'
let idPosition = passedURL.indexOf('=') + 1; // Vas al '=' y la siguiente posicion
let id = parseInt(passedURL.slice(idPosition, (idPosition + 2))) //Cortas desde el siguiente a 2 numeros, si no hay 2 borra el espacio automaticamente
let cleanerProfile = '';


const cleaners = [
    { id: 1, name: "Mery Jane", description: "Hola soy Mery, ¡encantada de conocerte! Llevo más de 10 años dedicándome al servicio doméstico, también puedo cocinar en las horas de trabajo. Tengo buena mano y buen gusto a la hora de ordenar y dedicación por completo.", worksCount: 185, rating: 3, price: "12,00€" },
    { id: 2, name: "Pedro Pascal", description: "Chico muy serio en su trabajo, con más de 8 años de experiencia laboral demostrada. Trato todo tipo de superficies con delicadezza y cuido hasta el más mínimo detalle. Tengo disponibilidad horaria total.", worksCount: 519, rating: 5, price: "16,00€" },
    { id: 3, name: "Maria Fernandez", description: "Me llamo María y llevo toda la vida trabajando como limpiadora. Estaré encantada de cuidar tu hogar como se merece.", worksCount: 1589, rating: 4, price: "20,00€" },
    { id: 4, name: "Natalia Amorós", description: "Limpiadora con más de 5 años de experiencia, disponibilidad total de horario, festivos incluídos. Soy rápida a la par que eficaz en mi trabajo. ¡No dudes en llamarme!", worksCount: 105, rating: 5, price: "15,00€" }
];

const REVIEWS = [
    {
        id: 1,
        rating: 5,
        review: "Muy maja y buena limpiadora"
    },
    {
        id: 2,
        rating: 5,
        review: "Trabaja muy bien"
    },
    {
        id: 3,
        rating: 5,
        review: "Muy simpática y divertida"
    },
    {
        id: 4,
        rating: 5,
        review: "Encantadora"
    },
    {
        id: 5,
        rating: 5,
        review: "Muy bien todo"
    }
]



cleaners.forEach((cleaner) => {

    if (cleaner.id == id)
        cleanerProfile = cleaners[cleaner.id - 1]
}
)

let cleanerName = document.getElementsByClassName('cleaner-name');
let cleanerDescription = document.getElementsByClassName('cleaner-info-p');
let cleanerWorks = document.getElementsByClassName('works');
let cleanerPrice = document.getElementsByClassName('price');
let cleanerRating = document.getElementsByClassName('rating');



cleanerName[0].textContent = cleanerProfile.name;
cleanerDescription[0].textContent = cleanerProfile.description;
cleanerWorks[0].textContent = `${cleanerProfile.worksCount} trabajos`;
cleanerPrice[0].textContent = cleanerProfile.price;
//cleanerRating[0].textContent = cleanerProfile.rating;


let divReview = document.getElementById('review-container');

REVIEWS.forEach((review) => {
    divReview.innerHTML += `<div class='review'>
        <h3>#${review.id}</h3>
        <p>${review.review}</p>
      </div>`;
});




function iniciarMap() {
    var coord = { lat: -34.5956145, lng: -58.4431949 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}

