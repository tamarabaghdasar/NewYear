
$(document).ready(function(){

    $('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      dots: true,
      slidesToScroll: 2,
      arrows: true,
      prevArrow: '.arr-prev',
      nextArrow: '.arr-next',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },{
            breakpoint: 993,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },{
            breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });
  
  })