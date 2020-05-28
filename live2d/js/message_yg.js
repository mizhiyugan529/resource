//发送信息的类
function sendmessageYe(content,fatie){
	showMessage("发送中......",12000)
$.ajax({
		url : "https://www.yeallye.com/yerobot/api/comment/yelive2d.php",
		type : "POST",
                dataType: "json",
		data:{content:JSON.stringify(content)}, 
		success:function(json){
			data=json.reply;
			if(content[0]=="roll"){
				//昵称
				var yetounn = localStorage.yetounn;
				if (yetounn!=null&&yetounn!=""&&yetounn!="无昵称"){
						data="[<b>"+yetounn+"</b>]"+data
				};
			}
          showMessage(data,5000)
          if(content[0]=="gift"&&content[1]=="2"){
				data="有不具名叶粉赠送了叶叶"+content[3]
			}
          if(fatie==true){
          	$("#wenbenkuang").val(data);
          	$("#replybtt").click();
          };
		},
error:function(jqXHR ,textStatus , errorThrown){
alert(jqXHR.responseText+textStatus+errorThrown);
showMessage(errorThrown,5000)
}
	});
}

$("#yechatsubmit").click(function(){
	var content = $("#yechatinput").val();
	if(content.length<1){alert('内容不得小于1个字符');return false;}
	else{
		content="@叶楼机器人"+content;
		$("#yechatsubmit").text("发送中");
		$("#yechatsubmit").attr("disabled","disabled");
		$("#yechatinput").attr("disabled","disabled");
		$("#yechatinput").val("")
	     $.ajax({
			url : "https://www.yeallye.com/yerobot/api/comment/ye.php",
			type : "POST",
	                dataType: "json",
			data:{content:content}, 
			success:function(json){
				data=json;
	            if(data.needfatie!="1"){
	            	showMessage(data.reply,5000);
	            $("#yechatsubmit").text("发送");
	            $("#yechatsubmit").removeAttr("disabled");
	            $("#yechatinput").removeAttr("disabled");
	            	$("#yechatinput").focus();}
	            	else if(data.needfatie=="1"){
	            	showMessage(data.reply+",将发送结果到帖子中",5000);
	            	$("#wenbenkuang").val(data.reply);
	            $("#replybtt").click();}else{
				showMessage("出错了",5000);
	            	$("#yechatsubmit").text("发送");
	            $("#yechatsubmit").removeAttr("disabled");
	            $("#yechatinput").removeAttr("disabled");
	            	$("#yechatinput").focus();
	            };
			},
	error:function(jqXHR ,textStatus , errorThrown){
	alert(jqXHR.responseText+textStatus+errorThrown);
	$("#yechatsubmit").text("发送");
	$("#yechatsubmit").removeAttr("disabled");
	$("#yechatinput").removeAttr("disabled");
	$("#yechatinput").focus();
	}
		});
	};
});
$('#yechatinput').bind('keypress',function(event){ 
         if(event.keyCode == 13){  
             $("#yechatsubmit").click();  
         }  
     });



function renderTip(template, context) {
    var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;
    return template.replace(tokenReg, function (word, slash1, token, slash2) {
        if (slash1 || slash2) {
            return word.replace('\\', '');
        }
        var variables = token.replace(/\s/g, '').split('.');
        var currentObject = context;
        var i, length, variable;
        for (i = 0, length = variables.length; i < length; ++i) {
            variable = variables[i];
            currentObject = currentObject[variable];
            if (currentObject === undefined || currentObject === null) return '';
        }
        return currentObject;
    });
}

String.prototype.renderTip = function (context) {
    return renderTip(this, context);
};

var re = /x/;
console.log(re);


function initTips(){
    $.ajax({
        cache: true,
        url: `${message_Path}message.json`,
        dataType: "json",
        success: function (result){
            $.each(result.mouseover, function (index, tips){
                $(tips.selector).mouseover(function (){
                    var text = tips.text;
                    if(Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1)-1];
                    text = text.renderTip({text: $(this).text()});
                    showMessage(text, 3000);
                });
            });
            $.each(result.click, function (index, tips){
                $(tips.selector).click(function (){
                    var text = tips.text;
                    if(Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1)-1];
                    text = text.renderTip({text: $(this).text()});
                    showMessage(text, 3000);
                });
            });
            result.seasons.forEach(tips => {
					var now = new Date(),
						after = tips.date.split("-")[0],
						before = tips.date.split("-")[1] || after;
					if ((after.split("/")[0] <= now.getMonth() + 1 && now.getMonth() + 1 <= before.split("/")[0]) && (after.split("/")[1] <= now.getDate() && now.getDate() <= before.split("/")[1])) {
						var text = Array.isArray(tips.text) ? tips.text[Math.floor(Math.random() * tips.text.length)] : tips.text;
						text = text.replace("{year}", now.getFullYear());
						showMessage(text, 7000);
						// messageArray.push(text);
					}
				});
        }
    });
}
initTips();

