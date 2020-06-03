let head = document.querySelector("header");
let menuIcon = document.getElementById("icon");
let navi = document.querySelector("nav");

// STICKY HEADER
window.onscroll = () => {
    document.documentElement.scrollTop > 100
        ? head.classList.add("sticky-header")
        : head.classList.remove("sticky-header");
};

// MENU TOGGLE
menuIcon.onclick = () => {
    menuIcon.classList.contains("menu-icon-rotate")
        ? menuIcon.classList.remove("menu-icon-rotate")
        : menuIcon.classList.add("menu-icon-rotate");

    navi.classList.contains("nav-mobile")
        ? navi.classList.remove("nav-mobile")
        : navi.classList.add("nav-mobile");

    head.classList.contains("header-height")
        ? head.classList.remove("header-height")
        : head.classList.add("header-height");
};

// SMOOTH NAVIGATION
$('nav a').click(function(event) {
    event.preventDefault();
    let id = $(this).attr("href");
    let offset = 70;
    let target = $(id).offset().top - offset;
    
    $("html, body").animate({
        scrollTop: target
    }, 500);

    
    if ($('nav').hasClass('nav-mobile')) {
        $('nav').removeClass('nav-mobile');
    }

    if ($('header').hasClass('header-height')) {
        $('header').removeClass('header-height');
    }

    if ($(".menu-icon").hasClass("menu-icon-rotate")) {
        $(".menu-icon").removeClass("menu-icon-rotate")
    }
});


