let jogador = 'x'

function jogar(celula){
    if(celula.innerHTML == ""){
        celula.innerHTML = jogador

        if(jogador == 'x'){
            jogador = 'o'
        }else{
            jogador = 'x'
        }
    }
}

function reset(){
    window.location.reload()
}