
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

var judge12 = window.location.href;
if(judge12.indexOf("bilibilipy")!=-1&&judge12.indexOf("https")!=-1){

loadExternalResource("https://www.yeallye.com/yelou/bqb/bqb2.js", "js");
}else{
loadExternalResource("https://www.yeallye.com/yelou/bqb/bqb.js", "js");
}