var box = gsap.to("#blackbox2", {scale:15,ease:"bounce.inOut",duration: 3});
box.pause();
$("#blackbox2").css("display", "none");

var x=0;
function delay(){
    x+=1;
    console.log(x);
    if(x==12){
        clearInterval(timeid);
        $("#blackbox2").css("display", "block");
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


