document.addEventListener('scroll', () => {
    const header = document.querySelector('.header')
    const main = document.querySelector('.main')
    const mainTop = main.getBoundingClientRect().top

    if (mainTop <= 150)
        header.classList.add('scrolled')
    else
        header.classList.remove('scrolled')
})
