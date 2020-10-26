
$(document).ready(function() {  

    // 로딩
    $('#loading').hide();

    //메인화면 로고
    $(".main>h1").delay(500).fadeIn(1000);

   
    //클릭시 스크롤 다운
    var position;
    $(".top_bt").click(function() {
        $("body,html").stop().animate({scrollTop:0},500);
    });
    $(".logo_top, .menu_bt01").click(function() {
        $("body,html").stop().animate({scrollTop:0},500);
        $("nav").fadeOut(500);
        $(".menu_bur3>span").toggleClass('bur_ani');
    });
    $(".down").click(function() {
        position = $("#section02").offset();
        $("body,html").stop().animate({scrollTop:position.top},500);
    });
    $(".menu_bt02").click(function() {
        position = $("#section02").offset();
        $("body,html").stop().animate({scrollTop:position.top},500);
        $("nav").fadeOut(500);
        $(".menu_bur3>span").toggleClass('bur_ani');
    });
    $(".menu_bt03").click(function() {
        position = $("#section03").offset();
        $("body,html").stop().animate({scrollTop:position.top},500);
        $("nav").fadeOut(500);
        $(".menu_bur3>span").toggleClass('bur_ani');
    });
    $(".menu_bt04").click(function() {
        position = $("#section04").offset();
        $("body,html").stop().animate({scrollTop:position.top},500);
        $("nav").fadeOut(500);
        $(".menu_bur3>span").toggleClass('bur_ani');
    });


    //클릭시 메뉴창 내려옴, 메뉴바 회전
    $(".menu_bur3").click(function(){
        $("nav").slideToggle(1000);
        $(".menu_bur3>span").toggleClass('bur_ani');
    });

    
    // 스크롤 다운시 스킬바 증가
    $(document).scroll(function(){
        st = $(this).scrollTop();
        console.log(st);
        position2 = $("#section02").scrollTop();
        if ( st < 200 ) {
            $(".top_menu").fadeOut(500);
            $(".top_bt").fadeOut(500);
        }
        else if ( st > position2 ) { 
            $('.skill_bgbar').css({
            "width":"230px",
            "transition": "all 2s"
            });

            $('.soft_bgbar').css({
            "width":"230px",
            "transition": "all 2s"
            });

            $(".top_menu").fadeIn(500);
            $(".top_bt").fadeIn(500);
        }
    });



    //클릭시 팝업창 이벤트 
    $(".capy_00").click(function() {
        $(".cp00").fadeIn(300);
        $(".hidden_bg").fadeIn(300);
        $(".top_menu").css({
            "z-index":"-99",
            });
    });
    $(".close_bt").click(function() {
        $(".cp00").fadeOut(300);
        $(".hidden_bg").fadeOut(300);
        $(".top_menu").css({
            "z-index":"99",
        });
    });
    $(".hidden_bg").click(function() {
        $(".cp00").fadeOut(300);
        $(".hidden_bg").fadeOut(300);
        $(".top_menu").css({
            "z-index":"99",
        });
    });
    $(".capy_01").click(function() {
        $(".cp01").fadeIn(300);
        $(".hidden_bg").fadeIn(300);
        $(".top_menu").css({
            "z-index":"-99",
            });
    });
    $(".close_bt").click(function() {
        $(".cp01").fadeOut(300);
        $(".hidden_bg").fadeOut(300);
        $(".top_menu").css({
            "z-index":"99",
        });
    });
    $(".hidden_bg").click(function() {
        $(".cp01").fadeOut(300);
        $(".hidden_bg").fadeOut(300);
        $(".top_menu").css({
            "z-index":"99",
        });
    });

    $(".capy_02").click(function() {
        $(".cp02").fadeIn(300);
        $(".hidden_bg").fadeIn(300);
        $(".top_menu").css({
            "z-index":"-99",
            });
    });
    $(".close_bt").click(function() {
        $(".cp02").fadeOut(300);
        $(".hidden_bg").fadeOut(300);
        $(".top_menu").css({
            "z-index":"99",
        });
    });
    $(".hidden_bg").click(function() {
        $(".cp02").fadeOut(300);
        $(".hidden_bg").fadeOut(300);
        $(".top_menu").css({
            "z-index":"99",
        });
    });

    $(".capy_03").click(function() {
        $(".cp03").fadeIn(300);
        $(".hidden_bg").fadeIn(300);
        $(".top_menu").css({
            "z-index":"-99",
            });
    });
    $(".close_bt").click(function() {
        $(".cp03").fadeOut(300);
        $(".hidden_bg").fadeOut(300);
        $(".top_menu").css({
            "z-index":"99",
        });
    });
    $(".hidden_bg").click(function() {
        $(".cp03").fadeOut(300);
        $(".hidden_bg").fadeOut(300);
        $(".top_menu").css({
            "z-index":"99",
        });
    });

    $(".capy_04").click(function() {
        $(".cp04").fadeIn(300);
        $(".hidden_bg").fadeIn(300);
        $(".top_menu").css({
            "z-index":"-99",
            });
    });
    $(".close_bt").click(function() {
        $(".cp04").fadeOut(300);
        $(".hidden_bg").fadeOut(300);
        $(".top_menu").css({
            "z-index":"99",
        });
    });
    $(".hidden_bg").click(function() {
        $(".cp04").fadeOut(300);
        $(".hidden_bg").fadeOut(300);
        $(".top_menu").css({
            "z-index":"99",
        });
    });

    $(".capy_05").click(function() {
        $(".cp05").fadeIn(300);
        $(".hidden_bg").fadeIn(300);
        $(".top_menu").css({
            "z-index":"-99",
            });
    });
    $(".close_bt").click(function() {
        $(".cp05").fadeOut(300);
        $(".hidden_bg").fadeOut(300);
        $(".top_menu").css({
            "z-index":"99",
        });
    });
    $(".hidden_bg").click(function() {
        $(".cp05").fadeOut(300);
        $(".hidden_bg").fadeOut(300);
        $(".top_menu").css({
            "z-index":"99",
        });
    });

    // ios 접속시 배경이미지 변경
    var deviceAgent = navigator.userAgent.toLowerCase();

    if (deviceAgent.match(/(iphone|ipod|ipad)/)) {
    $('.ios').addClass('.ios_after');
    }

});
