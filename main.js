function setTitle(){
    const title = document.getElementById("main-h1").innerHTML = "New Title";
}
setTitle()
   
 function setDescription(){
    const description = document.querySelector("p").innerHTML = "New Description of Console Constroller";
}
setDescription()

function setBackgroundColor(){
    const bckg =  document.body.style.backgroundColor = "lightpink";
}
setBackgroundColor()
    
function setFontColour(){
    const font = document.getElementById("main").style.color = "green";
}
setFontColour()

function setTheme(){
    let element = document.body;
    element.classList.toggle("dark-mode");
}
setTheme()

