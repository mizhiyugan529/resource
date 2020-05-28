$("body").prepend('<div id="yecontrol" style="position:fixed;top:30px;right:10px;z-index:1000000;text-align:center;"><img style="width:20px;height:20px;" src="https://i.loli.net/2019/11/09/IfVo9FwJEYSZqzC.png"><br><font color=#c3c3c3>点我退出</font></div><div id="yebirthday" style="width:100%;height:100%;position:fixed;background:black;z-index:99999"><div class="loading" style="z-index:100000;position:fixed;width:100%;height:100%">123</div><div class="yeLive"><div class="ye_sayings live2d" style="opacity:0"></div><canvas id="live2d" width="800" height="900" class="live2d"></canvas></div><canvas id="canvas" width="1672" height="773"></canvas><div class="bottombutton">	<div class="row"><div class="buttons"><center><button class="button leaf" id="begin">随机</button></center></div></div></div><div id="web_message"><div id="web_line"></div><div id="web_author"><br>模型来源：梦间集<br>资料来源：叶粉收集<br>点击右上角可最小化<br></div></div></div><script src="https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/timeline/background/background.js"></script>')
	
const message_Path = "https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/timeline/live2d/message.json"; 
// const home_Path = "live2d/";
const home_Path = "https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/timeline/live2d/";


// 封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}
var yelive2d;
// 加载 css js
Promise.all([
	loadExternalResource(home_Path + "css/live2d99.css", "css"),
	loadExternalResource(home_Path + "js/live2d.js", "js"),
	loadExternalResource(home_Path + "js/message99.js", "js")
]).then(() => {
	loadlive2d("live2d", "https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/timeline/live2d/yexiu/model2.json");
		
});
var loading=true;
function loadingremove(){
	if(loading){
	$(".loading").remove();
	const element =  document.getElementById("begin");
	element.style.display = "inline";
	element.classList.add('animated', 'zoomInLeft');
		loading=false;
	}
	
}
window.onload=function(){
	$("#yecontrol").css("visibility","visible");
	setTimeout(function(){
	if(loading){
			$(".loading").remove();
	const element =  document.getElementById("begin");
	element.style.display = "inline";
	element.classList.add('animated', 'zoomInLeft');
		loading=false;
	}
	},10000);
	
}
var hideornot=localStorage.hideornot;
if(hideornot=="hide"){
	$("#yebirthday").css("visibility","hidden");
	$("#yecontrol").html('<img style="width:20px;height:20px;" src="https://i.loli.net/2019/11/09/5NCc26nSrlFP8AE.png"><br><font color=#c3c3c3>点我展开</font>');
}
var tiemo=['链接：<a href=\"https://yexiu97529.lofter.com/post/26619c_ee6e7380\" target=\"_blank\"><font color="#efe0e0c2">《全职高手》官方文案中的叶修</font>></a>',
    '链接：<a href=\"https://yexiu97529.lofter.com/post/26619c_fe18ae7\" target=\"_blank\"><font color="#efe0e0c2">蝴蝶蓝在《全职高手》正文之外提到叶修的部分</font></a>',
    '链接：<a href=\"https://qianqiuwuyan.lofter.com/post/1ea40084_1101f3cf\" target=\"_blank\"><font color="#efe0e0c2">十五岁的夏天</font></a>',
    '链接：<a href=\"https://qianqiuwuyan.lofter.com/post/1ea40084_11024514\" target=\"_blank\"><font color="#efe0e0c2">最初的朋友，一生的对手</font></a>',
    '链接：<a href=\"https://yejiusakura.lofter.com/post/1d8fdb03_bfd9fd6\" target=\"_blank\"><font color="#efe0e0c2">神话的开始</font></a>',
    '链接：<a href=\"https://yexiu.love\" target=\"_blank\"><font color="#efe0e0c2">时间线</font></a>',
    '链接：<a href=\"https://taomu1129.lofter.com/post/1d131bac_12cd45ae7\" target=\"_blank\"><font color="#efe0e0c2">原著片段中的可爱叶修</font></a>',
    '链接：<a href=\"https://arcticcircle.lofter.com/post/22ff27_1192d11\" target=\"_blank\"><font color="#efe0e0c2">整理：叶修的数个温暖人心的细节</font></a>',
]
$("#begin").click(function(){
	showMessage(tiemo,50000)
})
$("#yecontrol").click(function(){
	if(hideornot=="hide"){
		hideornot="show";
		localStorage.hideornot="show";
		$("#yebirthday").css("visibility","visible");
		$("#yecontrol").html('<img style="width:20px;height:20px;" src="https://i.loli.net/2019/11/09/IfVo9FwJEYSZqzC.png"><br><font color=#c3c3c3>点我退出</font>');
	}else{
		hideornot="hide";
		localStorage.hideornot="hide";
	$("#yebirthday").css("visibility","hidden");
		$("#yecontrol").html('<img style="width:20px;height:20px;" src="https://i.loli.net/2019/11/09/5NCc26nSrlFP8AE.png"><br><font color=#c3c3c3>点我展开</font>');
	}
})