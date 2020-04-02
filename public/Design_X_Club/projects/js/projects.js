$('.projects ul li a').click(function() {
    var projectID = $(this).attr('href');
    $('.projects ul').addClass('project_open');
    $(projectID).addClass('project_open');
    return false;
});
$('.close').click(function() {
    $('.port, .projects ul').removeClass('project_open');
    return false;
});

$(".projects ul li a").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($("#top").offset().top)
    }, 400);
});