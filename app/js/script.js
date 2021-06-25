const hamburger = document.querySelector('#hamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const fadeObjs = document.querySelectorAll('.fade');
const menuBtn = document.querySelectorAll('.menu-link');

hamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){ // Close Hamburger Menu
        body.classList.remove('no-scroll');
        header.classList.remove('open');
        fadeObjs.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else { // Open Hamgurger Menu
        body.classList.add('no-scroll');
        header.classList.add('open');
        fadeObjs.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});