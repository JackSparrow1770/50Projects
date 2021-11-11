const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkBoxes)

checkBoxes();


function checkBoxes(){
    const triggerBottom = (window.innerHeight/5) * 4  
    //dividing the innerheight by 5 part, of them, taking 4 part as bottom line

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        //here top is not a function
        //getBoundingClientRect() => describe a size and position of the rectangle relative to the viewport
        
        if(boxTop < triggerBottom){   
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
    })
}