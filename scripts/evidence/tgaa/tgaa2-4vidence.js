const lastbow = ["tgaa2-4a.html", "tgaa2-4b.html", "tgaa2-4c.html"];
const resolve = ["tgaa2-5a.html", "tgaa2-5b.html", "tgaa2-5c.html"];
const case4 = "Case 2-4:";
const case5 = "Case 2-5:";

const p2 = "Part 2";
const p3 = "Part 3"
const case5b = "Intermission"

let nav = document.getElementsByClassName("nav")[0];
let current = document.getElementById("current");
let other = document.getElementById("other");
let otherUL = document.getElementById("otherul");
let parta = document.getElementById("parta");
let partb = document.getElementById("partb");
let partc = document.getElementById("partc");
let locations = document.getElementById("locations");

function toggleSelect(){
    if(otherUL.classList.contains("hidden")){
        otherUL.classList.remove("hidden");
    }
    else{
        hideSelect();
    }
}
function hideSelect(){
    otherUL.classList.add("hidden");
}

function switchCase(){
    if(current.textContent == case4){
        current.textContent = case5;
        other.textContent = case4;
        parta.href = resolve[0];
        partb.href = resolve[1];
        partc.href = resolve[2];
        partb.textContent = case5b;
        partc.textContent = p2;
        locations.classList.add("hidden");
    }
    else{
        current.textContent = case4;
        other.textContent = case5;
        parta.href = lastbow[0];
        partb.href = lastbow[1];
        partc.href = lastbow[2];
        partb.textContent = p2;
        partc.textContent = p3;
        locations.classList.remove("hidden");
    }
    hideSelect();
}

function init(){
    current.addEventListener("click", toggleSelect);
    other.addEventListener("click", switchCase);
    otherUL.addEventListener("mouseout", hideSelect);
    nav.addEventListener("mouseover", hideSelect);
    parta.addEventListener("mouseover", hideSelect);
}

init();