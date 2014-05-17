;(function($) {
    var socket = io.connect();
    socket.on('connected', function (data) {

    });

    socket.on('scroll', function(data) {
        $(window).scrollTop(data.top);
    });

})(jQuery);
