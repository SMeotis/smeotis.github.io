import menu from './modules/menu';
import increaseProportionalSlickSlider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
  const prevArrowYellow = '<button type="button" class="slick-prev"><img src="icons/arrow-prev-yellow.svg"  alt="arrow-prev"></button>',
        nextArrowYellow = '<button type="button" class="slick-next"><img src="icons/arrow-next-yellow.svg" alt="arrow-prev"></button>',
        prevArrowBlack = '<button type="button" class="slick-prev"><img src="icons/arrow-prev-black.svg" alt="arrow-prev"></button>',
        nextArrowBlack = '<button type="button" class="slick-next"><img src="icons/arrow-next-black.svg" alt="arrow-next"></button>';
  menu({
    selector: '.hamburger',
    activeClass: 'hamburger__active',
    menuSelector: '.menu',
    menuActiveClass: 'hamburger__active'
  });
  
  $('.trending__carousel').slick({
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 6,
    prevArrow: prevArrowBlack,
    nextArrow: nextArrowBlack,
    dots: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          dots: false
        }
      }
    ]
  });

  $('.trending__carousel').on('afterChange', function(event, slick, currentSlide){
    increaseProportionalSlickSlider(".trending__item.slick-slide");
  });

  $('.comments__wrapper').slick({
    prevArrow: prevArrowBlack,
    nextArrow: nextArrowBlack,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: false
        }
      }
    ]
  });
  
  $('.about-us__wrapper').slick({
    prevArrow: prevArrowYellow,
    nextArrow: nextArrowYellow,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: false
        }
      }
    ]
  });

  increaseProportionalSlickSlider(".trending__item.slick-slide");
});