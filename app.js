const paragraph = document.getElementById('win');
const choiceOutput = document.getElementById('cookie-choice-output');
const buzzer = document.querySelector('#cookieButton');
let newButtons = document.querySelector('.cookie-choice-buttons');
console.dir(buzzer);

// const selectionMessage1 = () => {
//     let choiceMessage1 = document.createElement('p');
//     choiceMessage1.textContent = 'You chose Chocolate Chip!  Excellent Choice!';
//     choiceOutput.appendChild(choiceMessage1);
// }

//lets the user know they won, creates cookie choice buttons
const youWin = () => {   
    // console.dir(evt.target.id);
    alert('You won!');
    paragraph.textContent = `You won a cookie!  What kind of cookie would you like?`;
    buzzer.removeEventListener('click', youWin)
    const cookieChoice1 = document.createElement('button');
    const cookieChoice2 = document.createElement('button');
    const cookieChoice3 = document.createElement('button');
    const cookieChoice4 = document.createElement('button');
    cookieChoice1.textContent = 'Chocolate Chip Cookie';
    cookieChoice2.textContent = 'Oatmeal Raisen Cookie';
    cookieChoice3.textContent = 'Sugar Cookie';
    cookieChoice4.textContent = 'Snickerdoodle Cookie';

    cookieChoice1.setAttribute('id', 'cookieChoice1');
    cookieChoice2.setAttribute('id', 'cookieChoice2');
    cookieChoice3.setAttribute('id', 'cookieChoice3');
    cookieChoice4.setAttribute('id', 'cookieChoice4');
    
    newButtons.appendChild(cookieChoice1);
    newButtons.appendChild(cookieChoice2);
    newButtons.appendChild(cookieChoice3);
    newButtons.appendChild(cookieChoice4);

    const selectionMessage1 = () => {
       
        let choiceMessage1 = document.createElement('p');
        choiceMessage1.textContent = 'You chose Chocolate Chip!  Excellent Choice!';
        choiceOutput.appendChild(choiceMessage1);
       
    }
    const selectionMessage2 = () => {
        let choiceMessage2 = document.createElement('p');
        choiceMessage2.textContent = `You chose ${}Oatmeal Raisen!  Excellent Choice!`;
        choiceOutput.appendChild(choiceMessage2);
    }
    const selectionMessage3 = () => {
        let choiceMessage3 = document.createElement('p');
        choiceMessage3.textContent = 'You chose Sugar Cookie!  Excellent Choice!';
        choiceOutput.appendChild(choiceMessage3);
    }
    con
    
    
    const handleCookieChoiceClick = (event) => {
        console.dir(event.target.id);
        if(event.target.id === 'cookieChoice1') {
            selectionMessage1();
            cookieChoice1.removeEventListener('click', handleCookieChoiceClick);

        } else if(event.target.id === 'cookieChoice2') {
            selectionMessage2();
            cookieChoice2.removeEventListener('click', handleCookieChoiceClick);
        } else if(event.target.id === 'cookieChoice3'){
            selectionMessage3();
        }
        
    }
    

    cookieChoice1.addEventListener('click', handleCookieChoiceClick);
    cookieChoice2.addEventListener('click', handleCookieChoiceClick);
    cookieChoice3.addEventListener('click', handleCookieChoiceClick);
        
}


buzzer.addEventListener('click', youWin);
    
// cookieChoice1.addEventListener('click', () => {
//     console.log('nice choice')
// })

// const youWin = () => {
//     alert('You won!');
//     paragraph.textContent = `You won a cookie!`;
// }



