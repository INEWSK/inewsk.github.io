< script > $('#kotori-board').click(function() {
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    $('.kotori-board').css({
        'margin-left': width / 2 - 300
    });
    $('.kotori-board').fadeIn('fast');
    $(window).resize(function(width) {
        width = document.body.clientWidth;
        height = document.body.clientHeight;
        if (width <= 600) {
            $('.kotori-board').css({
                'width': '100%'
            });
        } else {
            $('.kotori-board').css({
                'width': '600px',
                'margin-left': width / 2 - 300
            });
        }
    });
    $('.kotori-board').css({
        'z-index': '9'
    });
    $('.kotori-player').css({
        'z-index': '-9'
    });
}) $('#kotori-player').click(function() {
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    $('.kotori-player').css({
        'margin-left': width / 2 - 165
    });
    $('.kotori-player').fadeIn('fast');
    $(window).resize(function(width) {
        width = document.body.clientWidth;
        height = document.body.clientHeight;
        if (width <= 600) {
            $('.kotori-player').css({
                'width': '100%'
            });
        } else {
            $('.kotori-player').css({
                'width': '330px',
                'margin-left': width / 2 - 165
            });
        }
    });
    $('.kotori-player').css({
        'z-index': '9'
    });
    $('.kotori-board').css({
        'z-index': '-9'
    });
}) $('.kotori-board-close').click(function() {
    $(this).parent().fadeOut('slow');
}) $(document).ready(function() {
    var backgroundLists = ['http://7ktuup.com1.z0.glb.clouddn.com/理央%20-%20★%20(51503679)%20~1.jpg', 'http://7ktuup.com1.z0.glb.clouddn.com/background.jpg', 'http://7ktuup.com1.z0.glb.clouddn.com/rontorl%20-%20%E3%81%93%E3%81%A8%E3%81%88%E3%82%8A%20(39303501)%20.png-minami', 'http://7ktuup.com1.z0.glb.clouddn.com/42650232.jpg-minami', 'http://7ktuup.com1.z0.glb.clouddn.com/38468017.jpg-minami'];
    var backgroundIndex = 0;
    var backgroundInterval = 10000;
    function getNext() {
        return backgroundLists[backgroundIndex++%backgroundLists.length];
    }
    setInterval(function() {
        //进度条
        /*
    $('body').append('<div class="progress"></div>');
    $('.progress').animate({
      width: '100%',
      },
      backgroundInterval, function() {
      $(this).remove();
    });
    */
        $('body').css('background-image', 'url(\'' + getNext() + '\')');
    },
    backgroundInterval);
}) < /script>/
