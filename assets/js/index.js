





$(document).ready(() => {

    // navlink collapse button 
    $('.collapse-icon').click(() => {
        $(' .navlinks').slideToggle();
        $('.courses-drop-menu').hide();
    })


    //    announce-wrappper content closing 

    $('.close').click(() => {
        $('.announce-wrapper').hide();
        resizetopbarheight();

    })

    $(window).scroll(function () {
        let x = $(window).width()
        let y = $(window).scrollTop()
        if (x <= 768 && y > 700) {
            $('.announce-wrapper').hide();

        }
        resizetopbarheight();
    }
    )




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

    // $('.courses-drop-menu .course-list  .online').click(function () {
    //     $(this).children().toggle()
    //     $(this).next().children().hide()

    // })
    // $('.courses-drop-menu .course-list  .offline').click(function () {
    //     $(this).children().toggle()
    //     $(this).prev().children().hide()


    // })
    // $('.course button').click(function () {

    //     $(this).parent().children(".dropdown").toggle()
    //     $(' .navlinks').hide();

    // })




    var c, currentScrollTop = 0,
        topbar = $('.top-bar');

    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = topbar.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            topbar.css({ "transform": "translateY(" + b * -1.2 + "px)" })
        } else if (c > currentScrollTop && !(a <= b)) {
            topbar.css({ "transform": "translateY(" + 0 + "px)" })


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
        infinte: true,
    })



    $('.student-review-wrapper').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: 'linear',
        infinte: true,
        centerPadding: "140px",
        centerMode: true,
        speed: 1200,
        dots: true,
        customPaging: function (slider, i) {
            return $('<button type="button" />').text("");
        },
        prevArrow: `<button class="slick-prev" aria-label="Previous" type="button"></button>`,
        nextArrow: `<button class="slick-next" aria-label="Next" type="button"></button>`,
        responsive: [
            {
                breakpoint: 550,
                settings: {
                    centerPadding: '80px',
                    
                },
            },

            {
            
             
                
                breakpoint: 500,
                settings: {
                    centerPadding: '60px',


                }
            },
            {
            
             
                
                breakpoint: 450,
                settings: {
                    centerPadding: '40px',


                }
            },
        ]

    })

    $('.placement-cards-wrapper').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1200,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        variableWidth: true,
        adaptiveHeight: true,
        infinte: true,
        dots: true,
        customPaging: function (slider, i) {
            return $('<button type="button" />').text("");
        },
        prevArrow: `<button class="slick-prev" aria-label="Previous" type="button"></button>`,
        nextArrow: `<button class="slick-next" aria-label="Next" type="button"></button>`,
    })



    


})





$('.student-review-wrapper-vertical').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: 'linear',
    infinte: true,
    centerPadding: "80px",
    centerMode: true,
    speed: 1200,
    dots: true,
    vertical:true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (slider, i) {
        return $('<button type="button" />').text("");
    },
    prevArrow: `<button class="slick-prev" aria-label="Previous" type="button"></button>`,
    nextArrow: `<button class="slick-next" aria-label="Next" type="button"></button>`,
    // responsive: [
    //     {
    //         breakpoint: 576,
    //         settings: {
    //             centerPadding: '80px',
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
               
                
    //         },
    //         breakpoint: 450,
    //         settings: {
    //             centerPadding: '60px',


    //         }
    //     },

    // ]

})





$(document).ready(() => {

    const review = [
        {
            id: 1,
            rating: "5.0",
            img: './assets/public/images/Facebook.png',
            star: '<i class="bi bi-star-fill"></i>',

        },
        {
            id: 2,
            rating: 4.8,
            img: './assets/public/images/google.png',
            star: '<i class="bi bi-star-fill"></i>',

        },
        {
            id: 3,
            rating: 4.6,
            img: './assets/public/images/justdial.png',
            star: '<i class="bi bi-star-fill"></i>',

        },
        {
            id: 4,
            rating: 4.5,
            img: './assets/public/images/sulekha.png',
            star: '<i class="bi bi-star-fill"></i>',

        },
        {
            id: 5,
            rating: "5.0",
            img: './assets/public/images/edugorilla.png',
            star: '<i class="bi bi-star-fill"></i>',

        }
    ]



    $.each(review, function (key, e) {
        $('.review-box-wrapper').append('<div class="review-box"><div class="rating">' + e.rating + '</div><div class="platform"><div class="logo"> <img src=' + e.img + ` altr=""></div> <div class="star">` + e.star + e.star + e.star + e.star + e.star + `</div></div></div>`);

    });




    var moretext = `Read More<i class="fa-solid fa-angle-down"></i>`;
    var lesstext = `Read Less<i class="fa-solid fa-angle-up"></i>`;


    $('.more').each(function () {

            console.log($(this).height());

            let h =$(this).height();

            if(h==120){
                $(this).after('<div><a href="" class="morelink">' + moretext + '</a></div>');

            }else{
                $(this).addClass('nobefore');
            }

        });

        $(".morelink").click(function () {
            if ($(this).hasClass("less")) {
                $(this).removeClass("less");
                    $(this).html(moretext);

            } else {
                $(this).addClass("less");
                $(this).html(lesstext);
             
            }
            $(this).parent().prev().toggleClass('moreStyle nobefore');
            return false;
        });












})



