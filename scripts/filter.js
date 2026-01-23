const languages = ["Japanese", "English"];

let l1 = document.getElementById("lang1");
let l2 = document.getElementById("lang2");
let f = document.getElementById("filter");

function emptyCell(c){
    if(c.children.length == 0){
        return true;
    }
    else{
        return false;
    }
}

function rightmost(lang1, lang2){
    if(languages.indexOf(lang2) > languages.indexOf(lang1)){
        return lang2;
    }
    else{
        return lang1;
    }
}

function filter(){
    var equal;
    if(l1.value == l2.value){
        equal = true;
    }
    else{
        equal = false;
    }
    let lines = document.getElementsByTagName("td");
    for(let x = 0; x < lines.length; x++){
        let cur = lines[x];
        lines[x].classList.remove("eng");
        if(!cur.classList.contains(l1.value) && !cur.classList.contains(l2.value)){
            cur.classList.add("hidden");
        }
        else{
            cur.classList.remove("hidden");
        }
    }
    let lines1 = document.getElementsByClassName(l1.value);
    let lines2 = document.getElementsByClassName(l2.value);
    for(let x = 0; x < lines1.length; x++){
        if(emptyCell(lines1[x]) && emptyCell(lines2[x])){
            lines1[x].classList.add("hidden");
            lines2[x].classList.add("hidden");
        }
        if(lines1[x].classList.contains("option") && !equal){
            if(rightmost(l1.value, l2.value) == l2.value){
                lines2[x].classList.add("eng");
            }
            else{
                lines1[x].classList.add("eng");
            }
        }
    }
}

function init(){
    f.addEventListener("click", filter);
}

init();