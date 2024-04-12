const paragraph = document.getElementById('win');
let buzzer = document.querySelector('#cookieButton');
console.dir(buzzer);

const youWin = () => {
    alert('You won!');
    paragraph.textContent = `You won a cookie!`;
}

cookieButton.addEventListener('click', youWin);
    


// const youWin = () => {
//     alert('You won!');
//     paragraph.textContent = `You won a cookie!`;
// }
