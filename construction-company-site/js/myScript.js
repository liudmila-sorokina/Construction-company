

const ourProjects = [
    {
        img: "./hotel.png",
        type: "Commercial",
        title: "Wildstone Infra Hotel",
        adress: "2715 Ash Dr. San Jose, South Dakota",
    },
    {
        img: "./stone-building.png",
        type: "Commercial",
        title: "Wish Stone Building",
        adress: "2972 Westheimer Rd. Santa Ana, Illinois",
    },
    {
        img: "./height.png",
        type: "Commercial",
        title: "Oregano Height",
        adress: "2464 Royal Ln. Mesa, New Jersey",
    },
    {
        img: "./house.png",
        type: "Commercial",
        title: "Mr. Parkinston’s House",
        adress: "3517 W. Gray St. Utica, Pennsylvania",
    },
    {
        img: "./house.png",
        type: "Commercial",
        title: "Cozy house",
        adress: "Georgia Tbilisi",
    },
    {
        img: "./stone-building.png",
        type: "Residential",
        title: "Busines center",
        adress: "Yerevan Arabcir",
    },
    {
        img: "./hotel.png",
        type: "Residential",
        title: "Malatia Hotel",
        adress: "Armenia Yerevan",
    },
    {
        img: "./stone-building.png",
        type: "Other",
        title: "Grand office",
        adress: "Georgia Tbilisi",
    }

];

const projects = [
    "The National University of Architecture",
    "Museum of Saryan",
    "Galata tower",
];

const next = document.querySelector(".js-next");
const back = document.querySelector(".js-back");

const information = document.querySelector(".projects__information");

information.textContent = projects[0];

let i = 0;

next.addEventListener("click", function (evt) {
    i = i + 1;

    if (i > 2) {
        i = 0;
    }
    information.textContent = projects[i];
});

back.addEventListener("click", function (evt) {
    i = i - 1;

    if (i < 0) {
        i = 2;
    }
    information.textContent = projects[i];
});

console.log(Object.keys(information));




const menuLinks = document.querySelectorAll(".our-projects__link");
const menuCircle = document.querySelectorAll(".our-projects__circle");

const inputForUser = document.querySelectorAll(".form-users__input-for-user")[0];
const inputForEmail = document.querySelector(".form-users__input-for-email");

inputForUser.addEventListener("focus", function (evt) {
    const redStar = document.querySelector(".form-users__label--name-star");
    redStar.classList.add("hidden");

    console.log(redStar);
});



inputForUser.addEventListener("blur", function (evt) {


    if (inputForUser.value === "") {
        const redStar = document.querySelector(".form-users__label--name-star");
        redStar.classList.remove("hidden");
    }

    
});

inputForEmail.addEventListener("focus", function (evt) {
    const redStarForEmail = document.querySelector(".form-users__label--email-star");
    redStarForEmail.classList.add("hidden");

    
});



inputForEmail.addEventListener("blur", function (evt) {

    

    if (inputForEmail.value === "") {
        const redStarForEmail = document.querySelector(".form-users__label--email-star");
        redStarForEmail.classList.remove("hidden");
    }

    
});


menuLinks[0].classList.add("js-current");
menuLinks[0].classList.add("our-projects__link--active");

const renderCard = function (card) {
   
    const projectsExamples = document.querySelector("#projects-examples");
    const ourProjectsPhotos = document.querySelector(".our-projects__photos");

    
    const clon = projectsExamples.content.cloneNode(true);
    const image = clon.querySelector("img");
    image.src = card.img;
    const projectsTitle = clon.querySelector("h4");
    projectsTitle.textContent = card.title;
    const content = clon.querySelector("figcaption");
    content.textContent = card.adress;

    
    ourProjectsPhotos.appendChild(clon);
}

const renderCards = function (cards, wantedType) {
  
    const ourProjectsPhotos = document.querySelector(".our-projects__photos");

    
    for (let i = ourProjectsPhotos.children.length - 1; i >= 0; i--) {
        ourProjectsPhotos.removeChild(ourProjectsPhotos.children[i]);
    }

    
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].type === wantedType) {
            
            renderCard(cards[i]);
        }
        if (wantedType === "All") {
           
            renderCard(cards[i]);
        }
    }
};


renderCards(ourProjects, "All");


for (const menuLink of menuLinks) {
    menuLink.addEventListener("click", function (evt) {
        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].classList.remove("js-current");
            menuLinks[i].classList.remove("our-projects__link--active");
        }
        menuLink.classList.add("js-current");
        menuLink.classList.add("our-projects__link--active");
     

        renderCards(ourProjects, evt.target.textContent);
    });
};

function cleanCircleColor(collection) {
    for (let i = 0; i < collection.length; i++) {
        collection[i].classList.remove("js-current");
        collection[i].classList.remove("our-projects__circle--blue");
    }
}





