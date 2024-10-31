let flippedCardsArray = ["Gato","Guaxinim","Passaro","Rato","Rodrigo","Urso","Gato","Guaxinim","Passaro","Rato","Rodrigo","Urso",];
let shuffledArray = flippedCardsArray.sort(()=>Math.random()-0.5);

let firstCard = "";
let secondCard = "";
let numPlays = 13;
let gameEnded = false;
let timeLeft = 60; // 1 minuto em segundos
let timerInterval;
const pupils = document.querySelectorAll(".pupil");

function movePupils(event) {
    
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    pupils.forEach(pupil => {
        const eye = pupil.parentElement;
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
        const maxDistance = 5;

        const pupilX = maxDistance * Math.cos(angle);
        const pupilY = maxDistance * Math.sin(angle);

        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
}

function createCards(){
    let cardcontainer = document.getElementsByClassName("card");
    
    let i = 0;
    while (i < cardcontainer.length){
        // Cria os elementos back e flipped para cada card
        let back = document.createElement("div");
        let flipped = document.createElement("div");
        
        // Define as classes dos novos elementos
        back.className = "face back";
        flipped.className = "face flipped";

        back.style.backgroundImage = `url("Midias/${shuffledArray[i]}.png")`

        // Adiciona os elementos back e flipped dentro do card atual
        cardcontainer[i].appendChild(back);
        cardcontainer[i].appendChild(flipped);
        cardcontainer[i].setAttribute("data-animal", shuffledArray[i]);

        cardcontainer[i].addEventListener("click", revealCard);

        i++;
    }
}

function contPlays(){
    const playsElement = document.getElementById("numPlays");
    playsElement.textContent = numPlays;
}

function startTimer(){
    const timerElement = document.getElementById("timer");
    timerInterval = setInterval(() => {
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            alert("Seu tempo acabou... Olhe para trás.");
            pupils.forEach(pupil => pupil.classList.add("lost"));
            endGame();
        } else {
            // Atualiza o tempo restante e exibe no elemento timer
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            timeLeft--;
        }
    }, 1000);
}

function revealCard({target}){
    if(gameEnded==true ||target.parentNode.className.includes("revealCard")){
        //target.parentNode.classList.toggle("zoomCard");
        return;
    }
    if (firstCard === "") {

        target.parentNode.classList.add("revealCard");
        firstCard = target.parentNode;
    
    } else if (secondCard === "") {

        target.parentNode.classList.add("revealCard");
        secondCard = target.parentNode;
        numPlays--;
        contPlays();
        checkEndGame();
        checkCards();
    }
}

function checkCards(){
    firstAnimal = firstCard.getAttribute("data-animal");
    secondAnimal = secondCard.getAttribute("data-animal");

    if (firstAnimal === secondAnimal) {

        firstCard.firstChild.classList.add('disabledCard');
        secondCard.firstChild.classList.add('disabledCard');

        firstCard = "";
        secondCard = "";

        checkEndGame();
    }
    else {
        setTimeout(() => {
            
            firstCard.classList.remove("revealCard");
            secondCard.classList.remove("revealCard");
            
            firstCard = "";
            secondCard = "";

        }, 800);
    }
}

function checkEndGame(){
    let disabledCards = document.getElementsByClassName("disabledCard");
    
    console.log(disabledCards.length);
    if (numPlays == 0){
        alert("Suas chances acabaram, olhe para trás.");
        endGame();
    }
    else if (disabledCards.length == 12){
        alert("Você vai viver mais um dia, por enquanto...");
        endGame();
    }
}

function endGame(){
    gameEnded = true; // Define a flag como verdadeira para impedir mais interações
    clearInterval(timerInterval); // Para o timer
    if(numPlays==0){
        pupils.forEach(pupil => pupil.classList.add("lost"));
    }
    

    let cardcontainer = document.getElementsByClassName("card");
    for (let i = 0; i < cardcontainer.length; i++) {
        cardcontainer[i].classList.add("disabledCard"); // Adiciona a classe sem virar
        cardcontainer[i].removeEventListener("click", revealCard); // Remove o evento de clique
    }
}

window.onload = () => {
    startTimer();
    contPlays();
    createCards();
    document.addEventListener("mousemove", movePupils);
}
