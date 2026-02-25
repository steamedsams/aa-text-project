let tds = document.getElementsByTagName("td");
const langs = ["Japanese", "English"];

function alreadyHasLanguage(tmp) {
    for (let i = 0; i < langs.length; i++) {
        if (tmp.classList.contains(langs[i])) {
            return true;
        }
    }
    return false;
}

for (let x = 0; x < tds.length; x++) {
    if (x % langs.length == 0) {
        if (!alreadyHasLanguage(tds[x])) {
            tds[x].classList.add("Japanese");
        }
    }
    else if (x % langs.length == 1) {
        if (!alreadyHasLanguage(tds[x])) {
            tds[x].classList.add("English");
        }
    }
}
