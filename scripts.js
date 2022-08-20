let card; 

function playSound(e) { 
    let keyPressed = e.keyCode;  
    let sound;
    switch(keyPressed) { 
        case 49: 
        card = document.querySelector('.cow');
        card.classList.add('playing'); 
        sound = this.document.querySelector('.cow-sound'); 
        sound.play(); 
        break; 

        case 50: 
        card = document.querySelector('.dog');
        card.classList.add('playing'); 
        sound = this.document.querySelector('.dog-sound'); 
        sound.play(); 
        break;  

        case 51: 
        card = document.querySelector('.pig');
        card.classList.add('playing'); 
        sound = this.document.querySelector('.pig-sound'); 
        sound.play(); 
        break; 

        case 52: 
        card = document.querySelector('.cat');
        card.classList.add('playing'); 
        sound = this.document.querySelector('.cat-sound'); 
        sound.play(); 
        break; 

        case 53: 
        card = document.querySelector('.lion');
        card.classList.add('playing'); 
        sound = this.document.querySelector('.lion-sound'); 
        sound.play(); 
        break;
    } 
} 

function removePlaying(e) { 
    card.classList.remove('playing');
}

window.addEventListener('keyup', removePlaying)
window.addEventListener('keydown', playSound)