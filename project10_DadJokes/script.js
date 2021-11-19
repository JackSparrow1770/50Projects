const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokebtn')

jokeBtn.addEventListener('click', generateJoke);

generateJoke()

function generateJoke(){
    const config = {
        headers: {
            'Accept' : 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com',config).then(response => response.json()).then(data => {
        jokeEl.innerHTML = data.joke
    })
}