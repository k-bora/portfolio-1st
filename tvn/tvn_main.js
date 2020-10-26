$(document).ready(function() {

  // 메뉴시작

  $('.header_menu_ul li').mouseenter(function() {
      var li_ul_h = $(this).find(".header_in_ul").height();
      $(".hover_wrap").css({
        'border-bottom': ' 3px solid #fc0000'
      });
      $(".hover_wrap").show();
      $(".hover_wrap").stop().animate({
        'height': li_ul_h+35+'px'
      });
      $(this).find(".header_in_ul").fadeIn(500);

  });

  $('.header_menu_ul li').mouseout(function() {
      $(this).find(".header_in_ul").hide();
      $(".hover_wrap").stop().animate({
        'height': '0px'
      });
      $(".hover_wrap").css({
        'border-bottom': '0'
      });
  });

  $('.none').mouseenter(function() {
      var none_h = $(this).height();
      $(".hover_wrap").stop().animate({
        'height': '0px'
      });
      $(".hover_wrap").css({
        'border-bottom': '0'
      });
  });



    //슬라이드 시작

    var slide_width = $(".slide_wrap").width();
    var img_count = 0;
    var list_length = $(".slide_wrap li").children().length;
    var itv;

    $(".slide_wrap ul").css({
        'left':-slide_width
      });
    

    var bt_event = false;

    function R_click(){
        if (bt_event == false) {
        bt_event = true;
        if (img_count < list_length-1) {
          img_count ++;
          points_count();
        }else {
          img_count = 0;
          points_count();
        }
        points_count();
        $(".slide_wrap ul").stop().animate({
          left:-slide_width*2
        },{complete: function() {
          $(".slide_wrap ul").css({
            "left":-slide_width*1
          });
          $(".slide_wrap ul").append($(".slide_wrap ul").children()[0]);
          bt_event = false;
        }});
      }
    };

    $("#R_bt").click(function() {
        R_click();
    });

    $("#L_bt").click(function() {
      if (bt_event == false) {
        bt_event = true;
        if (img_count > 0) {
          img_count --;
          points_count();
        }else {
          img_count = list_length-1;
          points_count();
        }
        $(".slide_wrap ul").stop().animate({
          left: 0
        },{complete: function() {
          $(".slide_wrap ul").css({
            "left":-slide_width*1
          });
          $(".slide_wrap ul").prepend($(".slide_wrap ul").children()[list_length-1]);
          bt_event = false;
        }});
      }
    });

    var point_psition;

    $(".points_box span").click(function() {
      if (img_count < $(this).index() && bt_event == false) {
        bt_event = true;
        point_psition = Math.abs((img_count-$(this).index()));
        for (var i = 0; i < point_psition; i++) {
          $(".slide_wrap ul").animate({
            left:-slide_width*2
          },{duration:50,complete: function (){
            $(".slide_wrap ul").css({
              "left":-slide_width*1
            });
            $(".slide_wrap ul").append($(".slide_wrap ul").children()[0]);
            bt_event = false;
          }});
        }
        img_count = $(this).index();
        points_count();
      }
      if (img_count > $(this).index() && bt_event == false) {
        bt_event = true;
        point_psition = Math.abs((img_count-$(this).index()));
        for (var i = 0; i < point_psition; i++) {
          $(".slide_wrap ul").animate({
            left: 0
          },{duration:50,complete: function() {
            $(".slide_wrap ul").css({
              "left":-slide_width*1
            });
            $(".slide_wrap ul").prepend($(".slide_wrap ul").children()[list_length-1]);
            bt_event = false;
          }});
        }
        img_count = $(this).index();
        points_count();
      }
    });




    function points_count() {
      $(".points_box span").css({
        "background-color": "black"
      });
      $(".points_box").children().eq(img_count).css({
        "background-color": "#fff"
      });

    }

    clearInterval(itv);
    itv = setInterval(R_click,6000);


 // 드래그 되게 시작  
 $(function() {
      var o = $('.slide_wrap ul');
      var sx, sy, dx, dy, ix, iy;
      var dragging = false;
      $('.slide_wrap ul').on('mousedown', function(e) {
        e.preventDefault();
        sx = e.pageX;
        ix = $(o).offset().left;
        dragging = true;
      }).on('mousemove', function(e) {
        if(dragging) {
          dx = e.pageX - sx;
          $(o).offset({left: ix + dx});
            if(dx<0){
                R_click();
            }
            if(dx>0){

                if (bt_event == false) {
                    bt_event = true;
                    if (img_count > 0) {
                    img_count --;
                    points_count();
                    }else {
                    img_count = list_length-1;
                    points_count();
                    }
                    $(".slide_wrap ul").stop().animate({
                    left: 0
                    },{complete: function() {
                    $(".slide_wrap ul").css({
                        "left":-slide_width*1
                    });
                    $(".slide_wrap ul").prepend($(".slide_wrap ul").children()[list_length-1]);
                    bt_event = false;
                    }});
                }
            }

        }
      }).on('mouseup', function(e){
        dx = e.pageX - sx;
        $(o).offset({left: ix + dx});
        dragging = false;
      });
    });

    //footer 드롭메뉴
    $(".brand_go").click(function(){
        $(".brand_go_in_ul").toggle();
    });

    $(".company_go").click(function(){
        $(".company_go_ul").toggle();
    });

    // 모바일 알림창
    $(".close_bt").click(function(){
        $('.close_bt').toggle();
        $('.lightbox').toggle();
        $('.pc').toggle();
    });

});