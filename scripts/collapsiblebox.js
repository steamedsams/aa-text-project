function display(){
    this.classList.toggle("isActive");
    let content = this.nextElementSibling;
    if(content.style.display === "block"){
        content.style.display = "none";
    }
    else{
        content.style.display = "block";
    }
}

function init(){
    let boxes = document.getElementsByClassName("collapsible");
    for(let x = 0; x < boxes.length; x++){
        boxes[x].addEventListener("click", display);
        boxes[x].addEventListener("click", init);
    }
}

init();