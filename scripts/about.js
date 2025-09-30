let age = document.getElementById("age");
const today = new Date();
let a = today.getFullYear() - 2003;
if(today.getMonth() < 4){
    a--;
}
else if(today.getMonth == 4){
    if(today.getDate() < 9){
        a--;
    }
}
age.textContent = a;