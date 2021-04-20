$(document).ready(function(){
    var rolling = gsap.to("#albumbox",{rotation:"360deg", ease:"none", duration: 4, repeat: -1});
    var movelp = gsap.to("#lp",{left:"17vw", ease:"Power3.easeOut", duration: 0.5});
    rolling.pause();
    movelp.pause();
    $("#mainimg").css("display", "none");
    $("#logo2").css("display", "none");
    $("#title").css("display", "none");
    $("#article").css("display", "none");
    $("#article").css("display", "none");
    $("#area").css("display", "none");
    $("#play").css("display", "none");
    $("#mainimg").css("display", "block");
    $("#logo2").css("display", "block");
    $("#title").css("display", "block");
    $("#article").css("display", "block");
    $("#area").css("display", "block");

    
    var _this;
    var check=0;

    $(".play").css("display", "none");
    $(".pause").css("display", "none");

    $("li").on("mouseenter", showplaybtn);
    $("li").on("mouseleave", removeplaybtn);
    $("li").on("click", playtopause);
    

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
        $("#pause"+num).css("display", "block");
        gsap.fromTo("#pause"+num,{scale:0}, {scale: 1, ease:"Bounce.easeOut", duration: 0.5, delay: 0});
        $(".pause").not("#pause"+num).css("display", "none");
        $(".play").not("#play"+num).css("display", "none");
        $(this).off("mouseenter");
        $(this).off("mouseleave");
        $("li").not(this).on("mouseenter", showplaybtn);
        $("li").not(this).on("mouseleave", removeplaybtn);
        rolling.play();
        movelp.play();
        //트랙 제어
        if(num==1){track1.play();track2.load();track3.load();track4.load();track5.load();track6.load();track7.load();track8.load()}else if(num==2){track1.load();track2.play();track3.load();track4.load();track5.load();track6.load();track7.load();track8.load()}else if(num==3){track1.load();track2.load();track3.play();track4.load();track5.load();track6.load();track7.load();track8.load()}else if(num==4){track1.load();track2.load();track3.load();track4.play();track5.load();track6.load();track7.load();track8.load()}else if(num==5){track1.load();track2.load();track3.load();track4.load();track5.play();track6.load();track7.load();track8.load()}else if(num==6){track1.load();track2.load();track3.load();track4.load();track5.load();track6.play();track7.load();track8.load()}else if(num==7){track1.load();track2.load();track3.load();track4.load();track5.load();track6.load();track7.play();track8.load()}else if(num==8){track1.load();track2.load();track3.load();track4.load();track5.load();track6.load();track7.load();track8.play()}
        if(_this == this){
            console.log("clickagianfuck");
            check++;
            console.log(check);
            rolling.pause();
            if(num==1){track1.pause()}else if(num==2){track2.pause()}else if(num==3){track3.pause()}else if(num==4){track4.pause()}else if(num==5){track5.pause()}else if(num==6){track6.pause()}else if(num==7){track7.pause()}else if(num==8){track8.pause()}
            if(check%2==0){
                $("#pause"+num).css("display", "block");
                $("#play"+num).css("display", "none");
                gsap.fromTo("#pause"+num,{scale:0}, {scale: 1, ease:"Bounce.easeOut", duration: 0.5, delay: 0});
                rolling.play();
                if(num==1){track1.play()}else if(num==2){track2.play()}else if(num==3){track3.play()}else if(num==4){track4.play()}else if(num==5){track5.play()}else if(num==6){track6.play()}else if(num==7){track7.play()}else if(num==8){track8.play()}
            }else{
                $("#pause"+num).css("display", "none");
                $("#play"+num).css("display", "block");
                gsap.fromTo("#play"+num,{scale:0}, {scale: 1, ease:"Bounce.easeOut", duration: 0.5, delay: 0});
                rolling.pause();
                if(num==1){track1.pause()}else if(num==2){track2.pause()}else if(num==3){track3.pause()}else if(num==4){track4.pause()}else if(num==5){track5.pause()}else if(num==6){track6.pause()}else if(num==7){track7.pause()}else if(num==8){track8.pause()}
            }
        }else{
            check=0;
            
        }
        _this = this;
    }
    var track1 = new Audio("./music/dynamite.mp3")
    var track2 = new Audio("./music/makeitright.mp3")
    var track3 = new Audio("./music/dna.mp3")
    var track4 = new Audio("./music/lifegoeson.mp3")
    var track5 = new Audio("./music/mikrokosmos.mp3")
    var track6 = new Audio("./music/fakelove.mp3")
    var track7 = new Audio("./music/micdrop.mp3")
    var track8 = new Audio("./music/untoldtruth.mp3")
    track1.loop=true;track2.loop=true;track3.loop=true;track4.loop=true;track5.loop=true;track6.loop=true;track7.loop=true;track8.loop=true;
    track1.volume=0.2;track2.volume=0.2;track3.volume=0.2;track4.volume=0.2;track5.volume=0.2;track6.volume=0.2;track7.volume=0.2;track8.volume=0.2;
    
});

