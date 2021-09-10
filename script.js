window.onload = function(){
    displayOn()
}

function displayOn(){
    let selectam = document.getElementsByClassName('intro_h1')[0];
    selectam.style.visibility = "visible";
}


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
        var header = document.getElementsByClassName('header')[0]        
        header.style.height = "6vh";
    } else {
        console.log("s")
    }
}