export const showResult = (player, computer, result) => {
    const resultElement = document.getElementById('result')
    const handToText = {
        rock: 'グー',
        paper: 'パー',
        scissors: 'チョキ',
    }
    const message = `あなた：${handToText[player]} 相手：${handToText[computer]} →`

    resultElement.classList.remove('win', 'lose', 'draw')

    if (result === 'win') {
        resultElement.textContent = message + 'あなたの勝ち！'
        resultElement.classList.add('win')
    } else if (result === 'lose') {
        resultElement.textContent = message + 'あなたの負け！'
        resultElement.classList.add('lose')
    } else {
        resultElement.textContent = message + 'あいこ！'
        resultElement.classList.add('draw')
    }
}
