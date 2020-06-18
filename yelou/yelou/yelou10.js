var text='<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/yelou/yelou10.css"></link>'
var text2='<script src="https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/yelou/yelive2d/yeLive2d_ty.js"></script><script src="https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/yelou/zhuangxiu/zhuangxiu_ty.js"></script>'
var text3='<script src="https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/yelou/music/music_ty.js"></script><script src="https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/yelou/bqb/bqb_ty.js"></script>'
var text4='<b><font size="4" class="xiu"><a href="https://www.nmmnm.co/board/529" target="_blank">叶修专岛神之领域 </a>♔ <a href="http://shenyeshitang529.lofter.com">深叶食堂</a><br><a href="https://www.nmmnm.co/showmsg/forumid/529/id/17917?page=1" target="_blank">①</a>｜<a href="https://www.nmmnm.co/showmsg/forumid/529/id/21646?page=1" target="_blank">②</a>｜<a href="https://www.nmmnm.co/showmsg/forumid/529/id/34307?page=1" target="_blank">③</a>｜<a href="https://www.nmmnm.co/showmsg/forumid/529/id/56078?page=1" target="_blank">④</a>｜<a href="https://www.nmmnm.co/showmsg/forumid/529/id/71221?page=1" target="_blank">⑤</a>｜<a href="https://www.nmmnm.co/showmsg/forumid/529/id/107796?page=1" target="_blank">⑥｜</a><a href="https://www.nmmnm.co/showmsg/forumid/529/id/183135?page=1" target="_blank">⑦</a>｜<a href="https://www.nmmnm.co/showmsg/forumid/529/id/220823?page=1" target="_blank">⑧</a>｜<a href="https://www.nmmnm.co/showmsg/forumid/529/id/226385" target="_blank">⑧.⑤</a> ｜<a href="https://www.nmmnm.co/showmsg/forumid/529/id/298666?page=1" target="_blank">⑨</a> 号楼 </font></b>' +
    '<div align="center"><font size="4" class="xiu"><b><a href="http://yexiu2019.lofter.com/post/30d9f78c_1c6b1c94f" target="_blank">叶修资源整理汇总地址</a> ♔ <a href="http://mirror.yexiu.ws/forum.php" target="_blank">旧粮翻找论坛-荣耀第十区</a> ♔ <a href="https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w401115577930597.32.36581b6akayxQ9&amp;id=551029652744&amp;rn=fc68b79787acdc12ecbdebc3827534dc&amp;abbucket=16" target="_blank">公益午餐</a></b></font></div>'+
    '<div align="center"><font size="4" class="xiu"><b><a href="http://bbs.jjwxc.net/showmsg.php?board=3&amp;id=1627917" target="_blank">闲情叶修二十九号楼</a> ♔ <a href="http://xqwh.org/viewtopic.php?f=2&amp;t=40638" target="_blank">秦王府叶神25号楼</a></b></font></div>'
$("#sanxiaoye").prepend(text4)
$("#sanxiaoye").prepend('<div align="center"><a id="ye_random_href1" target="_blank" onclick ="YeRandomHref1()"><img src = https://i.loli.net/2019/11/09/5NCc26nSrlFP8AE.png /></a>   <a id="ye_random_href2" target="_blank" onclick ="YeRandomHref2()"><img src = https://i.loli.net/2019/11/09/IfVo9FwJEYSZqzC.png /></a>   <a id="ye_random_href3" target="_blank" onclick ="YeRandomHref3()"><img src = https://i.loli.net/2019/11/09/LJx84NtMCWjqsXl.png /></a>')
$("#sanxiaoye").prepend(text+text2+text3)
var titleList=[
    "",
    "one",
    "two",
    "three",
    "four",
    "five"
]
$(".title_box").addClass(titleList[Math.floor(Math.random() * titleList.length)])
$(".container .title").addClass(titleList[Math.floor(Math.random() * titleList.length)])

