export const getComputerChoice = (playerChoice) => {
    const hands = ['rock', 'paper', 'scissors']
    const cheatCheckbox = document.getElementById('cheatMode')

    if (cheatCheckbox.checked) {
        const loseToPlayer = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper',
        }
        return loseToPlayer[playerChoice]
    } else {
        const randomIndex = Math.floor(Math.random() * hands.length)
        return hands[randomIndex]
    }
}