(function (){
	var yetounn = localStorage.yetounn;
	if (yetounn==null||yetounn==""||yetounn=="无昵称"){
			yetounn=""
		}
	else{yetounn="，"+yetounn+""};
    var text;
    var now = (new Date()).getHours();
    if (now > 23 || now <= 5) {
        text = '快睡吧'+yetounn;
    } else if (now > 5 && now <= 7) {
        text = '早上好'+yetounn+'!一日之计在于晨';
    } else if (now > 7 && now <= 11) {
        text = '上午好'+yetounn;
    } else if (now > 11 && now <= 14) {
        text = '中午了'+yetounn+'，现在是午餐时间';
    } else if (now > 14 && now <= 17) {
        text = '下午到了'+yetounn;
    } else if (now > 17 && now <= 19) {
        text = '傍晚了'+yetounn;
    } else if (now > 19 && now <= 21) {
        text = '晚上好'+yetounn+'，今天过得怎么样？';
    } else if (now > 21 && now <= 23) {
        text = '已经这么晚了，早点休息吧'+yetounn;
    } else {
        text = '欢迎'+yetounn;
    }

    showMessage(text, 12000);
})();

function showMessage(text, timeout){
    if(Array.isArray(text)) text = text[Math.floor(Math.random() * text.length + 1)-1];
    //console.log('showMessage', text);
    $('.ye_sayings').stop();
    $('.ye_sayings').html(text).fadeTo(200, 1);
    if (timeout === null) timeout = 5000;
    hideMessage(timeout);
}

