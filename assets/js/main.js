$(document).ready(function() {

    slide()




});




function slide() {
    var btnNext = $(".next")
    var btnPrev = $(".prev")


    btnNext.click(function(e) {
        var imgActive = $(".images > img.active")

        imgActive.removeClass("active")
        if (!imgActive.hasClass("last")) {
            imgActive.next().addClass("active")
        } else {
            $("img.first").addClass("active")
        }

    });

}