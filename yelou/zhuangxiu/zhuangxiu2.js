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
                                    @@^ demo：https: //www.nmmnm.co/showmsg/forumid/5/id/107796?page=1*/



function decorateYeUnSave() {
        var color =  $("#ye_color").val();
                // $(".footer:not(.username),#app > div > nav > a, #nav-collapse > ul> li a").css("cssText", "color:" + color + " !important");
                
                // $("#app > div > nav > a, #nav-collapse > ul> li a").css("cssText", "color:" + color + " !important");
                $(".title > font,.title,.footer:not(.username),#app > div > nav > a, #nav-collapse > ul> li a,.hbtn.delete,.hbtn.reward,.change_title_color_btn,.collect_btn,.justify-content-center > div > a,.justify-content-center > div > span,.text-right.page_box > a,.text-right.page_box > a,.text-right.page_box > span,.text-right.page_box > a,.hd-menu-pc .scroll-btn a .icon,.foot_btn_group > div,.admin_bottom_div > a,.top_div > div.left > label").css("cssText", "color:" + color + " !important");
                $(".reply_box").css("cssText", "border-bottom:1px solid " + color + " !important");
                var background=color;
                var background2=color;
                var background3=color;
                if(color.indexOf("rgb") >= 0){
                	background=background.replace("rgb","rgba").replace(")",",0.2)");
                	background2=background2.replace("rgb","rgba").replace(")",",0.7)");
                	background3=background3.replace("rgb","rgba").replace(")",",0.3)");
                }else{background=background+"33";background2=background2+"B3";background3=background3+"4D"}
                $(".emotion_tab").css(
                    "cssText",
                    "background:" + background + " !important;border:"+ color + " !important;"
                );
                $(".emotion_tab.active,.emotion_tab:hover,.main:hover,.upload_btn:hover").css(
                    "cssText",
                    "background:" + background2 + " !important"
                );
                $(".main,.upload_btn").css(
                    "cssText",
                    "background:" + background3 + " !important;border:"+ color + " !important;"
                );
                // $(".title").css("cssText", "color:" + color + " !important");
                // $(".title > font").css("cssText", "color:" + color + " !important");
          
        
    
}

function decorateYe() {
	var color_whole = $("#ye_color").val();
	var background=color_whole;
    var background2=color_whole;
    var background3=color_whole;
	if(color_whole.indexOf("rgb") >= 0){
                	background=background.replace("rgb","rgba").replace(")",",0.2)");
                	background2=background2.replace("rgb","rgba").replace(")",",0.7)");
                	background3=background3.replace("rgb","rgba").replace(")",",0.3)");
                }else{background=background+"33";background2=background2+"B3";background3=background3+"4D"}
    var save =
        "<s" +
        "tyle>.title > font,.title,.footer:not(.username),#app > div > nav > a, #nav-collapse > ul> li a,.hbtn.delete,.hbtn.reward,.change_title_color_btn,.collect_btn,.justify-content-center > div > a,.justify-content-center > div > span,.text-right.page_box > a,.text-right.page_box > a,.text-right.page_box > span,.text-right.page_box > a,.hd-menu-pc .scroll-btn a .icon,.foot_btn_group > div,.admin_bottom_div > a,.top_div > div.left > label{color:" +
        color_whole +
        " !important}.reply_box{border-bottom:1px solid " + color_whole
        + " !important;}.emotion_tab{background:"+
        background +
        " !important;border:"+ color_whole + " !important;}.emotion_tab.active,.emotion_tab:hover,.main:hover,.upload_btn:hover{background:" +
        background2 +
        " !important;}.main,.upload_btn{background:" +
        background3+
        " !important;}</s" +
        "tyle>"+"<style>span,a,.glyphicon,.authorinfo,div.authorinfo > div > span:nth-child(1),.group_0+span,.text-success,.alert,.am-form-group,.form-group,#file{color:"+color_whole+" !important}hr{background :"+color_whole+" none repeat scroll 0% 0% / auto padding-box border-box;}</style>";
        	const input = document.querySelector('#replyTopicBox > div.content_div > textarea');
    const event = document.createEvent('HTMLEvents')
	event.initEvent('input', false, true)
 
	input.value = input.value+  save; // 修改输入框的值
	input.dispatchEvent(event) // 手动触发输入框的input事件 
}

