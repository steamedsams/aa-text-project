function enableSearchMode(){
    let boxes = document.getElementsByClassName("collapsible");
    for(let x = 0; x < boxes.length; x++){
        boxes[x].classList.add("isActive");
        let content = boxes[x].nextElementSibling;
        content.style.display = "block";
    }
}

function init(){
    let searchmode = document.getElementById("searchmode");
    searchmode.addEventListener("click", enableSearchMode);
}

init();