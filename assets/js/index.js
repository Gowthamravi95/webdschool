


        // console.log('working');



$(document).ready(() => {

    // navlink collapse button 
    $('.collapse-icon').click(()=>{
        $(' .navlinks').slideToggle();
    })


    //    announce-wrappper content closing 

    $('.close').click(() => {
        $('.announce-wrapper').hide();
    })

    $('.course').mouseenter(function(){
        $(this).children('button').css({"background-color": "white", "color": "#FF2359"})
        $(this).children('button').children().css({"transform": "rotate(180deg)"})
    })
    $('.course ').mouseleave(function(){
        $(this).children('button').css({"background-color": "#FF2359", "color": "white"})
        $(this).children('button').children().css({"transform": "rotate(0deg)"})
    })





$('.navlinks ul li ').click(function () {

    $('.navlinks ul li a').removeClass("active");
    $('.navlinks ul li i').removeClass("active");
    $('.navlinks ul li svg').removeClass("active");
    $('.navlinks ul li ').removeClass("active-li");
    $(this).addClass("active-li");
    $(this).children().addClass("active");
    if ($(window).width() < 1200){
        $('.navlinks').slideToggle();
    }

})

$('.courses-drop-menu .course-list .courses').hover(function(){
    $(this).children().toggle()

})
$('.course').hover(function(){
       
    $(this).children(".dropdown").toggle()
})

})
