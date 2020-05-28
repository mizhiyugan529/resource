//加入聊天功能
$(document).ready(function () {
    var select = document.getElementById("duqian");
    var add = document.createElement("p");
    add.setAttribute("id", "yeDocarateDiv");
    select.before(add);
    add.innerHTML =
        '<a href="javascript:;" Onclick="$(&apos;#yeTalk&apos;).toggle()">小叶快捷对话</a><br><p id="yeTalk" style="display: none;">选择将内容发送到帖子中时会出现一定延迟。'+yeTalkSelect+'</p>';
    $("#yeTalking").change(function () {
    	$("#yechatdiv").css("display","")
        $("#yechatinput").val(
            $("#yeTalking").val() 
        );
    });
});
var yeTalkSelect =
    '<select id="yeTalking"><option>选择对话内容</option><option value="story/t内容s">给[内容]生成情节并发送到帖子里</option><option value="/cp数字1/数字2s">生成[数字2]个[数字1]种类cp，结合情节发送到帖子内</option>	<option value="@叶楼机器人">让叶叶把你的话转达给叶楼机器人</option>		<option value="选背景">让叶叶帮助选择背景</option>	<option value="roll点且不发送">roll点而且不发送结果到帖子里</option>	<option value="roll点">roll点且发送结果到帖子里</option>	<option value="roll点/t内容">对自定义内容进行roll点且发送结果到帖子里</option>	<option value="paro">随机一个paro</option>	<option value="sendparo">随机一个paro并发到帖子里</option>	<option value="gift内容">送给叶叶自定义礼物（请将“内容”改为自定义礼物）</option>	<option value="gift">叶叶随机使用礼物盒中的礼物并且发到帖子里</option>	<option value="sendgift">在帖子里发出来叶叶礼物里的东西都有什么</option>	<option value="eat内容">送给叶叶自定义食物（请将“内容”改为自定义食物）</option>	<option value="eat">叶叶随机使用食盒中的食物并且发到帖子里</option>	<option value="story">生成一个随机剧情</option><option value="story数字">生成输入数字个的一串剧情</option><option value="saolei1">生成新的扫雷</option><option value="sendsaolei">发送扫雷到帖子中</option><option value="/sao行数/列数">扫雷某个格子</option><option value="llk">生成新的连连看</option><option value="sendllk">发送连连看到帖子中</option><option value="llk/s行数/列数">查看连连看某个格子是什么</option><option value="llk/m行数1/列数1/行数2/列数2">匹配(行数1，列数1)(行数2，列数2)的连连看格子</option><option value="某地天气">向叶叶查询天气</option>		<option value="推文">随机推文（未完善）</option></select>'; 
$("#yechatsubmit").click(function(){
	var content = $("#yechatinput").val();
	if(content.length<1){alert('内容不得小于1个字符');return false;}
	else{
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
// re.toString = function() {
//     showMessage('哈哈，你打开了控制台，是想要看看我的秘密吗？', 5000);
//     return '';
// };

// $(document).on('copy', function (){
//     showMessage('你都复制了些什么呀，转载要记得加上出处哦~~', 5000);
// });

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

// window.setInterval(showHitokoto,30000);

// function showHitokoto(){
//     // $.getJSON('https://sslapi.hitokoto.cn/',function(result){
//         // showMessage(result.hitokoto, 5000);
//     // });
// }

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


