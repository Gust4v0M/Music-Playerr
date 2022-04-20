// array criado para poder fazer a playlist
var i = 0
var musicas = [
   
        {mp3:"./audio/All-I-Want.mp3", nome:'All I Want', src:"./audio/All-I-Want.mp3", img:'./capas/sad_mikey.jpg'},     
        {mp3:"./audio/its_you.mpeg", nome:'Its you', src:"./audio/its_you.mpeg",  img:'./capas/its_you.jpg'},
        {mp3:"./audio/Say_You_Won't_Let_Go.mp3", nome:'Say you wont let go', src:"./audio/Say_You_Won't_Let_Go.mp3",  img:'./capas/James_arthur.jpg'},
    ]

//dei nome aos elementos que eu ia usar
let music = document.getElementById("music")
let barra = document.getElementById("barra")
let nextMusic = document.getElementById("nextMusic")
let volumeIcon = document.getElementById("volume")
let volumeBar = document.getElementById("volumeBar")
let Play = document.getElementById("play")
let Pause = document.getElementById("pause")

let tempoAtual = document.getElementById("tempo_atual")
let tempoTotal = document.getElementById("tempo_total")

//criei alguns eventos  importantes
music.addEventListener('canplay', play_evento, false);
music.addEventListener('timeupdate', atualizar, false);
music.addEventListener('ended', renderizarMusica, false)
music.addEventListener('ended', voltarMusica, false)


//para poder  setar o tempo que a musica vai ter e pegar o valor maximo da barra
function play_evento() {

    tempoAtual.innerHTML = secToStr(music.currentTime)
    tempoTotal.innerHTML = secToStr(music.duration)

    barra.max = music.duration;  
    barra.value = music.currentTime;
 
}

//essa aqui é pra ir atualizando o timer e a barra
function atualizar() {
    tempoAtual.innerHTML = secToStr(music.currentTime);
    barra.value = music.currentTime;
}
//aqui é uma pra playlist
function renderizarMusica(){
    if(music.canPlayType("audio/mp3") != ''){
        music.src = musicas[i].mp3;
    }
    document.getElementById('nome_musica').innerHTML = musicas[i].nome;
    document.getElementById('capa2').src = musicas[i].img;
    music.play();
    
    i++
    if( i >= musicas.length) i = 0;
    
    }
//pra voltar a musica da playlist
function voltarMusica (){
        if(music.canPlayType("audio/mp3") != ''){
            music.src = musicas[i].mp3;
        }
        document.getElementById('nome_musica').innerHTML = musicas[i].nome;
        document.getElementById('capa2').src = musicas[i].img;
        music.play();
        
        i--
        if( i >= musicas.length) i = -0;
    }


//para o timer ficar igual ao de uma música
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

//para a barra ficar interagivel

barra.addEventListener('click', (e)=>{ 
let tamanhoBarra = e.srcElement.clientWidth;
let clickBar = e.offsetX;
let value = (100 * clickBar) / tamanhoBarra;

let duration = music.duration;
let current = (duration / 100) * value;
music.currentTime = current;
})

//os botões

function tocarMusica(){
    music.play();
    Pause.style.display ="inline-block";
    Play.style.display ="none";
}

function pausarMusica(){
    music.pause();
    Pause.style.display ="none";
    Play.style.display ="inline-block";
}

function volta() {
    music.currentTime -= 5
}

function avanca() {
    music.currentTime += 5
}
function barraa(){
music.volume = volumeBar.value
}

function dentro() {
    music.innerHTML = volumeBar.style.display = "block"
    music.volume = volumeBar.volume
}
function fora(){
    music.innerHTML = volumeBar.style.display = "none"
}