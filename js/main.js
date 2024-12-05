$(window).on('load', () => {
    $(".form input").val("");

    $(".form input").focusout(function () {
        if ($(this).val() !== "") {
            $(this).addClass("focus");
        } else {
            $(this).removeClass("focus");
        }
    });
});

/* Carousel Scripts*/
$(".carousel-content").owlCarousel({
    nav: false,
    dots: true,
    loop: false,
    responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1024: { items: 1 },
        1025: { items: 1 }
    }
});

const owl = $('.carousel-content');
$('.testimonials-section .arrow-left').click(() => {
    owl.trigger('prev.owl.carousel');
});
$('.testimonials-section .arrow-right').click(() => {
    owl.trigger('next.owl.carousel');
});

/* Video Scripts*/
const playPause = () => {
    const video = document.querySelector("#sampleVideo");
    if (video.paused) {
        video.play();
        $('.play').addClass("plo");
    } else {
        video.pause();
        $('.play').removeClass("plo");
    }
};

$(".hamburger-icon").click(() => {
    $('.menu-navbar ul').animate({
        height: 'toggle'
    });
});

const validate = () => {
    // Remove all existing error states first
    $(".inp-box .inp").each(function() {
        $(this).parent().removeClass('empty');
    });
    $('.drop-row').removeClass('empty');

    // Check fields one by one and show first error found
    let isValid = true;
    let num = 0;

    // Check each input field
    const inputs = $(".inp-box .inp");
    for(let i = 0; i < inputs.length; i++) {
        if (!$(inputs[i]).val()) {
            $(inputs[i]).parent().addClass('empty');
            isValid = false;
            break; // Show only first error
        } else {
            num += 1;
        }
    }

    // Only check dropdown if no input field errors
    if (isValid && $('.drop-row select').val() === '') {
        $('.drop-row').addClass('empty');
        isValid = false;
    } else if (isValid) {
        num += 1;
    }

    if (num === 5) {
        document.location = 'thanks.html';
    }
};

$(document).click(() => {
    $(".inp-box .inp").each(function() {
        $(this).parent().removeClass('empty');
    });
    $('.drop-row').removeClass('empty');
});

$(".btn-row").click((e) => {
    e.stopPropagation();
});