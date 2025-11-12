let adventure = document.getElementById("tgaa2-1");
let memoirs = document.getElementById("tgaa2-2");
let thereturn = document.getElementById("tgaa2-3");
let lastbow = document.getElementById("tgaa2-4");
let resolve = document.getElementById("tgaa2-5");

function c1(){
    this.src = "images/titlebuttons/tgaa2/tgaa2-1.png";
}
function c1hl(){
    this.src = "images/titlebuttons/tgaa2/tgaa2-1hl.png";
}
function c2(){
    this.src = "images/titlebuttons/tgaa2/tgaa2-2.png";
}
function c2hl(){
    this.src = "images/titlebuttons/tgaa2/tgaa2-2hl.png";
}
function c3(){
    this.src = "images/titlebuttons/tgaa2/tgaa2-3.png";
}
function c3hl(){
    this.src = "images/titlebuttons/tgaa2/tgaa2-3hl.png";
}
function c4(){
    this.src = "images/titlebuttons/tgaa2/tgaa2-4.png";
}
function c4hl(){
    this.src = "images/titlebuttons/tgaa2/tgaa2-4hl.png";
}
function c5(){
    this.src = "images/titlebuttons/tgaa2/tgaa2-5.png";
}
function c5hl(){
    this.src = "images/titlebuttons/tgaa2/tgaa2-5hl.png";
}

function init(){
    adventure.addEventListener("mouseout", c1);
    adventure.addEventListener("mouseover", c1hl);
    memoirs.addEventListener("mouseout", c2);
    memoirs.addEventListener("mouseover", c2hl);
}

init();