function hideMessage(timeout){
    $('.ye_sayings').stop(true).css('opacity',1);
    if (timeout === null) timeout = 5000;
    $('.ye_sayings').delay(timeout).fadeTo(200, 0);
}
//画图类
function yedraw(){
	var html = '<canvas id="myCanvas" height="300" width="500" style="background:white"></canvas><div class="btn-group btn-group-justified" data-toggle="buttons" id="yedrawing" style="width:-webkit-fill-available">  <label class="btn btn-primary active" onclick="$(&quot;#yedrawcolor&quot;).show();var board=document.getElementById(&quot;myCanvas&quot;).getContext(&quot;2d&quot;);board.strokeStyle=$(&quot;#yedrawcolor&quot;).val();board.globalCompositeOperation = &quot;source-over&quot;;board.lineWidth = 1;">	<input type="radio" class="yedraw" checked="" name="yedraw" id="option1" value="1"> 画笔</label>   <label class="btn btn-primary" onclick="$(&quot;#yedrawcolor&quot;).hide();var board=document.getElementById(&quot;myCanvas&quot;).getContext(&quot;2d&quot;);board.globalCompositeOperation = &quot;destination-out&quot;;board.lineWidth = 3;">	<input type="radio" class="yedraw" name="yedraw" id="option2" value="0"> 橡皮</label> </div><input id="yedrawcolor" value="#0000ff" type="color" style="display:" onchange=document.getElementById("myCanvas").getContext("2d").strokeStyle=$("#yedrawcolor").val()></input>';

                            new $.flavr({ title : '画图', 

                            content : '简易绘画功能', dialog : 'form', form : { content: html, method:

                            'post' }, buttons:{
                            submit:{
                            	text:"发送",
                            	style:"primary",
                            	action : function( $container, $form ){ 
                            save() }},
                            qingkong:{
                            	text:"清空",
                            	style:"default",
                            	action:function(){
                            		clean();
                            		return false;
                            	}
                            },
                            cancel:{
                            	text:"取消",
                            	style:"default"
                            }
                            } });
$(".flavr-container .flavr-fixer").css("margin","1% auto 0");
var canvas,board,img;
canvas = document.getElementById('myCanvas');

 var windowWidth = $(window).width();
 if(windowWidth < 768){
 	 canvas.height = 370;
        canvas.width = 270;
        $(".flavr-button").css("min-width","50px")
    						}
else{ canvas.height = 300;canvas.width = 500;};
board = canvas.getContext('2d');
var mousePress = false;
var last = null;
function beginDraw(){
 mousePress = true;
}
function drawing(event){
event.preventDefault();
if(!mousePress)return;
var xy = pos(event);
if(last!=null){
board.beginPath();
board.moveTo(last.x,last.y);
board.lineTo(xy.x,xy.y);
board.stroke();
}
last = xy;
}
			
 function endDraw(event){
 mousePress = false;
 event.preventDefault();
 last = null;
}
			
 function pos(event){
 var x,y;
if(isTouch(event)){
 //x = event.touches[0].pageX;
 //y = event.touches[0].pageY;
 rectObject = event.target.getBoundingClientRect();
 x=event.changedTouches[0].pageX- rectObject.left-document.documentElement.scrollLeft;
 y=event.changedTouches[0].pageY- rectObject.top-document.documentElement.scrollTop;
  //x = event.changedTouches[0].offsetX;
 //y = event.changedTouches[0].offsetY;
 //console.log('x='+x+' y='+y);
}else{
	 //rectObject = event.target.getBoundingClientRect();
 //x = event.offsetX+event.target.offsetLeft;
 x = event.offsetX;
 y = event.offsetY;
 //y = event.offsetY+event.target.offsetTop;
 //console.log('clientx='+event.target.getBoundingClientRect().left+' clienty='+event.target.getBoundingClientRect().top);
}
// console.log('x='+x+' y='+y);
 return {x:x,y:y};
}
			
 function isTouch(event){
 var type = event.type;
if(type.indexOf('touch')>=0){
 return true;
}else{
 return false;
}
}
			
 function save(){
//base64
 var Pic = canvas.toDataURL();
 //Pic = Pic.replace(/^data:image\/(png|jpg);base64,/, "")
 //document.getElementById('textId').innerText(dataUrl);
//			 document.getElementById("textId").innerHTML = dataUrl; 
// dataUrl = dataUrl.replace("image/png","image/octet-stream");
showMessage("正在保存图片到服务器......",5000)
$.ajax({ 
        type:'POST',
        url: 'https://www.yeallye.com/yerobot/api/upload/savepic.php',
        data: {img:Pic},
        dataType: 'json',
        success: function (msg) {
        	if(msg.img!=null||msg.img!=""){
           img="<img src=https://www.yeallye.com/yerobot/api/upload/img/"+msg.img+">"
        		showMessage(img,12000)
        		 $("#wenbenkuang").val(img);
 $("#replybtt").click();
        	}else{showMessage("保存失败",12000)}
        }
    });
 

}
			
			
 function clean(){
board.clearRect(0,0,canvas.width,canvas.height);

}
			
 board.lineWidth = 1;
board.strokeStyle="#0000ff";
			
			
 canvas.onmousedown = beginDraw;
 canvas.onmousemove = drawing;
 canvas.onmouseup = endDraw;
canvas.addEventListener('touchstart',beginDraw,false);
canvas.addEventListener('touchmove',drawing,false);
canvas.addEventListener('touchend',endDraw,false);
		
}
//更多快捷功能
$("#chatYeName").click(function(){
	
	var yetounn = localStorage.yetounn;
	if (yetounn==null||yetounn==""||yetounn=="无昵称"){
		yetounn="无昵称"
		showMessage("这又是什么名字啊？",5000);
	}else{showMessage(["你这ID起得还挺有文化","哟～是你啊！"
],5000);}
new $.flavr({ content : '输入你设定的昵称', 
				dialog : 'prompt',
                prompt : { value:yetounn,placeholder:yetounn,style:"color:#333" }, 
                buttons: {
	        		danger: {
			            text: '保存昵称',
			            style: 'danger',
			            action: function($container, $prompt) {
			            	var nickname=$prompt.val();
			            	if(nickname=="无昵称"||nickname==""){
			            		showMessage(["你这又是什么名字啊？","你这取的什么名字……","神神秘秘的，你是哪家卧底？","你这人还挺神秘"],12000)
			            	}else{
			            	showMessage(["很高兴见到你,"+nickname,"哟，这是你新号？","你这取的什么名字……"],12000)};
			                localStorage.yetounn=nickname;
			            }
	        		},
			        cancel: {
			            text: '取消',
			            style: 'default'
			        }
	    		}
	});
});
$("#chatYeRoll").click(function(){
	//昵称
	var yetounn = localStorage.yetounn;
	if (yetounn==null||yetounn==""){
		yetounn="无昵称"
	};
	showMessage(["先发制人!","一鼓作气!","出来吧！100点","这磨磨蹭蹭的多耽误功夫，不如我们ROLL点决胜负，输的自己GG"],5000)
var html = ' <div class="form-row" style="max-height:200px;overflow:auto">' +
' <div style="max-width:300px"><div class="input-group" style="width:100%"><span class="input-group-addon" style="background:#204d74;border:#204d74;color:white !important;" id="basic-addon1">昵称</span><input type="text" id="yetounninput" class="form-control" value='+yetounn+' placeholder='+yetounn+' aria-describedby="basic-addon1"></div>投掷:<div class="btn-group btn-group-justified" data-toggle="buttons" id=yetouzhi>'+
'  <label class="btn btn-primary active" Onclick=$("#rollinput").hide();$("#zdytou").hide()>	<input type="radio" class="yeroll" checked name="yeroll" id="option1" value="1"> 默认</label>'+
'   <label class="btn btn-primary" Onclick=$("#rollinput").hide();$("#zdytou").show()>	<input type="radio" class="yeroll" name="yeroll" id="option2" value="0"> 设定</label>'+
' <label class="btn btn-primary" Onclick=$("#rollinput").show();$("#zdytou").hide()>	<input type="radio" class="yeroll" name="yeroll" id="option3" value="2"> 自定义选项</label></div>'+
'<input id= rollinput placeholder="请输入自定义选项,用/分开" style="display:none;color:#333"/>'+
'<div id=zdytou style="display:none">骰子个数:'+
'<input id="yetounum" placeholder="骰子数量(不填写则默认为1)" oninput = value=value.replace(/[^\\d]/g,"") style="color:#333"/>'+
'最大点数:<input id="yetoumax" placeholder="骰子最大值(不填写则默认为100)" oninput = value=value.replace(/[^\\d]/g,"") style="color:#333"/>'+
'最小点数:<input id="yetoumin" placeholder="骰子最小值(不填写则默认为1)" oninput = value=value.replace(/[^\\d]/g,"") style="color:#333"/></div>'+
'投掷事件:<input id="yetouthing" placeholder="投掷事件(可不填写)" style="color:#333"/>默认则投掷1个1~100点的骰子,设定则自定义骰子数量与大小值,自定义则输入自定选项'+
' <div class="input-group" style="width:300px">' + ' </div>' + ' <div class="form-row">' + ' <input type="checkbox" name="fatie" ' + ' id="fatie"/>'

                            + ' <label for="check">不发帖</label>' + ' </div>';

new $.flavr({ title : '叶楼骰子', dialog : 'form', form : { content: html },
 buttons: {
	        		danger: {
			            text: '开始投掷',
			            style: 'danger',
			            action: function( $container, $form ){ 
//存昵称
yetounn=$('#yetounninput').val();
localStorage.yetounn=yetounn
//选择了哪个选项的骰子
var selectedTou = $('#yetouzhi .yeroll:checked').val();
var Tounum ="1";
var Toumax="100";
var Toumin="1";
var Touxx=""
var TouTings=""
if(selectedTou=="0"){
	//自定义骰子
	Tounum=$('#yetounum').val()==null|$('#yetounum').val()==""?"1":$('#yetounum').val();
	Toumax=$('#yetoumax').val()==null|$('#yetoumax').val()==""?"100":$('#yetoumax').val();
	Toumin=$('#yetoumin').val()==null|$('#yetoumin').val()==""?"1":$('#yetoumin').val();
}else if(selectedTou=="2"){
	//自定义选项
	Touxx=$('#rollinput').val()==null|$('#rollinput').val()==""?"无选项":$('#rollinput').val();
};
//投掷事件
TouTings=$('#yetouthing').val()==null|$('#yetouthing').val()==""?"":$('#yetouthing').val();
//处理数据
if(Toumax<Toumin){
	showMessage(["骰子最大值小于最小值了","最大值小于最小值?赖皮啊！不行不行，这个不算！"],12000)
	return false;
}
if(Tounum==0){
	showMessage("0个骰子?你不会是来捣乱的吧",12000)
	return false;
}
var rollarray=["roll",selectedTou,Tounum,Toumax,Toumin,Touxx,TouTings]
//是否发帖
var notneedfatie=$("#fatie").prop("checked");
sendmessageYe(rollarray,!notneedfatie)
 } 
	        		},
			        cancel: {
			            text: '取消',
			            style: 'default'
			        }
	    		}
});});
$("#chatYeGame").click(function(){
	
	// yelive2d.prototype.startMotion(null,"https://www.yeallye.com/live2d/model/tia/motion/22.mtn",null)
	// var motions=Live2DMotion.loadMotion("https://www.yeallye.com/live2d/model/tia/motion/22.mtn");
	// MotionQueueManager.prototype.startMotion(motions);
	showMessage(["来打荣耀吧","要玩什么？来挑战一下我的打地鼠记录怎么样？"],5000);
	// loadExternalResource("https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/flavr/css/animate.css", "css"),
// loadExternalResource("https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/flavr/css/flavr.css", "css"),
// loadExternalResource("https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/flavr/js/flavr.min.js", "js")
new $.flavr({ buttonDisplay : 'stacked', content : '游戏（再刷新即退出游戏）',
buttons : { 
	confirm : { style: 'info',
		text:'YEXIU',
		action: function(){
			
loadExternalResource("https://www.yeallye.com/yelou/yegame/game.css", "css");
loadExternalResource("https://www.yeallye.com/yelou/yegame/game.js", "js");
			}
	}, 
	yxtaptap : { style:
                            'info',
                            text:"yeyetap",
		action: function(){
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
$("#replybtt").css("z-index","1");
$("#shimeji").css("pointer-events","none");
$("#wenbenkuang").css("z-index","0");
$("#toolMain").css("z-index","0");
$(".form-group").css("z-index","0");
$(".form-group").css("position","absolute");
			}
		
	},
	draw : { style: 'info',
		text:'画图',
		action:function(){ yedraw()}
	},
                            close : { text:"关闭",style: 'default' } } });
	// new $.flavr('还需修改,目前暂停功能');
});
$("#chatYe").click(function(){
	showMessage(["副本ing，等下","来啦？"],5000);
$("#yechatdiv").toggle();
});
$("#chatYeMore").click(function(){
	showMessage(["这是什么?","这么麻烦，要暗一点的","怎么样，新装备，还算满意吧？"],5000);
	new $.flavr({ buttonDisplay : 'stacked', content : '更多功能(逐渐增加中)',

                            buttons : { primary : { text: '选背景', style: 'primary', action: function(){
var background=['红龙叶','青龙叶','曲奇叶','青龙+曲奇叶混合','红旗叶','红龙+王座拼接','蛋糕叶','蓝色背景猫叶','李宁叶','红旗叶2','左叶修底纹+红旗叶','叶叶喝腊八粥','快睡叶','抱枕叶','礼物叶','起点叶','王鹏叶','睡觉喵叶','西装叶','武侠叶','七夕叶','第二季卫衣叶','万圣叶Q版','生日壁纸叶','水手叶','除夕叶','国庆Q版','生日会双叶','18中秋叶','19年国庆叶','HE荒野打怪叶','元宵兔兔叶','招财猫叶','执事叶第一版','滑雪叶','十四版君莫笑','端午粽叶','猫树版兴欣叶','万圣叶正比版','龙抬头叶','等身抱枕叶','粘土叶','掉落的起点叶','wink叶','姜饼叶','古剑联动叶','广播剧叶','Q版圣诞叶','圣诞正比叶头像','梦间集联动千机伞'];
var index=Math.floor((Math.random()*background.length));
var reply_content="那就第"+index+"个吧,"+background[index]
showMessage(reply_content,12000)
                            	
                            } },
                            skin : { text: '换装', style: 'primary', action: function(){
                             	var cloth=localStorage.yecloth;
                             	if(cloth=="2"){
                             	loadlive2d("live2d", "https://www.yeallye.com/live2d/model/tia/model.json");
                             		localStorage.yecloth="1";
                             	}
                             	else{
                             		loadlive2d("live2d", "https://www.yeallye.com/live2d/model/tia/model2.json");
                             		localStorage.yecloth="2";
                             	
                             	}
                             	}},
                             fangda : { text: '放大', style: 'primary', action: function(){
                             	var windowWidth = $(window).width();
    						if(windowWidth < 768){
                             	$(".yeLive").css("width","100%");
    							$("#chatYeName,#chatYeStory,#chatYeRoll,#chatYeGift,#chatYeGame,#chatYeMore,#chatYe").css("right","20px");
    						}
                             	else{
                             		$(".yeLive").css("height","90%")
                             		$(".yeLive").css("width","auto")
                             		$("#live2d").css("cssText","height:100% !important;width:auto !important;position:relative")
                             	}}},cancel : { style: 'default',
		text:'取消',
        action: function(){}} }
                         } )
			            });
			  
$("#chatYeStory").click(function(){
	new $.flavr('梦境功能在此贴内禁止使用！');})
$("#chatYeGift").click(function(){
	new $.flavr('礼物功能在此贴内禁止使用！');})

