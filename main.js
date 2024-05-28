let numeroAleatorio = []
document.getElementById('tentativas').innerHTML = ''
gerarNumeroAleatorio()

function gerarNumeroAleatorio() {

    numeroAleatorio = []

    while (numeroAleatorio.length < 4){
        
        temporario = parseInt(Math.random() * 10)

        if(!numeroAleatorio.includes(temporario)){
            numeroAleatorio.push(temporario)
        }
    }
    console.log(numeroAleatorio)
}

function chutar() {
    
    let numeroChutado = []
    let localCerto = 0
    let numeroIncluso = 0
    let chute = ''

    for(let i = 1; i < 5; i++){

        numeroChutado.push(parseInt(document.getElementById('numero' + i).value))
    }

    for(let e = 0; e < 4; e++){

        if(parseInt(numeroChutado[e]) == numeroAleatorio[e]){
            localCerto++
        }

        if(numeroAleatorio.includes(numeroChutado[e])){
            numeroIncluso++
        }
    }

    for(let u = 1; u < 5; u++){

        document.getElementById('numero' + u).value = '' 
       }

    for(let c = 0; c < 4; c++){

        chute = chute + numeroChutado[c]
    }

    let plural = numeroIncluso == 1 ? "numero certo" : "numeros certos"
      
    let tentativa = document.getElementById('tentativas')
    tentativa.innerHTML = tentativa.innerHTML + `<p class="tentativas">Seu chute foi ${chute}, ${numeroIncluso} ${plural} e ${localCerto} no lugar certo</p>`
}

function verificar(){
    
    for(let e = 0; e < 4; e++){

        if(parseInt(numeroChutado[e]) == numeroAleatorio[e]){
            localCerto++
        }

        if(numeroAleatorio.includes(numeroChutado[e])){
            numeroIncluso++
        }
    }
}

function novoJogo() {

    gerarNumeroAleatorio()

    for(let u = 1; u < 5; u++){

        document.getElementById('numero' + u).value = '' 
       }

       document.getElementById('tentativas').innerHTML = ''
}



