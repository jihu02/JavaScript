var wrapper = document.querySelector('.wrapper'),  //전체 페이지를 감싸는 틀
    page = document.querySelectorAll('.page'), // 각 페이지 요소
    indicator = document.getElementById('indicator'), // 인디케이터를 담는 틀
    indicator_li = document.querySelectorAll('li'); // 인디케이터 목록

var yDeg = 0, //각도변수
    indicator_num = 1, // 페이지번호
    indicator_length = page.length, //인디케이터 개수
    w = page[0].offsetWidth, // 페이지 폭
    page_angle = 0; // 각도 정의 변수

var hammer = new Hammer(wrapper);

/*첫번째 페이지를 시작 페이지로 설정*/
function init_page(){
  w = page[0].offsetWidth; // 현재 폭 값 변수로 참조

  //3D page 4면체 위치 정의
  for(var i=0; i<page.length; i++){
    page[i].style.transform = 'rotateY(' + page_angle + 'deg) translateZ(' + (w/2) + 'px)';
    page_angle += 90;
  }

  //page wrapper 정면으로 초기화
  wrapper.style.transform = 'translateX(' + (-w/2) + 'px) rotateY(' + yDeg + 'deg)';
}

/*인디케이터 초기화 함수*/
function init_indicator(){
  //인디케이터 표시
  for(var i=0; i < indicator_length; i++){//페이지 개수만큼 인디케이터 추가
    indicator.innerHTML += '<li>' + (i+1) + '</li>';//HTML에 코드 추가하는 것 = innerHTML
  }

  indicator_li = indicator.querySelectorAll('li');
  change_page(indicator_num);
}

/*페이지 전환 함수*/
function change_page(inum){
  indicator_li[inum-1].setAttribute('class', 'active'); // 현재 페이지 인디케이터 스타일 지정
  yDeg = -90 * (inum - 1);
  wrapper.style.transform = 'translateZ(' + (-w/2) + 'px) rotateY(' + yDeg + 'deg)';

  for(var i=0; i<indicator_length; i++){
    indicator_li[i].removeAttribute('class');
  }
  indicator_li[inum-1].setAttribute('class','active');
}

init_page();
init_indicator();

/*이벤트 리스너*/
for(var i=0; i<indicator_length; i++){
  indicator_li[i].addEventListener('click',function(){
    indicator_num = parseInt(this.innerText);
    change_page(indicator_num);
  })
}

/*터치 제스처 이벤트*/
/*터치 swipeleft*/
hammer.on('swipeleft', function(e){
  //indicator(페이지) 이동 범위 이내면
  if(indicator_num < indicator_length){
    page_vector = 1;
  }else page_vector = 0;

  indicator_num += page_vector;
  change_page(indicator_num);
});

/*터치 swipe right*/
hammer.on('swiperight', function(e){
  //indicator(페이지) 이동 범위 이내면
  if(indicator_num > 1){
    page_vector = -1;
  }else page_vector = 0;

  indicator_num += page_vector;
  change_page(indicator_num);
});

/*창 크기 변경 시 페이지 초기화*/
window.onresize = function(){
  init_page();
}
