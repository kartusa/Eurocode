//podmianka divów za pomocą menu

function pokazDanePodstawowe() {
    var el_danePodstawowe = document.getElementById("danePodstawowe");
    //el_danePodstawowe.classList.add("nieukryty");
    el_danePodstawowe.classList.remove("ukryty");

    var el_faktor = document.getElementById("faktor");
    el_faktor.classList.add("ukryty");
    //el_faktor.classList.remove("nieukryty");

    var el_material = document.getElementById("material");
    el_material.classList.add("ukryty");
    //el_material.classList.remove("nieukryty");

    var el_wyniki = document.getElementById("wyniki");
    el_wyniki.classList.add("ukryty");
    //el_wyniki.classList.remove("nieukryty");
}

function pokazMaterialy() {
    var el_danePodstawowe = document.getElementById("danePodstawowe");
    el_danePodstawowe.classList.add("ukryty");
    //el.el_danePodstawowe.classList.remove("nieukryty");

    var el_faktor = document.getElementById("faktor");
    el_faktor.classList.add("ukryty");
    //el.faktor.classList.remove("nieukryty");

    var el_material = document.getElementById("material");
    //el_material.classList.add("nieukryty");
    el_material.classList.remove("ukryty");

    var el_wyniki = document.getElementById("wyniki");
    el_wyniki.classList.add("ukryty");
    //el_wyniki.classList.remove("nieukryty");
}

function pokazFaktor() {
    var el_danePodstawowe = document.getElementById("danePodstawowe");
    el_danePodstawowe.classList.add("ukryty");
    //el_danePodstawowe.classList.remove("nieukryty");

    var el_faktor = document.getElementById("faktor");
    //el_faktor.classList.add("nieukryty");
    el_faktor.classList.remove("ukryty");

    var el_material = document.getElementById("material");
    el_material.classList.add("ukryty");
    //el_material.classList.remove("nieukryty");

    var el_wyniki = document.getElementById("wyniki");
    el_wyniki.classList.add("ukryty");
    //el_wyniki.classList.remove("nieukryty");
}

function pokazWyniki() {
    var el_danePodstawowe = document.getElementById("danePodstawowe");
    el_danePodstawowe.classList.add("ukryty");
    //el_danePodstawowe.classList.remove("nieukryty");

    var el_faktor = document.getElementById("faktor");
    el_faktor.classList.add("ukryty");
    //el_faktor.classList.remove("nieukryty");

    var el_material = document.getElementById("material");
    el_material.classList.add("ukryty");
    //el_material.classList.remove("nieukryty");

    var el_wyniki = document.getElementById("wyniki");
    //el_wyniki.classList.add("nieukryty");
    el_wyniki.classList.remove("ukryty");
}

function zmienKolorLicz() {
    var licz = document.getElementById("licz");
    licz.style.background = "#fff";
    licz.style.color = "#42649f";
}

function zmienKolorLicz1() {
    var liczButton = document.getElementById("licz");
    liczButton.style.background = "#42649f";
    liczButton.style.color = "#fff";
}

window.onload = function() {
    var liczButton = document.getElementById("licz");
    liczButton.addEventListener("mouseover", zmienKolorLicz);
    liczButton.addEventListener("mouseout", zmienKolorLicz1);
}


function przypisz1() {
    var x = document.getElementById('subst1').value;
    x = x.toUpperCase();
    var y = 0;
    switch(x) {
        case 'WĘGIEL': 
            y = 40;
            break;
        case 'PAPIER':
            y = 35;
            break;
        default:
            alert("Nie znaleziono substancji w bazie!");
    }
    document.getElementById('masa1').value = y;
    console.log("subst = " + x + ". Masa = " + y);
}

function licz() {
    alert("LICZ");
}

