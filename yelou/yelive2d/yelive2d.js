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
                                    @@^ */
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/live2d/css/live2d.css" />
$("#contentdiv").prepend('<div class="yeLive"><div class="ye_sayings live2d" style="opacity:0"></div><canvas id="live2d" width="800" height="900" class="live2d"></canvas><span id=chatYe onclick=$("#yechatdiv").toggle()>聊</span></div><div id=yechatdiv style="display: none;"><input id=yechatinput  autocomplete="off"><button id=yechatsubmit>发送</button></div>')
// var message_Path = "https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/live2d/message.json"; var home_Path = "https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/";
// $.getScript("https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/live2d/js/live2d.js", function() {
// 	loadlive2d("live2d", "https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/live2d/model/tia/model.json");
// $.getScript("https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/live2d/js/message.js");
// });
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

// 加载 css js
Promise.all([
	loadExternalResource(home_Path + "live2d/css/live2d.css", "css"),
	loadExternalResource(home_Path + "live2d/js/live2d.js", "js"),
	loadExternalResource(home_Path + "live2d/js/message.js", "js")
]).then(() => {
	loadlive2d("live2d", "https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/live2d/model/tia/model.json");
});
