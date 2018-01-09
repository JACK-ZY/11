/**
 * Created by Administrator on 2017/3/11.
 */

//====首页导航展示======
window.onscroll = function(){
    var guanyukuang=document.getElementById("guanyukuang");
    var gudingheader = document.getElementById( "gudingheader" );
    var gudingheaderul = document.getElementById( "gudingheaderul" );
    var shouyedaowomen= document.getElementById("shouyedaowomen");

    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if( t >= 122 ) {

        guanyukuang.style.position="fixed";
        // guanyukuang.style.margin="auto";
        guanyukuang.style.right="0";
        guanyukuang.style.left="0";
        guanyukuang.style.top="38px";
        guanyukuang.style.zIndex="1";
        gudingheaderul.style.top="33px";
        shouyedaowomen.style.marginTop="5px"


        gudingheader.style.position="fixed";
        // gudingheader.style.position.top="0";
        gudingheader.style.right="0";
        gudingheader.style.left="0";
        gudingheader.style.top="0";
        gudingheader.style.zIndex="2";
        // gudingheaderul.style.margin.top="5px"

    } else {
        guanyukuang.style.position="relative";
        // guanyukuang.style.margin="auto";
        guanyukuang.style.right="0";
        guanyukuang.style.left="0";
        guanyukuang.style.top="0";
        guanyukuang.style.zIndex="1";
        shouyedaowomen.style.marginTop="0px"


        gudingheader.style.position="relative";
        // gudingheader.style.position.top="0";
        gudingheader.style.right="0";
        gudingheader.style.left="0";
        gudingheader.style.top="0px";
        gudingheader.style.zIndex="2";

    }
}









function xianshikuang(x) {
        var guanyukuang=document.getElementById("guanyukuang");
        var guanlikuang=document.getElementById("guanlikuang");
        var yanjiuyuankuang=document.getElementById("yanjiuyuankuang");
        var qiguankuang=document.getElementById("qiguankuang");
        var hezuokuang=document.getElementById("hezuokuang");
        var youqingkuang=document.getElementById("youqingkuang");

        if(x==11){

            guanyukuang.style.display="block";
        }
        if(x==12) {
            guanyukuang.style.display="none";
        }
        if(x==21){
            guanlikuang.style.display="block";
        }
        if(x==22) {
            guanlikuang.style.display="none";
        } if(x==31){
            yanjiuyuankuang.style.display="block";
        }
        if(x==32) {
            yanjiuyuankuang.style.display="none";
        } if(x==41){
            qiguankuang.style.display="block";
        }
        if (x==42){
            qiguankuang.style.display="none";
        }
        if (x==51){
            hezuokuang.style.display="block";
            youqingkuang.style.display="none";

        }
        if (x==61){
            youqingkuang.style.display="block";
            hezuokuang.style.display="none";

        }
    }



// ========上部展示图片效果====
var curIndex=0;
//时间间隔 单位毫秒
var timeInterval=2000;
var arr=new Array();
arr[0]="mydemoimg/20140613153839_57878.jpg";
arr[1]="mydemoimg/20160714120221_99591.jpg";
arr[2]="mydemoimg/20160714153744_60804.jpg";
arr[3]="mydemoimg/20161108112505_75591.jpg";
arr[4]="mydemoimg/20161216141123_47914.jpg";
arr[5]="mydemoimg/20170112104938_70673.jpg";
var t=setInterval(changeImg,timeInterval);
function changeImg()
{var qietu1=document.getElementById("qietu1");


    if (curIndex==arr.length-1)
    {
        curIndex=0;
    }
    else
    {
        curIndex+=1;
        
    }
    qietu1.src=arr[curIndex];}

function qianhou(x) {
    var qietu1=document.getElementById("qietu1");
    var xiangqian=document.getElementById("xiangqian");
    var houtui=document.getElementById("houtui");
    var xiangqiantu=document.getElementById("xiangqiantu");
    var houtuitu=document.getElementById("houtuitu");
    if(x==1){
    if (curIndex==0){
    qietu1.src=arr[5];
         curIndex=5;
        t=clearInterval(t);
    }
    else{
    qietu1.src=arr[curIndex-1];
    curIndex=curIndex-1;
    t=clearInterval(t);
    }}

if (x==2){if (curIndex==5){
    qietu1.src=arr[0];
    curIndex=0;
    t=clearInterval(t);}
else
{   qietu1.src=arr[curIndex+1];
    curIndex=curIndex+1;
    t=clearInterval(t);
}}
if (x==3){
    xiangqiantu.style.opacity = "0.9";
    xiangqiantu.style.filter = "alpha(opacity=90%)";
    houtuitu.style.opacity = "0.9";
    houtuitu.style.filter = "alpha(opacity=90%)";
    t=clearInterval(t);
    qietu1.src=arr[curIndex];
}
    if(x==4) {
        xiangqiantu.style.opacity = "0.2";
        xiangqiantu.style.filter = "alpha(opacity=20%)";
        houtuitu.style.opacity = "0.2";
        houtuitu.style.filter = "alpha(opacity=20%)";
        t=setInterval(changeImg,timeInterval);
    }
}




