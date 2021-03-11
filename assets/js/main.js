$(document).ready(function() {

    var index = 0;
    var allImg = $(".images>img");
    var imgCount = allImg.length;
    var allDots = $(".nav i");
    var btnNext = $(".next");
    var btnPrev = $(".prev");

    $(window).keyup(function(e) {
        if (e.keyCode == 39) {
            goNext();
        } else if (e.keyCode == 37) {
            goPrev();
        }
    });

    btnNext.click(function(e) {
        goNext();
    });

    btnPrev.click(function(e) {
        goPrev();
    });

    allDots.click(function(e) {
        index = $(this).index();
        setActiveImg(index);
    });


    function goNext() {
        if (index < imgCount - 1) {
            index++;
        } else {
            index = 0;
        }
        setActiveImg(index);
    }

    function goPrev() {
        if (index > 0) {
            index--;
        } else {
            index = imgCount - 1;
        }
        setActiveImg(index);
    }

    function setActiveImg(index) {
        allImg.removeClass("active");
        $(allImg[index]).addClass("active");
        allDots.removeClass("active");
        $(allDots[index]).addClass("active");
    }
});