function decorateYeForFans() {}
var yeBackgoundImageSelect =
    '<select id="yeBackgroundImage"><option>选择背景图片</option><option value="https://i.loli.net/2019/09/20/z3TiaodfSY5ZXJw.jpg ">红龙叶</option>	<option value="https://i.loli.net/2019/10/04/98rEXRZtFuGI2vN.jpg">青龙叶</option>	<option value="https://i.loli.net/2019/09/21/SCvun9LDIB8qEha.jpg">曲奇叶</option>	<option value="https://i.loli.net/2019/09/21/F3QVC8IY1A5qr9s.png">青龙+曲奇叶混合</option>	<option value="https://i.loli.net/2019/09/21/xmcJ3HrF1z6N57D.jpg">红旗叶</option>	<option value="https://i.loli.net/2019/09/23/jcQf1X5ZEP3AbTm.jpg">红龙+王座拼接</option>	<option value="https://i.loli.net/2019/09/21/Clo2gyIPHENhKZ9.jpg">蛋糕叶</option>	<option value="https://i.loli.net/2019/09/23/tYfVJiaUBrOl3Wv.jpg">蓝色背景猫叶</option>	<option value="https://ftp.bmp.ovh/imgs/2019/09/723c569b09b8a042.jpg">李宁叶</option>	<option value="https://i.loli.net/2019/09/23/8X9duYs7UEbRHhj.jpg">红旗叶2</option>	<option value="https://ftp.bmp.ovh/imgs/2019/09/eccdfec8056f838d.jpg">左叶修底纹+红旗叶</option>	<option value="https://ftp.bmp.ovh/imgs/2019/09/e2097b41ff85c4a1.jpg">叶叶喝腊八粥</option>	<option value="https://i.loli.net/2019/09/24/mr5OTKXGpzDfxRj.jpg">快睡叶</option>	<option value="https://ftp.bmp.ovh/imgs/2019/09/3f2d2409d1e8a868.jpg">抱枕叶</option>	<option value="https://i.loli.net/2019/09/25/6xgaeNk5bpZqWSc.jpg">礼物叶</option>	<option value="https://ftp.bmp.ovh/imgs/2019/09/c97b0fed16f86299.jpg">起点叶</option>	<option value="https://ftp.bmp.ovh/imgs/2019/09/d11d4ca3e01c3568.jpg">王鹏叶</option>	<option value="https://ftp.bmp.ovh/imgs/2019/09/b8fb6fc1a0d05b85.jpg">睡觉喵叶</option>	<option value="https://ftp.bmp.ovh/imgs/2019/09/09d423b757254003.jpg">西装叶</option>	<option value="https://i.loli.net/2019/09/26/2hpZtzvHgyMYeq6.jpg">武侠叶</option>	<option value="https://ftp.bmp.ovh/imgs/2019/09/21f9e77375bdf0c0.jpg">七夕叶</option>	<option value="https://ftp.bmp.ovh/imgs/2019/09/c93a0432d2422dd1.jpg">第二季卫衣叶</option><option value="https://ftp.bmp.ovh/imgs/2019/10/9b984695f5061f67.jpg">万圣叶Q版</option>	<option value="https://ftp.bmp.ovh/imgs/2019/09/e36ec7b1a8f97583.jpg">生日壁纸叶</option>	<option value="https://ftp.bmp.ovh/imgs/2019/09/dc7c14a3773104da.jpg">水手叶</option>	<option value="https://ftp.bmp.ovh/imgs/2019/09/5d72233cd6d046de.jpg">除夕叶</option>	<option value="https://ftp.bmp.ovh/imgs/2019/10/a2b6c21c78201382.jpg">国庆Q版</option>	<option value="https://ftp.bmp.ovh/imgs/2019/10/406bb9c36be319da.jpg">生日会双叶</option>	<option value="https://i.loli.net/2019/10/01/DM4gmucvXIxhaEW.jpg">18中秋叶</option>	<option value="https://ftp.bmp.ovh/imgs/2019/10/0da05a117a44c4c0.jpg">19年国庆叶</option>	<option value="https://ftp.bmp.ovh/imgs/2019/10/f34306cec019e1b7.jpg">HE荒野打怪叶</option>	<option value="https://ftp.bmp.ovh/imgs/2019/10/4ba42c98702b2d19.jpg">元宵兔兔叶</option>	<option value="https://i.loli.net/2019/10/05/zZRX5eUjGBThDka.jpg">招财猫叶</option>	<option value="https://ftp.bmp.ovh/imgs/2019/10/dc50a5c8de236672.jpg">执事叶第一版</option>	<option value="https://ftp.bmp.ovh/imgs/2019/10/3958cba32cea7421.jpg">滑雪叶</option>	<option value="https://ftp.bmp.ovh/imgs/2019/10/c0059e76891da89c.jpg">十四版君莫笑</option>	<option value="https://ftp.bmp.ovh/imgs/2019/10/6cb2488a2d7e2f9a.jpg">端午粽叶</option>	<option value="https://i.loli.net/2019/10/19/bpwj2uYkWZRd1SE.jpg">猫树版兴欣叶</option>	<option value="https://i.loli.net/2019/10/11/X7EodrOKci2LATU.jpg">万圣叶正比版</option>	<option value="https://ftp.bmp.ovh/imgs/2019/10/4935d481c1fadca2.jpg">龙抬头叶</option>	<option value="https://i.loli.net/2019/10/14/ksVn1YfTFKNBeCX.jpg">等身抱枕叶</option>	<option value="https://ftp.bmp.ovh/imgs/2019/10/cb838f203b079f1e.jpg">粘土叶</option>	<option value="https://i.loli.net/2019/10/16/9bPEMSkVeyzwUrh.gif">掉落的起点叶</option>	<option value="https://i.loli.net/2019/10/17/kUIJ56aReiMYNf9.gif">wink叶</option>	<option value="https://ftp.bmp.ovh/imgs/2019/10/fb5f2d88521e95e3.jpg">姜饼叶</option>	<option value="https://ftp.bmp.ovh/imgs/2019/10/c689a7e40e9dce8d.jpg">古剑联动叶</option>	<option value="https://i.loli.net/2019/12/24/i6tObdIT9xhf7ml.png">广播剧叶</option>  <option value="https://i.loli.net/2019/12/25/pz3jKhRfaXnD6OT.jpg">Q版圣诞叶</option> <option value="https://i.loli.net/2019/12/25/HMAJ5YR1yS8isg2.png">圣诞正比叶头像</option><option value="https://s2.ax1x.com/2020/01/04/lwzXRO.jpg">梦间集联动千机伞</option><option value="输入图片的http地址">自己新增</option></select>';
	$("#app").prepend("<style>.footer > div > .username {color: transparent !important;background: url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/fengye.png) no-repeat !important;}.title_box{background:transparent !important;text-align:center}#app > div > nav {background-color: transparent !important;border-color: transparent !important;}</style>")
    $(".admin_bottom_div").after( '<a href="javascript:;" Onclick="$(&apos;#yeColor&apos;).toggle()">点我装扮本帖</a><br> <form id="yeColor" style="display: none;">整体变色： <input type="color" id="ye_color">   <button id="ye_decorate" type="button">预览</button><button id="ye_save_decorate" type="button">保存</button> </form>');
    $("#ye_decorate").click(decorateYeUnSave);
    $("#ye_save_decorate").click(decorateYe);
    $("#yeColor").prepend("<p id='YeBackgroundDiv'></p>");
    $("#YeBackgroundDiv").html("选择叶楼背景：" + yeBackgoundImageSelect);
    $("#yeBackgroundImage").change(function () {
    	const input = document.querySelector('#replyTopicBox > div.content_div > textarea');
    const event = document.createEvent('HTMLEvents')
	event.initEvent('input', false, true)
	input.value = input.value+  "<st" +
            "yle>body{background-attachment: fixed;background-image: url(" +
            $("#yeBackgroundImage").val() +
            ");background-size:100%;}</s" +
            "tyle>"; // 修改输入框的值
	input.dispatchEvent(event) // 手动触发输入框的input事件  
     
    });    
    