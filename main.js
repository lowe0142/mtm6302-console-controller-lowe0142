function setTitle(){
    const title = document.getElementById("main-h1").innerHTML = "New Title";
}

   
 function setDescription(){
    const description = document.querySelector("p").innerHTML = "This allows for user interaction without the need for an interface.";
}


function setBackgroundColor(){
    const bckg =  document.body.style.backgroundColor = "lightpink";
}


    
function setFontColour(){
    const font = document.getElementById("main").style.color = "green";
}


function setTheme(){
    let element = document.body;
    element.classList.toggle("dark-mode");
}


