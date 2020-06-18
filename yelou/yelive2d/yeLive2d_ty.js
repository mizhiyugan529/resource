
$("body").prepend('<div class="yeLive"><div class="ye_sayings live2d" style="opacity:0"></div><canvas id="live2d" width="800" height="900" class="live2d"></canvas><span class="glyphicon glyphicon-comment" id=chatYe></span><span class="glyphicon glyphicon-user" id=chatYeName></span><span class="glyphicon glyphicon-leaf" id=chatYeStory></span><span class="glyphicon glyphicon-registration-mark" id=chatYeRoll></span><span class="glyphicon glyphicon-gift" id=chatYeGift></span></span><span class="glyphicon glyphicon-tower" id=chatYeGame></span></span><span class="glyphicon glyphicon-th" id=chatYeMore></span></div><div id=yechatdiv style="display: none;"><input id=yechatinput autocomplete="off"><button id=yechatsubmit>发送</button></div>')
const message_Path = "https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/live2d/message.json"; 
const home_Path = "https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/";

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
var judge12 = window.location.href;
if((judge12.indexOf("bilibilipy")!=-1&&judge12.indexOf("https")!=-1)||judge12.indexOf("asrpg")!=-1){
Promise.all([
	loadExternalResource("https://cdn.bootcss.com/jquery/3.4.1/jquery.js","js")
]).then(() => {
	Promise.all([
		loadExternalResource("https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/flavr/css/animate.css", "css"),
loadExternalResource("https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/flavr/css/flavr.css", "css"),
loadExternalResource("https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/flavr/js/flavr.min.js", "js"),
	loadExternalResource(home_Path + "live2d/css/live2d2.css", "css"),
	loadExternalResource(home_Path + "live2d/js/live2d.js", "js"),
	loadExternalResource(home_Path + "live2d/js/message2.js", "js")
]).then(() => {
	loadlive2d("live2d", "https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/live2d/model/tia/model.json");
});
});	
}else{
// 加载 css js
Promise.all([
	loadExternalResource(home_Path + "live2d/css/live2d0.css", "css"),
	loadExternalResource(home_Path + "live2d/js/live2d.js", "js"),
	loadExternalResource(home_Path + "live2d/js/message0.js", "js")
]).then(() => {
	var cloth=localStorage.yecloth;
	if (cloth=="2"){
		loadlive2d("live2d", "https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/live2d/model/tia/model2.json");
	}else{
	loadlive2d("live2d", "https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/live2d/model/tia/model.json");}
});
loadExternalResource("https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/flavr/css/animate.css", "css"),
loadExternalResource("https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/flavr/css/flavr.css", "css"),
loadExternalResource("https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/flavr/js/flavr.min.js", "js")
}