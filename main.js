function setTitle(title){
    const $title = document.getElementById('title')
    $title.textContent= title
}

   
function setDescription(p){
    const $p = document.querySelector('p')
    $p.textContent = p
}


function setBackgroundColor(bckg){
    const $bckg =  document.getElementById('body')
    $bckg.style.backgroundColor = bckg
}

    
function setFontColour(colour){
    const $colour = document.getElementById('body')
    $colour.style.color = colour
}


function setTheme(){
    const element = document.body;
    element.classList.toggle('dark-mode');
}
