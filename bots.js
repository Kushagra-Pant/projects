function expand(element, text){
    buttons = document.getElementsByClassName("expand")
    for(i = 0; i < buttons.length; i++){
        if (buttons[i] == element){
            buttons[i].style.display = 'none'
            document.getElementsByClassName("buttondesc")[i].innerHTML = text
            document.getElementsByClassName("seeless")[i].style.display = 'inline-block'
        }
    }
}

function seeless(element){
    elems = document.getElementsByClassName("seeless")
    for(i = 0; i < elems.length; i++){
        if (elems[i] == element){
            elems[i].style.display = 'none'
            document.getElementsByClassName("buttondesc")[i].innerHTML = ""
            document.getElementsByClassName("expand")[i].style.display = 'inline-block'
        }
    }
}