// 下面的核心业务图片循环和切换

// var aa1=0,aa3=0,aa4=1,aa5=0,aa6,aa;
// $(document).ready(function () {
//     alert("22222");
//     y=($("#zu01").outerWidth(true));
//     var aa6=-y;
//     $("#hexintupianul li").each(function () {
//         $(this).css({"left":aa6+"px","top":0});
//         aa6+=y;
//     });
//     $("#hexintupianzu").mouseenter(function () {
//         clearInterval(aa2);
//     }).mouseleave(function () {
//         aa2=setInterval("pp()",100);
//     });
// });
//
// var aa2=setInterval("pp()",100);
// function pp1(x) {
//     clearInterval(aa2);
//     aa5=x;
//     if (x!=1) aa1 =-10;else aa1=10;
//     pp(aa5);
// }
// function pp(x) {
//     if (aa3==10) {
//         if (x != 1) {
//             aa = $("#hexintupianul li:first").clone();
//             aa6 = $("#hexintupianul li:last").position();
//             $("#hexintupianul li:last").after(aa);
//             $("#hexintupianul li:last").css("left", aa6.left + y + "px");
//             $("#hexintupianul li:first").remove();
//         }
//         else {
//             aa = $("#hexintupianul li:last").clone();
//             aa6 = $("#hexintupianul li:first").position();
//             $("#hexintupianul li:first").before(aa);
//             $("#hexintupianul li:first").css("left", aa6.left - y + "px");
//             $("#hexintupianul li:last").remove();}
//
//         aa3 = 0; }
//
//
//     $("#hexintupianul li").each(function () {
//         aa6=$(this).position();
//         $(this).css("left",aa6.left+aa1+"px");
//     });
//     if (x!=1) aa1 =-10;else aa1=10;
//
//     aa3++;}























