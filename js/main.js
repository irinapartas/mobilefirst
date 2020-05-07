$(function(){
    $('.responsive').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: "<button type="button" class="slick-arrow slick-next"><img src="images/next-arrow.svg" alt="Next Arrow"></button>",
        prevArrow: "<button type="button" class="slick-arrow slick-prev"><img src="images/next-arrow.svg" alt="Prev Arrow"></button>",        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
            }
          },
          
          
          {
            breakpoint: 640,
            settings: {
                arrows: false,
            }
          }
        
        ]
      });
});