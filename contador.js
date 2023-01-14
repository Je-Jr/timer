var segundos = 0;
var minutos = 0;
var horas = 0;
var intervalo;

function iniciar(){
    document.getElementById("inicio").disabled = true;
    contagem();
    intervalo = setInterval(contagem, 1000);
}

function pausar(){
    document.getElementById("inicio").disabled = false;
    clearInterval(intervalo);
}

function parar(){
    document.getElementById("inicio").disabled = false;
    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;
    horas = 0;
    document.getElementById('contagem').innerText = '00:00:00';
}

function digitos(digito){
    if(digito < 10){
        return('0'+ digito);
    }else{
        return(digito);
    }
}

function contagem(){
    segundos++;
    if(segundos==60){
        minutos++;
        segundos = 0;
        if(minutos == 60){
            horas++;
            minutos = 0;
        }
    }
    document.getElementById('contagem').innerText = digitos(horas) + ':' + digitos(minutos) + ':' + digitos(segundos);
}