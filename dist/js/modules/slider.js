function increaseProportionalSlickSlider(selector) {
    const slides = document.querySelectorAll(selector);

    slides.forEach((slide, i, slides) => {
        if (slide.classList.contains('slick-center') && slide.classList.contains('slick-active')) {
            
            slide.style.transform = 'scale(1)';
            slide.style.zIndex = '10';

            slides[i-1].style.transform = 'scale(.75) translateX(50%)';
            slides[i+1].style.transform = 'scale(.75) translateX(-50%)';
            slides[i - 1].style.zIndex = slides[i + 1].style.zIndex = '9';

            slides[i-2].style.transform = 'scale(.6) translateX(150%)';
            slides[i+2].style.transform = 'scale(.6) translateX(-150%)';
            slides[i - 2].style.zIndex = slides[i + 2].style.zIndex = '8';
            
            slides[i-3].style.transform = 'scale(.43) translateX(350%)';
            slides[i+3].style.transform = 'scale(.43) translateX(-350%)';
            slides[i - 3].style.zIndex = slides[i + 3].style.zIndex = '7';
        }
    });  
}

export default increaseProportionalSlickSlider;
