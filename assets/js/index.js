





$(document).ready(() => {

    // navlink collapse button 
    $('.collapse-icon').click(() => {
        $(' .navlinks').slideToggle();
        $('.courses-drop-menu').hide();
    })


    //    announce-wrappper content closing 

    $('.close').click(() => {
        $('.announce-wrapper').hide();
    })

    $('.course').mouseenter(function () {
        $(this).children('button').css({ "background-color": "white", "color": "#FF2359" })
        $(this).children('button').children().css({ "transform": "rotate(180deg)" })
    })
    $('.course ').mouseleave(function () {
        $(this).children('button').css({ "background-color": "#FF2359", "color": "white" })
        $(this).children('button').children().css({ "transform": "rotate(0deg)" })
    })





    $('.navlinks ul li ').click(function () {

        $('.navlinks ul li a').removeClass("active");
        $('.navlinks ul li i').removeClass("active");
        $('.navlinks ul li svg').removeClass("active");
        $('.navlinks ul li ').removeClass("active-li");
        $(this).addClass("active-li");
        $(this).children().addClass("active");
        if ($(window).width() < 1200) {
            $('.navlinks').slideToggle();
        }

    })

    $('.courses-drop-menu .course-list .courses').hover(function () {
        $(this).children().toggle()

    })
    $('.course').hover(function () {

        $(this).children(".dropdown").toggle()
        $(' .navlinks').hide();
        
    })
    $('.courses-drop-menu .course-list  .online').click(function () {
        $(this).children().toggle()
        $(this).next().children().hide()
       
    })
    $('.courses-drop-menu .course-list  .offline').click(function () {
        $(this).children().toggle()
        $(this).prev().children().hide()

       
    })
    $('.course button').click(function () {

        $(this).parent().children(".dropdown").toggle()
        $(' .navlinks').hide();

    })




    var c, currentScrollTop = 0,
        topbar = $('.top-bar');

    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = topbar.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            topbar.addClass("hide")
        } else if (c > currentScrollTop && !(a <= b)) {
            topbar.removeClass("hide");

        }
        c = currentScrollTop;


    });




    function resizetopbarheight() {
        var prevHeight = $('.top-bar').height();
        $('.main').css({ "marginTop": prevHeight + "px" });

    }

    resizetopbarheight();

    $(window).resize(() => {
        resizetopbarheight();


    })

    $('.companies').slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 15000,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        rtl: false,
        variableWidth: true,
        adaptiveHeight: true,
        infinte:true,
    })
    $('.slick-prev').text("");
    $('.slick-next').text("");




})
