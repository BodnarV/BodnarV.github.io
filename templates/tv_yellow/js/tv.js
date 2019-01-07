var tv = tv || {};

tv.home = (function () {
    /**
     * Public methods agregator
     */
    var pub = {};

    var obj = {};

    pub.initEvents = function () {
        cacheObjects();
        bindDefaultsEvents();
        bindMenuEvents();
        bindCloseEvent();
        setStickFooter();
    }

    var cacheObjects = function () {
        obj = {
            main: $('#main'),
            footer: $('#footer'),
            menu: $('#main-menu')
        };
    }

    var bindDefaultsEvents = function () {
        var is_touch_device = 'ontouchstart' in document.documentElement;

        if (!("ontouchstart" in document.documentElement)) {
            document.documentElement.className += " no-touch";
        } else {
            document.documentElement.className += " is-touch";
        }

        $('.b-comments-layer').on('mouseenter mouseleave', '.b-comment', function (e) {
            var edit = $(this).find('.edit');

            if (e.type === 'mouseenter') {
                edit.css('visibility', 'visible');
            } else {
                edit.css('visibility', 'hidden');
            }
        });

        $('.b-feedback-gofeed a').on('click', function (e) {
            $('html:not(:animated)'+(!$.browser.opera?',body:not(:animated)':'')).animate({ scrollTop: $('#feedback-sendform').position().top-10}, 600);
            e.preventDefault();
        });

        $('.b-help-item:odd').addClass('odd');
    }

    var setMenu = function (item, statement) {
        if (item.hasClass('active') && true == statement) {
            return;
        }
        item.closest('li').prev('li').find('.b-menu-link').toggleClass('active_right');
    }

    var bindMenuEvents = function () {
        setMenu($('a.b-menu-link.active', obj['menu']));
        
        $('a.b-menu-link', obj['menu']).on('mouseenter mouseleave click', function (e) {
            var _self = $(this),
                _parent = _self.closest('li.has-sub-menu');

            if (e.type === 'click') {
                if (_parent.length < 1) {
                    return;
                }

                if (!_self.hasClass('active')) {
                    
                    $('.has-sub-menu', obj['menu']).find('.b-sub-menu').stop().hide(200, function () {
                        $(this).closest('.has-sub-menu').removeClass('active');
                    });

                    _self.addClass('active');
                    _parent.find('.b-sub-menu').stop(true,true).show(200);
                } else {
                    _parent.find('.b-sub-menu').stop(true,true).hide(200,function () {
                        _self.removeClass('active');
                    });
                }

                e.preventDefault();
            } else {
                setMenu(_self, true);
            }
        });
    }

    var bindCloseEvent = function () {
        $(document).click(function(event) {
            if (!$(event.target).closest('.has-sub-menu').length) {
                $('.has-sub-menu', obj['menu']).find('.b-sub-menu').stop().hide(200, function () {
                    $(this).closest('.has-sub-menu').find('.b-menu-link').removeClass('active');
                });
            }
        });
    }

    var setStickFooter = function () {
        var _footer_height = obj['footer'].innerHeight();

        obj['footer'].css({ marginTop: -_footer_height });
        obj['main'].css({ paddingBottom: _footer_height });
    }

    pub.bindWorkAlertEvent = function (id, action) {

        $('#errors-popup li:even').addClass('even');
        $('#errors-popup input[type="radio"]').off('change').on('change', function () {
            var self = $(this);

            if (!self.checked) {
                var error = self.data('error'),
                    parent = self.closest('li');

                $('#errors-popup li').removeClass('active');
                parent.addClass('active');

                $('#errors-popup .edescr').stop().slideUp(200);
                $('.edescr', parent).stop().slideDown(200);

                $('#errors-popup #errors-text').val(error);
            }
        });

        $('#errors-popup .b-button:not(.pressed)').off('click').on('click', function () {
            var self = $(this),
                response = $.trim($('#errors-popup #errors-text').val());

            if (response.length <= 0) {
                DLEalert('Опишите свою проблему, пожалуйста!', dle_info);
                return;
            }

            self.addClass('pressed');
            
            $.post(dle_root + 'engine/ajax/complaint.php', { id: id,  text: response, action: action }, function (data) {
                tv.helper.hidePopup();
                tv.helper.setOverlayEvent();
                $('#errors-popup .b-button').removeClass('pressed');

                if (data == 'ok') { DLEalert(dle_p_send_ok, dle_info); } else { DLEalert(data, dle_info); }
            });
        });

        tv.helper.showPopup('errors-popup', 'fixed', null, null);

        $('html:not(:animated)'+(!$.browser.opera?',body:not(:animated)':'')).animate({ scrollTop: $('body').position().top}, 600);

        return false;
    }
    
    return pub;
} ());

var resizeTimeout = null;

$(function () {
    tv.home.initEvents();
    tv.helper.initEvents();
});

$(window).resize(function () {
    if (resizeTimeout) clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(tv.helper.resize, 100);
});
