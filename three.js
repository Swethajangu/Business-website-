$(document).ready(function(){
    var modal = $('#contactFormModal');
    var btn = $('#contactUsBtn');
    var span = $('.close');

    btn.click(function() {
        modal.show();
    });

    span.click(function() {
        modal.hide();
    });

    $(window).click(function(event) {
        if (event.target.id == 'contactFormModal') {
            modal.hide();
        }
    });

    // Hover effect for the carousel
    $('.carousel-item').hover(function() {
        $(this).find('.carousel-caption').toggleClass('d-none');
    });
});
