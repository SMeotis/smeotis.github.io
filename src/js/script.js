$(document).ready(function(){
  $('.trending__carousel').slick({
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 5,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-prev-black.svg" alt="arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-next-black.svg" alt="arrow-next"></button>',
    dots: true,
    variableWidth: true
  });

  $('.comments__wrapper').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-prev-black.svg" alt="arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-next-black.svg" alt="arrow-next"></button>',
    dots: true
  });

  $('.about-us__wrapper').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-prev-yellow.svg" alt="arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-next-yellow.svg" alt="arrow-next"></button>',
    infinite: true
  });
});
