$(document).ready(function() {
    var slideCount = 0;
    var slideTime = false;
    var img_count = 0;

    var itv;
    clearInterval(itv);
    itv = setInterval(auto_slide,14000);


    $(".bt_search_img").click(function(){
        $('.s_open').toggle();
        $('.s_close').toggle();
        $('.search_box').slideToggle();

    });

    // O버튼 클릭시 슬라이드 이동 , 색상 바꾸기 코드
    $(".bt_O1_CO").click(function(){
        if(slideTime == false){
            $('.bt_O_CO').css('opacity','0');
            timeout();
            $(".main_slide_01_in").stop().animate({left:'-'+0+'px'},2000);
            $('.bt_O1_CO').css('opacity','1');
        }
    });
    $(".bt_O2_CO").click(function(){
        if(slideTime == false){
            $('.bt_O_CO').css('opacity','0');
            timeout();
            $(".main_slide_01_in").stop().animate({left:'-'+1200+'px'},2000);
            $('.bt_O2_CO').css('opacity','1');
        }
    });
    $(".bt_O3_CO").click(function(){
        if(slideTime == false){
            $('.bt_O_CO').css('opacity','0');
            timeout();
            $(".main_slide_01_in").stop().animate({left:'-'+1500+'px'},2000);
            $('.bt_O3_CO').css('opacity','1');
        }
    });

    
    // 1번째 컨텐츠 자동 슬라이드 코드1
    function auto_slide() {

        setTimeout(function() {
            $('.bt_O_CO').css('opacity','0');
            $(".main_slide_01_in").stop().animate({left:'-'+0+'px'},2000);
            $('.bt_O1_CO').css('opacity','1');
        },4000);
        setTimeout(function() {
            $('.bt_O_CO').css('opacity','0');
            $(".main_slide_01_in").stop().animate({left:'-'+1200+'px'},2000);
            $('.bt_O2_CO').css('opacity','1');
        },8000);
        setTimeout(function() {
            $('.bt_O_CO').css('opacity','0');
            $(".main_slide_01_in").stop().animate({left:'-'+1500+'px'},2000);
            $('.bt_O3_CO').css('opacity','1');
        },12000);

    }
    

    // 2초뒤 실행 코드
    function timeout() {
        slideTime = true;
        setTimeout(function() {
            slideTime = false;
        },2000);
    }

    // 토글 사용 : 정지,시작 버튼 클릭시 바꾸기 코드
    $(".bt_control_pause").click(function(){
        clearInterval(itv);
        $('.bt_control_pause').toggle();
        $('.bt_control_play').toggle();
    });
    $(".bt_control_play").click(function(){
        clearInterval(itv);
        itv = setInterval(auto_slide,14000);
        $('.bt_control_play').toggle();
        $('.bt_control_pause').toggle();
    });


    // 2번째 컨텐츠 자동 슬라이드 코드2
    $(function(){
        $('.main_slide_02_wrap').slick({
            slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
            infinite : true, 	//무한 반복 옵션	 
            slidesToShow : 12,		// 한 화면에 보여질 컨텐츠 개수
            slidesToScroll : 2.98,		//스크롤 한번에 움직일 컨텐츠 개수  //사진왼쪽이 잘려서 3보다 작게 줌 이젠 2번째 이동시에만 잘림.
            speed : 3000,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
            arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
            dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
            autoplay : true,			// 자동 스크롤 사용 여부
            autoplaySpeed : 4000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
            pauseOnHover : false,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
            vertical : false,		// 세로 방향 슬라이드 옵션
            prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
            nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
            dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
            draggable : false, 	//드래그 가능 여부 

        });

      })


    //   2번째 컨텐츠 정지,시작 버튼 클릭시 바꾸기 코드
    $(".play_img").click(function(){
        $('.main_slide_02_wrap').slick('slickPlay')
        $('.play_img').toggle();
        $('.pause_img').toggle();
    });
    $(".pause_img").click(function(){
        $('.main_slide_02_wrap').slick('slickPause')
        $('.pause_img').toggle();
        $('.play_img').toggle();
    });


    // 탑버튼 실행 코드
    $(".top_bt").click(function() {
        $("body,html").stop().animate({scrollTop:0},500);
    });

    $(document).scroll(function(){
        st = $(this).scrollTop();
        if (st < 200) {
            $('.top_bt').fadeOut(500);
        }
        if (st > 200) {
            $('.top_bt').fadeIn(500);
        }
    });













});