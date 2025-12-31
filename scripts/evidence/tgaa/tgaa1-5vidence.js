const unknown_jp = "不明";
const unknown_en = "Unknown";
const egg_jp = "エッグ・ベネディクト";
const egg_en = "Eggert Benedict";
const ash_jp = "ルバート・クログレイ";
const ash_en = "Ashley Graydon";

let name_jp_1 = document.getElementById("name_jp_1");
let name_jp_2 = document.getElementById("name_jp_2");
let name_en_1 = document.getElementById("name_en_1");
let name_en_2 = document.getElementById("name_en_2");

function changeNameJpn(){
    if(this.textContent == ash_jp){
        this.textContent = egg_jp;
    }
    else if(this.textContent == egg_jp){
        this.textContent = unknown_jp;
    }
    else{
        this.textContent = ash_jp;
    }
}

function changeNameEng(){
    if(this.textContent == ash_en){
        this.textContent = egg_en;
    }
    else if(this.textContent == egg_en){
        this.textContent = unknown_en;
    }
    else{
        this.textContent = ash_en;
    }
}

function init(){
    name_jp_1.textContent = ash_jp;
    name_jp_2.textContent = ash_jp;
    name_jp_1.addEventListener("click", changeNameJpn);
    name_jp_2.addEventListener("click", changeNameJpn);
    name_en_1.textContent = ash_en;
    name_en_2.textContent = ash_en;
    name_en_1.addEventListener("click", changeNameEng);
    name_en_2.addEventListener("click", changeNameEng);
}

init();