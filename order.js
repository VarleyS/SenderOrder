$('.order').click(function(e) {
    let button = $(this);

    if(!button.hasClass('animate')) {
        button.addClass('animate');

        setInterval(() => {
            button.removeClass('animate');
        }, 1000);
    }
});