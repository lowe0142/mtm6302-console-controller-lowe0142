function setTitle(title){
    const $title = document.getElementById('title')
    $title.textContent= title
}

   
function setDescription(p){
    const $p = document.querySelector('p')
    $p.textContent = p
}


function setBackgroundColor(bckg){
    const $bckg =  document.getElementById('main')
    $bckg.style.backgroundColor = bckg
}

    
function setFontColour(colour){
    const $colour = document.getElementById('main')
    $colour.style.color = colour
}


function setTheme(theme){
    let $theme = document.getElementById('main')
    $theme.classList.toggle = theme
}


