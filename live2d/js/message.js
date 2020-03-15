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
