(function($) {
    $.fn.tvSlider = function(settings) {
        
        var options = {
            speed:      400,
            pause:      3000
        }
        
        var settings = $.extend(options, settings);
        
        return this.each(function () {
            
            var obj = $(this);
            var itemWidth = 240;
            var itemsAmount = $('.slides-content li', obj).length; // items amount
            var current = 0;
            
            /* rotate content */
            function slideContent (frameId) {
                if (frameId === null) {
                    current = (current >= itemsAmount-1) ? 0 : current+1;

                    timeout = setTimeout(function () {
                        slideContent(null);
                    }, settings.pause);
                } else if (frameId.hasClass('active')) {
                    return;
                } else {
                    current = frameId.prevAll().length;
                }

                $('.slides-controls li', obj).removeClass('active');
                $('.slides-controls li:eq('+ current +')', obj).addClass('active');
                $('.slides-content', obj).stop().animate({marginLeft: current*itemWidth*-1}, settings.speed);
            }
            
            /* calculate wrap width */
            $('.slides-content', obj).css({width: itemsAmount*itemWidth});
            
            /* rotate content event */
            $('.slides-controls li', obj).click(function () {
                current = $(this).prevAll().length;
                slideContent($(this));
            });
            
            /* stop auto slide onmouseover and resume onmouseout */
            $('.slides', obj).on('mouseenter mouseleave', function (event) {
                if (event.type === 'mouseenter') {
                    clearTimeout(timeout);
                } else {
                    timeout = setTimeout(function () {
                        slideContent(null);
                    }, settings.pause);
                }
            });

            if (itemsAmount > 1) {
                $('.ctrl', obj)
                    .css('visibility','visible')
                    .on('click', function () {
                        var _self = $(this),
                            _control = _self.data('slide_control'),
                            _current_obj = $('.slides-controls li.active');

                        if (_control == 'next') {
                            current = _current_obj.prevAll().length + 1;
                            slideContent(_current_obj.next());
                        } else {
                            current = _current_obj.prevAll().length - 1;
                            if (current < 0) {
                                current = itemsAmount-1;
                                slideContent($('.slides-controls li:last'));
                            } else {
                                slideContent(_current_obj.prev());
                            }
                        }
                    });
            }
            
            // init auto slide
            var timeout = setTimeout(function () {
                slideContent(null);
            }, settings.pause);
        });
    }
})(jQuery);
