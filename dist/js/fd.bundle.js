/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menu({selector, activeClass, menuSelector, menuActiveClass}) {
  const hamburger = document.querySelector(selector),
        menu = document.querySelector(menuSelector);

  hamburger.addEventListener('click', () => {
    menu.classList.toggle(menuActiveClass);
    hamburger.classList.toggle(activeClass);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (increaseProportionalSlickSlider);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");



window.addEventListener('DOMContentLoaded', () => {
  const prevArrowYellow = '<button type="button" class="slick-prev"><img src="icons/arrow-prev-yellow.svg"  alt="arrow-prev"></button>',
        nextArrowYellow = '<button type="button" class="slick-next"><img src="icons/arrow-next-yellow.svg" alt="arrow-prev"></button>',
        prevArrowBlack = '<button type="button" class="slick-prev"><img src="icons/arrow-prev-black.svg" alt="arrow-prev"></button>',
        nextArrowBlack = '<button type="button" class="slick-next"><img src="icons/arrow-next-black.svg" alt="arrow-next"></button>';
  (0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])(".trending__item.slick-slide");
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

  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])(".trending__item.slick-slide");
});
})();

/******/ })()
;
//# sourceMappingURL=fd.bundle.js.map