let departure = document.getElementById("tgaa1-1");
let band = document.getElementById("tgaa1-2");
let room = document.getElementById("tgaa1-3");
let kokoro = document.getElementById("tgaa1-4");
let story = document.getElementById("tgaa1-5");
let escapades = document.getElementById("tgaa1-6");

function c1(){
    this.src = "images/titlebuttons/tgaa1/tgaa1-1.png";
}
function c1hl(){
    this.src = "images/titlebuttons/tgaa1/tgaa1-1hl.png";
}
function c2(){
    this.src = "images/titlebuttons/tgaa1/tgaa1-2.png";
}
function c2hl(){
    this.src = "images/titlebuttons/tgaa1/tgaa1-2hl.png";
}
function c3(){
    this.src = "images/titlebuttons/tgaa1/tgaa1-3.png";
}
function c3hl(){
    this.src = "images/titlebuttons/tgaa1/tgaa1-3hl.png";
}
function c4(){
    this.src = "images/titlebuttons/tgaa1/tgaa1-4.png";
}
function c4hl(){
    this.src = "images/titlebuttons/tgaa1/tgaa1-4hl.png";
}
function c5(){
    this.src = "images/titlebuttons/tgaa1/tgaa1-5.png";
}
function c5hl(){
    this.src = "images/titlebuttons/tgaa1/tgaa1-5hl.png";
}
function e(){
    this.src = "images/titlebuttons/tgaa1/escapades.png";
}
function ehl(){
    this.src = "images/titlebuttons/tgaa1/escapadeshl.png";
}

function init(){
    departure.addEventListener("mouseout", c1);
    departure.addEventListener("mouseover", c1hl);
    band.addEventListener("mouseout", c2);
    band.addEventListener("mouseover", c2hl);
    room.addEventListener("mouseout", c3);
    room.addEventListener("mouseover", c3hl);
    kokoro.addEventListener("mouseout", c4);
    kokoro.addEventListener("mouseover", c4hl);
    story.addEventListener("mouseout", c5);
    story.addEventListener("mouseover", c5hl);
    escapades.addEventListener("mouseout", e);
    escapades.addEventListener("mouseover", ehl);
}

init();