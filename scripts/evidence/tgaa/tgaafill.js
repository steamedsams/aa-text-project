let tds = document.getElementsByTagName("td");
const langs = ["Japanese", "English"];

function alreadyHasLanguage(tmp){
    for(let i = 0; i < langs.length; i++){
        if(tmp.classList.contains(langs[i])){
            return true;
        }
    }
    return false;
}

for (let x = 0; x < tds.length; x++) {
    if(!alreadyHasLanguage(tds[x])){
        tds[x].classList.add(langs[x % langs.length]);
    }
}
