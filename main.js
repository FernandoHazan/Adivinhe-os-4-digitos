let numeroAleatorio = []
let numeroChutado = []
let posicao = 0
let tem = 0
let chute = ''
document.getElementById('tentativas').innerHTML = ''



gerar()

function gerar() {

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

       document.getElementById('tentativas').innerHTML = ''
}

function chutar() {
    numeroChutado = []
    posicao = 0
    tem = 0
    chute = ''

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

    for(let c = 0; c < 4; c++){

        chute = chute + numeroChutado[c]
    }
      
    let tentativa = document.getElementById('tentativas')
    tentativa.innerHTML = tentativa.innerHTML + `<p class="tentativas">Seu chute foi ${chute}, ${tem} numeros certos e ${posicao} no lugar certo</p>`
}