//
// var curInde=0;
// //时间间隔 单位毫秒
// var timeInterva=2000;
// var a1=0;var a11=0;
// var w=setInterval("pp(0)",timeInterva);
//
// function pp(x) {
//     var a2=x;
//     if (a2==3) clearTimeout(w);
//     for (var i = 0; i < 6; i++) {
//         var a3 = ("zu0" + (i + 1)).toString();
//         var a4 = document.getElementById(a3).style.marginLeft;
//         if (a2==2 || a2==0) a4 = (parseInt(a4) - 32).toString() + "px";
//         if (a2==1) a4 = (parseInt(a4) + 32).toString() + "px";
//         document.getElementById(a3).style.marginLeft =a4;
//     }
//     a1+=1;
//     if (a1>4) {
//         a1=0;a11+=1;
//         var a3 = ("zu0" + (a11)).toString();
//         if (a2==0) document.getElementById(a3).style.marginLeft="800px";
//         if (a2==1) {
//             //a4=document.getElementById("zuo1").style.marginLeft;
//             //if (a4==)
//             document.getElementById(a3).style.marginLeft="-160px";
//         }
//         if (a2==2) {
//             document.getElementById(a3).style.marginLeft="800px";
//         }
//     }
//     if(a11>5) a11=0;
// }
//
//
//     //
    // var zu01 = document.getElementById("zu01");
    //  var zu02 = document.getElementById("zu02");
    // var zu03 = document.getElementById("zu03");
    // var zu04 = document.getElementById("zu04");
    // var zu05 = document.getElementById("zu05");
    // var zu06 = document.getElementById("zu06");
    // var zuoanniu = document.getElementById("zuoanniu");
    // var youanniu = document.getElementById("youanniu");
    //
    //
    // switch(curInde)
    // {
    //     case 0:
    //         // alert("1111");
    //         zu06.style.display="block";
    //         // zu01.style.right = "0px";
    //         zu01.style.display="none";
    //         // zu02.style.right = "0px";
    //         // zu03.style.right = "0px";
    //         // zu04.style.right = "0px";
    //         // zu05.style.right = "0px";
    //         // zu06.style.right = "0";
    //         curInde++;
    //         break;
    //     case 1:
    //         // alert("22");
    //
    //         zu01.style.right = -160 * (5 - curInde) + "px";
    //         zu02.style.display="none";
    //         zu01.style.display="block";
    //         zu02.style.right = -160 * (5 - curInde) + "px";
    //         zu03.style.right =  "160px";
    //         zu04.style.right =  "160px";
    //         zu05.style.right =  "160px";
    //         zu06.style.right =  "160px";
    //         curInde++;
    //         break;case 2:
    //     // alert("33");
    //
    //     zu01.style.right = -160 * (5 - curInde) + "px";
    //     zu02.style.right = -160 * (5 - curInde) + "px";
    //     zu03.style.display="none";
    //     zu02.style.display="block";
    //     zu03.style.right = "320px";
    //     zu04.style.right =  "320px";
    //     zu05.style.right =  "320px";
    //     zu06.style.right =  "320px";
    //     curInde++;
    //     break;case 3:
    //     // alert("44");
    //
    //     zu01.style.right = -160 * (5 - curInde) + "px";
    //     zu02.style.right = -160 * (5 - curInde) + "px";
    //     zu03.style.right = -160 * (5 - curInde) + "px";
    //     zu04.style.display="none";
    //     zu03.style.display="block";
    //     zu04.style.right = -160 * (5 - curInde) + "px";
    //     zu05.style.right =  "480px";
    //     zu06.style.right =  "480px";
    //     curInde++;
    //     break;
    //     case 4:
    //         // alert("55");
    //
    //         zu01.style.right = -160 * (5 - curInde) + "px";
    //         zu02.style.right = -160 * (5 - curInde) + "px";
    //         zu03.style.right = -160 * (5 - curInde) + "px";
    //         zu04.style.right = -160 * (5 - curInde) + "px";
    //         zu05.style.display="none";
    //
    //         zu04.style.display="block";
    //         zu05.style.right = -160 * (5 - curInde) + "px";
    //         zu06.style.right =  "640px";
    //         curInde++;
    //         break;
    //     default:
    //         // alert("6");
    //
    //         zu01.style.right = "0px";
    //         zu02.style.right = "0px";
    //         zu03.style.right = "0px";
    //         zu04.style.right = "0px";
    //         zu05.style.right = "0px";
    //         zu06.style.display="none";
    //
    //         zu05.style.display="block";
    //         zu06.style.right = "0px";
    //
    //         curInde = 0;
    //
    // }
    //

    // if(typeof(eval("document.all."+x))!= "undefined"){
    //     switch (x){
    //         // case 11:
    //         //     zuoanniu.style.opacity = "0.8";
    //         //     zuoanniu.style.filter = "alpha(opacity=80%)";
    //         //     break;
    //         // case 12:
    //         //     zuoanniu.style.opacity = "0.5";
    //         //     zuoanniu.style.filter = "alpha(opacity=50%)";
    //         //     break;
    //         case 13:
    //             curInde ++;
    //             w=clearInterval(w);
    //             break;
    //
    //         // case 21:
    //         //     youanniu.style.opacity = "0.8";
    //         //     youanniu.style.filter = "alpha(opacity=80%)";
    //         // break;
    //         // case 22:
    //         //     youanniu.style.opacity = "0.5";
    //         //     youanniu.style.filter = "alpha(opacity=50%)";
    //         //     break;
    //         case 23:
    //             curInde --;
    //             w=clearInterval(w);
    //             break;
    //
    //     }
    // }







    // var zu03=document.getElementById("zu03);
    // var zu04=document.getElementById("zu04");
    // var zu05=document.getElementById("zu05");
    // var zu06=document.getElementById("zu06");
    // if (curInde < 5)
    // {if (curInde==0){
    //     zu01.style.right = -160 * (5 - curInde) + "px";
    //          zu02.style.right = "160px";
    //
    //     // zu03.style.right=-160*(5-curInde)+"px";
    //         // zu04.style.right=-160*(5-curInde)+"px";
    //         // zu05.style.right=-160*(5-curInde)+"px";
    //         // zu06.style.right=-160*(5-curInde)+"px";
    //
    //     }

    //
    //
    //     if (curInde=2){
    //         zu01.style.right = -160 * (5 - curInde) + "px";
    //         zu02.style.right = -160 * (5 - curInde) + "px";
    //
    //     }  if (curInde=2){
    //     zu01.style.right = -160 * (5 - curInde) + "px";
    //     zu02.style.right = -160 * (5 - curInde) + "px";
    //
    // }  if (curInde=2){
    //     zu01.style.right = -160 * (5 - curInde) + "px";
    //     zu02.style.right = -160 * (5 - curInde) + "px";
    //
    // }  if (curInde=2){
    //     zu01.style.right = -160 * (5 - curInde) + "px";
    //     zu02.style.right = -160 * (5 - curInde) + "px";
    //
    // }
    //
    // }
    //     else {
    //         zu01.style.right = "0px";
    //         curInde = 0;
    //     }

    //}


