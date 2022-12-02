//1. Если нет переприсваивания то const
// переприсваивание, это когда написали max= более одного раза DONE
// 2. Переделать объекты в массив строчек DONE
// 

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


// DOM Tree (Document Object Model )
// {document: { html: {
//     body: [{
//         { name: 'p', textContent: "kekekek"}
//     }]
// }}}

// let document = {querySelector: function(string) {}}

// js-next
// js-back

const menuLinks = document.querySelectorAll(".our-projects__link");
const menuCircle = document.querySelectorAll(".our-projects__circle");
const buttonNext = document.querySelector(".js-click-next");
const buttonBack = document.querySelector(".js-click-back");

menuLinks[0].classList.add("js-current");
menuLinks[0].classList.add("our-projects__link--active");

const renderCard = function (card) {
     //  Получили дом элементы которым будем добавлять карточки
    const projectsExamples = document.querySelector("#projects-examples");
    const ourProjectsPhotos = document.querySelector(".our-projects__photos");

    //  Создаем и формируем клон
    const clon = projectsExamples.content.cloneNode(true);
    const image = clon.querySelector("img");
    image.src = card.img;
    const projectsTitle = clon.querySelector("h4");
    projectsTitle.textContent = card.title;
    const content = clon.querySelector("figcaption");
    content.textContent = card.adress;

    //  Добавляем клон отцу с конца
    ourProjectsPhotos.appendChild(clon);
}

const renderCards = function (cards, wantedType) {
    //  Получили дом элементы которым будем добавлять карточки
    const ourProjectsPhotos = document.querySelector(".our-projects__photos");

    // Зачистили старые карточки
    for (let i = ourProjectsPhotos.children.length - 1; i >= 0; i--) {
        ourProjectsPhotos.removeChild(ourProjectsPhotos.children[i]);
    }

    // Добавляем только те карточки, которые надо. Смотрим на type
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].type === wantedType) {
            // Вызываем функцию которая добавляет 1 карточку, в зависимости от i
            renderCard(cards[i]);
        }
        if (wantedType === "All") {
            // Вызываем функцию которая добавляет 1 карточку, в зависимости от i
            renderCard(cards[i]);
        }
    }
};

// Первая загрузка. Мы решили что добавляем все карточки
renderCards(ourProjects, "All");


for (const menuLink of menuLinks) {
    menuLink.addEventListener("click", function (evt) {
        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].classList.remove("js-current");
            menuLinks[i].classList.remove("our-projects__link--active");
        }
        menuLink.classList.add("js-current");
        menuLink.classList.add("our-projects__link--active");
        for (let i = 0; i < menuCircle.length; i++) {
            menuCircle[i].classList.remove("js-current");
            menuCircle[i].classList.remove("our-projects__circle--blue");
        }
        menuCircle[0].classList.add("js-current");
        menuCircle[0].classList.add("our-projects__circle--blue");

        renderCards(ourProjects, evt.target.textContent);
    });
};

function cleanCircleColor(collection) {
    for (let i = 0; i < collection.length; i++) {
        collection[i].classList.remove("js-current");
        collection[i].classList.remove("our-projects__circle--blue");
    }
}

let j = 0;

buttonNext.addEventListener("click", function (evt) {
    j = j + 1;
    cleanCircleColor(menuCircle);
    if (j < menuCircle.length) {
        menuCircle[j].classList.add("js-current");
        menuCircle[j].classList.add("our-projects__circle--blue");
    } else {
        menuCircle[0].classList.add("js-current");
        menuCircle[0].classList.add("our-projects__circle--blue");
        j = 0;
        console.log(j)
    }
});

buttonBack.addEventListener("click", function (evn) {
    j = j - 1;
    cleanCircleColor(menuCircle);
    if (j < 0) {
        j = menuCircle.length - 1;
        menuCircle[j].classList.add("js-current");
        menuCircle[j].classList.add("our-projects__circle--blue");
    } else {

        menuCircle[j].classList.add("js-current");
        menuCircle[j].classList.add("our-projects__circle--blue");

    }
});



// {img: src = "./stone-building.png",
// type: "Other",
// title: "Grand office",
// adress: "Georgia Tbilisi",
// }

// our-projects__photos

{/* <figure class="our-projects__photo">
                <img src={} class="our-projects__img">
                <figcaption class="our-projects__description">
                    <h4 class="our-projects__name">{}</h4>
                    {}
                </figcaption>
            </figure> */}


// const figure = new document.createElement('figure')
// const img = new document.createElement('img')
// figure.children = img

// 

// html tag template