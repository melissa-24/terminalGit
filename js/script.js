// var mainIndex = 1;
// showMainDivs(mainIndex);

// function plusMainDivs(n) {
//     showMainDivs(mainIndex += n);
// }

// function showMainDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("mainSlides");
//     if (n > x.length) {mainIndex = 1}
//     if (n < 1) {mainIndex = x.length}
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";  
//     }
//     x[mainIndex-1].style.display = "flex";  
// }

var altIndex = 1;
showAltDivs(altIndex);

function plusAltDivs(n) {
    showAltDivs(altIndex += n);
}

function showAltDivs(n) {
    var i;
    var x = document.getElementsByClassName("altSlides");
    if (n > x.length) {altIndex = 1}
    if (n < 1) {altIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[altIndex-1].style.display = "flex";  
}


function openMainModal() {
    document.getElementById("myMainModal").style.display = "flex"
}
function closeMainModal() {
    document.getElementById("myMainModal").style.display = "none";
}


var slideMainIndex = 1;

showMainSlides(slideMainIndex);

function plusMainSlides(n) {
    showMainSlides(slideMainIndex += n);
}

function currentMainSlide(n) {
    showMainSlides(slideMainIndex = n);
}

function showMainSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mainSlides");
    var dots = document.getElementsByClassName("main");
    if (n > slides.length) {
        slideMainIndex = 1
    }
    if (n < 1) {
        slideMainIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideMainIndex-1].style.display = "flex";
    dots[slideMainIndex-1].className += " active";
}