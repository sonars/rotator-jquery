$.fn.extend({
    rotator: function(_options) {
        let options = {
            interval: 3, //default interval (seconds) to rotate the items
            speed: 500, // animation speed in (milli seconds)
        };

        options = $.extend(options, _options);
        return this.each(function() {
            let self = $(this);

            let rotates = setInterval(() => {
                self.children().eq(0).animate({
                    top: 0,
                    opacity: 1
                }, options.speed / 5, function() {
                    $(this).css({
                        top: '100px',
                        opacity: 0
                    }).remove().appendTo(self);
                });

                self.children().eq(1).animate({
                    top: 0,
                    opacity: 1
                }, options.speed);


            }, options.interval * 1000);
        });
    }
});