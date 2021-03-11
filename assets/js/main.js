$(document).ready(function() {

    slide()

});




function slide() {
    var btnNext = $(".next")
    var btnPrev = $(".prev")


    btnNext.click(function(e) {
        var imgActive = $(".slider-wrapper .active")

        imgActive.removeClass("active")
        if (!imgActive.hasClass("last")) {
            imgActive.next().addClass("active")
        } else {
            $(".first").addClass("active")
        }
    });
    btnPrev.click(function(e) {
        var imgActive = $(".slider-wrapper .active")

        imgActive.removeClass("active")
        if (!imgActive.hasClass("first")) {
            imgActive.prev().addClass("active")
        } else {
            $(".last").addClass("active")
        }
    });

}