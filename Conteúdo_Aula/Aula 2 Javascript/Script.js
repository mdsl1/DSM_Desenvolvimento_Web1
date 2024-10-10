function mudarFundo(){
    console.log("Drento.");
    document.querySelector()

}
function voltarFundo(){
    console.log("Fora.");
    this.classList.replace("bgNewColor", "bgColor");
}
document.getElementById("mainDiv").addEventListener("mouseenter", mudarFundo);
document.getElementById("mainDiv").addEventListener("mouseleave", voltarFundo);