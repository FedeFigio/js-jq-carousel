$(document).ready(function() {
    slide();

});

var index = 0;

var allImg = $(".images>img");
var imgCount = allImg.length;
var allDots = $(".nav i");

function slide() {

    var btnNext = $(".next");
    var btnPrev = $(".prev");

    btnNext.click(function(e) {
        if (index < imgCount - 1) {
            index++;
        } else {
            index = 0;
        }
        setActiveImg(index);
    });

    btnPrev.click(function(e) {
        if (index > 0) {
            index--;
        } else {
            index = imgCount - 1;
        }
        setActiveImg(index);
    });
    allDots.click(function(e) {
        index = $(this).index();
        setActiveImg(index);
    });
}

function setActiveImg(index) {
    allImg.removeClass("active");
    $(allImg[index]).addClass("active");
    allDots.removeClass("active");
    $(allDots[index]).addClass("active");
}