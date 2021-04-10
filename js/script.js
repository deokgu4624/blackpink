$(document).ready(function(){
    var box = gsap.to("#blackbox2", {scale:15,ease:"bounce.inOut",duration: 3});
    box.pause();
    $("#blackbox2").css("display", "none");
    $("#mainimg").css("display", "none");
    $("#logo2").css("display", "none");
    $("#title").css("display", "none");
    $("#article").css("display", "none");
    $("#article").css("display", "none");
    $("#star").css("display", "none");
    $("#star2").css("display", "none");
    $("#rose").css("display", "none");
    $("#time1").css("display", "none");
    $("#time2").css("display", "none");
    $("#area").css("display", "none");
    $("#play").css("display", "none");

    var x=0;
    function delay(){
        x+=1;
        console.log(x);
        if(x==12){
            clearInterval(timeid);
            $("#container").off();
            $("#blackbox2").css("display", "block");
            $("#mainimg").css("display", "block");
            $("#logo2").css("display", "block");
            $("#title").css("display", "block");
            $("#article").css("display", "block");
            $("#star").css("display", "block");
            $("#star2").css("display", "block");
            $("#rose").css("display", "block");
            $("#time1").css("display", "block");
            $("#time2").css("display", "block");
            $("#area").css("display", "block");

            gsap.fromTo("#title",{autoAlpha: 0}, {autoAlpha: 1, top:"+=1"+"vw", duration: 1, delay: 2});
            gsap.fromTo("#mainimg",{autoAlpha: 0}, {autoAlpha: 1, top:"+=1"+"vw", duration: 1, delay: 2});
            gsap.fromTo("#article",{autoAlpha: 0}, {autoAlpha: 1, top:"+=1"+"vw", duration: 1, delay: 2});
            gsap.fromTo("#star",{autoAlpha: 0, scale:0}, {autoAlpha: 1, scale: 1, ease:"bounce.out", duration: 1, delay: 3, repeat: -1, repeatDelay: 6});
            gsap.fromTo("#star",{scale:1}, {scale: 0, ease: "back.in(1.7)", duration: 1, delay: 5, repeat: -1, repeatDelay: 6});
            gsap.fromTo("#star2",{autoAlpha: 0, scale:0}, {autoAlpha: 1, scale: 1, ease:"bounce.out", duration: 1, delay: 4, repeat: -1, repeatDelay: 6});
            gsap.fromTo("#star2",{scale:1}, {scale: 0, ease: "back.in(1.7)", duration: 1, delay: 6, repeat: -1, repeatDelay: 6});
            gsap.to("body", {backgroundColor: "black", delay: 2});
            gsap.to("#albumbox",{rotation:"360deg", ease:"none", duration: 6, delay: 2, repeat: -1});
            gsap.fromTo("#area",{autoAlpha: 0}, {autoAlpha: 1, duration: 1, delay: 2});
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
    
    var toggle1 = true;
    var toggle2 = true;
    var toggle3 = true;
    var y =0;
    $(".play").css("display", "none");
    $(".pause").css("display", "none");

    $("li").on("mouseenter", showplaybtn);
    $("li").on("mouseleave", removeplaybtn);
    $("li").on("click", changemusic);
    $("li").on("click", playtopause);
    $("li").on("click", showpausebtn);
    

    function showplaybtn(){
        var num = $(this).index()+1;
        $("#play" + num).css("display", "block");
        gsap.fromTo("#play"+num,{scale:0}, {scale: 1, ease:"Bounce.easeOut", duration: 0.5, delay: 0});
    }

    function removeplaybtn(){
        var num = $(this).index()+1;
        gsap.fromTo("#play"+num,{scale:1}, {scale: 0, ease:"Power4.easeIn", duration: 0.5, delay: 0});
    }

    function playtopause(){
        var num = $(this).index()+1;
        $("#play" + num).css("display", "none");
        $(this).off("mouseenter");
        $("li").not(this).on("mouseenter", showplaybtn);
        y= y+1;
        console.log(y);
    }
    
    function showpausebtn(){
        var num = $(this).index()+1;
        $("#pause"+num).css("display", "block");
        gsap.fromTo("#pause"+num,{scale:0}, {scale: 1, ease:"Bounce.easeOut", duration: 0.5, delay: 0});
        $("#pause1, #pause2, #pause3, #pause4, #pause5, #pause6, #pause7, #pause8").not("#pause"+num).css("display", "none");
    }

    function changemusic(){
        var num = $(this).index()+1;
        console.log(this);
        
        if(toggle1 && num == 2){
            $("body").append("<audio id='music2' autoplay src='./music/icecream.mp3'></audio>");
            $("#music1, #music2, #music3, #music4, #music5, #music6, #music7, #music8").not("#music"+num).remove();
            toggle1 = false;
            toggle2 = true;
            toggle3 = true;
        }
        if(toggle2 && num == 5){
            $("body").append("<audio id='music5' autoplay src='./music/lovesickgirls.mp3'></audio>");
            $("#music1, #music2, #music3, #music4, #music5, #music6, #music7, #music8").not("#music"+num).remove();
            toggle1 = true;
            toggle2 = false;
            toggle3 = true;
        }
        if(toggle3 && num == 8){
            $("body").append("<audio id='music8' autoplay src='./music/youneverknow.mp3'></audio>");
            $("#music1, #music2, #music3, #music4, #music5, #music6, #music7, #music8").not("#music"+num).remove();
            toggle1 = true;
            toggle2 = true;
            toggle3 = false;
        }
    }
});

