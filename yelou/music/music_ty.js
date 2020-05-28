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
//2.0
if(judge12.indexOf("bilibilipy")!=-1&&judge12.indexOf("https")!=-1){
    Promise.all([
        loadExternalResource('https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js','js')
    ]).then(() => {
        $("body").append('<script id="myhk" src="https://player.lmih.cn/player/js/player.js" key="157330441510" m="1"></script>');
});
}else{
    //1.0
   $("body").append('<script id="myhk" src="https://player.lmih.cn/player/js/player.js" key="157330441510" m="1"></script>');
}
