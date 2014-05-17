;(function($) {
    var socket = io.connect();

    var present = function() {
        console.log('window size: ' + $(window).scrollTop())
        socket.emit('scroll', {top: $(window).scrollTop()});
    }

    socket.on('connected', function (data) {
        socket.emit('presenter');
    });

    $(window).scroll(present);
    document.addEventListener("touchmove", present, false);
    document.addEventListener("scroll", present, false);

    setTimeout(present, 500);


})(jQuery);
