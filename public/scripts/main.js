jQuery(document).ready(function (){

    jQuery('#mobile-menu-open').click(function (){
        jQuery('#mobile-menu').addClass('active');
    });
    jQuery('#mobile-menu-close').click(function (){
        jQuery('#mobile-menu').removeClass('active');
    });


    // Scroll
    function checkStickyMenu(){
        if(jQuery(window).scrollTop() > 360){
            jQuery('#sticky-menu').addClass('sticky');
        }else{
            jQuery('#sticky-menu').removeClass('sticky');
        }
    }
    jQuery(window).scroll(function (){
        checkStickyMenu();
    });



    let landingSliderWork = true;
    setTimeout(nextLandingSlider, 5000);
    function nextLandingSlider(){
        if(landingSliderWork && jQuery('.header.landing .slider')){
            jQuery('.header.landing .slider .buttons img.next').click();
            setTimeout(nextLandingSlider, 5000);
        }else{
            landingSliderWork = false;
        }
    }

    jQuery('.header.landing .slider .buttons img').click(function (){
        let isNext = true;
        if(jQuery(this).hasClass('prev')){
            isNext = false;
        }

        const elements = jQuery('.header.landing .slider .image');
        let current = 0;
        elements.each(function (index, element){
            if(jQuery(element).hasClass('active')){
                current = index;
            }
        });

        if(isNext){
            if(current < elements.length - 1){
                elements.removeClass('active');
                jQuery(elements[current + 1]).addClass('active');
            }else {
                elements.removeClass('active');
                jQuery(elements[0]).addClass('active');
            }
        }else{
            if(current > 0){
                elements.removeClass('active');
                jQuery(elements[current - 1]).addClass('active');
            }else {
                elements.removeClass('active');
                jQuery(elements[elements.length - 1]).addClass('active');
            }
        }

    });

    let brandSliderWork = true;
    setTimeout(nextBrandSlider, 2000);
    function nextBrandSlider(){
        if(brandSliderWork && jQuery('.brand-slider-row')){
            jQuery('.brand-slider-row .buttons img.next').click();
            setTimeout(nextBrandSlider, 2000);
        }else{
            brandSliderWork = false;
        }
    }

    jQuery('.brand-slider-row .buttons img').click(function (){
        let isNext = true;
        if(jQuery(this).hasClass('prev')){
            isNext = false;
        }

        const elements = jQuery('.brand-slider-row .slider .slide');
        const bulletElements = jQuery('.brand-slider-row .slider-bullets .bullet');
        let current = 0;
        elements.each(function (index, element){
            if(jQuery(element).hasClass('active')){
                current = index;
            }
        });

        if(isNext){
            if(current < elements.length - 1){
                elements.removeClass('active');
                bulletElements.removeClass('active');
                jQuery(elements[current + 1]).addClass('active');
                jQuery(bulletElements[current + 1]).addClass('active');
            }else {
                elements.removeClass('active');
                bulletElements.removeClass('active');
                jQuery(elements[0]).addClass('active');
                jQuery(bulletElements[0]).addClass('active');
            }
        }else{
            if(current > 0){
                elements.removeClass('active');
                bulletElements.removeClass('active');
                jQuery(elements[current - 1]).addClass('active');
                jQuery(bulletElements[current - 1]).addClass('active');
            }else {
                elements.removeClass('active');
                bulletElements.removeClass('active');
                jQuery(elements[elements.length - 1]).addClass('active');
                jQuery(bulletElements[elements.length - 1]).addClass('active');
            }
        }

    });


    jQuery('.gallery-grid .lightbox-button').click(function (){
        const image = jQuery(this).attr('data-image-url');
        jQuery('#lightbox-fullscreen .lightbox-image-container>img').attr('src', image);
        jQuery('#lightbox-fullscreen').addClass('active');
    });
    jQuery('#lightbox-fullscreen').click(function (){
        jQuery('#lightbox-fullscreen').removeClass('active');
    });

});
