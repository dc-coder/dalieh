/***isotope***/
$(function(){      
  var $container = $('#filter_container');
  $container.isotope({
    itemSelector : '.element'
  });  
  var $optionSets = $('#filter_header .option-set'),
  $optionLinks = $optionSets.find('a');
  $optionLinks.click(function(){
    var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
        key = $optionSet.attr('data-option-key'),
        value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $container.isotope( options );
        }        
        return false;
      });      
});










$(document).ready(function() {
	$('link[title=bootstrap-rtl]')[0].disabled=true;
  $('.content-ar').hide();

  /*******Nice Scroll******/	  
		// $("html").niceScroll();  // The document page (body)
		// $(".scroller").getNiceScroll().resize()

   
    $('.flexslider').flexslider({
      animation: "fade",
      start: function(slider){
        $('body').removeClass('loading');
      }
    });


    /***Hover Effect with mask**/		
    $('span.mask').hover(
     function () {
      $(this).siblings('a img').addClass('hovering');
      $(this).parent().siblings(".portfolio-title").children("h4").stop().animate({
        top: -20
      }, 350);
    }, 
    function () {
      $(this).siblings('a img').removeClass('hovering');
      $(this).parent().siblings(".portfolio-title").children("h4").stop().animate({
        top: 0
      }, 350);
    }
    );


    /****Smooth Scrolling***/  
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });



    <!--contact page validator--> 	
    $("#passion_form").validate();	



    /*****google map*****/
    // var map;
    // map = new GMaps({
    //   el: '#map',
    //   lat: 33.886769, 
    //   lng: 35.471635,
    //   zoomControl : true,
    //   zoomControlOpt: {
    //     style : 'SMALL',
    //     position: 'TOP_LEFT'
    //   },
    //   panControl : true,
    //   streetViewControl : false,
    //   mapTypeControl: true,
    //   overviewMapControl: false
    // });



    $("#language-switcher").click(function(){

      if ( $("#language-switcher").attr ("current-language")  == "EN") { 
        //change to arabic
        $("li#language-switcher").html("<a href='#'>En</a>");
        $("#language-switcher").attr("current-language", "AR");
        $('link[title=bootstrap-rtl]')[0].disabled=false;
        $(".logo").css('background', 'url(images/logo-ar.jpg)');
        $(".logo").css('background-repeat', 'no-repeat');
        $(".content-en").hide();
        $(".content-ar").show(); 
        $('ul.nav').removeClass("navbar-right");
        $('ul.nav').addClass("navbar-left");
        
        
        
      }
      else {

        $("li#language-switcher").html("<a href='#'>العربية</a>");
        $("#language-switcher").attr("current-language", "EN");
        $('link[title=bootstrap-rtl]')[0].disabled=true;
         $(".logo").css('background', 'url(images/logo-en.png)');
        $(".logo").css('background-repeat', 'no-repeat');
        $(".content-en").show();
        $(".content-ar").hide(); 
        $('ul.nav').removeClass("navbar-left");
        $('ul.nav').addClass("navbar-right");
        
       
        
      }
    });





  });

