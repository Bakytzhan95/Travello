// const navBar = document.querySelector(".nav-bar");
// const navLink = document.querySelector(".link");
// const body = document.querySelector("body");

// navBar.addEventListener("click", () => {
//     navBar.classList.toggle("active");
//     navLink.classList.toggle("active");
//     body.classList.toggle("menu-active");
// });

$(document).ready(function() {
    $('.nav-bar').click(function() {
        $('.nav-bar').toggleClass('active');
        $('.link').toggleClass('active');
        $('body').toggleClass('menu-active');

        // if($('.nav-bar').hasClass('active')) {
        //     $('.nav-bar').removeClass('active')
        // } else {
        //     $('.nav-bar').addClass('active')
        // }
    })
});