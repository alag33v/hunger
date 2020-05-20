$(document).ready(function () {
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
