import pets from "../main/pets.js";
const cards = document.querySelector('.cards');
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
        if (event.target.closest('.next')) {
            nextBtn();
        }
        if (event.target.closest('.back')) {
            backBtn()
        }
        if (event.target.closest('.last')) {
            lastBtn();
        }
        if (event.target.closest('.first')) {
            firstBtn()
        }
        if (event.target.closest('.cards')) {
            openmodal();
        }
        if (event.target.closest('.close-window')) {
            closeModal();
        } 

}

let modalWindow = document.querySelector('.modal-window');
let k;
function openmodal() {
    let currentArr = arrPags.get((page));
    let i = event.target.id;
    modalWindow.classList.add('modal-window-active');
    bodyDark.classList.add('body-dark-active');
    noScroll.classList.add('no-scroll');
    modalWindow.innerHTML = `<div class="modal-card">
        <img src="${currentArr[i].img}" alt="" class="photo-pet">
        <div class="inner-card">
            <span class="name">${currentArr[i].name}</span>
            <span class="kind">${currentArr[i].type} - ${currentArr[i].breed}</span>
            <p class="about-animal">${currentArr[i].description}</p>
            <ul>
                <li><strong>Age:</strong><span class="age"> ${currentArr[i].age}</span></li>
                <li><strong>Inoculations:</strong><span class="inc"> ${currentArr[i].inoculations}</span></li>
                <li><strong>Disiases:</strong><span class="dis"> ${currentArr[i].diseases}</span></li>
                <li><strong>Parasites:</strong><span class="par"> ${currentArr[i].parasites}</span></li>
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
// Пагинация

let first = document.querySelector('.first');
let back = document.querySelector('.back');
let pageNum = document.querySelector('.page-num');
let next = document.querySelector('.next');
let last = document.querySelector('.last');
let page = 0;
let countPages = 0;
let arrPags = new Map(); //Хранит ключ-значение страница-массив
    let newPet = []; //сюда пушится рандомный массив
function shaffle() { //Перемешивает массив
    pets.sort(() =>  Math.random() - 0.5);
    newPet.push(pets[0], pets[1], pets[2], pets[3], pets[4], pets[5], pets[6], pets[7]);}
    
    function nextBtn() { //кнопка вперед
        page = page + 1;
        pageNum.innerHTML = `${page+ 1}`;
        renderCard(k);
        if (page >= 1) {
            back.classList.remove('inactive');
            first.classList.remove('inactive');
            back.removeAttribute("disabled");
            first.removeAttribute("disabled");
        }
        if (page >= (countPages-1)) {
            next.setAttribute("disabled", "disabled");
            next.classList.add('inactive');
            last.setAttribute("disabled", "disabled");
            last.classList.add('inactive');
        }
    }

    function lastBtn() { //кнопка последний
        back.removeAttribute("disabled");
        first.removeAttribute("disabled");
        page = countPages-1;
        pageNum.innerHTML = `${page+ 1}`;
        renderCard(k);
        back.classList.remove('inactive');
        first.classList.remove('inactive');
        next.setAttribute("disabled", "disabled");
        next.classList.add('inactive');
        last.setAttribute("disabled", "disabled");
        last.classList.add('inactive');
    }

    function backBtn() {//кнопка назад
        if (page <= 1) {
            back.classList.add('inactive');
            first.classList.add('inactive');
            back.setAttribute("disabled", "disabled");
            first.setAttribute("disabled", "disabled");
        }
        back.removeAttribute("disabled");
        first.removeAttribute("disabled");
        if (page >= 1) {
            last.removeAttribute("disabled");
            next.removeAttribute("disabled");
            last.classList.remove('inactive');
            next.classList.remove('inactive');
            page = page - 1;
        pageNum.innerHTML = `${page+1}`;
        renderCard(k);
        }
    }
    function firstBtn() {//кнопка первый
        page = 0;
        pageNum.innerHTML = `${page+1}`;
        renderCard(k);
        back.classList.add('inactive');
        first.classList.add('inactive');
        back.setAttribute("disabled", "disabled");
        first.setAttribute("disabled", "disabled");
        last.removeAttribute("disabled");
        next.removeAttribute("disabled");
        last.classList.remove('inactive');
        next.classList.remove('inactive');
    }

    if (window.innerWidth >= 1280) {
        countPages = 6;
        k = 8;  
        // renderCard(k);
    }
    if (window.innerWidth < 1280 && window.innerWidth >= 768) {
        countPages = 8;
        k = 6;
        // renderCard(k);
    }
    if (window.innerWidth < 768) {
        countPages = 16;
        k = 3; 
        // renderCard(k);
    }
document.addEventListener("DOMContentLoaded", start);
function start() {
   for (let i = 0; i < countPages; i++) { //Запуск перемешивания массива и запись ключ-значение
        shaffle();
        arrPags.set(i, newPet);
        newPet = [];
    } renderCard(k)
}
function renderCard(k) {
    
        let currentArr = arrPags.get(page); 
        
        cards.innerHTML = '';
        for (let i = 0; i < k; i++) {
            cards.innerHTML += `
            <div class="pet-card" id="${i}">
                <img src="${currentArr[i].img}" id="${i}" alt="">
                <span id="${i}">${currentArr[i].name}</span>
                <button type="button" id="${i}">Learn more</button>
            </div>`
        }
    }