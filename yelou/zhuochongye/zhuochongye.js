if($('#shimeji').length<=0){
	$("body").prepend("<div style='z-index:100000;top:0px;left:0px;position: fixed;width:100%;height:100%;-webkit-pointer-events: none;-moz-pointer-events: none;-ms-pointer-events: none;-o-pointer-events: none;pointer-events: none;'><div id='shimeji' draggable='true' style='pointer-events:auto;position: absolute;cursor:move ;top:100px;left:90px;width:64px;height:64px;background-image:url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime1.png);background-size:100%;z-index:99999999'></div></div><style>div.col-md-2.col-lg-2.col-xs-2.col-sm-2{z-index:-1 !important;}</style>");
// <
// <style>#shimeji{z-index:99999999 !important;position:relative !important}</style>
var dh = null;
var dhtimer = null;
var timer = null;
var movetimer = null;

function changeshimeji(a,rnum="0") {
  if (a == "1") {
    //做个随机数玩
    if (rnum == 1) {
      $('#shimeji').css({
        "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime2.png)"
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime3.png)"
        });
      }, 300);
    } else {
      $('#shimeji').css({
        "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime20.png)"
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime21.png)"
        });
      }, 300);
    }
  } else if (a == "2") {
    $('#shimeji').css({
      "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime12.png)"
    });
    dhtimer = setTimeout(function() {
      $('#shimeji').css({
        "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime13.png)"
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime14.png)"
        });
      }, 300);
    }, 300);
  } else if (a == "3") {
    $('#shimeji').css({
      "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime23.png)"
    });
    dhtimer = setTimeout(function() {
      $('#shimeji').css({
        "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime24.png)"
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime25.png)"
        });
      }, 300);
    }, 300);
  } else if (a == "4") {
    //好像是搬什么东西
    $('#shimeji').css({
      "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime39.png)"
    });
    dhtimer = setTimeout(function() {
      $('#shimeji').css({
        "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime40.png)"
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime41.png)"
        });
      }, 300);
    }, 300);
  } else if (a == "5") {
    //想念电脑，需要interview调到3000
    dhtimer = setTimeout(function() {
      $('#shimeji').css({
        "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime27.png)"
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime28.png)"
        });
        dhtimer = setTimeout(function() {
          $('#shimeji').css({
            "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime29.png)"
          });
        }, 300);
      }, 600);
    }, 1000);
  } else if (a == "6") {
    //舞蹈
    dhtimer = setTimeout(function() {
      $('#shimeji').css({
        "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime5.png)"
      });
      dhtimer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime6.png)"
        });
      }, 300);
    }, 200);
  }
}
/*
移动函数
*/


