function esconder(){
    let dits = document.getElementsByClassName("ditadosximira");
    let i =0
    while(i<dits.length){
        if (dits[i].style.display == "none"){
            dits[i].style.display = "block";
        }
        else{
            dits[i].style.display = "none";
        }
        i++;
    }
}

function addClassEnter(ev){
    this.classList()
}



function vinculaEvento(){
    document.getElementById("clkHide").addEventListener("click", esconder);
}

