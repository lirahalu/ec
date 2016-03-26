/**
 * Created by kin on 2016/3/23.
 */
/*����ͼ�ֲ�*/
$(function () {
    var banner = $('.banner');
    var pic = $('.pic');
    var picNum = $('.picNum a');
    var prev = $('#prev');
    var next = $('#next');
    var index = 1;
    var len = 2;
    var interval = 3000;
    var timer;

    function animate(offset) {
        var left = parseInt(pic.css('left')) + offset;
        if (offset > 0) {
            offset = '+=' + offset;
        }
        else {
            offset = '-=' + Math.abs(offset);
        }
        pic.animate({'left': offset}, 300, function () {
            if (left > -300) {
                pic.css('left', -811 * len);
            }
            if (left < (-811 * len)) {
                pic.css('left', -811);
            }
        });
    }

    function showButton() {
        picNum.eq(index - 1).addClass('active').siblings().removeClass('active');
    }

    function play() {
        timer = setTimeout(function () {
            next.trigger('click');
            play();
        }, interval);
    }

    function stop() {
        clearTimeout(timer);
    }

    next.bind('click', function () {
        if (pic.is(':animated')) {
            return;
        }
        if (index == 2) {
            index = 1;
        }
        else {
            index += 1;
        }
        animate(-811);
        showButton();
    });

    prev.bind('click', function () {
        if (pic.is(':animated')) {
            return;
        }
        if (index == 1) {
            index = 2;
        }
        else {
            index -= 1;
        }
        animate(811);
        showButton();
    });

    picNum.each(function () {
        $(this).bind('click', function () {
            if (pic.is(':animated') || $(this).attr('class') == 'active') {
                return;
            }
            var myIndex = parseInt($(this).attr('index'));
            var offset = -811 * (myIndex - index);

            animate(offset);
            index = myIndex;
            showButton();
        })
    });

    banner.hover(stop, play);

    play();

});

/*һ���Ӳ˵�����*/
$(function(){
    $(".shopClass h3").toggle(function(){
        $(".shopClassShow").slideDown();
    },function(){
        $(".shopClassShow").slideUp();
    });
});

/*�������л�*/
$(function(){
    var $navlist=$(".navList li");
    $navlist.each(function(){
        $(this).mouseover(function () {
            $this=$(this);
            $this.siblings().removeClass();
            $this.addClass("active");
            return false;
        });
    });
});

/*�����˵���ɫ*/
$(function(){
    var $ShowItem=$(".shopClassShowItem");
    $ShowItem.each(function(){
        $(this).hover(function(){
            $(this).css("background-color","#fff");
            $(this).find("*").css("color","#000");
            $(this).find(".fHeader").css("color","#fff");
            return false;
    },function(){
            $(this).css("background-color","#4593fd");
            $(this).find("*").css("color","#fff");
            return false;
        });
    });
});

/*
�����Ӳ˵�����*/
$(function(){
    var $this=$(".shopClassShowItem").eq(1);
    var $showMenu=$(".showMenu");
    $this.hover(function(){
        $this.css("background-color","#fff");
        $this.find("*").css("color","#000");
        $this.find(".fHeader").css("color","#fff");
            $showMenu.show();
   },
        function(){
            $this.css("background-color","#4593fd");
            $this.find("*").css("color","#fff");
            $showMenu.hide();
        });
    $showMenu.hover(function(){
        $showMenu.show();
        $this.css("background-color","#fff");
        $this.find("*").css("color","#000");
        $this.find(".fHeader").css("color","#fff");
    },function(){
        $showMenu.hide();
        $this.css("background-color","#4593fd");
        $this.find("*").css("color","#fff");
        $showMenu.hide();
    });
});

/*ͼƬ�ֲ��Ŵ�Сͼ�л�*/
$(function(){
    var $img=$("#showArea img");
    $img.each(function(){
        $(this).click(function () {
            $this=$(this);
            $img.removeClass();
            $this.addClass("active");
        });
    });
});

/*���ﳵ�����Ӽ�*/
$(function(){
   var $remove=$(".remove");
    var $add=$(".add");
    var number=$(".number").val();
    $add.click(function(){
        var $disabled=$add.attr("disabled");
            number++;
            $(".number").val(number);
        if (number!=1){
            $remove.attr('disabled',false);
        }
        if (number==9){
            $add.attr('disabled',true);
        }
    });
    $remove.click(function(){
        var $disabled=$remove.attr("disabled");
            number--;
            $(".number").val(number);
        if (number==1){
            $remove.attr('disabled',true);
        }
        if (number!=9){
            $add.attr('disabled',false);
        }
    });
});



$(function(){
   $(".select").toggle(function(){
      $(".showSelect").show();
   },
       function(){
       $(".showSelect").hide();
   });
});

/*����л�*/
$(function(){
    var $a=$(".kind li");
    $a.each(function(){
        $(this).click(function () {
            $this=$(this);
            $a.removeClass();
            $this.addClass("active");
        });
    });
});
$(function(){
    var $a=$(".color li");
    $a.each(function(){
        $(this).click(function () {
            $this=$(this);
            $a.removeClass();
            $this.addClass("active");
        });
    });
});

/*���ѡ��*/
$(function(){
    var $li=$(".standard li");
    $li.each(function(){
        $(this).click(function(){
            var $a=$(".kind li.active a").html();
            var $b=$(".color li.active a").html();
            var $c=$(".oncolor");
            var $d=$(".onkind");
            $c.html($b);
            $d.html($a);
        });
    });
});
/*���빺�ﳵ��ʾ */
$(function(){
    $(".4addshop").click(function(){
        var $a=$(".kind li.active a").html();
        var $b=$(".color li.active a").html();
        var $c=$(".number").val();
        $(".shopcartishi").show();
        $(".colorcheck").html($b);
        $(".kindcheck").html($a);
        $(".numcheck").html($c);
        $(".cancelshopcar").click(function(){
            $(".shopcartishi").hide();
        });
    });
});




/*�����ѡ��*/
$(function(){
    var $a=$(".mangyitiao li");
    $a.each(function(){
        $(this).click(function () {
            $this=$(this);
            $a.removeClass();
            $this.addClass("active");
        });
    });
});


/*���ؽ���ҳ*/
$(function(){
    var $span=$(".rightnav span");
    var a=$(".rightnav span").eq(0);
    var b=$(".rightnav span").eq(1);
    $span.each(function(){
        $(this).click(function(){
            $span.removeClass();
            $(this).addClass("active");
        });
    });
    var x=$(".ipad");
    var y=$(".ipadkox")
    b.click(function (){
        x.detach();
        y.detach();
    });
    a.click(function(){
        $(".rightnav").after(x);
        x.after(y);
    });
});


/*���ض���*/
$(function() {
    $('.to-top').toTop();
});






