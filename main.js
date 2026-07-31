/* ==================================================
   AJ PORTFOLIO
   Main JavaScript
   Version 2.0
================================================== */

/* ==========================
   WAIT FOR PAGE TO LOAD
========================== */

window.addEventListener("load", () => {

    /* --------------------------
       Get Elements
    -------------------------- */

    const navbar = document.getElementById("navbar");
    const hero = document.querySelector(".hero");
    const bio = document.querySelector(".bio-card");
    const video = document.querySelector(".video-card");

    /* --------------------------
       Add Animation Classes
    -------------------------- */

    hero.classList.add("fade-up");

    bio.classList.add("fade-left");

    video.classList.add("fade-right");

    /* --------------------------
       Start Animations
    -------------------------- */

    setTimeout(() => {

        hero.classList.add("show");

    },300);

    setTimeout(() => {

        bio.classList.add("show");

    },700);

    setTimeout(() => {

        video.classList.add("show");

    },1000);

});

/* ==========================
   STICKY NAVBAR
========================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.padding = "15px 0";

    }

    else{

        navbar.style.padding = "25px 0";

    }

});