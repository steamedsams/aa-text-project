const lm_jp_alt = "A street map of a crime scene. The streets 'Briar Road', 'Meerschaum Road', and 'Calabash Road', are labeled in Japanese Katakana. A red X marks an area on Briar Road where the crime took place.";
const lm_en_alt = "A street map of a crime scene. The streets 'Briar Road', 'Meerschaum Street', and 'Calabash Road', are labeled. A red X marks an area on Briar Road where the crime took place.";
const lm_jp_alt_1 = "A street map of a crime scene. The streets 'Briar Road', 'Meerschaum Road', and 'Calabash Road', are labeled in Japanese Katakana. A red X marks an area on Briar Road where the crime took place. The locations '漱石の下宿' and 'ブルボン屋' are outlined and labeled.";
const lm_en_alt_1 = "A street map of a crime scene. The streets 'Briar Road', 'Meerschaum Street', and 'Calabash Road', are labeled. A red X marks an area on Briar Road where the crime took place. The locations 'Mr Natsume's Lodgings' and 'Bourbon Books' are outlined and labeled.";
const lm_jp_alt_2 = "A street map of a crime scene. The streets 'Briar Road', 'Meerschaum Road', and 'Calabash Road', are labeled in Japanese Katakana. A red X marks an area on Briar Road where the crime took place. The locations '漱石の下宿,' 'ブルボン屋,' and 'ボロブック古書堂' are outlined and labeled.";
const lm_en_alt_2 = "A street map of a crime scene. The streets 'Briar Road', 'Meerschaum Street', and 'Calabash Road', are labeled. A red X marks an area on Briar Road where the crime took place. The locations 'Mr Natsume's Lodgings,' 'Bourbon Books,' and 'Yore Books' are outlined and labeled.";

let lm_jp = document.getElementById("lm_jp");
let lm_en = document.getElementById("lm_en");

function changeImgJpn(){
    if (lm_jp.alt == lm_jp_alt_2){
        lm_jp.src = "images/evidence/tgaa/localmap_updated_jpn.png";
        lm_jp.alt = lm_jp_alt_1;
    }
    else if(lm_jp.alt == lm_jp_alt_1){
        lm_jp.src = "images/evidence/tgaa/localmap_jpn.png";
        lm_jp.alt = lm_jp_alt;
    }
    else{
        lm_jp.src = "images/evidence/tgaa/localmap_updated2_jpn.png";
        lm_jp.alt = lm_jp_alt_2;
    }
}

function changeImgEng(){
    if (lm_en.alt == lm_en_alt_2){
        lm_en.src = "images/evidence/tgaa/localmap_updated_eng.png";
        lm_en.alt = lm_en_alt_1;
    }
    else if(lm_en.alt == lm_en_alt_1){
        lm_en.src = "images/evidence/tgaa/localmap_eng.png";
        lm_en.alt = lm_en_alt;
    }
    else{
        lm_en.src = "images/evidence/tgaa/localmap_updated2_eng.png";
        lm_en.alt = lm_en_alt_2;
    }
}

function init(){
    lm_jp.alt = lm_jp_alt_2;
    lm_jp.addEventListener("click", changeImgJpn);
    lm_en.alt = lm_en_alt_2;
    lm_en.addEventListener("click", changeImgEng);
}

init();