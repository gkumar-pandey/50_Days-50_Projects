const sounds = ['pain','jiraya','madara','obito','naruto','naruto-uzumaki']

sounds.forEach( (sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
   document.querySelector('.buttons').appendChild(btn);

   btn.addEventListener('click', ()=> {
       stopSong()
       document.getElementById(sound).play();
   })
    
})

function stopSong(){
    sounds.forEach((sound)=>{
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime =0;
    })
}