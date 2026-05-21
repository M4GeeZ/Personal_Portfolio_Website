const words = [
  "Full Stack Developer",
  "UI/UX Designer"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    currentWord = words[wordIndex];

    if(isDeleting){
        typing.textContent =
        currentWord.substring(0, letterIndex--);
    }

    else{
        typing.textContent =
        currentWord.substring(0, letterIndex++);
    }

    let speed = isDeleting ? 50 : 100;

    if(!isDeleting &&
       letterIndex === currentWord.length + 1){

        speed = 1200;
        isDeleting = true;
    }

    else if(isDeleting &&
            letterIndex === 0){

        isDeleting = false;

        wordIndex++;

        if(wordIndex >= words.length){
            wordIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();