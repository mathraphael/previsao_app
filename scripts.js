let chave = '47267e86d3345e4993c16287044b4b11'



function mostrarDados(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em "+dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade-previsao").innerHTML = "Umidade: "+ dados.main.humidity +"%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".temp-max").innerHTML = "Máx.: " + Math.floor(dados.main.temp_max) +"°"
    document.querySelector(".temp-min").innerHTML = "Mín.: " + Math.floor(dados.main.temp_min) +"°"
    document.querySelector(".temp-sense").innerHTML = "Sensação Térmica: " + Math.floor(dados.main.feels_like) +"°"

    console.log(dados)
}

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`).then(response => response.json())

    mostrarDados(dados)
}

function botaoBuscar() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}