$("body").prepend('<div id="yecontrol" style="position:fixed;top:0px;right:10px;z-index:1000000;text-align:center;visibility:hidden;"><img style="width:20px;height:20px;" src="https://i.loli.net/2019/11/09/IfVo9FwJEYSZqzC.png"><br><font color=#c3c3c3>点我退出</font></div><div id="yebirthday" style="width:100%;height:100%;position:fixed;background:black;z-index:99999"><div class="loading" style="z-index:100000;position:fixed;width:100%;height:100%">123</div><div class="yeLive"><div class="ye_sayings live2d" style="opacity:0"></div><canvas id="live2d" width="800" height="900" class="live2d"></canvas></div><canvas id="canvas" width="1672" height="773"></canvas><div class="bottombutton">	<div class="row"><div class="buttons"><center><button class="button leaf" id="begin">随机</button></center></div></div></div><div id="web_message"><div id="web_line"></div><div id="web_author"><br>模型来源：梦间集<br>资料来源：叶粉收集<br>点击右上角可最小化<br></div></div></div><script src="https://yexiu.love/background/background.js"></script>')
	
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
$("#begin").click(function(){
	showMessage(["贴膜语录1","贴膜语录2","贴膜语录3"],50000)
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