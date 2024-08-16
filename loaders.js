let loader = document.getElementById("loader");
//this is it. this will execute after the window is fully loaded
window.addEventListener("load", function () {
    console.log("This message will print just after fully loading the website")

    //hide the loader
    loader.style.display = 'none';
});


// in addition to that if you want to run a code as soon as the DOM created
/*
document.addEventListener("DOMContentLoaded", function () {
    // you can write anything you want here, and it will run just after creating the DOM object
    let h1 = document.createElement("h1");
    h1.textContent = "HI there";

    let body=document.querySelector("body");
    body.prepend(h1);
});
*/
