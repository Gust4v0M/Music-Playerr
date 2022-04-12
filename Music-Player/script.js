let music = document.getElementById("music")
let barra = document.getElementById("barra")

let tempoAtual = document.getElementById("tempo_atual")
let tempoTotal = document.getElementById("tempo_total")


let seek = document.getElementById("seek")

music.addEventListener('play', play_evento, false);
music.addEventListener('timeupdate', atualizar, false);



function play_evento() {

    tempoAtual.innerHTML = secToStr(music.currentTime)
    tempoTotal.innerHTML = secToStr(music.duration)

    seek.max = music.duration;
    barra.max = music.duration;
    barra.value = music.currentTime;
}

function atualizar() {
    tempoAtual.innerHTML = secToStr(music.currentTime);
    seek.value = music.currentTime;
    barra.value = music.currentTime;
}

function secToStr(sec_num) {
    sec_num = Math.floor(sec_num)
    var horas = Math.floor(sec_num / 3600);
    var minutos = Math.floor((sec_num - (horas * 3600)) / 60);
    var segundos = sec_num - (horas * 3600) - (minutos * 60);

    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

    var tempo = minutos + ':' + segundos;

    return tempo
}



function pause() {
    music.play();
}

function volta() {
    music.currentTime -= 5
}

function avanca() {
    music.currentTime += 5
}

function aumentaVol() {
    music.volume
}