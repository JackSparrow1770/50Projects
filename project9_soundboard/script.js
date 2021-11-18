const sounds = ['applause','boo','gasp','tada','victory','wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click',()=> {
        stopsongs()
        document.getElementById(sound).play()
    })
    //at this point if you click multiple, it will just play over each other without the stopsongs() function
    


    document.getElementById('buttons').appendChild(btn)
})

function stopsongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}