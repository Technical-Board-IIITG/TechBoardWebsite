$(function () {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width >= 1200) {
        makeConfetti(11, 'front');
        makeConfetti(23, 'mid');
        makeConfetti(23, 'back');
    }
    if (width >= 992 && width<1200) {
        makeConfetti(22, 'front');
        makeConfetti(46, 'mid');
        makeConfetti(46, 'back');
    }
    if (width >= 768 && width<992) {
        makeConfetti(22, 'front');
        makeConfetti(46, 'mid');
        makeConfetti(46, 'back');
    }
    if (width > 600 && width<768) {
        makeConfetti(5, 'front');
        makeConfetti(11, 'mid');
        makeConfetti(5, 'back');
    }
    if (width<=600) {
        makeConfetti(44, 'front');
        makeConfetti(80, 'mid');
        makeConfetti(80, 'back');
    }
    $('.confetti-pixel').each(function () {
        var colorIndex = Math.floor(Math.random() * (confettiColors.length));
        $(this).attr('data-color', colorIndex).css({
            'background-color': confettiColors[colorIndex]
        });
        //for device width greater than 1200px
        if (width >= 1200) {
            var x = (Math.random() * 400) - 400;
            var y = (Math.random() * 1200) - 1200;
            var scale = 1.5 - Math.random();
        }
        //for device width greater than 1200px
        if (width >= 992 && width<1200) {
            var x = (Math.random() * 700) - 700;
            var y = (Math.random() * 1100) - 1100;
            var scale = 1.5 - Math.random();
        }
        if (width >= 768 && width<992) {
            var x = (Math.random() * 500) - 500;
            var y = (Math.random() * 800) - 800;
            var scale = 1.5 - Math.random();
        }
        if (width > 600 && width<768) {
            var x = (Math.random() * 500) - 500;
            var y = (Math.random() * 670) - 670;
            var scale = 1.5 - Math.random();
        }
        if (width<=600) {
            var x = (Math.random() * 1200) - 1200;
            var y = (Math.random() * 500) - 500;
            var scale = 1.5 - Math.random();
        }
        $(this).css({
            'transform': 'translateX(' + x + '%) translateY(' + y + '%) scale(' + scale + ')'
        });
    });

    $.stellar();

    $('.confetti').addClass('active');
});

function makeConfetti(num, layer) {
    var $layer = $('.confetti-layer.' + layer + ' .inner');
    $layer.append(new Array(num + 1).join('<span class="confetti-pixel"></span>'));
}

var confettiColors = [
  '#a8c94e',
  '#8ab84f',
  '#82b34e',
  '#71aa6a',
  '#5ba14e'
];
