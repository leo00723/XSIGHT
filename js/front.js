$(function () {

    lightbox();
    menuSliding();
    utils();
    map();
    demo();

});

/* for demo purpose only - can be deleted */

function demo() {

    if ($.cookie("theme_csspath")) {
        $('link#theme-stylesheet').attr("href", $.cookie("theme_csspath"));
    }

    $("#colour").change(function () {

        if ($(this).val() !== '') {

            var theme_csspath = 'css/style.' + $(this).val() + '.css';

            $('link#theme-stylesheet').attr("href", theme_csspath);

            $.cookie("theme_csspath", theme_csspath, {expires: 365, path: '/'});
        }

        return false;
    });

    $("#layout").change(function () {

        if ($(this).val() !== '') {

            var theme_layout = $(this).val();

            $('body').removeClass('wide');
            $('body').removeClass('boxed');

            $('body').addClass(theme_layout);

            $.cookie("theme_layout", theme_layout, {expires: 365, path: '/'});
        }

        return false;
    });
}

/* =========================================
 *  lightbox
 *  =======================================*/

function lightbox() {

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox({
            left_arrow_class: '.fa .fa-chevron-left .arrow-left',
            right_arrow_class: '.fa .fa-chevron-right  .arrow-right'
        });
    });
}

/* =========================================
 *  map
 *  =======================================*/

function map() {

    if ($('#map').length > 0) {
        function initMap() {

            var locationSA = new google.maps.LatLng(-26.104929, 28.071653);
            var locationUK = new google.maps.LatLng(51.442886, -0.200232);
            var center = new google.maps.LatLng(19.059481, 20.492721);

            var contentStringSA = '<div class="info-window">' +
            '<h3>Jestalt RSA</h3>' +
            '<div class="info-content">' +
            '<p>144 Katherine Street, Sandown, Sandton</p>' +
            '</div>' +
            '</div>';

            var contentStringUK = '<div class="info-window">' +
            '<h3>Jestalt UK</h3>' +
            '<div class="info-content">' +
            '<p>Lavenham Rd, Southfields, London</p>' +
            '</div>' +
            '</div>';

            var infowindowSA = new google.maps.InfoWindow({
                content: contentStringSA,
                maxWidth: 400
            });

            var infowindowUK = new google.maps.InfoWindow({
                content: contentStringUK,
                maxWidth: 400
            });

            var mapCanvas = document.getElementById('map');

            var mapOptions = {
                center: center,
                zoom: 2.5,
                panControl: false,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            var map = new google.maps.Map(mapCanvas, mapOptions);

            var icon = {
                url: "./img/map-marker.png", // url
                scaledSize: new google.maps.Size(50, 50), // scaled size
            };

            var markerSA = new google.maps.Marker({
                position: locationSA,
                map: map,
                icon: icon,
            });

            markerSA.addListener('mouseover', function() {
                infowindowSA.open(map, this);
            });

            var markerUK = new google.maps.Marker({
                position: locationUK,
                map: map,
                icon: icon,
            });

            markerUK.addListener('mouseover', function() {
                infowindowUK.open(map, this);
            });

            var styles = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]}];

            map.set('styles', styles);
        }

        google.maps.event.addDomListener(window, 'load', initMap);
    }
}



/* menu sliding */

function menuSliding() {


    $('.dropdown').on('show.bs.dropdown', function (e) {

        if ($(window).width() > 750) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown();

        }
        else {
            $(this).find('.dropdown-menu').first().stop(true, true).show();
        }
    }

    );
    $('.dropdown').on('hide.bs.dropdown', function (e) {
        if ($(window).width() > 750) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        }
        else {
            $(this).find('.dropdown-menu').first().stop(true, true).hide();
        }
    });

}

/* animations */

function animations() {
    delayTime = 0;
    $('[data-animate]').css({opacity: '0'});
    $('[data-animate]').waypoint(function (direction) {
        delayTime += 150;
        $(this).delay(delayTime).queue(function (next) {
            $(this).toggleClass('animated');
            $(this).toggleClass($(this).data('animate'));
            delayTime = 0;
            next();
            //$(this).removeClass('animated');
            //$(this).toggleClass($(this).data('animate'));
        });
    },
            {
                offset: '90%',
                triggerOnce: true
            });

    $('[data-animate-hover]').hover(function () {
        $(this).css({opacity: 1});
        $(this).addClass('animated');
        $(this).removeClass($(this).data('animate'));
        $(this).addClass($(this).data('animate-hover'));
    }, function () {
        $(this).removeClass('animated');
        $(this).removeClass($(this).data('animate-hover'));
    });

}

function animationsSlider() {

    var delayTimeSlider = 400;

    $('.owl-item:not(.active) [data-animate-always]').each(function () {

        $(this).removeClass('animated');
        $(this).removeClass($(this).data('animate-always'));
        $(this).stop(true, true, true).css({opacity: 0});

    });

    $('.owl-item.active [data-animate-always]').each(function () {
        delayTimeSlider += 500;

        $(this).delay(delayTimeSlider).queue(function (next) {
            $(this).addClass('animated');
            $(this).addClass($(this).data('animate-always'));

            console.log($(this).data('animate-always'));

        });
    });



}

/* counters */

