
$(document).ready(function(){
    $('.core-list').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ],
        infinite: true, 
        prevArrow:"<button type='button' class='slick-prev pull-left button-invis text-white'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right button-invis text-white'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
  });