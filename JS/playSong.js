 const musicContainer = document.getElementById("music-container");
 const playBtn = document.getElementById("play");
 const prevBtn = document.getElementById("prev");
 const nextBtn = document.getElementById("next");
 const audio = document.getElementById("audio");
 const progress = document.getElementById("progress");
 const progressContainer = document.getElementById("progress-container");
 const title = document.getElementById("title");
 const cover = document.getElementById("cover");

 // Songs Title
 const songs = ["90sFlav  Call me.mp3", "y2mate.com - ＡＺＵＬ　ＤＡ　ＣＯＲ　ＤＯ　ＭＡＲ  Lofi remix", "y2mate.com - HOME  Resonance"];
 //KeepTrack of song
 let songIndex = 0;
 // Initially load song details into DOM
 loadSong(songs[songIndex]);
 //Update song details
 function loadSong(song) {
     title.innerText = song;
     audio.src = `./musics/${song}.mp3`;
     cover.src = `./IMG/${song}.jpg`;
 };

 //Play Songs
 function playSong() {
     musicContainer.classList.add("play");
     playBtn.querySelector("i.fa").classList.remove("fa-play");

     playBtn.querySelector("i.fa").classList.add("fa-pause");
     audio.play();
 }
 //Pause Song

 function pauseSong() {
     musicContainer.classList.remove("play");
     playBtn.querySelector("i.fa").classList.add("fa-play");
     playBtn.querySelector("i.fa").classList.remove("fa-pause");
     
     audio.pause();
 }

 // Previous Song
 function prevSong() {
     songIndex--;
     if (songIndex < 0) {
         songIndex = songs.length - 1;
     }
     loadSong(songs[songIndex]);
     playSong();
 }
 //Next Song
 function nextSong() {
     songIndex++;
     if (songIndex > songs.length - 1) {
         songIndex = 0;
     }
     loadSong(songs[songIndex]);
     playSong();
 }