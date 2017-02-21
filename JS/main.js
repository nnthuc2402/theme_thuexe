$(document).ready(function(){
	$(".owl-carousel").owlCarousel({

        // responsiveClass:true,
        responsive:{
            // 0:{
            //     items:1,
            //     nav:false,
            //     loop:false,
            //     stagePadding: 40
            // },
            320:{
                items:1,
                nav:false,
                loop:false,
                stagePadding: 30
            },
            360:{
                items:1,
                nav:false,
                loop:false,
                stagePadding: 50
            },
            375:{
                items:1,
                nav:false,
                loop:false,
                stagePadding: 20
            },
            412:{
                items:1,
                nav:false,
                loop:false,
                stagePadding: 35
            },
            425:{
                items:1,
                nav:false,
                loop:false,
                stagePadding: 45
            },

            // 500:{
            //     items:1,
            //     nav:false,
            //     loop:false,
            //     stagePadding: 70
            // },

            600:{
                items:1,
                nav:false,
                loop:false,
                stagePadding: 100
            },

            768:{
                items:3,
                loop:false,
                // nav:true
            },
            1000:{
                items:3,
                loop:false,
                // nav:true
            }
        }
    });

    $('.owl-next1').click(function() {
        $(".owl-carousel").trigger('next.owl.carousel');
    });

    $('.owl-prev1').click(function() {
        $(".owl-carousel").trigger('prev.owl.carousel');
    });
    // $(".owl-item").css("width", "300");


    // $(".owl-item").removeAttr("style");

    // $(".owl-item").attr("float", "left");

    // $(".owl-item.active").css("max-width", "200px");
    // $(".owl-item.active").css("min-width", "250px");
    // $(".owl-item").css("max-width", "12%");
    // $(".owl-item.active").css("padding-left", "20px");





});

// $(".owl-item").attr("width", "300px");
    // $(".owl-item.active").css("min-width", "300px");
    // $(".owl-item.active").css("padding-left", "20px");