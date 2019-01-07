var tv = tv || {};

tv.guest = (function () {

    var pub = {};

    var registration_cached = false;

    pub.initEvents = function () {
        bindGuestEvents();
        bindSubmitRegister();
    }

    var bindGuestEvents = function () {
        $('.b-guest-login, #login-link-popup').on('click', function (e) {
            tv.helper.showPopup('login-popup', 'fixed', false, false);
            e.preventDefault();
        });

        $('.b-guest-register, #register-link-popup').on('click', function (e) {
            var register_popup = $('#register-popup');

            var onOpen = function () {
                if (!registration_cached) {
                    $.ajax({
                        url: dle_root +'engine/ajax/quick_register_template.php',
                        type: 'POST',
                        cache: false,
                        dataType: 'html',
                        success: function (data) {
                            $('#register-ajax-holder').html(data);
                            registration_cached = true;
                        }
                    });
                } else {
                    reload();
                }
            }

            tv.helper.showPopup('register-popup', 'fixed', onOpen, false);
            e.preventDefault();
        });
    }

    var bindSubmitRegister = function () {
        $('#register-popup').on('submit', 'form', function (e) {
            e.preventDefault();

            var self = $(this),
                params = self.serialize();

            $('input, button', self).attr('disabled', 'disabled');

            $.ajax({
                url: dle_root +'engine/ajax/quick_register.php',
                type: 'POST',
                cache: true,
                data: { data: params },
                dataType: 'html',
                success: function (data) {
                    $('#ex-ajax-layer').html(data);
                    $('input, button', self).removeAttr('disabled');
                    $('#sec_code', self).val('');
                    reload();
                }
            });
        });
        
    }
    
    return pub;
} ());

$(function () {
    tv.guest.initEvents();
});
