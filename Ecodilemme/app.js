let affich = document.getElementById('compt');
let button = document.getElementById('myButton');
let currentIndex;
var good = document.getElementById('mbon');
var neutral = document.getElementById('danger');
var critical = document.getElementById('critik');

if(document.URL.indexOf("index") >-1){
    currentIndex = 7;
} else {
    currentIndex =  sessionStorage.getItem("cpt");
}
affich.innerHTML = currentIndex;

if(currentIndex > 4){
    good.play();
} else if (currentIndex >2){
    neutral.play();
}else {
    critical.play();
}

if (document.URL.indexOf("Fin") >-1 && currentIndex > 4 ){

} else if (document.URL.indexOf("Fin") >-1 && currentIndex > 2 ){

} else if (document.URL.indexOf("Fin") >-1 ){

}


document.addEventListener("DOMContentLoaded", () => {
    button.addEventListener('click', () => {
        currentIndex--;
        affich.innerHTML = currentIndex;
        sessionStorage.setItem("cpt", currentIndex);
    });
});