var all_ye_href_one = [
    "http://bbs.jjwxc.net/showmsg.php?board=3&id=1927524",
    "http://bbs.jjwxc.com/showmsg.php?board=3&boardpagemsg=1&id=1736242",
    "http://bbs.jjwxc.net/showmsg.php?board=3&id=1928543&page=0",
    "http://bbs.jjwxc.com/showmsg.php?board=3&keyword=%D2%B6&id=1754049",
    "http://bbs.jjwxc.com/showmsg.php?board=3&boardpagemsg=1&id=1731020",
    "http://bbs.jjwxc.com/showmsg.php?board=3&keyword=%D6%B1%BD%E2%BD%E2&id=1730911",
    "http://bbs.jjwxc.com/showmsg.php?board=3&keyword=%C8%AB%C3%F7%D0%C7%C8%FC%D2%B6&id=1662184",
    "http://bbs.jjwxc.com/showmsg.php?board=3&keyword=%D2%B6%D0%DE&id=1729027",
    "http://bbs.jjwxc.com/showmsg.php?board=3&keyword=%BB%EE%C6%C3%BF%C9%B0%AE%B4%F3%CC%EC%CA%B9&id=1658832",
    "http://bbs.jjwxc.com/showmsg.php?board=3&keyword=%D2%B6%D0%DE%B5%BD%B5%D7%CA%C7%CA%B2%C3%B4%C8%CB%C9%E8&id=1244137&page=0",
    "http://bbs.jjwxc.com/showmsg.php?board=3&keyword=%C0%CF%D2%B6%B4%D3%CE%B4%B7%DF%C5%AD&id=1039098",
    "http://bbs.jjwxc.com/showmsg.php?board=3&keyword=%D2%B6%D0%DE&id=1665366",
    "http://bbs.jjwxc.com/showmsg.php?board=3&keyword=%D2%B6%D0%DE%C3%F7%C3%F7%BA%DC%B6%E0%C7%E9&id=1063950",
    "http://bbs.jjwxc.com/showmsg.php?board=3&keyword=%D2%B6%D0%DE%CE%AA%CA%B2%C3%B4%CA%C7top&id=1400180",
    "http://bbs.jjwxc.com/showmsg.php?board=3&keyword=%D2%B6%D0%DE%D5%E6%B5%C4%BA%C3%CB%D5%B0%A1&id=1366604",
    "http://bbs.jjwxc.com/showmsg.php?board=3&keyword=%C4%E3%C3%C7%D2%B6%D0%DE%B2%BB%CA%C7%B4%F3%C9%F1&id=1317060",
    "http://bbs.jjwxc.com/showmsg.php?board=3&keyword=%B3%FD%C1%CB%D4%AD%D6%F8%D6%B0%D2%B5&id=1271509",
    "http://bbs.jjwxc.com/showmsg.php?board=3&keyword=%D2%B6%D0%DE%B5%B1%B3%F5%C0%EB%BC%D2%B3%F6%D7%DF&id=1260139",
    "http://bbs.jjwxc.com/showmsg.php?board=3&keyword=%D2%B6%D0%DE&id=1717694",
    "http://bbs.jjwxc.com/showmsg.php?board=3&keyword=%CD%E2%CC%B2%B7%C5%B5%C4%C4%C7%B8%F6&id=1366034&page=0",
    "http://bbs.jjwxc.com/showmsg.php?board=3&keyword=%C3%E2%B7%D1%CE%E7%B2%CD%20%BD%D8%D6%B9&id=1365653",
    "http://bbs.jjwxc.com/showmsg.php?board=3&keyword=%D6%B1%A3%AC%CE%DE%C1%C4&id=1711563",
    "http://bbs.jjwxc.com/showmsg.php?board=3&keyword=%D2%B6%D6%D0%D0%C4&id=1612667",
    "http://bbs.jjwxc.com/showmsg.php?board=3&keyword=%D2%B6%CF%E0%B9%D8cp%C2%A5&id=1654216",
    "http://bbs.jjwxc.net/showmsg.php?board=3&boardpagemsg=1&id=1775246",
    "http://bbs.jjwxc.net/showmsg.php?board=3&id=1779877",
    "http://bbs.jjwxc.net/showmsg.php?board=3&boardpagemsg=1&id=1783660",
    "http://bbs.jjwxc.net/showmsg.php?board=3&id=1863804",
    "http://bbs.jjwxc.net/showmsg.php?board=3&boardpagemsg=1&id=1908547",
    "http://bbs.jjwxc.net/showmsg.php?board=3&boardpagemsg=1&id=1924260"
];
var all_ye_href_two = [
    "https://yexiu97529.lofter.com/post/26619c_ee6e7380",
    "https://yexiu97529.lofter.com/post/26619c_fe18ae7",
    "https://qianqiuwuyan.lofter.com/post/1ea40084_1101f3cf",
    "https://qianqiuwuyan.lofter.com/post/1ea40084_11024514",
    "https://yejiusakura.lofter.com/post/1d8fdb03_bfd9fd6",
    "https://taomu1129.lofter.com/post/1d131bac_12cd45ae7",
    "https://arcticcircle.lofter.com/post/22ff27_1192d11"
];
var all_ye_href_three = [
    "https://b23.tv/BV1Zs411a7LR",
    "https://b23.tv/BV1Cx41177fM",
    "https://b23.tv/BV1qs411i7Bs",
    "http://www.missevan.com/mdrama/drama/22523?pay_type=2",
    "http://www.missevan.com/mdrama/drama/22523?pay_type=2"
];

function YeRandomHref1() {
    $("#ye_random_href1").attr(
        "href",
        all_ye_href_one[Math.floor(Math.random() * all_ye_href_one.length)]
    );
}

function YeRandomHref2() {
    $("#ye_random_href2").attr(
        "href",
        all_ye_href_two[Math.floor(Math.random() * all_ye_href_two.length)]
    );
}

function YeRandomHref3() {
    $("#ye_random_href3").attr(
        "href",
        all_ye_href_three[Math.floor(Math.random() * all_ye_href_three.length)]
    );
}