new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    spinner: 'rotating-plane'
});

$(".service-slider").slick({
    vertical: true,
    slidesToShow: 3,
    prevArrow: `<i class="fas fa-chevron-up up"></i>`,
    nextArrow: `<i class="fas fa-chevron-down down"></i>`,
    centerMode: true,
    centerPadding: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

})

$(".testimonial-slider").slick({
    vertical: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    prevArrow: `<i class="fas fa-chevron-up up"></i>`,
    nextArrow: `<i class="fas fa-chevron-down down"></i>`,
    asNavFor: ".right-slider",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            fade: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    
})

$(".right-slider").slick({
    vertical: true,
    slidesToShow: 1,
    arrows: false,
    asNavFor: ".testimonial-slider",
})

$('.counter').counterUp({
    delay: 10,
    time: 2000
  });