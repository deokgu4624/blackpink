var circle = document.getElementById("whitecircle");
var redbox = document.getElementById("redbox");
var title = document.getElementById("title");
var test = document.getElementsByClassName("test");
var x = 1;
var s = Boolean(true);

function forward(){
    test[0].style.animationName = "test"+x;
    test[0].style.animationPlayState = "paused";
    setTimeout(running, 1000);
    x+=1;
    s=false;
    console.log(x);
    setTimeout(changeboolean, 2000);
}

function back(){
    x-=1;
    test[0].style.animationName = "test"+"-"+x;
    test[0].style.animationPlayState = "paused";
    setTimeout(running, 1000);
    s=false;
    console.log(x);
    setTimeout(changeboolean, 2000);
}
function running(){
    test[0].style.animationPlayState = "running";
}
function changeboolean(){
    s=true;
}

$(window).bind('wheel', function(e){
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        // scroll up
        console.log("스크롤 위로");
        console.log(e);
        if(x<13 && s==true){
            forward();
        }
    }
    else {
        // scroll down
        console.log("스크롤 아래로");
        if(x>1 && s==true){
            back();
        }
    }
});
// //랜덤 이미지
// var front_image = document.getElementsByClassName("front-image");
// var i;
// var j;
// var num = [];
// for(i=0; i<front_image.length; i++){
//     num[i] = Math.floor(Math.random()*front_image.length)+1;
//     console.log(num);
//     front_image[i].id = "front-image"+num[i];
//     for(j=0; j<num.length-1; j++){
//         console.log("j"+j);
//         if(num[i]===num[j]){
//             console.log("same");
//             num.pop();
//             i--;
//         }
//     }
// }
// //이미지 이동
// var targetPos;
// function moveleft(){    
//     for(i=0; i<front_image.length; i++){
//         var targetPos = front_image[i].getBoundingClientRect().left;
//         targetPos -= 1;
//         front_image[i].style.left = (targetPos/window.innerWidth)*100 + "vw";
//         if((targetPos/window.innerWidth)*100<-320){
//             front_image[i].style.left = 100 + "vw";
//         }
//     }
//     console.log(front_image[0].getBoundingClientRect().left)
// }

// setInterval(moveleft, 1000/10);


// var t;
// var l;
// var result;
// var _result;
// for(t = 0; t<3; t++){
//     result = Math.floor(Math.random()*10)+1;
//     // console.log("Top:"+result+"vw");
//     if(Math.sqrt(Math.pow(result-_result, 2))<5){
//         t--;
//     }else{
//         front_image[t].style.top = result + "vw";
//         _result = result;
//         // console.log(result);
//     }
// }

// for(l = 0; l<3; l++){
//     result = Math.floor(Math.random()*100)+1;
//     console.log("Left:"+result+"vw");
//     if(Math.sqrt(Math.pow(result-_result, 2))<20){
//         l--;
//     }else{
//         front_image[l].style.left = result + "vw";
//         _result = result;
//         console.log(result);
//     }
// }



