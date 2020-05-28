/* ..                                                              
                              .    .@@@@@@@@@@@@@@@@@@@@@@@O.    .                        
                             =@@@@@@@OOOOOOOOOOOOOOOOOOOOOO@@@@@@@.                       
                       @@@@@@@OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO@@@@^                     
                   @@@@@OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO@@@@@@O                 
                       @@@@@@@OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO@@@@             
                    .@@OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO@@.          
                   @@OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO@@@@OO@@.        
                .@@OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO@@@@@@^      
              =@@OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO@@@@`..      
              =@@OOOOOOOOOOOOOOOOOOOOOOOO@@@@@@OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO@@.        
            .]/@@OOOOOOOOOOOOOOOOOOOOOOO@@@@@@@OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO@@]]`      
        ,[\@@@@OOOOOOOOOOOOOOOOOOOOOOO@@@@OOOOOOOOOOOO@@@@OOOOOOOOOOOOOOOOOOOOOOO@@@      
          =@@OOOOOOOOOOOOOOOOOOOOOOOOO@@@OOOOOOOOOOOOOOOOO@@OOOOOOOOOOOOOOOOOOOOO@@^      
          =@@OOOOOOOOOOOOOOOOOOOOOOO@@OOOOOOOOOOOOOOOOOOOOOO@@OOOOOOOOOOOOOOOOOOO@@^      
 ..   @@@@@OOOO@@OOOOOOOOOOOOOOOOOOO@@OOOOOOOOOOOOOOO@@@@@@@@@OOOOOOOOOOOOOOOOOOOOO@@^    
 .@@@@OOOOOO@@@OOOOOOOOOOOOOOOOOOOOO@@OOOOOOOOOOOOO@@@OOOO@@@@OOOO@@@OOOOOOOOOOOOOO@@^    
   .@@@@@@@@@OOOOOOOOOOOOOOOOOOOOO@O@@OOOOOOOOOOOOO@@@@@@@@@O@@@OOOOO@@OOOOOOOOOOOO@@^    
          =@@OOOOOOOOOOOOOOOOOOOOO@@@@OOOOOOOOOOO@@`.......=@@@@@@OOOOO@@OOOOOOOOOO@@^    
      .. .=@@OOOOOOOOOOOOOOOOOOO@@..@@OOOOOOOOOOO@@^............@@OOOOOOO@@OOOOOOOO@@^    
       ...=@@OOOOOOOOOOOOOOOOOOO@@..@@OOOOOOOOOOO@@`............@@OOOOOOO@@OOOOOO@@@@^    
      .. .=@@OOOOOOOOOOOOOOOOO@@....@@OOOOO@@@@OO@@^..............@@@OOOO@@@@OOOO@@@@@@O  
          =@@OOOO@@OOOOOOOO@@@[[....@@@@@@@@@@@OO@@`..............@@@OOO@@@O@OOOO@@@@@@@@^
        /OO@@OO@@@@OO@@OOOO@@@/OOO]]@@@@/[[[[@@OO@@^...,]]]]]]]]OO@@@OOO@@@@@OOOO@@/[[[[[`
        @@@OOO@@@@@@@@@OO@@/[\@@@@@@@@/[`....@@@@[[....,[[@@@@@@[[[[\@O@@@@@@OOOO@@^      
        @@@OO@@@@@@@@OO@@@@O.=@@@@@@@@^......@@@@........,@@@@@@`...=@@@@@@@@@@OO@@^      
        @@@@@O@@@..@@@O@@O.=@@@@@@@@@@^......@@@@......=@@@@@@@@@@..=@@@@@@..@@OO@@^      
        @@@O@@@@@..@@OO@@O.=@@@@..@@@@^......@@........=@@@O .@@@@*.=@@O@@@..@@OO@@^      
        @@@@@ =@@....@@^...=OOOO .OOOO.................=OOO^ .OOOO....=@O....@@@@.        
          =@@ =@@....O@....=OOOOOOOOOO.................=OOOOOOOOOO....=O/....@@@@^        
                .@@@@O@^......\\\\\o......................\]\\/o......=O@@@@@@@           
                     O@^.........................oo...................=@@O@@O@@    .      
                 .  .@@^..................=@@oooO.....................=@@@@OO@@           
               ..... ..@@O..............=@@.,@@.....................=@O[[.=@@..           
                 .     ,[\@@@@........O@^.=@@...................@@@@/[`    [[             
                         ,[[[\@@@@@@@@/[\@@@@@@@@@@@@@@@@@@@@@@@[[[[`        ,oo^         
                             ,[[[[@@//\]/[[[[[[[[[[[[[[[[[[[[[[[.            ^            
                                 .[[OO/[`                                                 
                                    @@^ demo：https: //www.nmmnm.co/showmsg/forumid/5/id/107796?page=1*/
