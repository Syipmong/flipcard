const cards = [
  {
    name: "Yipmong",
    img: "https://blob.sololearn.com/avatars/9f25a6bd-bb35-47f2-8a76-e73f1e6ffe74.jpg"
  },
  {
    name: "Dave",
    img: "https://blob.sololearn.com/avatars/49832450-49aa-4209-8d6d-5acb6d758cd7.jpg"
  },
  {
    name: "babyloper",
    img: "https://blob.sololearn.com/avatars/a700c76f-bebc-4a19-be03-4bb74a6828ca.jpg"
  },
  {
    name: "babyloper2",
    img: "https://blob.sololearn.com/avatars/a700c76f-bebc-4a19-be03-4bb74a6828ca.jpg"
  },
  {
      name: "Yipmong2",
      img: "https://blob.sololearn.com/avatars/9f25a6bd-bb35-47f2-8a76-e73f1e6ffe74.jpg"
  },
  {
      name: "Dave2",
      img: "https://blob.sololearn.com/avatars/49832450-49aa-4209-8d6d-5acb6d758cd7.jpg"
  },
  {
      name: "Palomica",
      img: "https://blob.sololearn.com/avatars/c92d361c-c2f1-4083-990c-dad2e7e83585.jpg"
  },
  {
      name: "Palomica2",
      img: "https://blob.sololearn.com/avatars/c92d361c-c2f1-4083-990c-dad2e7e83585.jpg"
  },
  {
      name: "indu",
      img: "https://blob.sololearn.com/avatars/4ed31924-1457-411f-83a0-2a379428050a.jpg"
  },
  {
      name: "indu2",
      img: "https://blob.sololearn.com/avatars/4ed31924-1457-411f-83a0-2a379428050a.jpg"
  },
  {
      name: "brofar",
      img: "https://blob.sololearn.com/avatars/fc398abd-47d7-4f57-8d42-e793101d2af0.jpg"
  },
  {
      name: "brofar2",
      img: "https://blob.sololearn.com/avatars/fc398abd-47d7-4f57-8d42-e793101d2af0.jpg"
  },
  {
      name: "suparna",
      img: "https://blob.sololearn.com/avatars/9f25a6bd-bb35-47f2-8a76-e73f1e6ffe74.jpg"
  },
  {
      name: "suparna2",
      img: "https://blob.sololearn.com/avatars/9f25a6bd-bb35-47f2-8a76-e73f1e6ffe74.jpg"
  },
  {
      name: "Yipmong",
      img: "https://blob.sololearn.com/avatars/9f25a6bd-bb35-47f2-8a76-e73f1e6ffe74.jpg"
  },
  {
      name: "Yipmong",
      img: "https://blob.sololearn.com/avatars/9f25a6bd-bb35-47f2-8a76-e73f1e6ffe74.jpg"
  },
  {
      name: "Yipmong",
      img: "https://blob.sololearn.com/avatars/9f25a6bd-bb35-47f2-8a76-e73f1e6ffe74.jpg"
  },
  {
      name: "Yipmong",
      img: "https://blob.sololearn.com/avatars/9f25a6bd-bb35-47f2-8a76-e73f1e6ffe74.jpg"
  },
];

/*let gameStarted = false;
const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', startGame);

function startGame() {
  gameStarted = true;
}

function flipCard() {
  if (!gameStarted) {
    return;
  }
  flippedCards.push(this);

  this.classList.add("flip");

  if (flippedCards.length === 2) {
    setTimeout(checkForMatch, 1000);
  }
}
*/


let gameStarted = false;
const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', startGame);

function startGame() {
  gameStarted = true;
}

function flipCard() {
  if (!gameStarted) {
    return;
  }
  flippedCards.push(this);

  this.classList.add("flip");

  if (flippedCards.length === 2) {
    setTimeout(checkForMatch, 1000);
  }
}


let flippedCards = [];
let matchedCards = [];

function flipCard() {
  if (!gameStarted) {
    return;
  }
  flippedCards.push(this);

  this.classList.add("flip");

  if (flippedCards.length === 2) {
    setTimeout(checkForMatch, 1000);
  }
}


function createCards() {
  cards.sort(() => Math.random() - 0.5);

  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.name = cards[i].name;
    //card.style.backgroundImage = `url(${cards[i].img})`;
    card.addEventListener("click", flipCard);
    document.querySelector(".container").appendChild(card);
  }
}

function flipCard() {
  flippedCards.push(this);

  this.classList.add("flip");

  if (flippedCards.length === 2) {
    setTimeout(checkForMatch, 1000);
  }
}

function checkForMatch() {
  if (flippedCards[0].dataset.name === flippedCards[1].dataset.name) {
    flippedCards[0].removeEventListener("click", flipCard);
    flippedCards[1].removeEventListener("click", flipCard);
    matchedCards.push(flippedCards[0]);
    matchedCards.push(flippedCards[1]);
  } else {
    flippedCards[0].classList.remove("flip");
    flippedCards[1].classList.remove("flip");
  }

  flippedCards = [];

  if (matchedCards.length === cards.length) {
    alert("Congratulations! You matched all the cards!");
  }
}

createCards();
