/*********************************************************************************

    Template Name: Boighor Books Library eCommerce Store 
    Version: 1.0

**********************************************************************************/


/*================================================
            [ INDEX ]
===================================================

    Scroll Up Activation
    Mobile Menu
    Wow Active
    Sticky Header
    Banner Slider Active
    Testimonial Slick Carousel
    Testimonial Slick Carousel As Nav
    Product Activation
    Brand Activation
    Blog Activation
    Module Activation
    Cartbox Toggler
    Search Toggler
    Cart Toggler
    Setting Toggler
    Slider Activation
    Slider Text Activation
    Setting Option
    Fancybox
    Video
    Gallery Mesonry Activation
    CheckOut Page
    Price Slider Active
    Dropdown


=================================================================================
            [ END INDEX ]
================================================================================*/

(function ($) {
  'use strict';







  $('.slider-area').slick({
    // autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: `<button class="slider-btn slider-btn-prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.686 8L9.28288 12.5969C9.86867 13.1827 9.86867 14.1324 9.28288 14.7182C8.6971 15.304 7.74735 15.304 7.16156 14.7182L1.50471 9.06135C1.21158 8.76822 1.06514 8.38396 1.06537 7.99977C1.06525 7.61573 1.2117 7.23166 1.50471 6.93865L7.16156 1.2818C7.74735 0.696009 8.6971 0.69601 9.28288 1.2818C9.86867 1.86758 9.86867 2.81733 9.28288 3.40312L4.686 8Z" fill="white"/>
        </svg></button>`,
    nextArrow: `<button class="slider-btn slider-btn-next"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.31595 8.00098L0.719069 3.40409C0.133283 2.81831 0.133283 1.86856 0.71907 1.28277C1.30486 0.696985 2.2546 0.696985 2.84039 1.28277L8.49724 6.93963C8.79037 7.23275 8.93682 7.61702 8.93658 8.00121C8.9367 8.38524 8.79025 8.76932 8.49724 9.06233L2.84039 14.7192C2.2546 15.305 1.30485 15.305 0.719069 14.7192C0.133282 14.1334 0.133282 13.1836 0.719069 12.5979L5.31595 8.00098Z" fill="white"/>
        </svg></button>`
  });
  $('.product__indicator--4').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: `<button class="slider-btn slider-btn-prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.686 8L9.28288 12.5969C9.86867 13.1827 9.86867 14.1324 9.28288 14.7182C8.6971 15.304 7.74735 15.304 7.16156 14.7182L1.50471 9.06135C1.21158 8.76822 1.06514 8.38396 1.06537 7.99977C1.06525 7.61573 1.2117 7.23166 1.50471 6.93865L7.16156 1.2818C7.74735 0.696009 8.6971 0.69601 9.28288 1.2818C9.86867 1.86758 9.86867 2.81733 9.28288 3.40312L4.686 8Z" fill="white"/>
        </svg></button>`,
    nextArrow: `<button class="slider-btn slider-btn-next"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.31595 8.00098L0.719069 3.40409C0.133283 2.81831 0.133283 1.86856 0.71907 1.28277C1.30486 0.696985 2.2546 0.696985 2.84039 1.28277L8.49724 6.93963C8.79037 7.23275 8.93682 7.61702 8.93658 8.00121C8.9367 8.38524 8.79025 8.76932 8.49724 9.06233L2.84039 14.7192C2.2546 15.305 1.30485 15.305 0.719069 14.7192C0.133282 14.1334 0.133282 13.1836 0.719069 12.5979L5.31595 8.00098Z" fill="white"/>
        </svg></button>`,
    responsive: [{
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.burger').click(function () {
    $('.mainmenu__nav').toggleClass('active')
    $('body').toggleClass('lock')
  })

  /*===========  Testimonial Slick Carousel =============*/





  /*============= Cartbox Toggler ==============*/



  /*============= Search Toggler ==============*/





  /*============= Setting Toggler ==============*/





  /*============= Setting Option ==============*/




  /*========= Video ===========*/




  /*====== CheckOut Page ======*/


})(jQuery);