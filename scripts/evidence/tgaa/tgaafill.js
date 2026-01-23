let tds = document.getElementsByTagName("td");
for (let x = 0; x < tds.length; x++) {
    if (x%2 == 0) {
        tds[x].classList.add("Japanese");
    }
    else {
        tds[x].classList.add("English");
    }
}