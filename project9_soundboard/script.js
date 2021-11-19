const sounds = ['applause','boo','gasp','tada','victory','wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')  // created a button tag
    btn.classList.add('btn') // created a class named 'btn' inside the button tag

    btn.innerText = sound   //each class 'btn' is replaced with its own sound's name

    btn.addEventListener('click',()=> {
        stopsongs()
        document.getElementById(sound).play()   // if that id hold a audio file, it will play.. only audio file
    })
    //at this point,if the stopsongs() function not there and if you click multiple song , it will just play over each other
    


    document.getElementById('buttons').appendChild(btn)   // div element er under a sob btn place kora holo.
})

function stopsongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}