function counters() {

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

}

function utils() {

    /* tooltips */

    $('[data-toggle="tooltip"]').tooltip();

    /* click on the box activates the radio */

    $('#checkout').on('click', '.box.shipping-method, .box.payment-method', function (e) {
        var radio = $(this).find(':radio');
        radio.prop('checked', true);
    });
    /* click on the box activates the link in it */

    $('.box.clickable').on('click', function (e) {

        window.location = $(this).find('a').attr('href');
    });
    /* external links in new window*/

    $('.external').on('click', function (e) {

        e.preventDefault();
        window.open($(this).attr("href"));
    });
    /* animated scrolling */

    $('.scroll-to, .scroll-to-top').click(function (event) {

        var full_url = this.href;
        var parts = full_url.split("#");
        if (parts.length > 1) {

            scrollTo(full_url);
            event.preventDefault();
        }
    });
    function scrollTo(full_url) {
        var parts = full_url.split("#");
        var trgt = parts[1];
        var target_offset = $("#" + trgt).offset();
        var target_top = target_offset.top - 100;
        if (target_top < 0) {
            target_top = 0;
        }

        $('html, body').animate({
            scrollTop: target_top
        }, 1000);
    }
}

/* check if user is on mobile */
   $(window).on('DOMContentLoaded load resize', function() {
    if($(window).innerWidth() <= 425) {
      $('.hamburger').css('display', 'none');
    } else {
      $('.hamburger').css('display', 'block');
      $('.nav-list').removeClass('mobile');
    }
  });
  

  $(document).scroll(function() {
    if($(window).innerWidth() <= 425) {
        var scrollTop = $(document).scrollTop();
    
        if(scrollTop > 100) {
            $('.nav-list').removeClass('mobile');
            $('.nav-list').addClass('scroll');
            $('.nav-list').addClass('dark');
        }else{
            $('.nav-list').removeClass('scroll');
            $('.nav-list').removeClass('dark');
        }
    }
  });
/*hide menu on scroll*/

$(document).scroll(function() {
    var scrollTop = $(document).scrollTop();

    if(scrollTop >= 100 && $(window).innerWidth() > 425) {
        $('.hamburger').removeClass('is-active');
        $('.nav-list').css('opacity', '0');
        $('#calltoaction').css('opacity','1');
    } else if (scrollTop <= 100 && ($('.hamburger').hasClass('is-active'))) {
        $('.hamburger').addClass('is-active');
        $('.nav-list').css('opacity', '1');
    } else if (scrollTop == 0 && $(window).innerWidth() >= 425) {
        $('.hamburger').addClass('is-active');
        $('.nav-list').css('opacity', '1');
    }
});

/* product detail gallery */

function productDetailGallery(confDetailSwitch) {
    $('.thumb:first').addClass('active');
    timer = setInterval(autoSwitch, confDetailSwitch);
    $(".thumb").click(function (e) {

        switchImage($(this));
        clearInterval(timer);
        timer = setInterval(autoSwitch, confDetailSwitch);
        e.preventDefault();
    }
    );
    $('#mainImage').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(autoSwitch, confDetailSwitch);
    });
    function autoSwitch() {
        var nextThumb = $('.thumb.active').closest('div').next('div').find('.thumb');
        if (nextThumb.length == 0) {
            nextThumb = $('.thumb:first');
        }
        switchImage(nextThumb);
    }

    function switchImage(thumb) {

        $('.thumb').removeClass('active');
        var bigUrl = thumb.attr('href');
        thumb.addClass('active');
        $('#mainImage img').attr('src', bigUrl);
    }
}

/* product detail sizes */

function productDetailSizes() {
    $('.sizes a').click(function (e) {
        e.preventDefault();
        $('.sizes a').removeClass('active');
        $('.size-input').prop('checked', false);
        $(this).addClass('active');
        $(this).next('input').prop('checked', true);
    });
}


$.fn.alignElementsSameHeight = function () {
    $('.same-height-row').each(function () {

        var maxHeight = 0;
        var children = $(this).find('.same-height');
        children.height('auto');
        if ($(window).width() > 768) {
            children.each(function () {
                if ($(this).innerHeight() > maxHeight) {
                    maxHeight = $(this).innerHeight();
                }
            });
            children.innerHeight(maxHeight);
        }

        maxHeight = 0;
        children = $(this).find('.same-height-always');
        children.height('auto');
        children.each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).innerHeight();
            }
        });
        children.innerHeight(maxHeight);

    });
}

$(window).load(function () {

    windowWidth = $(window).width();

    $(this).alignElementsSameHeight();

});
$(window).resize(function () {

    newWindowWidth = $(window).width();

    if (windowWidth !== newWindowWidth) {
        setTimeout(function () {
            $(this).alignElementsSameHeight();
        }, 205);
        windowWidth = newWindowWidth;
    }

});

function isElementInViewport (el) {

//special bonus for those using jQuery
if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
}

var rect = el.getBoundingClientRect();

return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
);
}

function onVisibilityChange(el, callback) {
var old_visible = false;
return function () {
    var visible = isElementInViewport(el);
    if (visible != old_visible) {
        old_visible = visible;
        if (typeof callback == 'function') {
            callback();
        }
    }
}
}
