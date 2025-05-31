export const getPlayerChoice = (callback) => {
    const buttonElement = document.querySelector('.button-group')

    buttonElement.addEventListener('click', (event) => {
        let playerChoice
        if (event.target.textContent === '✊ グー') {
            playerChoice = 'rock'
        } else if (event.target.textContent === '✌️ チョキ') {
            playerChoice = 'scissors'
        } else if (event.target.textContent === '🖐 パー') {
            playerChoice = 'paper'
        }
        callback(playerChoice)
    })
}
