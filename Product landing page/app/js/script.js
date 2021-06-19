const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(hamburger.classList.contains('open')){
        hamburger.classList.remove('open');
    }
    else {
        hamburger.classList.add('open');
    }
});