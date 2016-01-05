$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut(400);;
});

$(function() {

    $(".fancybox").fancybox();

    $(".various").fancybox({
        maxWidth    : 800,
        maxHeight   : 600,
        fitToView   : false,
        width       : '70%',
        height      : '70%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none'
    });

    
    $(window).scroll( function(){
        
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        var position = $(this).scrollTop();

        //Nav background
        if ($(window).scrollTop() > 700)
        {
            if (!$('.nav').hasClass('nav-background'))
            {
                $('.nav').addClass('nav-background');
            }
        }
        
        if ($(window).scrollTop() < 600)
        {
            if ($('.nav').hasClass('nav-background'))
            {
                $('.nav').removeClass('nav-background');
            }
        }

        $('.section').each(function() {
            var target = $(this).offset().top - ($(window).height() / 2);

            var id = $(this).attr('id');
            
            if (position >= target) {
                $('.nav > .sectionContent > ul > li > a').removeClass('active');
                $('.nav > .sectionContent > ul > li > a[href=#' + id + ']').addClass('active');
            }
        });


        //Fadein on scroll
        $('.fadein').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();   
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).removeClass('fadein');
                $(this).addClass('fadedin');
                    
            }
        }); 

        //Slide-in (left) on scroll
        $('.slidein-left').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).removeClass('slidein-left');
                $(this).addClass('slidedin-left');
                    
            }
        }); 

        //Slide-in (right) on scroll
        $('.slidein-right').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).removeClass('slidein-right');
                $(this).addClass('slidedin-right');
                    
            }
        }); 
    
    });

    $(".sliding-link").click(function(event) {
        event.preventDefault();
        $('html,body').animate( { scrollTop:$(this.hash).offset().top } , 400);
    } );
    
});