let currMode = "light";
let body = document.querySelector("body");
let heading = document.querySelector("h1");
let modeContainer = document.getElementById("conv");
let mode = document.getElementById("mode");3

body.classList.add("body");

function modes(){
    if(currMode==="light"){
        ligthMode();
    }
    else{
        darkMode();
    }
}

function ligthMode(){
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    heading.innerText = "We are in dark mode";
    mode.style.transition = "all 0.30s ease-in";
    mode.style.backgroundColor = "white";
    mode.style.transform = "translate(100px)";
    modeContainer.style.transition = "all 0.30s ease-in";
    modeContainer.style.backgroundColor = "black";
    modeContainer.style.border = "2px solid white";

    currMode = "dark";
}

function darkMode(){
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    heading.innerText = "We are in light mode";
    mode.style.transition = "all 0.30s ease-in";
    mode.style.backgroundColor = "black";
    mode.style.transform = "translate(0px)";
    modeContainer.style.transition = "all 0.30s ease-in";
    modeContainer.style.border = "2px solid black";
    modeContainer.style.backgroundColor = "white";

    currMode = "light";
}

mode.addEventListener("click",modes);
