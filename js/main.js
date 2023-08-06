const sliders = document.querySelectorAll(".slideshow span");
let counter = 0;
const jobsInput = document.getElementById("jobs");
let x = 0;
const jobs = ["Search Jobs (e.g. Senior PHP Developer)","Search Jobs (e.g. Work From Home)","Search Jobs (e.g. Sales in Maadi)"];
const goDown = document.getElementById("go-down");
const main = document.getElementById("main");
const sideNav  = document.getElementById("side-nav");
const sideBox = document.getElementById("side-box");
const secondSideBox = document.getElementById("second-side-box");

window.onload = function () {
    jobsInput.setAttribute("placeholder", jobs[x]);
}

window.onscroll = function () {
    if(document.documentElement.scrollTop >= (main.offsetHeight / 2)) {
         sideNav.classList.add("active");
         if(!sideBox.classList.contains("none")) {
             secondSideBox.classList.remove("none");
         }
    } else {
        sideNav.classList.remove("active");
        secondSideBox.classList.add("none");
    }
}

setInterval(function() {
    counter++;
    if(counter === sliders.length) {
        counter = 0;
        for(i = 0; i < sliders.length; i++) {
            sliders[i].classList.remove("active");
            sliders[i].classList.remove("upcoming");
        }
        sliders[counter].classList.add("active");
        sliders[counter + 1].classList.add("upcoming");
    } else {
        for(i = 0; i < sliders.length; i++) {
            sliders[i].classList.remove("active");
            sliders[i].classList.remove("upcoming");
        }
        sliders[counter].classList.add("active");
        sliders[counter < sliders.length - 1 ? counter + 1: 0].classList.add("upcoming");
    }
}, 6000);

setInterval(function() {
    x++;
    if(x === jobs.length) {
        x = 0
        jobsInput.setAttribute("placeholder", jobs[x]);
    } else {
    jobsInput.setAttribute("placeholder", jobs[x]);
    }
}, 4000);

goDown.onclick = function () {
    document.documentElement.scrollTop = main.offsetHeight - 70;
}

document.querySelector(".right-sec i").onclick = function () {
    this.classList.toggle("active");
    sideBox.classList.toggle("none");
}

document.querySelector(".side-right-sec i").onclick = function () {
    sideBox.classList.toggle("none");
    document.querySelector(".right-sec i").classList.toggle("active");
    secondSideBox.classList.toggle("none");
}

// let a7a = document.getElementById("a7a");
// let swipe = false;
// let rightprev;
// let rightnow;
// let cff = 0;

// a7a.addEventListener("mousedown", function(e) {
//     if(e.button === 0) {
//     swipe = true;
//     rightprev = e.clientX;
//     } else {
//         false;
//     }

// })

// a7a.addEventListener("mousemove", function(e) {
//     if(swipe === true) {
//        rightnow = e.clientX;
//     }
// })

// a7a.addEventListener("mouseup", function(e){
//      swipe = false;
//      if(e.button === 0) {
//         if(rightprev > rightnow) {
//             cff = cff + 100;
//             if(cff >= 400) {
//                 cff = 300;
//             } else {
//              a7a.children[0].style.marginRight = `${-cff}%`;
//              }
//         } else {
//             cff = cff - 100;
//             if(cff === -100) {
//                 cff = 0;
//             } else {
//             a7a.children[0].style.marginRight = `${-cff}%`;
//             }
//          }
//      } else {
//          false;
//      }
// })

// const next = document.getElementById("next");

// let gp;
// let pg;
// function trigger () { 
//   gp = setInterval(function () {
//     next.click();
// }, 5000);

// }

// trigger();

// next.addEventListener("mouseup", function() {
//     clearInterval(gp);
//     clearTimeout(pg);
//     pg = setTimeout(function () {
//         trigger();
//     }, 5000);
// })