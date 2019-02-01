var banner = document.getElementById('banner'), // 배너본체
    img = banner.getElementsByTagName('img'), // 풍선 스트라이프 이미지 객체
    toggle = document.getElementById('toggle'), // 배너를 열고 닫는 토글 버튼 객체
    sound_btn = document.getElementById('sound_btn');// 사운드를 끄고 켜는 토글 버튼 객체

var banner_height = getComputedStyle(banner).height; // 배너의 높이 값 변수
var cast = [];// 풍선 스프라이트 객체를 정의할 배열

/*풍선 객체 생성 함수*/
function set_balloon(num){
  //풍선의 속성 값을 랜덤으로 생성
  var x = Math.floor(Math.random() * (500-10)+10),
      y = Math.floor(Math.random() * (400-120)+120),
      size = Math.floor(Math.random() * (200-100)+100),
      angle = Math.floor(Math.random() * (360-0)+0),
      speed = Math.random()*(2-0)+0;

  //풍선 객체
  cast[num] = {
    x: x, // 풍선의 x좌표
    y: -y,// 풍선의 y좌표
    size: size, // 풍선의 크기
    angle: angle, // 풍선의 초기회전 각도 값
    speed: speed // 풍선이 떨어지는 속도
  };
}

/*풍선 객체 초기화 함수*/
  function ball_init(){
    for( var i=0; i<img.length; i++){
      set_balloon(i);
      img[i].style.left = '-9999px';
      img[i].style.top = '-9999px';
    }
  }

/*풍선 애니메이션 함수*/
  function animate_balloon(){
    for( var i=0; i<img.length; i++){
      //풍선 속성 변경
      img[i].style.left = cast[i].x + 'px'; // x좌표
      img[i].style.top = cast[i].y + 'px'; // y좌표
      img[i].style.transform = 'rotate(' + cast[i].angle + 'deg)'; // 회전

      //풍선이 화면 안에 있으면
      if(cast[i].y < parseInt(banner_height)){
        cast[i].y += 1 + cast[i].speed;
        cast[i].angle += cast[i].speed;
      }else{//풍선이 밑으로 나가면
        set_balloon(i);
      }
    }
  }

  /*배경 음악 처리 함수*/
  function bgm_init(){
    var bgm = new Audio();
    bgm.src = 'images/bgm.mp3';
    bgm.loop = true;
    document.body.appendChild(bgm);
  }

/*************************************/
  ball_init();
  setInterval(function(){animate_balloon(); }, 1000/30);
  bgm_init();
/************************************/

/*사운드 버튼 이벤트 핸들러*/
  sound_btn.onclick = function(event){
    var attr = sound_btn.getAttribute('class');
    var bgm = document.getElementsByTagName('audio');

    if(attr == 'active'){
      //사운드 off
      sound_btn.removeAttribute('class');
      sound_btn.setAttribute('src', 'images/sound_off.png');
      bgm[0].pause();
    } else{
      //사운드 on
      sound_btn.setAttribute('class', 'active');
      sound_btn.setAttribute('src', 'images/sound_on.png');
      bgm[0].play();
    }
    event.stopPropagation();
}

  /*배너 열기/닫기 버튼 이벤트 핸들러*/
  toggle.onclick = function(){
    var attr = banner.getAttribute('class');

    if(attr == 'active'){
      //배너 닫기
      banner.removeAttribute('class');
      toggle.innerHTML = '배너 열기';
      return false;
    }else{
      //배너 열기
      banner.setAttribute('class', 'active');
      toggle.innerHTML = '배너 닫기';
      return false;
    }

  };

  /*배너 링크 처리*/
  banner.onclick = function(){
    window.open('https://csslick.github.io/', '_blank'); // 새창 열기
  }
