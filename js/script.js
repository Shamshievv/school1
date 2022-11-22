const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let modalOpenButton = document.querySelector('.main__button'),
    modal = document.querySelector('.modal'),
    main = document.querySelector('.main'),
    overlay = document.querySelector('.modal__overlay'),
    modalCloseButton = document.querySelector('.modal__close-icon');

modalOpenButton.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('modal_visible');
    main.classList.add('main_blur');
})

modalCloseButton.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.remove('modal_visible');
    main.classList.remove('main_blur');
})

document.body.addEventListener('keyup', function (e) {
    let key = e.keyCode;
    if (key == 27) {
        modal.classList.remove('modal_visible');
        main.classList.remove('main_blur');
    };
}, false);

modal.addEventListener('click', function(e) {
    if (e.target === overlay) {
        modal.classList.remove('modal_visible');
        main.classList.remove('main_blur');
    }
});