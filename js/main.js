$(window).on('load', () => {
    $(".form-input").focusout(function () {
        if ($(this).val() !== "") {
            $(this).addClass("focus");
        } else {
            $(this).removeClass("focus");
        }
    });
});

/* For testimonials carousel */
$(".carousel-content").owlCarousel({
    nav: false,
    dots: true,
    loop: true,
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

$(".hamburger-icon").click(() => {
    $('.menu-navbar ul').animate({
        height: 'toggle'
    });
});

// Opening the video modal when the thumbnail is clicked
function openVideoModal() {
    document.getElementById("videoModal").style.display = "flex";
    document.getElementById("videoModalVideo").play();
}

// Closing the video modal
function closeVideoModal() {
    document.getElementById("videoModal").style.display = "none";
    document.getElementById("videoModalVideo").pause();
}

// Closing video modal if clicked outside of the video area
window.onclick = function(event) {
    if (event.target === document.getElementById("videoModal")) {
        closeVideoModal();
    }
}


const validate = () => {
    // Removing all existing error states first
    $(".form-input-box .form-input").each(function () {
        $(this).parent().removeClass("empty");
        $(this).parent().removeClass("invalid-email");
    });
    $(".form-input-select-row").removeClass("empty");

    // Checking fields one by one and showing first error found
    let isValid = true;
    let num = 0;

    // Checking each input field
    const inputs = $(".form-input-box .form-input");
    for (let i = 0; i < inputs.length; i++) {
        const input = $(inputs[i]);
        const value = input.val();
        const parent = input.parent();

        if (!value) {
            parent.addClass("empty");
            isValid = false;
            break; // Show only the first error
        }

        // Additional check for email field
        if (input.hasClass("input-email") && !value.includes("@")) {
            parent.addClass("invalid-email");
            isValid = false;
            break; // Show only the first error
        }

        num += 1;
    }

    // Only checking dropdown if no input field errors
    if (isValid && $(".form-input-select-row select").val() === "") {
        $(".form-input-select-row").addClass("empty");
        isValid = false;
    } else if (isValid) {
        num += 1;
    }

    console.log("=====", num)

    if (num >= 5) {
        document.location = "thanks.html";
    }
};


$(document).click(() => {
    $(".form-input-box .form-input").each(function() {
        $(this).parent().removeClass('empty');
    });
    $('.form-input-select-row').removeClass('empty');
});

$(".form-input-button-row").click((e) => {
    e.stopPropagation();
});

document.getElementById('country').addEventListener('focus', function() {
    this.classList.add('focus');
});

document.getElementById('country').addEventListener('blur', function() {
    if (this.value === "") {
        this.classList.remove('focus');
    }
});
