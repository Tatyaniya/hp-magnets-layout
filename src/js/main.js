$( function() {

    $('.humburger').click(function(){
        $( ".menuMob__list" ).toggleClass('menuMob-open');
    });

    $('.link-prize').click( function(e) {
        e.preventDefault();
		elementClick = $(e.currentTarget).attr("href");
		destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });

    $('.prizeMenu__link--fb').click( function(e) {
        e.preventDefault();
		elementClick = $(e.currentTarget).attr("href");
		destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });


    $('#modal-forgot').click( function () {
        $('#exampleModal-entr').arcticmodal({
            overlay: {
                css: {
                    backgroundColor: '#0a4486',
                    opacity: 0.9
                }
            }
        });
    });

    $('#registration').click( function () {
        $('#exampleModal-reg').arcticmodal({
            overlay: {
                css: {
                    backgroundColor: '#0a4486',
                    opacity: 0.9
                }
            }
        });
    });

    $('#confirm').click( function () {
        $('#exampleModal-new-code').arcticmodal({
            overlay: {
                css: {
                    backgroundColor: '#0a4486',
                    opacity: 0.9
                }
            }
        });
    });

    $('.qr-code').click( function () {
        $('#exampleModal-qr-code').arcticmodal({
            overlay: {
                css: {
                    backgroundColor: '#0a4486',
                    opacity: 0.9
                }
            }
        });
    });

    $('#productLink').click( function () {
        $('#exampleModal-load-code').arcticmodal({
            overlay: {
                css: {
                    backgroundColor: '#0a4486',
                    opacity: 0.9
                }
            }
        });
    });

    $('#loadClose').click( function () {
        $('#exampleModal-error-code').arcticmodal({
            overlay: {
                css: {
                    backgroundColor: '#0a4486',
                    opacity: 0.9
                }
            }
        });
    });

});