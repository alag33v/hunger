$(document).ready(function () {
  /* Fixed header */

  let header = $('.nav');
  let cloneHeader = header.clone();
  let introH = $('.about-us').innerHeight();
  cloneHeader.addClass('fixed');
  header.before(cloneHeader);

  $(window).scroll(function () {
    if ($(window).scrollTop() > introH) {
      cloneHeader.addClass('show');
    } else {
      cloneHeader.removeClass('show');
    }
  });

  /* Slick slider */
  $('.slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    waitForAnimate: false,
    speed: 1250,
    initialSlide: 1,
  });

  /* Smooth scroll */
  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();

    let elementClass = $(this).data('scroll');
    let elementOffset = $(elementClass).offset().top;

    $('html, body').animate(
      {
        scrollTop: elementOffset,
      },
      1000
    );
  });

  /* Fancybox */
});

$(document).ready(function () {
  $('.fancybox').fancybox();
});

$(document).ready(function () {
  $('.various').fancybox({
    maxWidth: 800,
    maxHeight: 600,
    fitToView: false,
    width: '70%',
    height: '70%',
    autoSize: false,
    closeClick: false,
    openEffect: 'elastic',
    closeEffect: 'none',
  });
});

/* Burger menu */

let wrapper = document.querySelector('.burger__button-wrapper');
let burger = document.querySelector('.burger__button');
let mobileNav = document.querySelector('.header__mobile-nav');
let mobileLink = document.querySelectorAll('.mobile-nav__link');
let body = document.querySelector('body');

wrapper.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileNav.classList.toggle('header__mobile-nav--active');
  body.classList.toggle('block');
});

for (var i = 0; i < mobileLink.length; i++) {
  mobileLink[i].addEventListener('click', function (event) {
    mobileNav.classList.remove('header__mobile-nav--active');
    body.classList.remove('block');
  });
}
