$(document).ready(function() {

  // sticky navigation and scroll

  $('.js--section-features').waypoint(function(direction) {
    if (direction == 'down') {
      $('nav').addClass('sticky')
    } else {
      $('nav').removeClass('sticky')
    }
  }, {
    offset: '60px'
  });

  $('.js--scroll-to-plans').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });

  $('.js--scroll-to-start').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  })

  /* Navigation scroll */
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
});

/* Animations on scroll */
  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
    offset: '90%'
  });

  $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated pulse');
  }, {
    offset: '90%'
  });

  /* Mobile navigation */
  $('.js--nav-icon').click(function() {
      var icon = $('#testing').attr('name');
      var nav = $('.js--main-nav');
      nav.slideToggle(200);

      if (icon == 'menu') {
        $('#testing').attr('name', 'close');
      } else {
        $('#testing').attr('name', 'menu');
      }
  });






