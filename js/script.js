$(document).ready(function(){
    //animation
    var article = $(".article");
    gsap.to(article[0],{display: "block"});
    gsap.fromTo("#main1",{opacity:0, top: "-="+3+"vw"}, {top: "+="+3+"vw", opacity:"70%",ease:"Power3.easeOut", duration:2, delay:.1})
    gsap.fromTo("#main2",{opacity:0, top: "+="+3+"vw"}, {top: "-="+3+"vw", opacity:"70%",ease:"Power3.easeOut", duration:2, delay:.1})
    gsap.fromTo("#main3",{opacity:0, top: "-="+3+"vw"}, {top: "+="+3+"vw", opacity:"65%",ease:"Power3.easeOut", duration:2, delay:.1})
    gsap.fromTo("#title span",{top: "+="+3+"vw"}, {top: 0,ease:"Power3.easeOut", duration:2, delay:.5})
    gsap.fromTo("#area span",{top: "+="+3+"vw"}, {top: 0,ease:"Power3.easeOut", duration:2, delay:.7})
    gsap.to(".nav",{display: "block", delay:1.7});
    gsap.fromTo(".nav",{opacity:0}, {opacity:1, duration:.5, delay:1.7})

    
    $("#nav1").on("click", function(){
        //메인사라짐
        gsap.to("#main1",{top: "+="+3+"vw", opacity:0, ease:"Power3.easeOut", duration:1, delay:.1})
        gsap.to("#main2",{top: "-="+3+"vw", opacity:0, ease:"Power3.easeOut", duration:1, delay:.1})
        gsap.to("#main3",{top: "+="+3+"vw", opacity:0, ease:"Power3.easeOut", duration:1, delay:.1})
        gsap.to("#title span",{opacity:0, ease:"Power3.easeOut", duration:1, delay:.5})
        gsap.to("#area span",{opacity:0, ease:"Power3.easeOut", duration:1, delay:.7})
        gsap.fromTo(".nav",{opacity:1}, {opacity:0, duration:.5, delay:1.5})
        gsap.to(article[0],{display: "none", delay:1.5});
        //다이너마이트 생김
        gsap.to(article[1],{display: "block"});
        gsap.fromTo("#h3_1 span",{top: "+="+3+"vw", opacity:1}, {top: 0, opacity:1, ease:"Power3.easeOut", duration:2, delay:2})
        gsap.fromTo("#h3_2 span",{top: "+="+3+"vw", opacity:1}, {top: 0, opacity:1, ease:"Power3.easeOut", duration:2, delay:2.2})
        gsap.fromTo("#dynamite_1",{opacity:0}, {opacity:1, ease:"Power3.easeOut", duration:2, delay:2.2})
        gsap.fromTo("#dynamiterm",{opacity:0, top: 3+"vw"}, {opacity:"64%", top:6+"vw", ease:"Power3.easeOut", duration:2, delay:2.7})
        gsap.fromTo("#dynamitev",{opacity:0, top: 15+"vw"}, {opacity:"73%", top:18+"vw", ease:"Power3.easeOut", duration:2, delay:2.8})
        gsap.fromTo("#dynamitejin",{opacity:0, top: 50+"vw"}, {opacity:"64%", top:53+"vw", ease:"Power3.easeOut", duration:2, delay:2.5})
        gsap.fromTo("#light span",{top: "+="+3.05+"vw"}, {top: 0,ease:"Power3.easeOut", duration:2, delay:3.2})
        gsap.to(".nav", {opacity:1, duration:.5, delay:3.7})
        //멤버 사라짐
        gsap.to("#members_1 span",{opacity:0 ,ease:"Power3.easeOut", duration:2, delay:.1});
        gsap.to("#v",{top: "-="+3+"vw", opacity:0, ease:"Power3.easeOut", duration:2, delay:.1});
        gsap.to("#jimin",{top: "-="+3+"vw", opacity:0, ease:"Power3.easeOut", duration:2, delay:.1});
        gsap.to("#jungkook",{top: "-="+3+"vw", opacity:0, ease:"Power3.easeOut", duration:2, delay:.1});
        gsap.to("#sugar",{top: "-="+3+"vw", opacity:0, ease:"Power3.easeOut", duration:2, delay:.1});
        gsap.to("#jhope",{top: "-="+3+"vw", opacity:0, ease:"Power3.easeOut", duration:2, delay:.1});
        gsap.to("#jin",{top: "-="+3+"vw", opacity:0, ease:"Power3.easeOut", duration:2, delay:.1});
        gsap.to("#rm",{top: "-="+3+"vw", opacity:0, ease:"Power3.easeOut", duration:2, delay:.1});
        gsap.to("#v_1, #jimin_1, #jungkook_1, #sugar_1, #jhope_1, #jin_1, #rm_1", {opacity:0, ease:"Power3.easeOut", duration:2, delay:.1});
        gsap.to(".nav", {opacity:0, duration:.5, delay:1.5});
        gsap.to(article[2],{display: "none", delay:1.5});
    });
    $("#nav2").on("click", function(){
        //메인사라짐
        gsap.to("#main1",{top: "+="+3+"vw", opacity:0, ease:"Power3.easeOut", duration:1, delay:.1});
        gsap.to("#main2",{top: "-="+3+"vw", opacity:0, ease:"Power3.easeOut", duration:1, delay:.1});
        gsap.to("#main3",{top: "+="+3+"vw", opacity:0, ease:"Power3.easeOut", duration:1, delay:.1});
        gsap.to("#title span",{opacity:0, ease:"Power3.easeOut", duration:1, delay:.5});
        gsap.to("#area span",{opacity:0, ease:"Power3.easeOut", duration:1, delay:.7});
        gsap.fromTo(".nav",{opacity:1}, {opacity:0, duration:.5, delay:1.5});
        gsap.to(article[0],{display: "none", delay:1.5});
        //다이너마이트 사라짐;;
        gsap.to("#h3_1 span", {opacity:0, ease:"Power3.easeOut", duration:2, delay:.1});
        gsap.to("#h3_2 span", {opacity:0, ease:"Power3.easeOut", duration:2, delay:.1});
        gsap.to("#dynamite_1", {opacity:0, ease:"Power3.easeOut", duration:2, delay:.1});
        gsap.to("#dynamiterm",{top: "-="+3+"vw",opacity:0, ease:"Power3.easeOut", duration:2, delay:.5});
        gsap.to("#dynamitev",{top: "-="+3+"vw",opacity:0, ease:"Power3.easeOut", duration:2, delay:.6});
        gsap.to("#dynamitejin",{top: "-="+3+"vw",opacity:0, ease:"Power3.easeOut", duration:2, delay:.7});
        gsap.to("#light span",{opacity:0, ease:"Power3.easeOut", duration:2, delay:.1});
        gsap.to(".nav",{opacity:1}, {opacity:0, duration:.5, delay:1.5});
        gsap.to(article[1],{display: "none", delay:1.5});
        //멤버 생김
        gsap.to(article[2],{display: "block"});
        gsap.fromTo("#members_1 span",{top: "+="+3+"vw", opacity:1}, {top: 0, opacity:1, ease:"Power3.easeOut", duration:2, delay:2.5});
        gsap.fromTo("#v",{top: 3+"vw", opacity:0, scale:0.8}, {top: 3+"vw", opacity:"62%", scale:1, ease:"Power3.easeOut", duration:2, delay:2});
        gsap.fromTo("#jimin",{top: 11+"vw", opacity:0, scale:0.8}, {top: 11+"vw", opacity:"62%", scale:1, ease:"Power3.easeOut", duration:2, delay:2});
        gsap.fromTo("#jungkook",{top: 39+"vw", opacity:0, scale:0.8}, {top: 39+"vw", opacity:"62%", scale:1, ease:"Power3.easeOut", duration:2, delay:2});
        gsap.fromTo("#sugar",{top: 66+"vw", opacity:0, scale:0.8}, {top: 66+"vw", opacity:"62%", scale:1, ease:"Power3.easeOut", duration:2, delay:2});
        gsap.fromTo("#jhope",{top: 83+"vw", opacity:0, scale:0.8}, {top: 83+"vw", opacity:"62%", scale:1, ease:"Power3.easeOut", duration:2, delay:2});
        gsap.fromTo("#jin",{top: 97+"vw", opacity:0, scale:0.8}, {top: 97+"vw", opacity:"62%", scale:1, ease:"Power3.easeOut", duration:2, delay:2});
        gsap.fromTo("#rm",{top: 116+"vw", opacity:0, scale:0.8}, {top: 116+"vw", opacity:"62%", scale:1, ease:"Power3.easeOut", duration:2, delay:2});
        gsap.fromTo("#v_1, #jimin_1, #jungkook_1, #sugar_1, #jhope_1, #jin_1, #rm_1", {opacity:0}, {opacity:1, ease:"Power3.easeOut", duration:2, delay:3});
        gsap.to(".nav", {opacity:1, duration:.5, delay:3});
    });
    //rollig lp
    var rolling = gsap.to("#albumbox",{rotation:"360deg", ease:"none", duration: 2, repeat: -1});
    var movelp = gsap.to("#lp",{left:"17vw", ease:"Power3.easeOut", duration: 1});
    rolling.pause();
    movelp.pause();

    //playlist

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

