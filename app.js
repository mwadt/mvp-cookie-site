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

const youLose = () => {
    console.log('You lose');
    alert('You lose');
    buzzer.removeEventListener('click', youWin);

}

//lets the user know they won, creates cookie choice buttons
const youWin = () => {   
    
    alert('You won!');
    paragraph.textContent = `You won a cookie!  What kind of cookie would you like?`;
    clearTimeout(buzzerTimeout);
    buzzer.removeEventListener('click', youWin);

    
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



   // function to remove all event listeners from the cookie button choices.  
    const cookieChoiceEventRemover = () => {
        cookieChoice1.removeEventListener('click', handleCookieChoiceClick);
        cookieChoice2.removeEventListener('click', handleCookieChoiceClick);
        cookieChoice3.removeEventListener('click', handleCookieChoiceClick);
        cookieChoice4.removeEventListener('click', handleCookieChoiceClick);
    }
    
    
    // function to create a new paragraph depending on the cookie choice.
    const handleCookieChoiceClick = (event) => {
        console.dir(event.target.id);
        if(event.target.id === 'cookieChoice1') {
            let choiceMessage = document.createElement('p');
            choiceMessage.textContent = `You chose a ${cookieChoice1.textContent}!  Excellent Choice!`
            choiceOutput.appendChild(choiceMessage);
            cookieChoiceEventRemover();

        } else if(event.target.id === 'cookieChoice2') {
            let choiceMessage = document.createElement('p');
            choiceMessage.textContent = `You chose a ${cookieChoice2.textContent}!  Excellent Choice!`
            choiceOutput.appendChild(choiceMessage);
            cookieChoiceEventRemover();
        } else if(event.target.id === 'cookieChoice3') {
            let choiceMessage = document.createElement('p');
            choiceMessage.textContent = `You chose a ${cookieChoice3.textContent}!  Excellent Choice!`
            choiceOutput.appendChild(choiceMessage);
            cookieChoiceEventRemover();
        } else if(event.target.id === 'cookieChoice4') {
            let choiceMessage = document.createElement('p');
            choiceMessage.textContent = `You chose a ${cookieChoice4.textContent}!  Excellent Choice!`
            choiceOutput.appendChild(choiceMessage);
            cookieChoiceEventRemover();
        }
        
    }
    

    cookieChoice1.addEventListener('click', handleCookieChoiceClick);
    cookieChoice2.addEventListener('click', handleCookieChoiceClick);
    cookieChoice3.addEventListener('click', handleCookieChoiceClick);
    cookieChoice4.addEventListener('click', handleCookieChoiceClick);
        
}

//adds an event listener for the buzzer
buzzer.addEventListener('click', youWin);
//removes the event listener
buzzerTimeout = setTimeout(youLose, 5000);




