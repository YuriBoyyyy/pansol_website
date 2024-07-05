$(document).ready(function(){
    $('.image-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // Adjust autoplay speed as needed
      dots: true, // Show navigation dots
      arrows: false // Hide navigation arrows
    });
  });