function atualiTempo (){
    var hora = document.querySelector('.hora');

    var agora = new Date();

    var horario = corrigirHora(agora.getHours()) + ':' + corrigirHora(agora.getMinutes()) + ":" + corrigirHora(agora.getSeconds());

    hora.textContent = horario;
}
function corrigirHora(numero) {
    if (numero < 10) {
        numero = "0" + numero;
    }
    return numero
}


setInterval(atualiTempo);