// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(document).ready(function () {
    $('.filter-button').on('click', function () {
        var filter = $(this).data('filter');

        $('.filter-button').removeClass('selected');
        $(this).addClass('selected');

        if (filter === '*') {
            $('.grid-item').fadeIn();
        } else {
            $('.grid-item').fadeOut(0);
            $('.grid-item' + filter).fadeIn();
        }
    });
});
/*$(document).ready(function () {
    new WOW().init();

    $('.testi-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
});*/