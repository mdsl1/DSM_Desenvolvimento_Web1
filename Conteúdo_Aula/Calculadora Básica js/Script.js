
function efetuarCalculo(){
    let v1 = parseFloat(document.getElementById("v1").value);
    let v2 = parseFloat(document.getElementById("v2").value);
    let op = document.querySelector("input[name=op]:checked")
    if (op != null){
        op = op.value;

        let result = 0;

        if (op == "+"){
            result = v1+v2;
        }
        else if (op =="-"){
            result = v1-v2;
        }
        else if (op =="*"){
            result = v1*v2;
        }
        else{
            result = v1/v2;
        }
        document.getElementById("resultado").innerHTML = "<strong>Resultado: </strong>" + result;
    }
}

var btnCalcular = document.getElementById("btnClicar");
btnCalcular.addEventListener("click", efetuarCalculo);