$(document).ready(function () {

    var modal, span, body, addTo;

    modal = document.getElementById('div1');
    span = document.getElementsByClassName("close")[0];
    body = document.querySelector('body');
    addTo = document.getElementById('addto');

    $('#regbtn1, #regbtn2').click(function () {
        modal.style.display = "block";
        body.style.overflow = "hidden";

    });

    span.onclick = function () {
        modal.style.display = "none";
        body.style.overflow = "scroll";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            body.style.overflow = "scroll";
        }
    };

    // $('.accordionSpec > ul > li:has(ul)').addClass("has-sub");
    //
    // $('.accordionSpec > ul > li > a').click(function () {
    //
    //     var checkElement = $(this).next();
    //
    //     $('.accordionSpec li').removeClass('active');
    //     $(this).closest('li').addClass('active');
    //
    //     if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    //         $(this).closest('li').removeClass('active');
    //         checkElement.slideUp('normal');
    //     }
    //
    //     if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    //         $('.accordionSpec ul ul:visible').slideUp('normal');
    //         checkElement.slideDown('normal');
    //     }
    //
    //     if (checkElement.is('ul')) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // });


    $('.specbutton').click(function(){
        $('.allspec').slideToggle(400);
    });

});