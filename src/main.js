$(function () {
    AOS.init(
        // duration: 1200,
    );
});
$(window).on('load', function () {
    AOS.refresh();
});

$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});
//nav-bar 
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-120px";
    }
    prevScrollpos = currentScrollPos;
}
//about-slider
var y = setInterval(function () {
    var img = document.getElementsByName('slider');
    for (var i = 0; i < img.length; i++) {
        if (img[i].checked) {
            var imgNumber = Number((img[i].id).slice(-1));
            var nextImg = imgNumber + 1;
            if (nextImg == 6) {
                nextImg = 1;
            }
            document.getElementById(img[i].id).checked = false;
            document.getElementById("s" + nextImg).checked = true;
            break;
        }
    }
}, 5000);

//faq collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

//////////////TO BE ENABLED/////////////////
// //countdown-timer 


// const deadline = new Date("oct 12, 2020 00:00:00").getTime(); //CHANGE DATE

// function getCountdown() {
//     var x = setInterval(function () {

//         var now = new Date().getTime();
//         var t = deadline - now;
//         var days = Math.floor(t / (1000 * 60 * 60 * 24));
//         var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((t % (1000 * 60)) / 1000);
//         if (days < 10) {
//             days = "0" + days
//         }
//         if (hours < 10) {
//             hours = "0" + hours
//         }
//         if (minutes < 10) {
//             minutes = "0" + minutes
//         }
//         if (seconds < 10) {
//             seconds = "0" + seconds
//         }
//         document.getElementById("day").innerHTML = days;
//         document.getElementById("hour").innerHTML = hours;
//         document.getElementById("minute").innerHTML = minutes;
//         document.getElementById("second").innerHTML = seconds;
//         if (t <= 0) {
//             clearInterval(x);
//             document.getElementById("day").innerHTML = '00';
//             document.getElementById("hour").innerHTML = '00';
//             document.getElementById("minute").innerHTML = '00';
//             document.getElementById("second").innerHTML = '00';
//         }
//     }, 1000);
// }