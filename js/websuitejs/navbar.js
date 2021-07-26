$("document").ready(function () {
    $(".button_img").mouseenter(function () {
        $(this).attr('src', function (index, attr) {
            return attr.replace(".png", "-active.png");
        });
    });
    $(".button_img").mouseleave(function () {
        $(this).attr('src', function (index, attr) {
            return attr.replace("-active.png", ".png");
        });
    });
});
