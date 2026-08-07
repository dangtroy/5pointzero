$('.review_video_slider').slick({
  infinite: true,
  dots: false, 
  arrows: true,
   autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
   responsive: [
       {
      breakpoint: 798,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        infinite: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.work_smarter_grid').slick({
  infinite: true,
  dots: false, 
  arrows: true, 
  slidesToShow: 5,
  slidesToScroll: 1,
   responsive: [
       {
      breakpoint: 798,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        infinite: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.testimonials_slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
 dots: true,
    arrows: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3, 
      }
    },
    {
      breakpoint: 798,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        infinite: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



	$('.sport_drink_body ul').slick({
  infinite: true,
  dots: false, 
  arrows: true, 
  slidesToShow: 3,
  slidesToScroll: 1,
   responsive: [
       {
      breakpoint: 798,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        infinite: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});





/* jQuery
================================================== */
$(function() {
  $('.faq__title').click(function(j) {
    
    var dropDown = $(this).closest('.faq__card').find('.faq__panel');
    $(this).closest('.faq').find('.faq__panel').not(dropDown).slideUp();
    
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
	  $(this).closest('.faq__card').removeClass('active');
    } else {
      $(this).closest('.faq').find('.faq__title.active').removeClass('active');
      $(this).addClass('active');
	  $(this).closest('.faq__card').addClass('active');
	  $(this).closest('.faq__card').siblings().removeClass('active');
    }
    
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
});


/* jQuery
================================================== */
$(function() {
  $('.acc__title').click(function(j) {
    var dropDown = $(this).closest('.acc__card').find('.acc__panel');
    
    // Slide up all panels except the current one
    $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
    
    // Toggle the active class for the clicked title and open class for the card
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).closest('.acc__card').removeClass('open');
    } else {
      // Remove 'active' and 'open' classes from others
      $(this).closest('.acc').find('.acc__title.active').removeClass('active');
      $(this).closest('.acc').find('.acc__card.open').removeClass('open');

      // Add 'active' and 'open' classes to the clicked title and card
      $(this).addClass('active');
      $(this).closest('.acc__card').addClass('open');
    }
    
    // Slide toggle the current panel
    dropDown.stop(false, true).slideToggle();
    
    j.preventDefault();
  });
});








$(document).ready(function() {
    
    //alert('here');
	
  $('.tabs a').click(function(){
  
     $('.panel').hide();
     $('.tabs a.active').removeClass('active');
     $(this).addClass('active');
     
     var panel = $(this).attr('href');
     $(panel).show();
     
     return false;  // prevents link action
    
  });  // end click 

     $('.tabs li:first a').click();
     
}); // end ready


 $('.slider-main_pd').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true, 
  dots: false,
  asNavFor: '.slider-thumb_pdp'
});
$('.slider-thumb_pdp').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-main_pd',
  dots: false,
  arrows: false, 
  infinite: true,
  focusOnSelect: true
});




 






 

$(document).ready(function(){
  allulheight();
  
});

$(window).resize(function(){
  allulheight();
  
});

$(window).load(function(){
  allulheight();
  

  
});

function allulheight(){
  var heightarray = new Array();
  $('.testimonials_list_cover').removeAttr('style');
  $('.testimonials_list_cover').each(function() {
    var height = $(this).outerHeight();
    heightarray.push(height);
  });
  var maxheight = Math.max.apply(Math,heightarray);
  $('.testimonials_list_cover').height(maxheight);
}
  
 









