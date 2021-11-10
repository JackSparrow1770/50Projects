const opentag = document.getElementById('open');
const closetag = document.getElementById('close');
const container = document.querySelector('.container');

opentag.addEventListener('click', () => {
    container.classList.add('show-nav')
})

closetag.addEventListener('click', () => {
    container.classList.remove('show-nav')
})

//edit


