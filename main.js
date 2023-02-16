function setTitle(title){
    const $title = document.getElementById('title')
    $title.textContent= title
}

   
function setDescription(p){
    const $p = document.querySelector('p')
    $p.textContent = p
}


function setBackgroundColor(bck){
    const $body =  document.body
    $body.style.backgroundColor = bck;
}

    
function setFontColour(colour){
    const $body = document.body
    $body.style.color = colour;
}


function setTheme(){
    const element = document.body;
    element.classList.toggle('dark-mode');
}
