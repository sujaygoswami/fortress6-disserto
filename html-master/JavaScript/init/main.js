jQuery(document).ready(function() {









    function isAppleDevice() {
        return (
            (navigator.userAgent.toLowerCase().indexOf("ipad") > -1) ||
            (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) ||
            (navigator.userAgent.toLowerCase().indexOf("ipod") > -1)
        );
    }
    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
    var appStoreURL = "";
    if (isAndroid > -1) {
        jQuery('body').addClass('android-device');
        jQuery('html').addClass('android-device');
    } else if (isAppleDevice()) {
        jQuery('body').addClass('ios-device');
        jQuery('html').addClass('ios-device');

        // jQuery( window ).on( "orientationchange", function( event ) {
        //   location.reload();
        // });


    }





    //Check Mobile Devices
    var checkMobile = function() {

        //Check Device
        var isTouch = ('ontouchstart' in document.documentElement);

        //Check Device //All Touch Devices
        if (isTouch) {

            jQuery('body').addClass('touch');



        } else {

            jQuery('body').addClass('no-touch');

        };

    };

    //Execute Check
    checkMobile();

    // .iconic-widget-module .no-content
    jQuery('.iconic-widget-module .no-content .arrow-link').addClass('type-block arrow-after');
    jQuery('.three-column-grid .no-content .arrow-link').addClass('type-block arrow-after');

    // custom input file
    jQuery('.custom-input-file').change(function(e) {
        var fileName = e.target.files[0].name;
        jQuery(this).parent('.input-group').find('input[type="text"]').val(fileName);
    });

    // menu scrollfunction

    jQuery(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('header.header').addClass('scrolled');
            $('header.header .top-service-nav').slideUp();
        } else {
            $('header.header').removeClass('scrolled');
            $('header.header .top-service-nav').slideDown();
        }
    });
    if ($(document).scrollTop() > 50) {
        $('header.header').addClass('scrolled');
        $('header.header .top-service-nav').stop().slideUp();
    } else {
        $('header.header').removeClass('scrolled');
        $('header.header .top-service-nav').stop().slideDown();
    }


    // intro module header

    jQuery('.module-intro').each(function() {
        var INTROHEADER = jQuery(this).find('.intro-module-header');
        var INTROCONTEXT = jQuery(this).find('.module-intro-context');
        jQuery(this).find('.intro-module-hidden').find('h1, h2, h3, h4, h5, h6').addClass('intro-header');
        jQuery(this).find('.intro-module-hidden').find('p').addClass('intro-content');
        jQuery(this).find('.intro-header').detach().appendTo(INTROHEADER);
        jQuery(this).find('.intro-content').detach().appendTo(INTROCONTEXT);
        jQuery(this).find('.intro-module-header > *').wrapInner('<span></span>');
        jQuery(this).find('.intro-module-header span').append('<i></i>');
    });

    jQuery('.module-intro-default-typo.all').each(function() {
        jQuery(this).find('h1, h2, h3, h4, h5, h6').wrapInner('<span></span>');
        jQuery(this).find('h1, h2, h3, h4, h5, h6').append('<i></i>');
    });

    jQuery('.module-intro-default-typo').each(function() {
        jQuery(this).find('h2').wrapInner('<span></span>');
        jQuery(this).find('h2').append('<i></i>');
    });


    // news list slider
    jQuery('.news-list-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

        ]
    });

    // trusting mcustomer slider
    jQuery('.trusting-customers-module').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        dots: false,
        arrows: false,
        centerMode: false,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true
            }
        }]
    });

    // banner slider
    if ($(window).width() < 1200) {
        jQuery('.banner-module').each(function() {
            var prependsection = jQuery(this).find('.bild-slider-column');
            jQuery(this).find('.content-slider-column').detach().insertAfter(prependsection);
        });
    }
    $('.banner-module .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        asNavFor: '.slider-nav'
    });
    jQuery('.banner-module .slider-nav').slick({
        asNavFor: '.banner-module .slider-for',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });

    // third level menu
    jQuery('.has-third-level-menu-wrap').each(function() {
        var FIRSTTHIRDLEVELMENUS = jQuery(this).find('.has-third-level-menu:first-child').find('.third-level-menu-to-show').html();
        jQuery(this).find('.has-third-level-menu:first-child a').parent().addClass('hovered');
        jQuery(this).parents('.sub-menu-item').find('.third-lebel-menu-holder > .main-wrap').html(FIRSTTHIRDLEVELMENUS);
        jQuery(this).find('.has-third-level-menu a').hover(function(e) {
            var THIRDLEVELMENUS = jQuery(this).parent().find('.third-level-menu-to-show').html();
            jQuery(this).parents('.sub-menu-item').find('.has-third-level-menu a').parent().removeClass('hovered')
            jQuery(this).parents('.sub-menu-item').find('.third-lebel-menu-holder > .main-wrap').html(THIRDLEVELMENUS);
            jQuery(this).parent().addClass('hovered');
            e.stopPropagation();
        });
    });

    // header-search
    jQuery('.header-search > .fa-search').click(function() {
        jQuery(this).parent().toggleClass('open');
    });



    // isotop text
    jQuery('.isotope-module-type-one .typo-type-two .ce-gallery').unwrap().unwrap();
    jQuery('.isotope-module-type-one .typo-type-two .ce-gallery').addClass('flex-col cover-bild-holder full-col');
    jQuery('.isotope-module-type-one .typo-type-two .ce-bodytext').addClass('flex-col normal-pad-content-box white-bg full-col context-holder');
    jQuery('.isotope-module-type-two .bild-holder .ce-bodytext').addClass('main-entry').wrap('<div class="context-hollder has-block-bg theme-bg-light type-small-content-box"></div>');

    jQuery('.isotope-module-type-one:not(.placed-arrow) .context-holder p').wrapInner('<span></span>');
    jQuery('.isotope-module-type-one .context-holder').find('h1, h2, h3, h4, h5, h6').addClass('isotop-heading');
    jQuery('.isotope-module-type-one .has-show-more-info').hover(function() {
        jQuery(this).find('.context-holder .isotop-heading + p + p').stop(true, true).slideDown(100);
    }, function() {
        jQuery(this).find('.context-holder .isotop-heading + p + p').stop(true, true).slideUp(100);
    });

    //bredcrumb-module-section
    jQuery('.bredcrumb-module-section').each(function() {
        var DATABG = jQuery(this).find('+ .hag-section-bg').attr('data-section-bg')
        jQuery(this).addClass(DATABG);
    });

    //filter-trigger-button-type
    jQuery('.filter-trigger-button-type .ico-filter').click(function() {
        jQuery(this).parents('.filter-dropdown-module').find('.dropdown-element.filter-check-dropdown').toggle();
    });
    jQuery('.trigger-back-filter, .hide-desktop-filter-submit a').click(function() {
        jQuery(this).parents('.filter-dropdown-module').find('.dropdown-element.filter-check-dropdown').hide();
    });

    //mobile-main-navigation
    jQuery('.mobile-main-navigation .has-sub span').click(function() {
        jQuery(this).parent().find('> a + ul').slideToggle();
        jQuery(this).parent().toggleClass('open');
    });

    jQuery('.hmbg-trigger').click(function() {
        jQuery('.mobile-menu').slideToggle();
        jQuery(this).toggleClass('open');
    })



    // object notation
    var site = {}



    site.FIXEDHEADERHEIGHTFUNCTION = function() {
        var HEIGHT = jQuery('header.header').height();
        jQuery('body').css('padding-top', HEIGHT);

    };


    site.FIXEDHEADERHEIGHTFUNCTION();



    jQuery(window).resize(function() {
        site.FIXEDHEADERHEIGHTFUNCTION();

    });



    jQuery(window).on("orientationchange", function(event) {



    });






    jQuery('.touch .has-submenu > a').addClass('dual-click');

    jQuery(document).on("click", ".dual-click", function(event) {

        jQuery(".dual-click").not(this).removeClass("clicked");
        jQuery(this).toggleClass("clicked");
        if (jQuery(this).hasClass("clicked")) {
            event.preventDefault();
        }
    });


    // go top
    jQuery(window).scroll(function() {
        if ($(document).scrollTop() > 200) {
            $('.go-top').addClass('active');

        } else {
            $('.go-top').removeClass('active');
        }
    });
    if ($(document).scrollTop() > 200) {
        $('.go-top').addClass('active');

    } else {
        $('.go-top').removeClass('active');
    }
    jQuery('.go-top').click(function() {
        jQuery('html, body').animate({ scrollTop: 0 }, 400);

    });

    // inner-page-banner-module
    jQuery('.inner-page-banner-module').parent('section').addClass('inner-page-section');

    // iconic-tab-module
    jQuery('.tab-hidden-row').parent().each(function() {
        jQuery(this).find('.tab-hidden-row').wrapAll('<div class="iconic-tab-module default-override"></div>');
    });
    jQuery('.iconic-tab-module.default-override').each(function() {
        jQuery(this).append('<ul class="nav nav-tabs"></ul>');
        jQuery(this).append('<div class="tab-content"></div>');
        var NAVHOLDER = jQuery(this).find('.nav-tabs');
        var TABCONTENTHOLDER = jQuery(this).find('.tab-content');
        jQuery(this).find('.nav-link').wrap('<li class="nav-item" role="presentation"></li>');
        jQuery(this).find('.nav-item').detach().appendTo(NAVHOLDER);
        jQuery(this).find('.tab-pane').detach().appendTo(TABCONTENTHOLDER);
        jQuery(this).find('.tab-content').find('.tab-pane:first-child').addClass('show active');
        jQuery(this).find('.nav-tabs li').append('<div class="active-state"></div>');
        jQuery(this).find('.nav-tabs li:first-child button').addClass('active');
    });


    // buttons
    jQuery('.big-red-button').addClass('site-default-button lg-button type-two inline-button');
    jQuery('.big-gradient-button').addClass('site-default-button lg-button type-two inline-button with-gradient');
    jQuery('.mini-icon-link-right-arrow').addClass('mini-icon-link right-arrow');
    jQuery('.sidebar-element .site-form-module .site-default-button').addClass('block-button');
    jQuery('.tx-indexedsearch-browsebox ul li a').addClass('site-default-button inline-button');
    jQuery('.site-plain-button').addClass('site-default-button plain-button');
    jQuery('.site-gradient-button').addClass('site-default-button plain-button gradient-button');
    jQuery('.site-gradient-button-sm').addClass('site-default-button plain-button gradient-button button-sm');
    jQuery('.site-plain-button-sm').addClass('site-default-button plain-button button-sm');


    // data-image-src
    jQuery('.data-image-src').each(function() {
        var DATAIMG = jQuery(this).find('> img').attr('src');
        jQuery(this).attr('data-image-src', DATAIMG);
    });

});








