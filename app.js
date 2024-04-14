const paragraph = document.getElementById('win');
const choiceOutput = document.getElementById('cookie-choice-output');
const buzzer = document.querySelector('#cookieButton');
let newButtons = document.querySelector('.cookie-choice-buttons');
console.dir(buzzer);

const selectionMessage1 = () => {
    let choiceMessage1 = document.createElement('p');
    choiceMessage1.textContent = 'You chose Chocolate Chip!  Excellent Choice!';
    choiceOutput.appendChild(choiceMessage1);
    

}

//lets the user know they won, creates cookie choice buttons
const youWin = (event) => {   
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
    cookieChoice4.textContent = 'Snickerdoodle Cookie'
    
    newButtons.appendChild(cookieChoice1);
    newButtons.appendChild(cookieChoice2);
    newButtons.appendChild(cookieChoice3);
    newButtons.appendChild(cookieChoice4);
    
    const handleCookieChoiceClick = () => {
        selectionMessage1();
        cookieChoice1.removeEventListener('click', handleCookieChoiceClick);
    }
    

    cookieChoice1.addEventListener('click', handleCookieChoiceClick);
    
        
}


buzzer.addEventListener('click', youWin);
    
// cookieChoice1.addEventListener('click', () => {
//     console.log('nice choice')
// })

// const youWin = () => {
//     alert('You won!');
//     paragraph.textContent = `You won a cookie!`;
// }



