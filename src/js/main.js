$( function() {

    $('.humburger').click(function(){
        $( ".menuMob__list" ).toggleClass('menuMob-open');
    });

    $('.menuMob__link').click(function(){
        $( ".menuMob__list" ).removeClass('menuMob-open');
        $('.ham').removeClass('active');
    });

    $('.magMenu__link,.menuMob__link').click( function(e) {
        e.preventDefault();
		elementClick = $(e.currentTarget).attr("href");
		destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 600);
    });

});