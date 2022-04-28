import pets from "./pets.js";

// burger
let burgerBtn = document.querySelector('.burger-btn'),
nav = document.querySelector('nav'),
bodyDark = document.querySelector('.body-dark'),
noScroll = document.querySelector('body'),
logoOpen = document.querySelector('.logo-open');


document.addEventListener('click', openMenu);

function openMenu(event) {
    if (event.target.closest('.burger-btn')) {
        burgerBtn.classList.toggle('burger-btn-active');
        nav.classList.toggle('nav-active');
        bodyDark.classList.toggle('body-dark-active');
        noScroll.classList.toggle('no-scroll');
        logoOpen.classList.toggle('logo-open-active');
    } 
    if (event.target.closest('.body-dark') || event.target.closest('.nav-link')) {
        burgerBtn.classList.remove('burger-btn-active');
        nav.classList.remove('nav-active');
        bodyDark.classList.remove('body-dark-active');
        noScroll.classList.remove('no-scroll');
        logoOpen.classList.remove('logo-open-active');
        closeModal();
    }
    if (event.target.closest('.btns')) {
        renderCard();
        if (event.target.closest('.next')) {
            rigthSwiper();
        }
        if (event.target.closest('.back')) {
            leftSwiper();
        }
    }
    if (event.target.closest('.pets-items')) {
        openmodal();
        
    }
    if (event.target.closest('.close-window')) {
            closeModal();
        }
        
}

let petsContainer = document.querySelector('.pets-items');

firstCards();
function firstCards() {
    petsContainer.innerHTML = `<div class="pet-card" id="${0}">
                 <img class="pet-photo" src="${pets[0].img}" alt="" id="${0}">
                 <span class="pet-name" id="${0}">${pets[0].name}</span>
                 <button type="button" id="${0}">Learn more</button>
             </div>
             <div class="pet-card" id="${1}">
                 <img class="pet-photo" src="${pets[1].img}" alt="" id="${1}">
                 <span class="pet-name" id="${1}">${pets[1].name}</span>
                 <button type="button" id="${1}">Learn more</button>
             </div>
             <div class="pet-card" id="${2}">
                 <img class="pet-photo" src="${pets[2].img}" alt="" id="${2}">
                 <span class="pet-name" id="${2}">${pets[2].name}</span>
                 <button type="button" id="${2}">Learn more</button>
             </div>`;
}
let modalWindow = document.querySelector('.modal-window');
function openmodal() {
    let index = event.target.id;
    
    modalWindow.classList.add('modal-window-active');
    bodyDark.classList.add('body-dark-active');
    noScroll.classList.add('no-scroll');
    modalWindow.innerHTML = `<div class="modal-card">
        <img src="${oldPets[index].img}" alt="" class="photo-pet">
        <div class="inner-card">
            <span class="name">${oldPets[index].name}</span>
            <span class="kind">${oldPets[index].type} - ${oldPets[index].breed}</span>
            <p class="about-animal">${oldPets[index].description}</p>
            <ul>
                <li><strong>Age:</strong><span class="age"> ${oldPets[index].age}</span></li>
                <li><strong>Inoculations:</strong><span class="inc"> ${oldPets[index].inoculations}</span></li>
                <li><strong>Disiases:</strong><span class="dis"> ${oldPets[index].diseases}</span></li>
                <li><strong>Parasites:</strong><span class="par"> ${oldPets[index].parasites}</span></li>
            </ul>
             <button class="close-window" type="button">&#215;</button>
   
        </div>
    </div>`;
    bodyDark.addEventListener('mouseover', () => {
        document.querySelector('.close-window').classList.add('close-window-hover');
    });
    bodyDark.addEventListener('mouseout', () => {
        document.querySelector('.close-window').classList.remove('close-window-hover');
    });
    }
             
    
    
    function closeModal() {
        modalWindow.classList.remove('modal-window-active');
        bodyDark.classList.remove('body-dark-active');
        noScroll.classList.remove('no-scroll');
        
    }  
let oldPets = [pets[0], pets[1], pets[2]];
let newPets = [];
function renderCard() {
        
        pets.sort(() =>  Math.random() - 0.5);
        newPets.push(pets[0], pets[1], pets[2], pets[3], pets[4], pets[5], pets[6], pets[7]);
        let arrTarget = oldPets.map(JSON.stringify);
        let arrOut =  newPets.map(JSON.stringify).filter(e => !arrTarget.includes(e)).map(JSON.parse);
        oldPets.length = 0;
        oldPets.push(arrOut[0], arrOut[1], arrOut[2]);
        newPets.length = 0;

        petsContainer.innerHTML = `<div class="pet-card" id="${0}">
    <img class="pet-photo" src="${arrOut[0].img}" alt="" id="${0}">
    <span class="pet-name" id="${0}">${arrOut[0].name}</span>
    <button type="button" id="${0}">Learn more</button>
    </div>
    <div class="pet-card" id="${1}">
        <img class="pet-photo" src="${arrOut[1].img}" alt="" id="${1}">
        <span class="pet-name" id="${1}">${arrOut[1].name}</span>
        <button type="button" id="${1}">Learn more</button>
    </div>
    <div class="pet-card" id="${2}">
        <img class="pet-photo" src="${arrOut[2].img}" alt="" id="${2}">
        <span class="pet-name" id="${2}">${arrOut[2].name}</span>
        <button type="button" id="${2}">Learn more</button>
    </div>`;
}

function rigthSwiper() {
    petsContainer.style.animation= "1s ease 0s 1 normal none running swiper";
    petsContainer.addEventListener('animationend', () => {
        petsContainer.removeAttribute("style");
    })
}
function leftSwiper() {
    petsContainer.style.animation= "1s ease 0s 1 normal none running swiperleft";
    petsContainer.addEventListener('animationend', () => {
        petsContainer.removeAttribute("style");
    })
}