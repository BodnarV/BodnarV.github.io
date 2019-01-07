var tv = tv || {};

tv.helper = (function () {
    /**
     * Public methods agregator
     */
    var pub = {};

    pub.initEvents = function () {
        tv.helper.setOverlayEvent();
        tv.helper.setClosePopupEvent();
    }

    pub.resize = function () {
        // resize event
    }

    pub.showPopup = function (element, position, onOpen, onClose) {
        onOpen = onOpen || function () {};
        onClose = onClose || function () {};

        var win_height = $(window).height(),
            win_width = $(window).width(),
            popup = $('#'+ element),
            popup_position = {top: 0, left: 0};

        if (popup.length > 0) {

            var popup_width = popup.innerWidth(),
                popup_height = popup.innerHeight(),
                opened = $('.b-popup-opened'),
                overlay = $('#overlay');

            if (position === 'fixed') {
                popup_position.top = -1 * popup_height/2;
                popup_position.left = -1 * popup_width/2;
            }

            popup.css({marginTop: popup_position.top, marginLeft: popup_position.left});

            if (opened.length > 0) {
                opened.stop().fadeOut(200);
            }
            
            overlay.stop().fadeIn(200, function () {
                popup.off('keydown').stop().fadeIn(200, onOpen)
                .addClass('b-popup-opened')
                .attr('tabIndex', -1)
                .css('outline', 0)
                .focus()
                .keydown(function (e) {
                    if (e.keyCode && e.keyCode === 27) {
                        tv.helper.hidePopup(onClose);
                        e.preventDefault();
                    }
                });
            });
        }
    }

    pub.hidePopup = function (callback) {
        callback = callback || function () {};

        var popup = $('.b-popup-opened'),
            overlay = $('#overlay');

        popup.fadeOut(200, function () {
            overlay.fadeOut(200);
            popup.removeClass('b-popup-opened').off('keydown');
            callback();
        })
    }

    pub.setOverlayEvent = function (fnc) {
        $('#overlay').off('click').on('click', fnc || function (e) {
            tv.helper.hidePopup();
            e.preventDefault();
        });
    }

    pub.setClosePopupEvent = function (fnc) {
        $('.b-popup-close').off('click').on('click', fnc || function (e) {
            tv.helper.hidePopup();
            e.preventDefault();
        });
    }
    
    return pub;
} ());
