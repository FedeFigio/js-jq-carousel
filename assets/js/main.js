$(document).ready(function() {

    slide()

});


function slide() {
    var btnNext = $(".next")
    var btnPrev = $(".prev")

    btnNext.click(function(e) {
        var active = $(".slider-wrapper .active")

        active.removeClass("active")
        if (!active.hasClass("last")) {
            active.next().addClass("active")
        } else {
            $(".first").addClass("active")
        }
    });

    btnPrev.click(function(e) {
        var active = $(".slider-wrapper .active")

        active.removeClass("active")
        if (!active.hasClass("first")) {
            active.prev().addClass("active")
        } else {
            $(".last").addClass("active")
        }
    });
}