let footerClick = document.querySelector("footer");
let i = 0

function onClickFooter() {
    console.clear()
    i++
    console.log("clique numéro : " + i);
};

footerClick.addEventListener("click", onClickFooter);

// Hamburger Menu

let menuBtn = document.querySelector(".navbar-toggler");
let menu = document.getElementById("navbarHeader");
// let menuStatus = false;
// function menuToggle() {
//     if(menuStatus == false) {
//       menu.classList.remove("collapse");
//       menuStatus = true;
//     }

//     else if(menuStatus == true) {
//       menu.classList.add("collapse");
//       menuStatus = false;
//     }
        
// };

function menuToggle() {
    menu.classList.toggle("collapse");
}
menuBtn.addEventListener("click", menuToggle);


// Edit red irreversible

let card1 = document.querySelector(".card-body")[0]; 
let editButton1 = document.querySelector("div div .btn-outline-secondary");
let text = document.querySelector(".card-text");

function redColor() {
    text.style.color = "red"
}

editButton1.addEventListener("click", redColor);


// Edit second card to green


// let secondCard = document.querySelectorAll(".card-body")[1]; 
// // let editButton2 = secondCard.querySelector(".btn-outline-secondary");
// console.log(secondCard);
// let text2 = document.querySelector(".card-text")[1];

let secondCard = document.querySelectorAll(".card-body")[1];
let editButton2 = secondCard.querySelector(".btn-outline-secondary");
let text2 = secondCard.querySelector(".card-text");

function turnGreen() {
    if(text2.style.color === "green") {
        text2.style.color = "";
    }
    else if(text2.style.color === ""){
        text2.style.color = "green";
    }
};

editButton2.addEventListener("click", turnGreen);

// DISABLE NAVBAR

let navBar = document.querySelector("header");
let link = document.querySelector("link");

function disabledCss() {

  if (link.disabled === true) {
    link.disabled = false;
  }
  else {
    link.disabled = true
  }
};
navBar.addEventListener("dblclick",disabledCss);