





$(document).ready(() => {

    // navlink collapse button 
    $('.collapse-icon').click(()=>{
        $(' .navlinks').slideToggle();
    })


    //    announce-wrappper content closing 

    $('.close').click(() => {
        $('.announce-wrapper').hide();
    })

    // navlink click diplay icon and bottom line 
    // $('.navlinks ul li a').each(function () {
    //     let content = $(this).html();
    //     let html = content + '&nbsp; <span class="bar"></span>';
    //     $(this).after()
    // })
    $('.courses').click(function(){
        $(this).children().children().toggleClass('arrow180')
        
    })
    $('.courses').mouseenter(function(){
        $(this).children().children().toggleClass('arrow180')
    })
    $('.courses').mouseleave(function(){
        // $(this).children().children().css({"transform": "rotate(0deg)"})
        // console.log('working');
        $(this).children().children().toggleClass('arrow180')

    })





$('.navlinks ul li ').click(function () {

    
   

    $('.navlinks ul li a').removeClass("active");
    $('.navlinks ul li i').removeClass("active");
    $('.navlinks ul li svg').removeClass("active");
    $('.navlinks ul li ').removeClass("active-li");
    $(this).addClass("active-li");
    // $('.navlinks ul li svg').removeClass("on");
    // $('.navlinks ul li i').removeClass("on");
    $(this).children().addClass("active");
    // $(this).child("svg").addClass("active");
    // $(this).child("a").addClass("active");
    if ($(window).width() < 1200){
        $('.navlinks').slideToggle();
        console.log("working")

    }

})



})
