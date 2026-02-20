let searchmode = document.getElementById("searchmode");

function enableSearchMode(){
    let boxes = document.getElementsByClassName("collapsible");
    for(let x = 0; x < boxes.length; x++){
        boxes[x].classList.add("isActive");
        let content = boxes[x].nextElementSibling;
        content.style.display = "block";
    }
}

searchmode.addEventListener("click", enableSearchMode);
