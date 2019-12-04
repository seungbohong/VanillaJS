const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber){
    // 객제 생성
    const image = new Image();
    image.src = `Images/${imgNumber + 1}.jpg`
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();