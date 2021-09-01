$(function(){
   $('.slider').slick({
      arrows: false,
      fade: true,
      autoplay: 3000,
      dots: true,
   });

   $('.header__burger').on('click', function (){
      $('.menu').addClass('active');
   });

   $('.menu__btn-close').on('click', function () {
      $('.menu').removeClass('active');
   });

});