let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1
prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pausar slide quando hover for acionado

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// ativar slide quando o mouse sair de ação 

document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// controle dos slides 

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})
showSlide()