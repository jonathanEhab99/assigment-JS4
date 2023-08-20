let baroffset = $(".sidebar").innerWidth()
$(".sidebar-toggler").on("click", function () {
    $(".sidebar").animate({ left: `0px` }, 500)
    $(".sidebar-toggler").animate({ left: `${baroffset + 5}px` }, 500)

})
$(".sidebar-closer").on("click", function () {
    $(".sidebar").animate({ left: `-${baroffset}px` }, 500)
    $(".sidebar-toggler").animate({ left: `5px` }, 500)
    console.log("done")
})

$("#homebtn").on("click", function () {
    let scrollvalue = $(`.home`).offset().top
    $('html,body').animate({ scrollTop: scrollvalue }, 700)
})
$(".details-btn").on("click", function () {
    let scrollvalue = $(`.details`).offset().top
    $('html,body').animate({ scrollTop: scrollvalue }, 700)
})
$(".duration-btn").on("click", function () {
    let scrollvalue = $(`.duartion`).offset().top
    $('html,body').animate({ scrollTop: scrollvalue }, 700)
})
$(".contact-btn").on("click", function () {
    let scrollvalue = $(`.contact-us`).offset().top
    $('html,body').animate({ scrollTop: scrollvalue }, 700)
})
var countDownDate = new Date("Jan 4, 2024 12:00:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    $(".days").html(`${days}d`)
    $(".hours").html(`${hours}h`)
    $(".minutes").html(`${minutes}m`)
    $(".seconds").html(`${seconds}s`)
    if (distance < 0) {
        clearInterval(x);
    }
}, 1000);
let mydropdown = $(".singer>h2")
let myflag = false
let oldid = 0
mydropdown.on("click", function (e) {
    if (myflag == false) {
        let id = e.target.id
        $(".bg-singer").eq(id - 1).slideDown()
        myflag = true
    }
    else if (myflag == true) {
        let id = e.target.id
        $(".bg-singer").eq(id - 1).slideUp()
        myflag = false
    }
})
let inputvalue
$(".mymessage").on("input", function (e) {
    inputvalue = e.target.value
    remainingchar = 100 - inputvalue.length
    console.log(remainingchar)
    $(".remainingchar").html(remainingchar)
    if(remainingchar<0){
        $(".remainingchar").html("you have exceeded your character limit")
        $(".fs-6").html("")
    }
})