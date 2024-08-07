const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('mouseenter', () => {
        removeActiveClassed()
        panel.classList.add('active')
    })

})

function removeActiveClassed() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })

}