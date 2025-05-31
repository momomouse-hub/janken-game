export const setupCheatModeToggle = () => {
    const cheatCheckbox = document.getElementById('cheatMode')
    const bodyElement = document.querySelector('body')
    cheatCheckbox.addEventListener('change', () => {
        if (cheatCheckbox.checked) {
            bodyElement.classList.add('cheat-active')
        } else {
            bodyElement.classList.remove('cheat-active')
        }
    })
}