function smjmove() {
  clearTimeout(movetimer);
  var rnum0 = Math.round(Math.random()); //随机数0或1
  if (rnum0 == 0) {
    var yemotion = Math.floor(Math.random() * (6 - 4 + 1) + 4);
    var timedh = 900;
    if (yemotion == 5) {
      timedh = 3000;
    } else if (yemotion == 6) {
      timedh = 900;
    }
    // 执行6次后结束
    var timesRun = 0;
    dh = setInterval(function() {
      changeshimeji(yemotion)
      timesRun += 1;
      if (timesRun === 6) {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#shimeji').css({
          "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime1.png)"
        });
        movetimer = setTimeout("smjmove()", 5000)
      }
    }, timedh);
  } else {

    var faHeigt = $('#shimeji').parent().height() - 64;
    var faWidth = $('#shimeji').parent().width() - 64;
    var yeY = $('#shimeji').position().top;
    var yeX = $('#shimeji').position().left;
    var rnum = Math.round(Math.random()); //随机数

    //在地面则向左走或者向上走或者最后坐在地上
    if (faHeigt - yeY <= 70 && yeX >= 200) {
      //向左走
      changeshimeji(1,rnum)
      dh = setInterval("changeshimeji(1,"+rnum+")", 600, "linear");
      $('#shimeji').animate({
        left: "-=" + 200
      }, 6000, function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#shimeji').css({
          "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime1.png)"
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (faHeigt - yeY <= 70 && yeX <= 0) {
      //向上走
      changeshimeji(2)
      dh = setInterval("changeshimeji(2)", 900, "linear");
      var movey = 200 < yeY ? 200 : yeY;
      $('#shimeji').animate({
        top: "-=" + movey
      }, movey * 60, function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#shimeji').css({
          "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime1.png)"
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (faHeigt - yeY <= 70) {
      changeshimeji(1,rnum)
      var move_x = yeX;
      dh = setInterval("changeshimeji(1,"+rnum+")", 600, "linear");
      $('#shimeji').animate({
        left: "-=" + yeX
      }, yeX * 60, function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#shimeji').css({
          "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime26.png)"
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (faHeigt - yeY >= 70 && yeX > 0 && yeY > 0) {
      //有高度且不在底部/顶部，则走到最左
      var move_x = yeX;
      changeshimeji(1,rnum)
      dh = setInterval("changeshimeji(1,"+rnum+")", 600);
      $('#shimeji').animate({
        left: "-=" + yeX
      }, yeX * 60, "linear", function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#shimeji').css({
          "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime26.png)"
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (faHeigt - yeY >= 70 && yeX == 0 && yeY > 0 && rnum == 0) {
      //已经走到最左，且不在顶部或者底部，随机数往上或者往下
      //向上走
      changeshimeji(2)
      var move_x = yeX;
      dh = setInterval("changeshimeji(2)", 900, "linear");
      var movey = 200 < yeY ? 200 : yeY;
      $('#shimeji').animate({
        top: "-=" + movey
      }, movey * 60, function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#shimeji').css({
          "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime1.png)"
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (faHeigt - yeY >= 70 && yeX == 0 && yeY > 0 && rnum == 1) {
      //已经走到最左，且不在顶部或者底部，随机数往上或者往下
      //向下走
      changeshimeji(2)
      var move_x = yeX;
      dh = setInterval("changeshimeji(2)", 900, "linear");
      var movey = 200 < faHeigt - yeY ? 200 : faHeigt - yeY;
      $('#shimeji').animate({
        top: "+=" + movey
      }, movey * 60, function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#shimeji').css({
          "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime1.png)"
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (yeY == 0 && yeX == 0) {
      //在左上角，则向下爬或者向右爬
      if (rnum == 1) {
        //向右
        changeshimeji(3)
        dh = setInterval("changeshimeji(3)", 900);
        var movey = 200 < faWidth - yeX ? 200 : faWidth - yeX;
        $('#shimeji').animate({
          left: "+=" + movey
        }, movey * 60, function() {
          clearTimeout(dhtimer);
          clearInterval(dh);
          $('#shimeji').css({
            "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime1.png)"
          });
          movetimer = setTimeout("smjmove()", 5000)
        });
      } else {
        //向下走
        changeshimeji(2)
        dh = setInterval("changeshimeji(2)", 900, "linear");
        var movey = 200 < faHeigt - yeY ? 200 : faHeigt - yeY;
        $('#shimeji').animate({
          top: "+=" + movey
        }, movey * 60, function() {
          clearTimeout(dhtimer);
          clearInterval(dh);
          $('#shimeji').css({
            "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime1.png)"
          });
          movetimer = setTimeout("smjmove()", 5000)
        });
      }
    } else if (yeY == 0 && yeX > 0) {
      //在最顶，则向左爬或者向右爬
      //判断yeX rnum
      changeshimeji(3)
      dh = setInterval("changeshimeji(3)", 900, "linear");
      //如果不在右上角，则随机向左向右爬
      if (faWidth - yeX >= 5 && rnum == 1) {
        //向右
        var movey = 200 < faWidth - yeX ? 200 : faWidth - yeX;
        $('#shimeji').animate({
          left: "+=" + movey
        }, movey * 60, function() {
          clearTimeout(dhtimer);
          clearInterval(dh);
          $('#shimeji').css({
            "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime1.png)"
          });
          movetimer = setTimeout("smjmove()", 5000)
        });
      } else {
        //向左
        var movey = 200 < yeX ? 200 : yeX;
        $('#shimeji').animate({
          left: "-=" + movey
        }, movey * 60, function() {
          clearTimeout(dhtimer);
          clearInterval(dh);
          $('#shimeji').css({
            "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime1.png)"
          });
          movetimer = setTimeout("smjmove()", 5000)
        });
      }

    }
  }
}



//降落
function jiangluo() {
  $('#shimeji').css({
    "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime4.png)"
  });
  var nowY = $('#shimeji').position().top;
  var faWidth = $('#shimeji').parent().height() - 64;
  var yyy = faWidth - nowY;
  $('#shimeji').animate({
    top: "+=" + yyy
  }, yyy * 20, function() {
    $('#shimeji').css({
      "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime18.png)"
    });
    timer = setTimeout(function() {
      $('#shimeji').css({
        "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime19.png)"
      });
      timer = setTimeout(function() {
        $('#shimeji').css({
          "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime1.png)"
        });
        movetimer = setTimeout("smjmove()", 5000)
      }, 1000)
    }, 700)

  });
}
smjmove();

$.fn.extend({
  dragging: function(data) {
    var $this = $(this);
    var xPage;
    var yPage;
    var X; //
    var Y; //
    var xRand = 0; //
    var yRand = 0; //
    var father = $this.parent();
    var defaults = {
      move: 'both',
      randomPosition: true,
      hander: 1
    }
    var opt = $.extend({}, defaults, data);
    var movePosition = opt.move;
    var random = opt.randomPosition;

    var hander = opt.hander;

    if (hander == 1) {
      hander = $this;
    } else {
      hander = $this.find(opt.hander);
    }


    //---初始化
    father.css({
      "position": "fixed",
      "overflow": "hidden"
    });
    hander.css({
      "cursor": "move"
    });

    var faWidth = father.width();
    var faHeight = father.height();
    var thisWidth = $this.width() + parseInt($this.css('padding-left')) + parseInt($this.css('padding-right'));
    var thisHeight = $this.height() + parseInt($this.css('padding-top')) + parseInt($this.css('padding-bottom'));

    var mDown = false; //
    var positionX;
    var positionY;
    var moveX;
    var moveY;

    if (random) {
      $thisRandom();
    }

    function $thisRandom() { //随机函数
      $this.each(function(index) {
        var randY = parseInt(Math.random() * (faHeight - thisHeight)); ///
        var randX = parseInt(Math.random() * (faWidth - thisWidth)); ///
        if (movePosition.toLowerCase() == 'x') {
          $(this).css({
            left: randX
          });
        } else if (movePosition.toLowerCase() == 'y') {
          $(this).css({
            top: randY
          });
        } else if (movePosition.toLowerCase() == 'both') {
          $(this).css({
            top: randY,
            left: randX
          });
        }

      });
    }
    $this.on("touchstart", function(e) {
      if ($this.is(":animated")) {
        $this.stop()
      };
      clearTimeout(timer);
      clearTimeout(dhtimer);
      clearInterval(dh);
      clearTimeout(movetimer);
      father.children().css({
        "zIndex": "0"
      });
      $this.css({
        "zIndex": "99"
      });
      mDown = true;
      X = e.originalEvent.changedTouches[0].pageX;
      Y = e.originalEvent.changedTouches[0].pageY;
      positionX = $this.position().left;
      positionY = $this.position().top;
      return false;
    });
    //!!!!!!!!
    $this.mousedown(function(e) {
      if ($this.is(":animated")) {
        $this.stop()
      };
      clearTimeout(timer);
      clearTimeout(dhtimer);
      clearInterval(dh);
      clearTimeout(movetimer);
      father.children().css({
        "zIndex": "0"
      });
      $this.css({
        "zIndex": "1"
      });
      mDown = true;
      X = e.pageX;
      Y = e.pageY;
      positionX = $this.position().left;
      positionY = $this.position().top;
      return false;
    });
    $this.on("touchend", function(e) {
      var rnum = Math.round(Math.random());
      if(rnum==0){
      $this.css({
        "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime1.png)"
      });
      mDown = false;
      jiangluo();}else{
        $this.css({
          "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime1.png)"
        });
        mDown = false;
        movetimer = setTimeout("smjmove()", 5000)
      }
    });
    $this.mouseup(function(e) {
      var rnum = Math.round(Math.random());
      if(rnum==0){
      $this.css({
        "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime1.png)"
      });
      mDown = false;
      jiangluo();}else{
        $this.css({
          "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime1.png)"
        });
        mDown = false;
        movetimer = setTimeout("smjmove()", 5000)
      }
    });
    $this.on("touchmove", function(e) {
      xPage = e.originalEvent.changedTouches[0].pageX; //--
      moveX = positionX + xPage - X;
      selX = xPage - X;

      yPage = e.originalEvent.changedTouches[0].pageY; //--
      moveY = positionY + yPage - Y;

      function thisXMove() { //x轴移动
        if (mDown == true) {
          $this.css({
            "left": moveX
          });
        } else {
          return;
        }
        if (moveX < 0) {
          $this.css({
            "left": "0"
          });
        }
        if (moveX > (faWidth - thisWidth)) {
          $this.css({
            "left": faWidth - thisWidth
          });
        }
        return moveX;
      }

      function thisYMove() { //y轴移动
        if (mDown == true) {
          $this.css({
            "top": moveY
          });
        } else {
          return;
        }
        if (moveY < 0) {
          $this.css({
            "top": "0"
          });
        }
        if (moveY > (faHeight - thisHeight)) {
          $this.css({
            "top": faHeight - thisHeight
          });
        }
        return moveY;
      }

      function thisAllMove() { //全部移动
        if (mDown == true) {
          $this.css({
            "left": moveX,
            "top": moveY
          });
          if (selX > 0) {
            $this.css({
              "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime9.png)"
            });
          } else {
            $this.css({
              "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime10.png)"
            });
          }
        } else {
          return;
        }
        if (moveX < 0) {
          $this.css({
            "left": "0"
          });
        }
        if (moveX > (faWidth - thisWidth)) {
          $this.css({
            "left": faWidth - thisWidth
          });
        }

        if (moveY < 0) {
          $this.css({
            "top": "0"
          });
        }
        if (moveY > (faHeight - thisHeight)) {
          $this.css({
            "top": faHeight - thisHeight
          });
        }
      }
      if (movePosition.toLowerCase() == "x") {
        thisXMove();
      } else if (movePosition.toLowerCase() == "y") {
        thisYMove();
      } else if (movePosition.toLowerCase() == 'both') {
        thisAllMove();
      }
    });
    $this.mousemove(function(e) {
      xPage = e.pageX; //--
      moveX = positionX + xPage - X;
      selX = xPage - X;
      $("#move1").html(positionX);
      $("#move2").html(xPage - X);
      $("#move3").html(X);

      yPage = e.pageY; //--
      moveY = positionY + yPage - Y;

      function thisXMove() { //x轴移动
        if (mDown == true) {
          $this.css({
            "left": moveX
          });
        } else {
          return;
        }
        if (moveX < 0) {
          $this.css({
            "left": "0"
          });
        }
        if (moveX > (faWidth - thisWidth)) {
          $this.css({
            "left": faWidth - thisWidth
          });
        }
        return moveX;
      }

      function thisYMove() { //y轴移动
        if (mDown == true) {
          $this.css({
            "top": moveY
          });
        } else {
          return;
        }
        if (moveY < 0) {
          $this.css({
            "top": "0"
          });
        }
        if (moveY > (faHeight - thisHeight)) {
          $this.css({
            "top": faHeight - thisHeight
          });
        }
        return moveY;
      }

      function thisAllMove() { //全部移动
        if (mDown == true) {
          $this.css({
            "left": moveX,
            "top": moveY
          });
          if (selX > 0) {
            $this.css({
              "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime9.png)"
            });
          } else {
            $this.css({
              "background-image": "url(https://cdn.jsdelivr.net/gh/mizhiyugan529/resource/shimeji/img/shime10.png)"
            });
          }
        } else {
          return;
        }
        if (moveX < 0) {
          $this.css({
            "left": "0"
          });
        }
        if (moveX > (faWidth - thisWidth)) {
          $this.css({
            "left": faWidth - thisWidth
          });
        }

        if (moveY < 0) {
          $this.css({
            "top": "0"
          });
        }
        if (moveY > (faHeight - thisHeight)) {
          $this.css({
            "top": faHeight - thisHeight
          });
        }
      }
      if (movePosition.toLowerCase() == "x") {
        thisXMove();
      } else if (movePosition.toLowerCase() == "y") {
        thisYMove();
      } else if (movePosition.toLowerCase() == 'both') {
        thisAllMove();
      }
    });
  }
});
$(function() {
  $('#shimeji').each(function() {
    $(this).dragging({
      move: 'both',
      randomPosition: false
    });
  });

});
}