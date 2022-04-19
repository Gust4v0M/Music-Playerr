
var i = 0
var musicas = [
   
        {mp3:"./audio/All-I-Want.mp3", nome:'All I Want', src:"./audio/All-I-Want.mp3"},     
        {mp3:"./audio/its_you.mpeg", nome:'Its you', src:"./audio/its_you.mpeg"},
        {mp3:"./audio/Say_You_Won't_Let_Go.mp3", nome:'Say you wont let go', src:"./audio/Say_You_Won't_Let_Go.mp3"},
    ]

let music = document.getElementById("music")
let barra = document.getElementById("barra")


let tempoAtual = document.getElementById("tempo_atual")
let tempoTotal = document.getElementById("tempo_total")

music.addEventListener('ended', proxima, false)
music.addEventListener('play', play_evento, false);
music.addEventListener('timeupdate', atualizar, false);


function play_evento() {

    tempoAtual.innerHTML = secToStr(music.currentTime)
    tempoTotal.innerHTML = secToStr(music.duration)

    barra.max = music.duration;  
    barra.value = music.currentTime;
 
}

function atualizar() {
    tempoAtual.innerHTML = secToStr(music.currentTime);
    barra.value = music.currentTime;
}

function proxima(){
    if(music.canPlayType("audio/mp3") != ''){
        music.src = musicas[i].mp3;
    }
    document.getElementById('nome_musica').innerHTML = musicas[i].nome;
    music.play();
    
    i++
    if( i >= musicas.length) i = 0;
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

barra.addEventListener('click', (e)=>{ 
let tamanhoBarra = e.srcElement.clientWidth;
let clickBar = e.offsetX;
let value = (100 * clickBar) / tamanhoBarra;

let duration = music.duration;
let current = (duration / 100) * value;
music.currentTime = current;
})


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