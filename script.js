

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
        header.style.height = "16vh";


        
        
    } else {
        console.log("s")
    }
}



function scrollFunction() {

    if (document.body.scrollTop > -1 || document.documentElement.scrollTop > -1) {
        var home = document.getElementsByClassName('home')[0]
        // home.style.backgroundColor = "red"
    } else {
        console.log("s")
    }
}



// just jquery down




console.log('hello  ')

const Environment = require('jest-environment-jsdom');

