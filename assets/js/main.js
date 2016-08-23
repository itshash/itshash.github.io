console.log('This would be the main JS file.');

$("#a-sec-bio").click(function() {
    $('html, body').animate({
        scrollTop: $("#sec-bio").offset().top
    }, 2000);
});