// 封装异步加载资源的方法
// function loadExternalResource(url, type) {
// 	return new Promise((resolve, reject) => {
// 		let tag;

// 		if (type === "css") {
// 			tag = document.createElement("link");
// 			tag.rel = "stylesheet";
// 			tag.href = url;
// 		}
// 		else if (type === "js") {
// 			tag = document.createElement("script");
// 			tag.src = url;
// 		}
// 		if (tag) {
// 			tag.onload = () => resolve(url);
// 			tag.onerror = () => reject(url);
// 			document.head.appendChild(tag);
// 		}
// 	});
// }
// loadExternalResource("https://cdn.bootcss.com/jquery/3.4.1/jquery.js","js");



var ye_call_board = "";
$("body").prepend("<style>.xiu {background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #5a4d30), color-stop(0.15, #918157), color-stop(0.3, #cfa520), color-stop(0.45, #5a4d30), color-stop(0.6, #cfa520), color-stop(0.75, #b4a120), color-stop(0.9, #bfa66e), color-stop(1, #cfa520)) !important;color: transparent !important;-webkit-background-clip: text !important;-moz-background-clip: text !important;-ms-background-clip: text !important;}.xiu a {background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #5a4d30), color-stop(0.15, #918157), color-stop(0.3, #cfa520), color-stop(0.45, #5a4d30), color-stop(0.6, #cfa520), color-stop(0.75, #b4a120), color-stop(0.9, #bfa66e), color-stop(1, #cfa520)) !important;color: transparent !important;-webkit-background-clip: text !important;-moz-background-clip: text !important;-ms-background-clip: text !important;}.zheyingbu {color: transparent;}.zheyingbu:hover {color: #000;}</style>")
function addemot(pic){
	// $(this).html()
	var picture="<img class='emotion' src='"+pic+"' />";
	const input = document.querySelector('#replyTopicBox > div.content_div > textarea');
    const event = document.createEvent('HTMLEvents')
	event.initEvent('input', false, true)
 
	input.value = input.value+picture; // 修改输入框的值
	input.dispatchEvent(event) // 手动触发输入框的input事件   
	$("#yeloubqb").removeClass("active");
    	$("#yebqb").attr("hidden","hidden");
}
function yeclj() {
	const input = document.querySelector('#replyTopicBox > div.content_div > textarea');
    const event = document.createEvent('HTMLEvents')
	event.initEvent('input', false, true)
 
	input.value = input.value+ '<a href="链接" target="_blank">点我就看XXX</a>'; // 修改输入框的值
	input.dispatchEvent(event) // 手动触发输入框的input事件   
	$("#yeloubqb").removeClass("active");
    	$("#yebqb").attr("hidden","hidden");}
function yejsjbz() {
	const input = document.querySelector('#replyTopicBox > div.content_div > textarea');
    const event = document.createEvent('HTMLEvents')
	event.initEvent('input', false, true)
 
	input.value = input.value+ '<font class="xiu">文字</font>'; // 修改输入框的值
	input.dispatchEvent(event) // 手动触发输入框的input事件   
	$("#yeloubqb").removeClass("active");
    	$("#yebqb").attr("hidden","hidden");}
