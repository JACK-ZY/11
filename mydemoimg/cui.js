/*
         ╭──╮╭──╮╭─╮  ╭─╮  TM
         │╭─╯│╭╮│╰╮│  ╰╮│ 
         │╰─╮│╰╯│  ││    ││  
         ╰─╮││╭╮│  ││    ││  
         ╭─╯││╰╯│╭╯╰╮╭╯╰╮
         ╰──╯╰──╯╰──╯╰──╯
                         
      Web: www.5811.com.cn  Tel: 4006-120-950
  
*/

$(function(){
  //动画效果弹出菜单
	$(".MENUS li").hover(function(){           
		$(this).addClass("ok").find("dl").stop(true,true).slideUp(0).slideDown(300);
	},function(){
    $(".ok").find("dl").stop(true,true).slideUp(200);
		$(this).removeClass("ok");
	});
  
  //无动画弹出菜单
	$(".MENU li,.MENU_MY").hover(function(){           
		$(this).addClass("ok");
	},function(){
		$(this).removeClass("ok");
	});
  
  //当前显示导航
      $('.HOTTOP li').mouseover(function(){
          $(this).parent('ul').find('.ok').removeClass('ok');
          $(this).addClass('ok');
          if(!$(this).next('li').text()){
              $(this).addClass('end');
          }
      });
      
  // 折叠菜单   
  $('.SLIDE h3').click(function(){
      var $nn=$(this).hasClass('ok');
      if($nn){
           $(this).removeClass('ok');
           $(this).next('ul').addClass('dn');
      }
      else
      {
           $(this).addClass('ok');
           $(this).next('ul').removeClass('dn');
      }
  });
  
  // 折叠菜单   
  $('.close').click(function(){
      $("#weixintop").hide();
  });

	$(".SLIDE h3").hover(function(){
		$(this).addClass("ok_bg");
	},function(){
		$(this).removeClass("ok_bg");
	});

// 动画折叠菜单

      $('.SLIDES h3').mouseover(function(){
          qq=$(this).hasClass('ok');
          if(!qq) $('.SLIDES .ok').removeClass('ok').next('ul').stop(true,true).hide(600,"linear");
          if(!qq) $(this).addClass('ok').next('ul').show(600,"linear");

      });

     //折叠菜单
			$('.SLIDES2 li').mouseover(function(){
          if(!$(this).hasClass('hover')){
              $(this).parent('ul').find('.hover').removeClass('hover').find('.s2').slideUp(300);
              $(this).addClass('hover').find('.s2').stop(true).slideDown(300);
          }

			});
  
  // 选项卡 鼠标经过切换
  $(".TAB li").mousemove(function(){
    var $vv=$(this).parent(".TAB").attr("id");
	  $($vv).hide();
	  $(this).parent(".TAB").find("li").removeClass("hover");
	  var xx=$(this).parent(".TAB").find("li").index(this);
	  $($vv).eq(xx).show();
	  $(this).addClass("hover");
  });

  // 选项卡 鼠标点击
  $(".TAB_CLIKE li").click(function(){
    var $vv=$(this).parent(".TAB_CLIKE").attr("id");
	  $($vv).hide();
	  $(this).parent(".TAB_CLIKE").find("li").removeClass("hover");
	  var xx=$(this).parent(".TAB_CLIKE").find("li").index(this);
	  $($vv).eq(xx).show();
	  $(this).addClass("hover");
  });

  // 滚动到指定位置
    $('.NV_H a').click(function(){
        hh=$(this).attr('rel')*1;
        id=$(this).attr('href');
        num=$(id).offset().top;
        if(hh) num=num+hh;
        $("html,body").animate({scrollTop: num}, 1000);
        return false;
    });

  // 大图轮换
    
});

//打印
function doPrint() { 
bdhtml=window.document.body.innerHTML; 
sprnstr="<!--startprint-->"; 
eprnstr="<!--endprint-->"; 
prnhtml=bdhtml.substr(bdhtml.indexOf(sprnstr)+17); 
prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr)); 
window.document.body.innerHTML=prnhtml; 
window.print(); 
}

//复制链接
function copyCode(){ 
    var testCode=this.location.href;
    if(copy2Clipboard(testCode)!=false){ 
        alert("链接已成功复制，你可以使用Ctrl+V贴到需要的地方去了哦！"); 
    } 
} 
copy2Clipboard=function(txt){ 
    if(window.clipboardData){ 
        window.clipboardData.clearData(); 
        window.clipboardData.setData("Text",txt); 
    } 
    else if(navigator.userAgent.indexOf("Opera")!=-1){ 
        window.location=txt; 
    } 
    else if(window.netscape){ 
        try{ 
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
        } 
        catch(e){ 
            alert("您的firefox安全限制限制您进行剪贴板操作，请打开'about:config'将signed.applets.codebase_principal_support'设置为true'之后重试，相对路径为firefox根目录/greprefs/all.js"); 
            return false; 
        } 
        var clip=Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard); 
        if(!clip)return; 
        var trans=Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable); 
        if(!trans)return; 
        trans.addDataFlavor('text/unicode'); 
        var str=new Object(); 
        var len=new Object(); 
        var str=Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString); 
        var copytext=txt;str.data=copytext; 
        trans.setTransferData("text/unicode",str,copytext.length*2); 
        var clipid=Components.interfaces.nsIClipboard; 
        if(!clip)return false; 
        clip.setData(trans,null,clipid.kGlobalClipboard); 
    } 
}

function AutoResizeImage(maxWidth,maxHeight,objImg){
var img = new Image();
img.src = objImg.src;
var hRatio;
var wRatio;
var Ratio = 1;
var w = img.width;
var h = img.height;
wRatio = maxWidth / w;
hRatio = maxHeight / h;
if (maxWidth ==0 && maxHeight==0){
Ratio = 1;
}else if (maxWidth==0){//
if (hRatio<1) Ratio = hRatio;
}else if (maxHeight==0){
if (wRatio<1) Ratio = wRatio;
}else if (wRatio<1 || hRatio<1){
Ratio = (wRatio<=hRatio?wRatio:hRatio);
}
if (Ratio<1){
w = w * Ratio;
h = h * Ratio;
}
objImg.height = h;
objImg.width = w;
}

//收藏网站
function addfavor(url,title) {
    if(layer.confirm("网站名称："+title+"\n网址："+url+"\n确定添加收藏?")){
        var ua = navigator.userAgent.toLowerCase();
        if(ua.indexOf("msie 8")>-1){
            external.AddToFavoritesBar(url,title,'');//IE8
        }else{
            try {
                window.external.addFavorite(url, title);
            } catch(e) {
                try {
                    window.sidebar.addPanel(title, url, "");//firefox
                } catch(e) {
                    layer.alert("加入收藏失败，请使用Ctrl+D进行添加");
                }
            }
        }
    }
    return false;
}