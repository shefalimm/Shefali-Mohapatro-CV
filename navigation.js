window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        var vwidth= Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
       
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("mainNav").style.padding = "10px 10px";
                document.getElementById("logo").style.fontSize = "25px";
                    if(vwidth < 768){
                        document.getElementById("mainNav").style.background = "rgba(0, 0, 0, 0.9)";
                    }else{
                        document.getElementById("mainNav").style.background = "rgba(0, 0, 0, 0.8)";
                    }
            } else {
                document.getElementById("mainNav").style.padding = "30px 10px";
                document.getElementById("mainNav").style.background = "rgba(0, 0, 0, 0.5)";
                document.getElementById("logo").style.fontSize = "35px";
                    if(click && (document.body.scrollTop < 80 || document.documentElement.scrollTop < 80)){
                        document.getElementById("mainNav").style.background = "rgba(0, 0, 0, 0.9)";
                    }
                    if(!click && (document.body.scrollTop < 80 || document.documentElement.scrollTop < 80)){
                        document.getElementById("mainNav").style.background = "rgba(0, 0, 0, 0.5)";
                    }
            }
        /*if(vwidth>767){}
        else{
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("mainNav").style.padding = "10px 10px";
                document.getElementById("mainNav").style.background = "rgba(0, 0, 0, 0.9)";
                document.getElementById("logo").style.fontSize = "25px";
            } else {
                document.getElementById("mainNav").style.padding = "30px 10px";
                document.getElementById("mainNav").style.background = "rgba(0, 0, 0, 0.8)";
                document.getElementById("logo").style.fontSize = "35px";
            } 
        }*/
    }

    var click = false;
    function clicking() {
        click = !click;
        console.log(click,"click");
        if(click && (document.body.scrollTop < 80 || document.documentElement.scrollTop < 80)){
            document.getElementById("mainNav").style.background = "rgba(0, 0, 0, 0.9)";
        }
        if(!click && (document.body.scrollTop < 80 || document.documentElement.scrollTop < 80)){
            document.getElementById("mainNav").style.background = "rgba(0, 0, 0, 0.5)";
        }
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            document.getElementById("mainNav").style.background = "rgba(0, 0, 0, 0.9)";
        }
    }

/*window.addEventListener('resize', function(event){
    debugger;
    var vwidth= Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var checking= document.getElementById("Menus").classList.contains('collapsed');
    if(vwidth < 768){
        if(checking){
            console.log(vwidth,"vwidth");
        }
    }
});*/

   





/*$(function($) {
    "use strict"

   
    $('a.js-scroll-trigger[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: (target.offset().top - 54)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  

   
  $('.js-scroll-trigger').click(function(){
        $('.navbar-collapse').collapse('hide');
    })


    $('body').scrollspy({
        target: '#mainNav' ,
        offset: 56
    });

    var navbarCollapse = function(){
        if($("#mainNav").offest().top > 100){
            $("#mainNav").addClass("navbar-shrink");
        } else{
            $("#mainNav").removeClass("navbar-shrink");
        }
    };  

    navbarCollapse(); 

    $(window).scroll(navbarCollapse);

    $('.portfolio-modal').on('show.bs.modal' , function(e){
        $(".navbar").addClass("d-none");
    })
    $('.portfolio-modal').on('hidden.bs.modal' , function(e){
        $(".navbar").removeClass("d-none");
    })

})(jQuery);*/