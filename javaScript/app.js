let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -=330;
})

const music = new Audio('295 (Official Audio) _ Sidhu Moose Wala _ The Kidd _ Moosetape.mp3');

//create Array

const song = [
    {
        id:'1',
        songName:`295 <br>
        <div class="subtitle">Sidhu-Moose-Wala</div>`,
        poster:"photo/295-Sidhu-Moose-Wala--English-2021-20210922022502-500x500.jpg"
    },
    {
        id:'2',
        songName:`EXCUSES <br>
        <div class="subtitle">AP Dhillon and Gurinder Gill</div>`,
        poster:"photo/ab67616d0000b2735b74e703d6ffb2ea16860c86.jpg"
    },
    {
        id:'3',
        songName:`SUMMER HIGH <br>
        <div class="subtitle">AP Dhillon</div>`,
        poster:"photo/ab67616d0000b273b0543bafc8adee31880acfb9.jpg"
    },
    {
        id:'4',
        songName:`Brown-Munde <br>
        <div class="subtitle">AP Dhillon and Gurinder Gill</div>`,
        poster:"photo/Brown-Munde-Unknown-2020-20200915002420-500x500.jpg"
    },
    {
        id:'5',
        songName:`SARKAR <br>
        <div class="subtitle">Sidhu-Moose-Walal</div>`,
        poster:"photo/SARKAR.jpg"
    },
    {
        id:'6',
        songName:`SAME BEEF <br>
        <div class="subtitle">Bohemia and Sidhu-Moose-Wala</div>`,
        poster:"photo/SAME BEEF.jpg"
    },
    {
        id:'7',
        songName:`Agar Tum Saath Ho <br>
        <div class="subtitle">Arjit Singh and Alka Yagnik</div>`,
        poster:"photo/Agar Tum Saath ho.jpg"
    },
    {
        id:'8',
        songName:`Dilbar <br>
        <div class="subtitle">Dhavni Bhanushali</div>`,
        poster:"photo/Dilbar.jpg"
    },
    {
        id:'9',
        songName:`Kanta Laga <br>
        <div class="subtitle">Neha Kakkar</div>`,
        poster:"photo/kanta laga.jpg"
    },
    {
        id:'10',
        songName:`Kesari <br>
        <div class="subtitle">B Praak</div>`,
        poster:"photo/Kesari.jpg"
    },
    {
        id:'11',
        songName:`Paagal <br>
        <div class="subtitle">Badshah</div>`,
        poster:"photo/Paagal.jpg"
    },
    {
        id:'12',
        songName:`Kesariya <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster:"photo/Kesariya.jpg"
    },
    {
        id:'13',
        songName:`Badle Badle <br>
        <div class="subtitle">Raftaar</div>`,
        poster:"photo/Badle Badle.jpg"
    },
    {
        id:'14',
        songName:`SO HIGH <br>
        <div class="subtitle">Sidhu-Moose-Wala</div>`,
        poster:"photo/SO HIGH.jpg"
    },
    {
        id:'15',
        songName:`INSANE <br>
        <div class="subtitle">AP Dhillon</div>`,
        poster:"photo/WhatsApp Image 2022-08-26 at 8.47.39 AM.jpeg"
    },
    {
        id:'16',
        songName:`DESIRES <br>
        <div class="subtitle">Gurinder Gill</div>`,
        poster:"photo/maxresdefault.jpg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
       music.play();
       masterPlay.classList.remove('bi-play-fill');
       masterPlay.classList.add('bi-pause-fill');
       wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )
  