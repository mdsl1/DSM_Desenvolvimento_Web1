var apiKey = "a65dbb2240a449bd8e7183620242804";

function atualizaDadosCidade(dadosRetorno){
    let dadosTempoCidade = JSON.parse(this.responseText);
    console.log(dadosTempoCidade);
    let cityCard = document.getElementById(dadosTempoCidade.location.name+"Card");
    let cityName = cityCard.querySelector(".cityName");
    cityName.innerHTML = dadosTempoCidade.location.name;
    let cityTemp = cityCard.querySelector(".temp");
    cityTemp.innerHTML = dadosTempoCidade.current.temp_c + "&deg;";

    let condicao = cityCard.querySelector(".condition");
    condicao.innerHTML = '<span>Clima</span><span>'+dadosTempoCidade.current.condition.text+'</span>';

    let sensTerm = cityCard.querySelector(".sensacao");
    sensTerm.innerHTML = "<span>Sensação Térmica</span><span>"+dadosTempoCidade.current.feelslike_c+"</span>";
}

function buscaDados(){
    let cds = document.getElementsByClassName("cityName");
    for (let i = 0;i < cds.length;i+=1){
        let nomeCidade = cds[i].innerHTML;
        let reqSite = new XMLHttpRequest();
        reqSite.addEventListener('load',atualizaDadosCidade);
        reqSite.open("GET","http://api.weatherapi.com/v1/current.json?key="+apiKey+"&q="+nomeCidade+"&aqi=no&lang=pt");
        reqSite.send();
    }
}

function populaPagina(){
    let cds = document.getElementsByClassName("cityName");
    for (let i = 0;i < cds.length;i+=1){
        let nomeCidade = cds[i].innerHTML;
        let reqSite = new XMLHttpRequest();
        reqSite.addEventListener('load',atualizaDadosCidade);
        reqSite.open("GET","http://api.weatherapi.com/v1/current.json?key="+apiKey+"&q="+nomeCidade+"&aqi=no&lang=pt");
        reqSite.send();
    }
}

function adicionarCard(){
    let campoTexto = document.getElementById("txtCidade");
    let novoCard = document.createElement("div");
    novoCard.classList.add("wheaterCard");
    novoCard.id = campoTexto.value + "Card";
    novoCard.innerHTML = "<header class='cardHeader'><h2>Tempo agora em<br ><span class='cityName'>"+campoTexto.value+"</span></h2></header><div class='cityData'><p class='temp'>30.6&deg;</p><br ><p class='itemsCD condition'><span>Clima</span><span>Ensolarado</span></p><p class='itemsCD sensacao'><span>Sensação Térmica</span><span>31.0</span></p></div></div>"
    let mainTag = document.querySelector("main");
    mainTag.appendChild(novoCard);
    buscaDados();
}

let botaoAdd = document.getElementById("btnAddCity");
botaoAdd.addEventListener("click", adicionarCard);