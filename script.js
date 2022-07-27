"use strict";
// header hidden when scroll down
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    var header = document.getElementsByClassName("header")[0];

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.marginTop = "-18vh"
    } else {
        header.style.marginTop = "0"
    }
}

// gsap start
gsap.from('.salut', {x: 110, opacity: 0, delay: 1, duration: 0.8})
gsap.from('.eu_sunt', {x: 110, opacity: 0, delay: 1, duration: 1.2})
gsap.from('.ana', {x: 110, opacity: 0, delay: 1, duration: 1.6})
gsap.from('.om', {x: 110, opacity: 0, delay: 1, duration: 2})
gsap.from('.psihoterapeut', {x: 110, opacity: 0, delay: 1, duration: 2.2})

// let tl1 = gsap.to(".intro", {
//     scrollTrigger: {
//         trigger: ".intro",
//         markers: true,
//         start: "340 200px",
//         end: "200px 200px",       
//     },
//     x: "450px",
//     color: "red",
//     scrub: 1,
//     // pin: true,
//     duration: 3,
      
// })

let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        scrub: 1,
        pin: true,
        // markers: true,
        start: " ",
        end: "600px 200px",       
    }   
})

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".some",
        scrub: 1,
        pin: true,
        markers: true,
        start: "-500 0",
        end: "500px 200px",       
    }   
})

tl1.to('.intro', {x: 440, })
tl2.to('.some', { visibility: "visible", y: -450})

// =============================================
var imgs = $.makeArray( $('#images img') );
    imgs.reverse();

function crossfade(){
    TweenMax.to(imgs[0], 1, {autoAlpha:0,scale:1}) 
    TweenMax.to(imgs[1], 1, {autoAlpha:1, scale:1.2})
    imgs.push( imgs.shift() )
  }

var cycle = setInterval(crossfade,3000)










