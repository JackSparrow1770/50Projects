const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()  // auto focuses when we enter into the webpage, so we can just start typing


textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)  // text area te ja likhsi, ta e.target.value

    if(e.key === 'Enter'){
        setTimeout(() =>{
            e.target.value = ''
        }, 10)
        
        randomSelect()
    }
})

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span')  //creating individual tags with 'span'
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)

    });
}

function randomSelect(){
    const times = 30;
    const interval = setInterval(() => {    // how this function is at play-- see this
        const randomTag = pickRandomTag()

        hightlightTag(randomTag)

        setTimeout(() => {     // how this function at play -- see this
            unHightlightTag(randomTag)
        }, 100);

    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            hightlightTag(randomTag)

        }, 100);
    }, times*100);
}

function pickRandomTag(){   // generating a random tag using 'Math' library
    const tags = document.querySelectorAll('.tag') 
    return tags[Math.floor(Math.random() * tags.length)]   
}

function hightlightTag(tag){
    tag.classList.add('highlight')
}

function unHightlightTag(tag){
    tag.classList.remove('highlight')
}





// trim() -- The trim() method removes whitespace from both 
// ends of a string. Whitespace in this context is all the 
// whitespace characters (space, tab, no-break space, etc.) and 
// all the line terminator characters (LF, CR, etc.)


// .filter() -- filter out anything applying condition or function