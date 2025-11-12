let g9 = document.getElementById("tgaa1");
let g10 = document.getElementById("tgaa2");

function tgaa1(){
    this.src = "images/titlebuttons/tgaa1/tgaa1.png";
}
function tgaa1hl(){
    this.src = "images/titlebuttons/tgaa1/tgaa1hl.png";
}
function tgaa2(){
    this.src = "images/titlebuttons/tgaa2/tgaa2.png";
}
function tgaa2hl(){
    this.src = "images/titlebuttons/tgaa2/tgaa2hl.png";
}

function init(){
    g9.addEventListener("mouseout", tgaa1);
    g9.addEventListener("mouseover", tgaa1hl);
    g10.addEventListener("mouseout", tgaa2);
    g10.addEventListener("mouseover", tgaa2hl);
}

init();