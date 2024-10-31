function mudarCorDeFundo(){    
    this.classList.replace("corDeFundo","novaCorDeFundo");
    let imgEl = document.querySelector(".imgChico");
    imgEl.setAttribute("src","img/feliz.gif");
}

function voltarCorDeFundo(){
    this.classList.replace("novaCorDeFundo","corDeFundo");
    let imgEl = document.querySelector(".imgChico");
    imgEl.setAttribute("src","img/titi.jpg");
}

document.getElementById("divPrincipal").addEventListener('mouseenter',mudarCorDeFundo);
document.getElementById("divPrincipal").addEventListener('mouseleave',voltarCorDeFundo);