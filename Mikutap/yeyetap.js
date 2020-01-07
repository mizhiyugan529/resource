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
Promise.all([			
loadExternalResource("https://fonts.loli.net/css?family=Quicksand:400", "css"),
loadExternalResource("https://www.yeallye.com/yelou/yegame/Mikutap/shared/sp/css/common.css", "css"),
loadExternalResource("https://www.yeallye.com/yelou/yegame/Mikutap/css/mikutap.css", "css"),
loadExternalResource("https://cdnjs.loli.net/ajax/libs/pixi.js/3.0.11/pixi.min.js", "js"),

loadExternalResource("https://cdnjs.loli.net/ajax/libs/gsap/1.19.1/TweenMax.min.js", "js"),
loadExternalResource("https://www.yeallye.com/yelou/yegame/Mikutap/shared/js/common-2.min.js", "js"),

]).then(() => {
	loadExternalResource("https://www.yeallye.com/yelou/yegame/Mikutap/js/mikutap.min.js", "js");
	$("body").prepend(' <div id="view"></div><div id="scene_top"><h1>Yeyetap(改自mikutap)</h1><div id="ng"> <p class="atten">十分抱歉<br>您的浏览器并不支持本页面需要的特性</p></div><div class="ok"><p id="bt_start"><a href="">!开始!</a></p></div><p id="bt_about"><a href="">*关于*</a></p><div class="ok"><p class="attention">※请打开声音并享受。</p></div></div><div id="scene_loading"><hr size="1" color="#fff"> </div><div id="scene_main"><div class="set"><p class="attention">点击 &amp; 拖动或者按任意键!</p><p id="bt_backtrack"><a href="">背景音乐: 开启</a></p></div></div><div id="about_cover"></div><div id="about"><div id="about_in"><p class="close"><span id="bt_close">×</span></p><p class="con"> 声音来源 <a href="https://ec.crypton.co.jp/pages/prod/vocaloid/mikuv4x" target="_blank">Hatsune Miku</a> </p><p class="con"> 原作者 <a href="https://aidn.jp" target="_blank">daniwell</a> (<a href="https://twitter.com/daniwell_aidn" target="_blank">twitter</a>) </p> <p class="link"> 灵感来源 <a href="http://patatap.com/" target="_blank">Patatap</a><br>(令人赞叹的网页!)</p></div></div><div id="bt_back">＜游戏来源</div><div id="bt_fs">□全屏显示</div>');
});
$(".yeLive").css("pointer-events","none");
$("#shimeji").css("pointer-events","none");
$(document).ready(function(){
$("#replybtt").css("z-index","1");
$(".form-group").css("z-index","0");
$(".form-group").css("position","absolute");});

		