let tds = document.getElementsByTagName("td");
const langs = 2;

for (let x = 0; x < tds.length; x++) {
    if (x % langs == 0) {
        tds[x].classList.add("Japanese");
    }
    else if(x % langs == 1) {
        tds[x].classList.add("English");
    }
}
