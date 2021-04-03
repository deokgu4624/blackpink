var box = gsap.to("#blackbox2", {scale:15,ease:"bounce.inOut",duration: 3});
box.pause();
$("#blackbox2").css("display", "none");
$("#mainimg").css("display", "none");
$("#logo2").css("display", "none");
$("#logo3").css("display", "none");

var x=0;
var test=true;
function delay(){
    x+=1;
    console.log(x);
    if(x==12){
        clearInterval(timeid);
        $("#blackbox2").css("display", "block");
        $("#mainimg").css("display", "block");
        $("#logo2").css("display", "block");
        $("#logo3").css("display", "block");
        $("#container").off();

        gsap.fromTo("#logo2",{autoAlpha: 0}, {autoAlpha: 1, duration: 1, delay: 2});
        gsap.fromTo("#logo3",{autoAlpha: 0}, {autoAlpha: 1, duration: 1, delay: 2});
        gsap.fromTo("#mainimg",{autoAlpha: 0}, {autoAlpha: 1, duration: 1, delay: 2});
        box.play();
        
    }
}
function time(){
    timeid = setInterval(delay, 100);
}

$("#container").mouseenter(function(){
    console.log("in");
    time();
});

$("#container").mouseleave(function(){
    console.log("out");
    clearInterval(timeid);
    x=0;
});


