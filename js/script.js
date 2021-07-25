$(document) .ready(function(){
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        console.log(scroll); 
    })
})


// what to do section

$(document).ready(function(){
    $(".item-1").click(function(){
        $(".figcaption1").toggle();
        $(".img1").toggle();
    })
    $(".item-2").click(function(){
        $(".hide").toggle();
        $(".show").toggle();
    })

    $(".item-3").click(function(){
        $(".hide").toggle();
        $(".show").toggle();
    })


});