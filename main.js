import { getPlayerChoice } from './get-player-choice.js'
import { getComputerChoice } from './get-computer-choice.js'
import { judgeResult } from './judge-result.js'
import { showResult } from './show-result.js'
import { setupCheatModeToggle } from './cheat-mode-manager.js'

setupCheatModeToggle()

getPlayerChoice((playerChoice) => {
    const computerChoice = getComputerChoice(playerChoice)
    const result = judgeResult(playerChoice, computerChoice)
    showResult(playerChoice, computerChoice, result)
})
