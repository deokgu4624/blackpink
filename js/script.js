var box = gsap.to("#blackbox2", {scale:15,ease:"bounce.inOut",duration: 3});
box.pause();
$("#blackbox2").css("display", "none");
$("#mainimg").css("display", "none");
$("#logo2").css("display", "none");
$("#logo3").css("display", "none");
$("#article").css("display", "none");
$("#article").css("display", "none");
$("#star").css("display", "none");
$("#star2").css("display", "none");
$("#rose").css("display", "none");

var x=0;
var test=true;
function delay(){
    x+=1;
    console.log(x);
    if(x==12){
        clearInterval(timeid);
        $("#container").off();
        $("#blackbox2").css("display", "block");
        $("#mainimg").css("display", "block");
        $("#logo2").css("display", "block");
        $("#logo3").css("display", "block");
        $("#article").css("display", "block");
        $("#star").css("display", "block");
        $("#star2").css("display", "block");
        $("#rose").css("display", "block");

        gsap.fromTo("#logo2",{autoAlpha: 0}, {autoAlpha: 1, duration: 1, delay: 2});
        gsap.fromTo("#logo3",{autoAlpha: 0}, {autoAlpha: 1, top:"+=1"+"vw", duration: 1, delay: 2});
        gsap.fromTo("#mainimg",{autoAlpha: 0}, {autoAlpha: 1, top:"+=1"+"vw", duration: 1, delay: 2});
        gsap.fromTo("#article",{autoAlpha: 0}, {autoAlpha: 1, top:"+=1"+"vw", duration: 1, delay: 2});
        gsap.fromTo("#star",{autoAlpha: 0, scale:0}, {autoAlpha: 1, scale: 1, ease:"bounce.out", duration: 1, delay: 3, repeat: -1, repeatDelay: 6});
        gsap.fromTo("#star",{scale:1}, {scale: 0, ease: "back.in(1.7)", duration: 1, delay: 5, repeat: -1, repeatDelay: 6});
        gsap.fromTo("#star2",{autoAlpha: 0, scale:0}, {autoAlpha: 1, scale: 1, ease:"bounce.out", duration: 1, delay: 4, repeat: -1, repeatDelay: 6});
        gsap.fromTo("#star2",{scale:1}, {scale: 0, ease: "back.in(1.7)", duration: 1, delay: 6, repeat: -1, repeatDelay: 6});
        gsap.to("body", {backgroundColor: "black", delay: 2});
        gsap.fromTo("#rose",{autoAlpha: 0}, {autoAlpha: 1, top:"+=1"+"vw", duration: 1, delay: 2});
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