function yezyb() {
	const input = document.querySelector('#replyTopicBox > div.content_div > textarea');
    const event = document.createEvent('HTMLEvents')
	event.initEvent('input', false, true)
	input.value = input.value+ '<font class="zheyingbu">文字</font>'; // 修改输入框的值
	input.dispatchEvent(event) // 手动触发输入框的input事件   
	$("#yeloubqb").removeClass("active");
    $("#yebqb").attr("hidden","hidden");
}
function yebwz() {
	const input = document.querySelector('#replyTopicBox > div.content_div > textarea');
    const event = document.createEvent('HTMLEvents')
	event.initEvent('input', false, true)
 
	input.value = input.value+ '<b>文字</b>'; // 修改输入框的值
	input.dispatchEvent(event) // 手动触发输入框的input事件   
	$("#yeloubqb").removeClass("active");
    	$("#yebqb").attr("hidden","hidden");}
function yehwz() {
	const input = document.querySelector('#replyTopicBox > div.content_div > textarea');
    const event = document.createEvent('HTMLEvents')
	event.initEvent('input', false, true)
 
	input.value = input.value+ '<font color=red><b>文字</b></font>'; // 修改输入框的值
	input.dispatchEvent(event) // 手动触发输入框的input事件   
	$("#yeloubqb").removeClass("active");
    	$("#yebqb").attr("hidden","hidden");}
// function yebqbf(){
// 	    	alert($("#yeloubqb").hasClass('active'))
//     	if($("#yeloubqb").hasClass('active')){
//     		$("#yeloubqb").removeClass("active");
//     		$("#yebqb").attr("hidden","hidden");
//     	}else{
//     		$(".emotion_tab.active").removeClass("active");
//     		$(".emotion_list_box").attr("hidden","hidden");
//     	$(function() {
//           	$("#yeloubqb").addClass("active");
//     		$("#yebqb").removeAttr("hidden");
//         });
    	
