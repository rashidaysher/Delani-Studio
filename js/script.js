
// nav bar section content

$(document) .ready(function(){
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        console.log(scroll); 
    });
})


// what to do section

$(function () {
    let desp = $('#desp');
    let devp = $('#devp');
    let prop = $('#prop');
    let destext = $('#destxt');
    let devtext = $('#devtext');
    let protext = $('#protext');

    $(desp).hide();
    $(devp).hide();
    $(prop).hide();

    //paragraph show content
    $('.design').on('click', function () {
        $('.design').slideUp('slow');
        $(desp).show(500);
        $(destext).animate({fontWeight:'bolder',fontSize:'30px'})

    });
    $('.development').on('click', function () {
        $('.development').slideUp('slow');
        $(devp).show(500);
        $(devtext).animate({fontWeight:'bolder',fontSize:'30px'})
    });
    $('.product').on('click', function () {
        $('.product').slideUp('slow');
        $(prop).show(500);
        $(protext).animate({fontWeight:'bolder',fontSize:'30px'})
    });

    //Hide paragraph content
    $(desp, destext).on('click', function () {
        $('.design').slideDown();
        $(desp).hide(500);
        $(destext).animate({fontWeight:'normal',fontSize:'16px'})
    });
    $(devp, devtext).on('click', function () {
        $('.development').slideDown();
        $(devp).hide(500);
        $(devtext).animate({fontWeight:'normal',fontSize:'16px'})
    });
    $(prop, protext).on('click', function () {
        $('.product').slideDown();
        $(prop).hide(500);
        $(protext).animate({fontWeight:'normal',fontSize:'16px'})
    })

    //Overlay images

    $('.workimg').hover(function(){
        $('.worktext',this).slideToggle('slow');
     }, function(){
        $('.worktext',this).slideToggle('slow');
     });


    //Form Validation
        $("form#form").on('submit',function(event){
            event.preventDefault();
            let name = $("input#name").val();
            let email = $("input#email").val();
            let message = $("textarea#message").val();

            if ($("input#name").val() && $("input#email").val()){
                alert ("Hey " + name + ", Thank you for getting in touch, someone will get back shortly...we value you.");
            }
            else {
                alert("insert valid name and email!");
            }

        });



});
