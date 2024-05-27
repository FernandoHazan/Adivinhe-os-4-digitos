let numeroAleatorio = []
let numeroChutado = []
gerar()

function gerar(){

    while(numeroAleatorio.length < 4){
        
        temporario = parseInt(Math.random() * 10)

        if(!numeroAleatorio.includes(temporario)){
            numeroAleatorio.push(temporario)
        }
    }
}

function chutar() {
    numeroChutado = []
    for(let i = 1; i < 5; i++){

        numeroChutado.push(document.getElementById('numero' + i).value)
    }
}
