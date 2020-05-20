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
});