//     	}
// }
$(".emotion_tab").click(function(){
		$("#yeloubqb").removeClass("active");
    	$("#yebqb").attr("hidden","hidden");
});
// $(document).ready(function () {
	var id=$(".emotion_tabs").children(":first").attr('id');
	if(id!="yeloubqb"){
	$("#replyTopicBox > div.emotion_box > .emotion_list_box").before('<div data-v-048db2d0="" class="emotion_list_box" id="yebqb" hidden="hidden"><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/10/27/lF9QtjMuP8dNXbS.png" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/10/27/lF9QtjMuP8dNXbS.png&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/10/27/TYyuIAPOUXJcpCD.png" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/10/27/TYyuIAPOUXJcpCD.png&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/10/27/dp3RFBP64rgHCTE.png" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/10/27/dp3RFBP64rgHCTE.png&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/10/26/JBXecHnSt9ioZfP.png" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/10/26/JBXecHnSt9ioZfP.png&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/10/27/qTSQ4lYpUOtaGuC.png" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/10/27/qTSQ4lYpUOtaGuC.png&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://s2.ax1x.com/2019/10/27/Kr0GIf.png" class="emot-class" onclick="addemot(&quot;https://s2.ax1x.com/2019/10/27/Kr0GIf.png&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/10/26/Zve39x5h1qlQfgR.gif" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/10/26/Zve39x5h1qlQfgR.gif&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/10/26/NTOCMmZF1eJsoj6.png" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/10/26/NTOCMmZF1eJsoj6.png&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/10/26/yXmt7lWqD1Ywi6S.png" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/10/26/yXmt7lWqD1Ywi6S.png&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/10/26/gvjOKemIXtEdpNk.png" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/10/26/gvjOKemIXtEdpNk.png&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://ftp.bmp.ovh/imgs/2019/10/e52d7c9fa62ced37.png" class="emot-class" onclick="addemot(&quot;https://ftp.bmp.ovh/imgs/2019/10/e52d7c9fa62ced37.png&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://ftp.bmp.ovh/imgs/2019/10/26f79afe1c3b161f.png" class="emot-class" onclick="addemot(&quot;https://ftp.bmp.ovh/imgs/2019/10/26f79afe1c3b161f.png&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://ftp.bmp.ovh/imgs/2019/10/fd51e11daee367c5.png" class="emot-class" onclick="addemot(&quot;https://ftp.bmp.ovh/imgs/2019/10/fd51e11daee367c5.png&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/10/26/4QJt9hk8rzjlCLF.gif" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/10/26/4QJt9hk8rzjlCLF.gif&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/10/26/4sHvdSymTAa8ZpW.png" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/10/26/4sHvdSymTAa8ZpW.png&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/10/26/fPizYnd5AlHJgDC.png" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/10/26/fPizYnd5AlHJgDC.png&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://ftp.bmp.ovh/imgs/2019/10/17a7604be8a7564d.png" class="emot-class" onclick="addemot(&quot;https://ftp.bmp.ovh/imgs/2019/10/17a7604be8a7564d.png&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/10/26/VYCmGIwRcd5bHL8.jpg" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/10/26/VYCmGIwRcd5bHL8.jpg&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/10/26/joV7kMRKcyEBJIQ.jpg" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/10/26/joV7kMRKcyEBJIQ.jpg&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/10/26/65rYspZl2SuwUBv.jpg" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/10/26/65rYspZl2SuwUBv.jpg&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/11/01/6neP23umxziQKMs.gif" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/11/01/6neP23umxziQKMs.gif&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/10/26/KYg6xoCTrEJVMip.gif" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/10/26/KYg6xoCTrEJVMip.gif&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/11/01/MJ4bPOmsc8fh69l.png" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/11/01/MJ4bPOmsc8fh69l.png&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/11/01/aNgMZXrcm51dCfT.png" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/11/01/aNgMZXrcm51dCfT.png&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/11/01/feN3p4DBz7RT2x6.png" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/11/01/feN3p4DBz7RT2x6.png&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://s2.ax1x.com/2020/02/14/1XI78O.gif" class="emot-class" onclick="addemot(&quot;https://s2.ax1x.com/2020/02/14/1XI78O.gif&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://s2.ax1x.com/2020/02/11/1TiFaj.gif" class="emot-class" onclick="addemot(&quot;https://s2.ax1x.com/2020/02/11/1TiFaj.gif&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://i.loli.net/2019/10/26/sfSDeYJVNXwohCi.jpg" class="emot-class" onclick="addemot(&quot;https://i.loli.net/2019/10/26/sfSDeYJVNXwohCi.jpg&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://ftp.bmp.ovh/imgs/2019/10/fdfea20f565d2e45.png" class="emot-class" onclick="addemot(&quot;https://ftp.bmp.ovh/imgs/2019/10/fdfea20f565d2e45.png&quot;)"></div><div data-v-048db2d0="" class="emo_box"><img src="https://ftp.bmp.ovh/imgs/2019/10/578796363eeafb1e.gif" class="emot-class" onclick="addemot(&quot;https://ftp.bmp.ovh/imgs/2019/10/578796363eeafb1e.gif&quot;)"></div><br> &nbsp;&nbsp; &nbsp;&nbsp;<font onclick="yeclj()">超链接代码</font> &nbsp;&nbsp;<font onclick="yejsjbz()" class="xiu">金色渐变字代码</font>  &nbsp;&nbsp;<font onclick=yezyb()>遮影步代码</font> &nbsp;&nbsp;<font onclick="yebwz()"><b>加粗</b></font> &nbsp;&nbsp;<font onclick="yehwz()" color=red><b>加红</b></font></div>');
    $(".emotion_tabs").prepend("<div class=emotion_tab id='yeloubqb'>忧郁小猫猫</div>");}
    $("#yeloubqb").on("click", function() {
    	if($("#yeloubqb").hasClass('active')){
    		$("#yeloubqb").removeClass("active");
    		$("#yebqb").attr("hidden","hidden");
    	}else{
    		$(".emotion_tab.active").removeClass("active");
    		$(".emotion_list_box").attr("hidden","hidden");
    		$("#yeloubqb").addClass("active");
    		$("#yebqb").removeAttr("hidden");
    	}
    });
// });