window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    if (window.scrollY > main.offsetTop - header.offsetHeight) {
        header.classList.add('header-white');
    } else {
        header.classList.remove('header-white');
    }
});

new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    grabCursor: true,
    freeMode: true,
  });