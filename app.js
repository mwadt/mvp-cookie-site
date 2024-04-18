const paragraph = document.getElementById('win');
const choiceOutput = document.getElementById('cookie-choice-output');
const buzzer = document.querySelector('#cookieButton');
let newButtons = document.querySelector('.cookie-choice-buttons');
const selectionPic = document.querySelector('.cookie-selection-pic');
const winLoseText = document.querySelector('.win-lose-post');


const youLose = () => {
    
    const loseAlert = document.createElement('h2');
    loseAlert.textContent = 'YOU LOSE!!! TRY AGAIN!!!';
    loseAlert.style.fontWeight = 'bold';
    loseAlert.style.fontSize = '40px'; 
    winLoseText.appendChild(loseAlert);
    buzzer.removeEventListener('click', youWin);

}

//lets the user know they won, creates cookie choice buttons
const youWin = () => {   
    const winAlert = document.createElement('h2');
    winAlert.textContent = 'WINNER!!!';
    winAlert.style.fontWeight = 'bold';
    winAlert.style.fontSize = '26px'; 
    winLoseText.appendChild(winAlert);
    alert('You Win!')
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
            // let cookieImage = document.createElement('img');
            // cookieImage.setAttribute('class', 'cookie-selection-pic');
            // cookieImage.src = './images/test cookie.jpg';
            // selectionPic.appendChild(cookieImage);
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




