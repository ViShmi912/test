$(document).ready(function() {
    
    /*     FOR STICKY NAVIGATION   */
   
    $('.haldi').waypoint(function(direction){
       if (direction=="down") {
           $('nav').addClass('sticky');
       } else{
           $('nav').removeClass('sticky');
       }
    }, {
        offset: '60px'
    });
    
    /*     FOR SCROLL          */
    $('.js--scroll-to-plans').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-prices').offset().top},1000); 
    });
    $('.js--scroll-to-meals').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-meals').offset().top},1000); 
    });
    $('.js--scroll-to-works').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-works').offset().top},1000); 
    });
    $('.js--scroll-to-rsvp').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-testimonials').offset().top},1000); 
    });
    $('.js--scroll-to-signup').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-signup').offset().top},1000); 
    });
    $('.js--scroll-to-haldi').click(function(){
       $('html, body').animate({scrollTop: $('.haldi').offset().top},1000); 
    });
    $('.js--scroll-to-mehandi').click(function(){
       $('html, body').animate({scrollTop: $('.mehandi').offset().top},1000); 
    });
    $('.js--scroll-to-sangeet').click(function(){
       $('html, body').animate({scrollTop: $('.sangeet').offset().top},1000); 
    });
    $('.js--scroll-to-wedding').click(function(){
       $('html, body').animate({scrollTop: $('.wedding').offset().top},1000); 
    });

   $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
    
    //*Animation */
    $('.js--wp-1').waypoint(function(direction){
       $('js--wp-1').addClass('animated fadeIn'); 
    })
});