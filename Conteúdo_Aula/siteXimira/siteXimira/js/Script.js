function esconder(){
    let dits = document.getElementsByClassName("ditadosximira");
    dits[0].style.display = "none";
    dits[1].style.display = "none";
}

document.getElementById("clkHide").addEventListener("click", esconder);