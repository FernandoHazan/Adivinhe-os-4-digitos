let numeroAleatorio = []
let numeroChutado = []
let posicao = 0
let tem = 0

const tentativas = document.createElement()
const secundario = document.querySelector('.secundario')

tentativas.classList.add("tentativas")
tentativas.


gerar()

function gerar(){

    numeroAleatorio = []

    while (numeroAleatorio.length < 4){
        
        temporario = parseInt(Math.random() * 10)

        if(!numeroAleatorio.includes(temporario)){
            numeroAleatorio.push(temporario)
        }
    }
    console.log(numeroAleatorio)

    for(let u = 1; u < 5; u++){

        document.getElementById('numero' + u).value = '' 
       }
}

function chutar() {
    numeroChutado = []
    posicao = 0
    tem = 0

    for(let i = 1; i < 5; i++){

        numeroChutado.push(parseInt(document.getElementById('numero' + i).value))
    }


    for(let e = 0; e < 4; e++){

        if(parseInt(numeroChutado[e]) == numeroAleatorio[e]){
            posicao++
        }

        if(numeroAleatorio.includes(numeroChutado[e])){
            tem++
        }
    }

    for(let u = 1; u < 5; u++){

        document.getElementById('numero' + u).value = '' 
       }

       secundario.insertAdjacentElement("beforeend", tentativas)
}



