// Variables
const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const buttonReset = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
let missed = 0;
let phrases = [
    'Marvel',
    'Harry Potter',
    'Star Wars',
    'Stranger Things',
    'Rocky'
];

// Event Listener for Start button
buttonReset.addEventListener('click', () => {
    overlay.style.display = 'none';
});

//Return Random Phrase From Array
function getRandomPhraseArray(arr) {
    const random = arr[Math.floor( Math.random() * arr.length )];
    const charactersArray =  random.split('');
    return charactersArray;
};

const charactersArray = getRandomPhraseArray(phrases);
console.log(charactersArray);

// Add Letters Of The String To The Display
function addPhraseToDisplay(arr) {
    for(let i = 0; i < arr.length; i++) {
        const ul = document.getElementById('phrase');
        let li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li);
        console.log(li);
        if(arr[i] != ' ' && isNaN(arr[i])) {
            li.className = "letter";
        } else if (arr[i] === ' ') {
            li.className = 'space';
        
        };
}};

addPhraseToDisplay(charactersArray);

// Check If A Letter Is In The Phrase
function checkLetter(button) {
    let match;
    const letters = document.querySelectorAll('.letter');
    for(let i = 0; i < letters.length; i++) {
        let listItems = letters[i];
        if(listItems.textContent.toLowerCase() === button) {
            listItems.className += ' show';
            match = listItems;
        } else if (match === 'undefined') {
            match = 'null'
        }
    }
    return match;
};

// Listen for Onscreen Keyboard To Be Clicked
qwerty.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
        let chosen = event.target;
        chosen.className = 'chosen';
        chosen.disabled = 'true';

        const foundLetter = checkLetter(chosen.textContent);

        if(!foundLetter) {
            missed ++; 
            const img = document.querySelectorAll('img');
            img[missed - 1].src = 'images/lostHeart.png';
        }
    }
    checkWin();
});

// Check To See If The Game Is Won Or Lost
function checkWin() {
    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    if(letter.length === show.length) {
        function youWin () {
            overlay.className = 'win';
            overlay.style.display = '';
            let youWin = document.createElement('h1');
            youWin.textContent = 'YOU WIN!!!';
            const h2 = document.querySelector('#overlay h2');
            overlay.insertBefore(youWin, h2);
            buttonReset.textContent = 'New Game';
        }

        setTimeout(youWin, 700);
        buttonReset.addEventListener('click', () =>{
            window.location.reload();
        });

    }
        
    else if (missed >= 5) {
        overlay.className = 'lose';
        overlay.innerHTML = '<h1>YOU LOSE!!!</h1>';
        overlay.style.display = '' ;
        let restart = document.createElement('a');
        restart.className = 'btn__reset';
        restart.textContent = 'Restart Game';
        overlay.appendChild(restart);
        
        restart.addEventListener('click', () => {
            window.location.reload();
        });
    }
    
};