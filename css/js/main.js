$(document).ready(function(){
  $('.sliders').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    
    prevArrow:"<button type='button' class='btn-slick-prev btn btn-slider'><img src='svg/tuda.svg'></button>",
    nextArrow:"<button type='button' class='btn-slick-next btn btn-slider'><img src='svg/obratno.svg'></button'"

  });
});