// load
jQuery(window).load(function() {

    // isotop type one
    var $filterisotoptypeone = jQuery('.isotope-module-type-one:not(.no-isotop-lib) .isotop-grid').isotope({
        // options
        itemSelector: '.isotop-grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.col-xl-3'
        }
    });
    var $filterisotoptypeonecheckboxes = jQuery('.filter-button-group-isotope-type-one input');
    $filterisotoptypeonecheckboxes.change(function() {
        var inclusives = [];
        $filterisotoptypeonecheckboxes.each(function(i, elem) {
            if (elem.checked) {
                inclusives.push(elem.value);
            }
        });
        var filterValue = inclusives.length ? inclusives.join(', ') : '*';
        $filterisotoptypeone.isotope({ filter: filterValue })
    });


    // isotop type three
    var $filterisotoptypethree = jQuery('.isotope-module-type-three .isotop-grid').isotope({
        // options
        itemSelector: '.isotop-grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.my-col'
        }
    });
    var $filterisotoptypethreecheckboxes = jQuery('.filter-button-group-isotope-type-three input');
    $filterisotoptypethreecheckboxes.change(function() {
        var inclusives = [];
        $filterisotoptypethreecheckboxes.each(function(i, elem) {
            if (elem.checked) {
                inclusives.push(elem.value);
            }
        });
        var filterValue = inclusives.length ? inclusives.join(', ') : '*';
        $filterisotoptypethree.isotope({ filter: filterValue })
    });

    jQuery('.reset-checked-wrap').click(function() {
        var THISCHECK = jQuery(this).find('input');
        jQuery(this).parents('.checklist-module-box').find('input').not(THISCHECK).prop('checked', false);
    });
    jQuery('.checklist-module-box .form-check:not(.reset-checked-wrap)').click(function() {
        jQuery(this).parents('.checklist-module-box').find('.reset-checked').prop('checked', false);
    });






    // match height
    jQuery('.equal-row').each(function() {
        jQuery(this).children('.equal-block').matchHeight();
    });

    jQuery('.element-row').each(function() {
        jQuery(this).children('.equal-block').matchHeight();
    });

    jQuery('.iconic-widget-module').matchHeight();







    var siteLoad = {}




    siteLoad.ISOTOPTWOSECONDARY = function() {

        // isotop type two
        jQuery('.isotope-module-type-two').each(function() {
            var SMALLBOXWIDTH = jQuery(this).find('.sm-grid-col').width();
            jQuery(this).find('.type-small-content-box').width(SMALLBOXWIDTH);
            // jQuery(this).find('.type-small-content-box').height(SMALLBOXWIDTH);
            jQuery(this).parent('.section-row').find('.module-intro-default-typo').wrap('<div class="container isotop-type-two-module-header pull-text-left"></div>');
        });





    };


    siteLoad.ISOTOPTWOPRIMARY = function() {



        jQuery('.isotope-module-type-two .isotop-grid').isotope({
            // options
            itemSelector: '.isotop-grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.sm-grid-col'
            }
        });

        jQuery('.grid-euual-height').matchHeight();



    };

    siteLoad.ISOTOPTWOSECONDARY();

    setTimeout(function() {
        siteLoad.ISOTOPTWOPRIMARY();
    }, 300);




    jQuery(window).resize(function() {
        setTimeout(function() {
            siteLoad.ISOTOPTWOSECONDARY();
            siteLoad.ISOTOPTWOPRIMARY();
        }, 1000);

    });


    // set back

    jQuery('.set-back').each(function() {

        var SETBACK = jQuery(this).find('img').attr('src');
        jQuery(this).css('background-image', 'url(' + SETBACK + ')');

    });


});



// integration label js
jQuery(document).ready(function() {

    jQuery('.trusting-customers-module figure.image').addClass('item').removeClass('image');
    jQuery('.tile-img-content .image').addClass('table-cell middle-line').parent().addClass('table-wrap');
    jQuery('.tile-img-content .ce-row').addClass('tile-img');
    jQuery('.tile-img-content .ce-bodytext').addClass('tile-title');
    jQuery('.clients-logo-module .ce-row').addClass('logo-block col my-col');
    jQuery('.clients-logo-module .ce-inner').addClass('default-grid row');

});