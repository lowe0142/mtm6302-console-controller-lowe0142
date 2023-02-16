function setTitle(title){
    const $title = document.getElementById("title").innerHTML = "New Title";
}

   
 function setDescription(p){
    const $p = document.querySelector("p").innerHTML = "This allows for user interaction without the need for an interface.";
}


function setBackgroundColor(bckg){
    const $bckg =  document.body.style.backgroundColor = "lightpink";
}


    
function setFontColour(){
    const font = document.getElementById("main").style.color = "green";
}


function setTheme(){
    let element = document.body;
    element.classList.toggle("dark-mode");
}


